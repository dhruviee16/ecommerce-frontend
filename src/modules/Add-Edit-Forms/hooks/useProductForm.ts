import {
  useCreateProductMutation,
  useCurrentUserQuery,
  useUpdateProductMutation,
} from '@/generated/graphql';
import toast from 'react-hot-toast';
import { productSchema } from '../schema';
import { useProduct } from './useProduct';
import { useRouter } from 'next/navigation';
import { imgUrls } from '../../../../imgUrls';

export const useProductForm = (id?: string) => {
  const router = useRouter();

  const { product } = useProduct(id);

  const { data } = useCurrentUserQuery();

  const [createProduct, { loading, error }] = useCreateProductMutation({
    onCompleted(data) {
      toast.success('Product created successfully');
      router.refresh();
    },
    onError(error) {
      toast.error('Error creating product ' + error.message);
    },
  });

  const [updateProduct, { loading: updateLoading, error: updateError }] =
    useUpdateProductMutation({
      onCompleted(data) {
        toast.success('Product updated successfully');
      },
      onError(error) {
        toast.error('Error updating product ' + error.message);
      },
    });

  const handleSubmit = (input: any) => {
    const { id: _, ...sanitizedInput } = productSchema.cast(input, {
      assert: true,
      stripUnknown: true,
    });

    const imgUrlArray = imgUrls[sanitizedInput.categoryId];

    sanitizedInput.imgUrl =
      imgUrlArray[Math.floor(Math.random() * imgUrlArray.length)];

    if (id) {
      return updateProduct({
        variables: {
          id,
          product: {
            description: sanitizedInput.description,
            quantity: sanitizedInput.quantity,
            price: sanitizedInput.price,
          },
        },
      });
    }

    return createProduct({
      variables: {
        product: sanitizedInput,
      },
    });
  };

  console.log(product);

  const initialValues = productSchema.cast(
    {
      product,
      companyId: data?.currentUser?.company?.id,
      imgUrl: '',
      quantity: product?.quantity,
      description: product?.description,
      price: product?.price,
      categoryId: product?.categoryId,
      name: product?.name,
    },
    {
      assert: false,
      stripUnknown: true,
    }
  );

  console.log(initialValues);

  return {
    initialValues,
    validationSchema: productSchema,
    handleSubmit,
    loading: loading || updateLoading,
    error: error || updateError,
  };
};

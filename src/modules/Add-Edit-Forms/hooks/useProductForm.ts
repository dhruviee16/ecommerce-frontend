import { useCreateProductMutation, useCurrentUserQuery, useUpdateProductMutation } from "@/generated/graphql";
import toast from "react-hot-toast";
import { productSchema } from "../schema";
import { useProduct } from "./useProduct";

export const useProductForm = (id?: string) => {
  const { product } = useProduct(id);

  const { data } = useCurrentUserQuery();

  const [createProduct, { loading, error }] = useCreateProductMutation({
    onCompleted(data) {
      toast.success('Product created successfully');
    },
    onError(error) {
      toast.error('Error creating service ' + error.message);
    },
  });

  const [updateProduct, { loading: updateLoading, error: updateError }] = useUpdateProductMutation({
    onCompleted(data) {
      toast.success('Product updated successfully');
    },
    onError(error) {
      toast.error('Error updating service ' + error.message);
    },
  });

  const handleSubmit = (input: any) => {
    const { id, ...sanitizedInput } = productSchema.cast(input, {
      assert: true,
      stripUnknown: true
    });

    if (id) {
      return updateProduct({
        variables: {
          id,
          product: sanitizedInput
        }
      });
    }

    return createProduct({
      variables: {
        product: sanitizedInput
      }
    });
  }

  const initialValues = productSchema.cast({ product, companyId: data?.currentUser?.company?.id }, {
    assert: false,
    stripUnknown: true
  });

  console.log("initialValues", initialValues)

  return {
    initialValues,
    validationSchema: productSchema,
    handleSubmit,
    loading: loading || updateLoading,
    error: error || updateError
  }
}
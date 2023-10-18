import {
  useCreateOrderMutation,
  useCurrentUserQuery,
} from '@/generated/graphql';
import { useProduct } from '@/modules/Add-Edit-Forms/hooks/useProduct';
import toast from 'react-hot-toast';

export const useCreateOrder = (id: any) => {
  const { data } = useCurrentUserQuery();

  const { product } = useProduct(id);

  const [createOrder, { data: orderData, loading, error }] =
    useCreateOrderMutation({
      onCompleted(data) {
        toast.success('Order created successfully');
      },
      onError(error) {
        toast.error('Error in order ' + error.message);
      },
    });

  const handleSubmit = () => {
    if (!data) {
      toast.error('You must be logged in to create an order');
      return;
    }

    if (data.currentUser?.company?.id === product?.company?.id) {
      toast.error('You cannot order your own product');
      return;
    }

    return createOrder({
      variables: {
        input: {
          order: {
            productId: id,
            userId: data?.currentUser?.id,
            status: 'PENDING',
            addressId: data?.currentUser?.addresses?.nodes[0]?.id,
          },
        },
      },
    });
  };

  return { handleSubmit, loading, error };
};

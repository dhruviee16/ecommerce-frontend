import {
  useCreateOrderMutation,
  useCurrentUserQuery,
} from '@/generated/graphql';
import toast from 'react-hot-toast';

export const useCreateOrder = () => {
  const { data } = useCurrentUserQuery();

  const [createOrder, { data: orderData, loading, error }] =
    useCreateOrderMutation({
      onCompleted(data) {
        toast.success('Order created successfully');
      },
      onError(error) {
        toast.error('Error in order ' + error.message);
      },
    });

  const handleSubmit = (id: any) => {
    if (!data) {
      toast.error('You must be logged in to create an order');
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

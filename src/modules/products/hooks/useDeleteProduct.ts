import { useDeleteProductMutation } from '@/generated/graphql';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export const useDeleteProduct = () => {
  const router = useRouter();
  const [deleteProduct, { data, loading, error }] = useDeleteProductMutation({
    onCompleted(data) {
      toast.success('Product deleted');
      router.refresh();
    },
    onError(error) {
      toast.error('error Deleting Product ' + error.message);
    },
  });

  const handleDelete = (id: string) => {
    deleteProduct({
      variables: {
        input: {
          id,
        },
      },
    });
  };

  return {
    handleDelete,
    data,
    loading,
    error,
  };
};

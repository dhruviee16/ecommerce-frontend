import { useDeleteUserMutation } from '@/generated/graphql';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export const useDeleteUser = () => {
  const router = useRouter();
  const [deleteUser, { data, loading, error }] = useDeleteUserMutation({
    onCompleted(data) {
      toast.success('User deleted');
      router.refresh();
    },
    onError(error) {
      toast.error('error Deleting User ' + error.message);
    },
  });

  const handleDelete = (id: string) => {
    deleteUser({
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

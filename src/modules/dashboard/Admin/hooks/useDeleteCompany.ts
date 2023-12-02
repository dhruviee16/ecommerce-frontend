import { useDeleteCompanyMutation } from '@/generated/graphql';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export const useDeleteCompany = () => {
  const router = useRouter();
  const [deleteCompany, { data, loading, error }] = useDeleteCompanyMutation({
    onCompleted(data) {
      toast.success('Company deleted');
      router.refresh();
    },
    onError(error) {
      toast.error('error Deleting Company ' + error.message);
    },
  });

  const handleDelete = (id: string) => {
    deleteCompany({
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

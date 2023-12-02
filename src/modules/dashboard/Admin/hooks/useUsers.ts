import { useUsersQuery } from '@/generated/graphql';

export const useUsers = (filters?: { companyExists: boolean }) => {
  const { data, loading, error } = useUsersQuery({
    variables: {
      filter: {
        name: {
          notEqualTo: 'admin',
        },
        companyExists: filters?.companyExists || false,
      },
    },
  });

  return {
    users: data?.users?.nodes || [],
    userCount: data?.users?.totalCount || 0,
    loading,
    error,
  };
};

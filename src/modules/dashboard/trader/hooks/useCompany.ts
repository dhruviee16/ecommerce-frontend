import { useCompanyQuery } from '@/generated/graphql';

export const useCompany = (id?: string) => {
  const { data, loading, error } = useCompanyQuery({
    variables: {
      id,
    },
    skip: !id,
  });

  return {
    company: data?.company,
    loading,
    error,
  };
};

import { useCompaniesQuery } from '@/generated/graphql';

export const useCompanies = () => {
  const { data, loading, error } = useCompaniesQuery();

  return {
    companies: data?.companies?.nodes || [],
    companyCount: data?.companies?.totalCount || 0,
    loading,
    error,
  };
};

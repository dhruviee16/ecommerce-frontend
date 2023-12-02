import { useAddressQuery } from '@/generated/graphql';

export const useAddress = (id?: string) => {
  const { data, loading, error } = useAddressQuery({
    variables: {
      id,
    },
    skip: !id,
  });

  return {
    address: data?.address,
    loading,
    error,
  };
};

import { useProductQuery } from "@/generated/graphql";

export const useProduct = (id?: string) => {
  const { data, loading, error } = useProductQuery({
    variables: {
      id
    },
    skip: !id
  });

  return {
    product: data?.product,
    loading,
    error
  }
}
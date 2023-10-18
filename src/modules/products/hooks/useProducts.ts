import { useProductsQuery } from '@/generated/graphql';

export const useProducts = (filters?: { slug?: any; companyId?: any; first?: number }) => {
  const { data } = useProductsQuery({
    variables: {
      filter: {
        or: [
          {
            companyId: {
              equalTo: filters?.companyId || null,
            },
          },
          {
            category: {
              slug: {
                equalTo: filters?.slug || null,
              },
            },
          },
        ],
      },
      first: filters?.first || null,
    },
  });

  return {
    products: data?.products?.nodes || [],
  };
};

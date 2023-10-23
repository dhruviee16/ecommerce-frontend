import { useOrdersQuery } from '@/generated/graphql';

export const useOrders = (filters?: any) => {
  const { data } = useOrdersQuery({
    variables: {
      filter: {
        or: [
          {
            userId: {
              equalTo: filters?.userId || null,
            },
          },
          {
            product: {
              companyId: {
                equalTo: filters?.companyId || null,
              },
            },
          },
        ],
      },
    },
  });

  return {
    orders: data?.orders?.nodes || [],
  };
};

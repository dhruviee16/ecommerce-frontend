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
              categoryId: {
                equalTo: filters?.categoryId || null,
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

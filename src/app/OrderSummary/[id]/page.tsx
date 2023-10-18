import OrderSummary from '@/modules/products/OrderSummary';
import React from 'react';

type Props = {
  params: {
    id: string;
  };
};

const Page: React.FC<Props> = ({ params: { id } }) => {
  return <OrderSummary id={id} />;
};

export default Page;

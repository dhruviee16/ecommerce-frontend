import Layout from '@/components/Layout';
import OrderSummary from '@/modules/products/OrderSummary';
import React from 'react';

type Props = {
  params: {
    id: string;
  };
};

const Page: React.FC<Props> = ({ params: { id } }) => {
  return (
    <Layout>
      <OrderSummary id={id} />
    </Layout>
  );
};

export default Page;

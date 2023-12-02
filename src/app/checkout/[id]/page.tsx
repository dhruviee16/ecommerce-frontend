import { Layout } from '@/components/Layout';
import { Checkout } from '@/modules/products';
import React from 'react';

type Props = {
  params: {
    id: string;
  };
};

const Page: React.FC<Props> = ({ params: { id } }) => {
  return (
    <Layout>
      <Checkout id={id} />
    </Layout>
  );
};

export default Page;

import Layout from '@/components/Layout';
import { useCurrentUserQuery } from '@/generated/graphql';
import OrderSummary from '@/modules/products/OrderSummary';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

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

import Layout from '@/components/Layout';
import { TraderDashboard } from '@/modules/Trader-Dashboard';
import React from 'react';

type Props = {};

const page = (props: Props) => {
  return <Layout><TraderDashboard /></Layout>;
};

export default page;

import Layout from '@/components/Layout';
import { SignUpForm } from '@/modules/auth';
import React from 'react';

const page = () => {
  return (
    <Layout>
      <SignUpForm />
    </Layout>
  );
};

export default page;

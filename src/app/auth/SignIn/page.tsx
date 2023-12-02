import { Layout } from '@/components/Layout';
import { SignInForm } from '@/modules/auth';

const page = () => {
  return (
    <Layout>
      <SignInForm />
    </Layout>
  );
};

export default page;

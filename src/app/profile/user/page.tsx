import { Layout } from '@/components/Layout';
import { UserProfile } from '@/modules/dashboard/user';

const page = () => {
  return (
    <Layout>
      <UserProfile />
    </Layout>
  );
};

export default page;

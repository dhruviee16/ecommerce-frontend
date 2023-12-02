'use client';
import { Layout } from '@/components/Layout';
import { useCurrentUserQuery } from '@/generated/graphql';
import { HomePage } from '@/modules/Home';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  const { data } = useCurrentUserQuery();

  if (data?.currentUser?.isAdmin) {
    router.replace('/admin/manage-users');
  }
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}

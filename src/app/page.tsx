'use client';
import HomePage from '@/components/Home/page';
import Layout from '@/components/Layout';
import { useCurrentUserQuery } from '@/generated/graphql';
import { useRouter } from 'next/navigation';

export default function Home() {
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

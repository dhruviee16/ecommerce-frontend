import { Sidebar } from '@/components/Sidebar';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const AdminLayout = ({children}: Props) => {
  return (
    <div>
      <Sidebar
        items={[
          {
            title: 'Users',
            href: '/admin/users',
          },
          {
            title: 'Traders',
            href: '/admin/trader',
          },
          {
            title: 'Orders',
            href: '/admin/order',
          },
        ]}
      />
      {children}
    </div>
  );
};

export default AdminLayout;

import { ManageOrders } from '@/modules/Admin/ManageOrders';
import { ManageProducts } from '@/modules/Admin/ManageProducts';
import React from 'react';

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <ManageOrders />
    </>
  );
};

export default page;

'use client';
import { AdminSidebar } from '@/components/AdminSidebar';
import React, { use, useState } from 'react';
import { Button, Card, Typography } from '@material-tailwind/react';
import { useUsers } from '../hooks/useUsers';
import { useProducts } from '@/modules/products/hooks/useProducts';
import { useDeleteProduct } from '@/modules/products/hooks/useDeleteProduct';
import { useOrders } from '@/modules/products/hooks/useOrders';

const TABLE_HEAD = ['User Name', 'Shop Name', 'Product Name', 'Created At'];

type Props = {};

const ManageUsers = (props: Props) => {

  const {orders} =useOrders();

  const [searchText, setSearchText] = useState('');

  return (
    <div className="h-screen flex flex-row justify-start">
      <AdminSidebar />
      <div className="bg-blue-gray-100 justify-center flex-1 text-black">
        <div className="text-center text-black text-3xl font-bold m-4 ">
          Manage Orders
        </div>
        <div className="m-6 bg-blue-gray-100">
          <Card className="h-full w-full">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70 "
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => {
                  const isLast = index === orders.length - 1;
                  const classes = isLast
                    ? 'p-4'
                    : 'p-4 border-b border-blue-gray-50';

                  return (
                    <tr key={order.id}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {order.user?.name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {order.product?.company?.name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {order.product?.name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {order.createdAt}
                        </Typography>
                      </td>
                      
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;

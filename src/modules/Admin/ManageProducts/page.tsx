'use client';
import { AdminSidebar } from '@/components/AdminSidebar';
import React, { useState } from 'react';
import { Button, Card, Typography } from '@material-tailwind/react';
import { useUsers } from '../hooks/useUsers';
import { useProducts } from '@/modules/products/hooks/useProducts';
import { useDeleteProduct } from '@/modules/products/hooks/useDeleteProduct';

const TABLE_HEAD = ['Name', 'Shop Name', 'Category', 'Created At', 'Action'];

const TABLE_ROWS = [
  {
    name: 'John Michael',
    date: '23/04/18',
    email: 'john@example.com',
  },
  {
    name: 'Alexa Liras',
    date: '23/04/18',
    email: 'alexa@example.com',
  },
  {
    name: 'Laurent Perrier',
    date: '19/09/17',
    email: 'laurent@example.com',
  },
  {
    name: 'Michael Levi',
    date: '24/12/08',
    email: 'michael@example.com',
  },
  {
    name: 'Laurent Perrier',
    date: '19/09/17',
    email: 'laurent@example.com',
  },
  {
    name: 'Michael Levi',
    date: '24/12/08',
    email: 'michael@example.com',
  },
];

type Props = {};

const ManageUsers = (props: Props) => {
  const { products } = useProducts();
  const { handleDelete } = useDeleteProduct();

  const [searchText, setSearchText] = useState('');

  return (
    <div className="h-screen flex flex-row justify-start">
      <AdminSidebar />
      <div className="bg-blue-gray-100 justify-center flex-1 text-black">
        <div className="text-center text-white text-3xl bg-black p-3 m-4 rounded-md">
          Manage Products
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
                {products.map((product, index) => {
                  const isLast = index === products.length - 1;
                  const classes = isLast
                    ? 'p-4'
                    : 'p-4 border-b border-blue-gray-50';

                  return (
                    <tr key={product.id}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {product.name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {product.company?.name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {product.category?.name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {product.createdAt}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Button
                          onClick={() => {
                            handleDelete(product.id);
                          }}
                          variant="text"
                        >
                          Delete
                        </Button>
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

'use client';
import { AdminSidebar } from '@/components/AdminSidebar';
import { useOrders } from '@/modules/products/hooks/useOrders';
import { Card, Typography } from '@material-tailwind/react';

const TABLE_HEAD = ['User Name', 'Shop Name', 'Product Name', 'Created At'];

type Props = {};

const ManageUsers = (props: Props) => {

  const {orders} =useOrders();

  return (
    <div className="h-screen flex flex-row justify-start">
      <AdminSidebar />
      <div className="bg-gray-200 justify-center flex-1 text-black">
        <div className="text-center text-black text-3xl font-bold m-4 ">
          Manage Orders
        </div>
        <div className="m-6 bg-gray-100">
          <Card className="h-full w-full">
            <table className="w-full min-w-max table-auto text-left">
              <thead> 
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-gray-200 bg-blue-gray-100 p-4"
                    >
                      <Typography
                        variant="small"
                         color="black"
                        className="font-bold leading-none opacity-70 "
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

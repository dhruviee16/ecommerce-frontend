// interface ContentProps {
//   title?: string;
// }

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useCurrentUserQuery } from '@/generated/graphql';
import { useOrders } from '@/modules/products/hooks/useOrders';
import { Button } from '@material-tailwind/react';
import UpdateOrderStatus from './UpdateOrderStatusForm';

export default function OrderHistory() {
  const { data } = useCurrentUserQuery();

  const { orders } = useOrders({
    companyId: data?.currentUser?.company?.id,
  });
  return (
    <div>
      <div className="py-4">
        <div className="max-w-full overflow-x-auto rounded-lg shadow">
          <div className="mb-5 text-center text-3xl font-bold text-black">
            Order History
          </div>
          <table className="w-full leading-normal">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="border-b border-gray-200 bg-white  px-5 py-3 text-left  text-sm font-normal uppercase text-gray-800"
                >
                  Username
                </th>
                <th
                  scope="col"
                  className="border-b border-gray-200 bg-white  px-5 py-3 text-left  text-sm font-normal uppercase text-gray-800"
                >
                  Product Name
                </th>
                <th
                  scope="col"
                  className="border-b border-gray-200 bg-white  px-5 py-3 text-left  text-sm font-normal uppercase text-gray-800"
                >
                  Address
                </th>
                <th
                  scope="col"
                  className="border-b border-gray-200 bg-white  px-5 py-3 text-left  text-sm font-normal uppercase text-gray-800"
                >
                  status
                </th>
                <th
                  scope="col"
                  className="border-b border-gray-200 bg-white px-14 py-3 text-left text-sm font-normal uppercase text-gray-800"
                >
                  action
                </th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map((order) => (
                  <tr key={order.id}>
                    <td className="border-b border-gray-200 bg-white p-5 text-sm">
                      <div className="flex items-center">
                        <div className="ml-3">
                          <p className="whitespace-nowrap text-gray-900">
                            {order.user?.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-gray-200 bg-white p-5 text-sm">
                      <p className="whitespace-nowrap text-gray-900">
                        {order.product?.name}
                      </p>
                    </td>
                    <td className="border-b border-gray-200 bg-white p-5 text-sm">
                      <p className="whitespace-nowrap text-gray-900">
                        {order.address?.address}
                      </p>
                    </td>
                    <td className="border-b border-gray-200 bg-white p-5 text-sm">
                      <p className="whitespace-nowrap text-gray-900">
                        {order.status}
                      </p>
                    </td>
                    <td className="border-b border-gray-200 bg-white p-5 text-sm">
                      <p className="whitespace-nowrap text-gray-900">
                        <AlertDialog>
                          <AlertDialogTrigger className='m-0' asChild>
                            <Button
                              variant="text"
                              className='m-0'
                              disabled={order.status !== 'PENDING'}
                            >
                              Update Status
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent className="">
                            <UpdateOrderStatus
                              status={order.status}
                              id={order.id}
                            />
                          </AlertDialogContent>
                        </AlertDialog>
                      </p>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

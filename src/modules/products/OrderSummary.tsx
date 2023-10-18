'use client';
import { Separator } from '@/components/ui/separator';
import { useCurrentUserQuery } from '@/generated/graphql';
import { Button, Typography } from '@material-tailwind/react';
import Image from 'next/image';
import Image1 from '/public/image/HomeImages/order2.png';
import { useProduct } from '../Add-Edit-Forms/hooks/useProduct';
import { useCreateOrder } from './hooks/useCreateOrder';

type Props = {
  id: string;
};

const OrderSummary: React.FC<Props> = ({ id }) => {
  const { data } = useCurrentUserQuery();

  const { product } = useProduct(id);

  const { handleSubmit, loading, error } = useCreateOrder(product?.id);

  return (
    <div className="flex flex-row h-screen my-10 mx-24 gap-5">
      <div className="grow flex-initial">
        <Typography variant="h3" color="blue-gray" className="my-5">
          Order Summary
        </Typography>

        <div className="flex flex-col gap-8">
          <Separator
            orientation="horizontal"
            className="border-2 border-gray-300"
          />

          <Typography variant="h6" className="text-gray-600">
            Name: {data?.currentUser?.name}
          </Typography>
          <Separator
            orientation="horizontal"
            className="border-2 border-gray-300"
          />

          <Typography variant="h6" className="text-gray-600">
            Address: {data?.currentUser?.addresses?.nodes[0]?.address}
          </Typography>
          <Separator
            orientation="horizontal"
            className="border-2 border-gray-300"
          />
          <Typography variant="h6" className="text-gray-600">
            contact no: {data?.currentUser?.addresses?.nodes[0]?.contactNumber}
          </Typography>
          <Separator
            orientation="horizontal"
            className="border-2 border-gray-300"
          />
          <Typography variant="h6" className="text-gray-600">
            Product Name:{product?.name}
          </Typography>
          <Separator
            orientation="horizontal"
            className="border-2 border-gray-300"
          />
          <Typography variant="h6" className="text-gray-600">
            Product price:{product?.price}
          </Typography>
          <Separator
            orientation="horizontal"
            className="border-2 border-gray-300"
          />
          <Button onClick={handleSubmit} className="py-3">
            Confirm Order
          </Button>
        </div>
      </div>
      <div className="grow-0">
        <Separator orientation="vertical" className="border-2" />
      </div>
      <div className="">
        <Image
          src={Image1}
          alt="profile"
          className="object-contain  w-[739px]"
        />
      </div>
    </div>
  );
};

export default OrderSummary;

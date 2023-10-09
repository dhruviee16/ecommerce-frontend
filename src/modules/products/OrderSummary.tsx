'use client';
import { Separator } from '@/components/ui/separator';
import { useCurrentUserQuery } from '@/generated/graphql';
import { Typography } from '@material-tailwind/react';
import Image from 'next/image';
import Image1 from '/public/image/HomeImages/order121qa2.png';


type Props = {};

const OrderSummary = (props: Props) => {
  const { data } = useCurrentUserQuery();
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
            Email: {data?.currentUser?.email}
          </Typography>
          <Separator
            orientation="horizontal"
            className="border-2 border-gray-300"
          />
          <Typography variant="h6" className="text-gray-600">
            Address:
          </Typography>
          <Separator
            orientation="horizontal"
            className="border-2 border-gray-300"
          />
          <Typography variant="h6" className="text-gray-600">
            contact no:
          </Typography>
          <Separator
            orientation="horizontal"
            className="border-2 border-gray-300"
          />
          <Typography variant="h6" className="text-gray-600">
            Product Name:
          </Typography>
          <Separator
            orientation="horizontal"
            className="border-2 border-gray-300"
          />

          {/* <div className="">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  size="lg"
                  className="flex flex-row content-start border-gray-800 border-2 absolute bg-black text-white hover:bg-white hover:text-black"
                >
                  <div className="flex flex-row gap-x-3 ">Edit Details</div>
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="">
                <EditUserProfile />
              </AlertDialogContent>
            </AlertDialog>
          </div> */}
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

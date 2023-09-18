'use client';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import EditProducts from '@/modules/Add-Edit-Forms/Products-Edit/page';

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from '@material-tailwind/react';
import Image from 'next/image';
import diaries from 'public/image/HomeImages/diary2.jpg';

export default function HorizontalCard() {
  return (
    <Card className="flex-row gap-2">
      <div>
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-80 rounded-r-none h-full"
        >
          <Image src={diaries} className="h-full" alt="" />
        </CardHeader>
      </div>
      <div className="flex flex-col gap-2">
        <CardBody className="p-0">
          <Typography variant="h6" color="blue-gray" className="mt-3 ">
            Product Name: Diary
          </Typography>
          <div className="flex flex-row gap-x-16">
            <Typography variant="h6" color="gray" className="mb-3">
              Qty:4
            </Typography>
            <Typography variant="h6" color="gray" className="mb-3">
              Price:800
            </Typography>
          </div>
          <Typography color="gray" className="mb-5 font-normal">
            Category:diary
          </Typography>
          <Typography color="gray" className="mb-5 font-normal">
            Desc:Elegant Leather-Bound Personal Diary
          </Typography>
        </CardBody>
        <div className="mb-2">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="text"
                className="flex items-center gap-2 border-2 border-black rounded-sm bg-black text-white hover:bg-white hover:text-black"
              >
                Edit
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <EditProducts />
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </Card>
  //   <div className="px-20 my-20 grid grid-cols-2 gap-4 w-full">
  //   <div>
  //   <HorizontalCard />
  //   </div>
  //   <div>
  //   <HorizontalCard />
  //   </div>
  //   <div>
  //   <HorizontalCard />
  //   </div>
  //   <div>
  //   <HorizontalCard />
  //   </div>
    
  // </div>
  );
}

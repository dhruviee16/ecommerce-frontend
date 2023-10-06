'use client';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import EditProducts from '@/modules/Add-Edit-Forms/Products-Edit/page';

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
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
          <div className="flex flex-row mt-3">
            <Typography variant="h6" color="blue-gray">
              Product Name:
            </Typography>
            <Typography variant="h6" color="gray">
              Diary
            </Typography>
          </div>
          <div className="flex flex-row gap-x-10 my-3">
            <Typography variant="h6" color="gray">
              Qty:4
            </Typography>
            <Typography variant="h6" color="gray">
              Price:800
            </Typography>
          </div>
          <Typography variant="h6" color="gray" className="mb-5 ">
            Category:diary
          </Typography>
          <Typography color="gray" className="mb-5 ">
            Desc:Elegant Leather-Bound Personal Diary
          </Typography>
        </CardBody>
        <div className="mb-2">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="flex items-center gap-2 border-2 border-black bg-black text-white hover:bg-white hover:text-black">
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

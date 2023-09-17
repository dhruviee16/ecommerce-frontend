'use client';
import { HorizontalCard } from '@/components/Cards/Trader-Dashboard';
import { Button } from '@/components/ui/button';

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from '@radix-ui/react-alert-dialog';
import AddProduct from '../Add-Edit-Forms/AddProduct/page';
import { Card } from '@material-tailwind/react';

type Props = {};

const TraderDashboard = (props: Props) => {
  return (
    <div>
      <Card className='bg-transparent'>
        <div className="text-center mt-5 text-4xl">Trader Dashboard</div>
        <div className="border-2 rounded-md absolute lg:ml-[80%] sm:ml-28 flex flex-row">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                className="rounded-sm bg-black text-white hover:bg-white hover:text-black"
              >
                ADD PRODUCT
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg> */}
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AddProduct />
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </Card>
      <div className="px-20 my-20 grid grid-cols-2 gap-4 w-full">
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
      </div>
    </div>
  );
};

export default TraderDashboard;

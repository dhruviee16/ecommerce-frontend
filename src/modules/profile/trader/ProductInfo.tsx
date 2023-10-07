'use client';
import { HorizontalCard } from '@/components/Cards/Trader-Dashboard';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@material-tailwind/react';
import AddProduct from '../../Add-Edit-Forms/AddProduct/page';
import Link from 'next/link';

const ProductInfo = () => {
  return (
    <>
      <div className="justify-center items-center  overflow-y-auto h-screen">
        <div className="text-center mt-5 text-4xl">Trader Dashboard</div>
        
        <div className="ml-[6rem] sm:ml-[80%] mt-3">
          
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                size="lg"
                className="flex flex-row content-start border-black border-2 absolute bg-black text-white hover:bg-white hover:text-black"
              >
                <div className="flex flex-row gap-x-3 ">Add Product</div>
              </Button>
            </AlertDialogTrigger>       
            <AlertDialogContent className="">
              <AddProduct />
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className="px-20 my-20 grid grid-cols-2 gap-4 w-full ">
          <div>
            <HorizontalCard />
          </div>
          <div>
            <HorizontalCard />
          </div>
          <div>
            <HorizontalCard />
          </div>
          <div>
            <HorizontalCard />
          </div>
          <div>
            <HorizontalCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;

'use client'
import React from 'react';
import Link from 'next/link';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import AddProduct from '../Add-Edit-Forms/AddProduct/page';
import { HorizontalCard } from '@/components/Cards/Trader-Dashboard';
import {
  Card,
} from "@material-tailwind/react";

const TraderDashboard = () => {
  return (
    <>
      <div className="justify-center items-center">
      <Card className='bg-transparent'>
        <div className="text-center mt-5 text-4xl">Trader Dashboard</div> </Card>
        <div className="border-2 ml-[6rem] sm:ml-[80%] mt-3 border-black absolute bg-black text-white rounded-none hover:bg-white hover:text-black">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" size="lg" className="flex flex-row content-start">
                <div className='flex flex-row gap-x-3'>
                Add Product
                </div>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="">
              <AddProduct />
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className="px-20 my-20 grid grid-cols-2 gap-4 w-full">
          <div>
            <HorizontalCard
            />
          </div>
          <div>
            <HorizontalCard
            />
          </div>
          <div>
            <HorizontalCard
            />
          </div>
          <div>
            <HorizontalCard
            />
          </div>
          <div>
            <HorizontalCard
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TraderDashboard;

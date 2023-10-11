'use client';
import { HorizontalCard } from '@/components/Cards/Trader-Dashboard';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@material-tailwind/react';
import AddProduct from '../../Add-Edit-Forms/AddProduct/page';
import { useProducts } from '@/modules/products/hooks/useProducts';
import { useCurrentUserQuery } from '@/generated/graphql';

const ProductInfo = () => {
  const { data } = useCurrentUserQuery();

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

        <HorizontalCard id={data?.currentUser?.company?.id} />
      </div>
    </>
  );
};

export default ProductInfo;

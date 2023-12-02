'use client';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useCurrentUserQuery } from '@/generated/graphql';
import AddProductForm from '@/modules/products/AddProductForm';
import { Button } from '@material-tailwind/react';
import ManageProducts from './ManageProducts';

const TraderProducts = () => {
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
            <AlertDialogContent>
              <AddProductForm />
            </AlertDialogContent>
          </AlertDialog>
        </div>

        <ManageProducts id={data?.currentUser?.company?.id} />
      </div>
    </>
  );
};

export default TraderProducts;

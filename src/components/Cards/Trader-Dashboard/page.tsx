'use client';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import EditProducts from '@/modules/Add-Edit-Forms/Products-Edit/page';
import { useDeleteProduct } from '@/modules/products/hooks/useDeleteProduct';
import { useProducts } from '@/modules/products/hooks/useProducts';

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import Image from 'next/image';

export default function HorizontalCard({ id }: { id: string }) {
  const { products } = useProducts({
    companyId: id,
  });

  const { handleDelete } = useDeleteProduct();

  return (
    <div className="px-20 my-20 grid grid-cols-2 gap-4 w-full ">
      {products &&
        products.map((product) => (
          <Card key={product.id} className="flex-row gap-2">
            <div>
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-50 rounded-r-none h-full"
              >
                <Image
                  src={product.imgUrl || ''}
                  className="h-full"
                  alt={product.name}
                  height={200}
                  width={200}
                />
              </CardHeader>
            </div>
            <div className="flex flex-col gap-2">
              <CardBody className="p-0">
                <div className="flex flex-row mt-3">
                  <Typography variant="h6" color="blue-gray">
                    Product Name:
                  </Typography>
                  <Typography variant="h6" color="gray">
                    {product.name}
                  </Typography>
                </div>
                <div className="flex flex-row gap-x-10 my-3">
                  <Typography variant="h6" color="gray">
                    Qty:{product.quantity}
                  </Typography>
                  <Typography variant="h6" color="gray">
                    Price:{product.price}
                  </Typography>
                </div>
                <Typography variant="h6" color="gray" className="mb-5 ">
                  Category: {product.category?.name}
                </Typography>
                <Typography variant="h6" color="gray" className="mb-5 ">
                  Desc: {product.description}
                </Typography>
              </CardBody>
              <div className="mb-2 flex flex-row gap-4">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className="flex items-center gap-2 border-2 border-black bg-black text-white hover:bg-white hover:text-black">
                      Edit
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <EditProducts id={product.id} />
                  </AlertDialogContent>
                </AlertDialog>
                <div>
                  <Button
                    onClick={() => {
                      handleDelete(product.id);
                    }}
                    className="flex items-center gap-2 border-2 border-black bg-black text-white hover:bg-white hover:text-black"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
    </div>
  );
}

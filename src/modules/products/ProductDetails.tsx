'use client';
import { FormFieldLayout, FormLayout } from '@/components/forms';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Form } from 'formik';
import Image from 'next/image';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { useProduct } from '../Add-Edit-Forms/hooks/useProduct';

const initalValues = {
  address: '',
  contactNumber: '',
};

const SigninSchema = Yup.object().shape({
  address: Yup.string().required('Required'),
  contactNumber: Yup.string().required('Required'),
});

interface Props {
  slug: string;
}

const ProductDetails:React.FC<Props> = ({slug}) => {
  const handleSubmit = async (values: any) => {
    toast.success('order placed successfully');

    console.log(values);
  };


  const { product } = useProduct(slug);

  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <Image
              src={product?.imgUrl || ''}
              alt={product?.name || ''}
              className="h-full w-full object-cover object-center"
              height={200}
              width={200}
            />
          </div>
          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product?.name.toUpperCase()}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                {product?.price}
              </p>
              {/* </div> */}

              {/* Options
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">{product.price}</p> */}

              {/* <form className="mt-10">
                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  BUY NOW
                </button>
              </form> */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="mt-4 px-6">BUY NOW</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                      Please provide your information to buy the product. Click
                      save when you&apos;re done.
                    </SheetDescription>
                  </SheetHeader>
                  <FormLayout
                    initialValues={initalValues}
                    validationSchema={SigninSchema}
                    onSubmit={handleSubmit}
                    enableReinitialize
                  >
                    {() => (
                      <div className="grid gap-4 py-4">
                        <Form className="mt-4 mb-2 w-80 max-w-screen-lg">
                          <div className="mb-4 flex flex-col gap-4">
                            <FormFieldLayout label="Address" name="address" />
                            <FormFieldLayout
                              label="Contact Number"
                              name="contactNumber"
                            />
                          </div>
                          <SheetFooter>
                            <SheetClose asChild>
                              <Button
                                className="mt-2"
                                type="submit"
                                disabled={false}
                              >
                                Save Changes
                              </Button>
                            </SheetClose>
                          </SheetFooter>
                        </Form>
                      </div>
                    )}
                  </FormLayout>
                </SheetContent>
              </Sheet>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product?.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

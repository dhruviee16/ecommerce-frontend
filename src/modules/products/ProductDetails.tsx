'use client';
import { useToast } from '@/components/ui/use-toast';
import Image from 'next/image';
import * as Yup from 'yup';

const product = {
  name: 'sketch pens',
  price: 'Rs.192',
  href: '#',

  images: [
    {
      src: '/image/HomeImages/diary1.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
  ],

  description: 'The Basic colouring pens',
  details: 'The Pack includes 1 black, 1 white, and other colors.',
};

const initalValues = {
  email: '',
  password: '',
};

const SigninSchema = Yup.object().shape({
  address: Yup.string().required('Required'),
  contactNumber: Yup.string().required('Required'),
});

export default function ProductDetails() {
  const { toast } = useToast();

  const handleSubmit = async (values: any) => {
    toast({
      title: 'Order Placed',
      description: new Date().toLocaleString(),
    });
    console.log(values);
  };

  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <Image
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center"
              height={200}
              width={200}
            />
          </div>
          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.name}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                {product.price}
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
              {/* <Sheet>
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
                  <div className="grid gap-4 py-4">
                    <FormLayout
                      initialValues={initalValues}
                      validationSchema={SigninSchema}
                      onSubmit={handleSubmit}
                    >
                      {() => (
                        <Form className="mt-4 mb-2 w-80 max-w-screen-lg">
                          <div className="mb-4 flex flex-col gap-4">
                            <FormFieldLayout label="Address" name="address" />
                            <FormFieldLayout label="Contact Number"name="contactNumber" />
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
                      )}
                    </FormLayout>
                  </div>
                </SheetContent>
              </Sheet> */}
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

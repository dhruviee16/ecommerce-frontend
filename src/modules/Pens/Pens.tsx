'use client';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Red Diary',
    href: '/productDetails',
    imageSrc: '/image/HomeImages/diary2.jpg',
    imageAlt: 'Diary.',
    price: '300',
  },
  {
    id: 2,
    name: 'vintage diary',
    href: 'src/app/product/id/prod/page.tsx',
    imageSrc: '/image/HomeImages/diary1.jpg',
    imageAlt: 'diary.',
    price: '750',
  },
  {
    id: 3,
    name: 'colourful diaries',
    href: '/productDetails',
    imageSrc: '/image/HomeImages/diary3.jpeg',
    imageAlt: 'diary.',
    price: '900',
  },
  {
    id: 4,
    name: 'diary',
    href: 'src/app/product/id/prod/page.tsx',
    imageSrc: '/image/HomeImages/diary4.jpeg',
    imageAlt: 'diary.',
    price: '400',
  },
  {
    id: 5,
    name: 'Red Diary',
    href: '/productDetails',
    imageSrc: '/image/HomeImages/diary2.jpg',
    imageAlt: 'Diary.',
    price: '300',
  },
  {
    id: 6,
    name: 'vintage diary',
    href: 'src/app/product/id/prod/page.tsx',
    imageSrc: '/image/HomeImages/diary1.jpg',
    imageAlt: 'diary.',
    price: '750',
  },
  {
    id: 7,
    name: 'colourful diaries',
    href: '/productDetails',
    imageSrc: '/image/HomeImages/diary3.jpeg',
    imageAlt: 'diary.',
    price: '900',
  },
  {
    id: 8,
    name: 'diary',
    href: 'src/app/product/id/prod/page.tsx',
    imageSrc: '/image/HomeImages/diary4.jpeg',
    imageAlt: 'diary.',
    price: '400',
  },
  // More products...
];

const page = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 ">
          Pens
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 items-center">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  height={300}
                  width={300}
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;

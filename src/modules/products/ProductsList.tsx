'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useProducts } from './hooks/useProducts';

type Props = {
  id?: string;
  title?: string;
  slug?: string;
  imgSrc?: string;
  imgAlt?: string;
  price?: string;
};

const ProductsList: React.FC<Props> = ({ slug }) => {
  const { products } = useProducts({
    slug: `/${slug}`,
  });

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 ">
          {slug?.replaceAll('-', ' ').toUpperCase()}
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 items-center">
          {products &&
            products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <Image
                    height={300}
                    width={300}
                    src={product.imgUrl || ''}
                    alt={product.name}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={`${slug}/${product.id}`} prefetch>
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

export default ProductsList;

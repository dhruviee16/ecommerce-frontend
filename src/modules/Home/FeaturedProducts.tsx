import { useProducts } from '@/modules/products/hooks/useProducts';
import Image from 'next/image';
import Link from 'next/link';

function FeaturedProducts() {
  const { products } = useProducts({
    first: 4,
  });

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Featured Products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products &&
            products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <Image
                    src={product.imgUrl || ''}
                    alt={product.name}
                    height={450}
                    width={450}
                    className="object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={`${product.category?.slug}/${product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500"></p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    <span>Rs. </span>
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;

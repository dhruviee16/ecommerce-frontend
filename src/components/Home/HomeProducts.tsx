import Image from 'next/image';
const products = [
  {
    id: 1,
    name: 'Color Pencils',
    href: '/categories/abc/xyz/pqr',
    imageSrc: '/image/HomeImages/colorpencil2.jpg',
    imageAlt: 'Color Pencils',
    price: 'Rs.200',
    // color: 'black',
    height: 450,
    width: 450,
  },
  // More products...
  {
    id: 2,
    name: 'Vintage Diary',
    href: '/categories/abc/xyz/pqr',
    imageSrc: '/image/HomeImages/diary1.jpg',
    imageAlt: 'Vintage Diary',
    price: 'Rs.750',
    height: 450,
    width: 450,
  },
  {
    id: 3,
    name: 'Acrylic Colors',
    href: '/categories/abc/xyz/pqr',
    imageSrc: '/image/HomeImages/acrylic.jpg',
    imageAlt: 'Acrylic colors',
    price: 'Rs.300',
    // color: 'black',
    height: 450,
    width: 450,
  },
  {
    id: 4,
    name: 'Hamper',
    href: '/categories/abc/xyz/pqr',
    imageSrc: '/image/HomeImages/hamper.jpg',
    imageAlt: 'Hamper',
    price: 'Rs.450',
    height: 450,
    width: 450,
  },
];

function HomeProducts() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Featured Products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  height={product.height}
                  width={product.width}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500"></p>
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
}

export default HomeProducts;

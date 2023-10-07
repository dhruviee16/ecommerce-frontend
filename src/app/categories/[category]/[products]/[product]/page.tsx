import React from 'react';
import { ProductDetails } from '@/modules/products';

type Props = {
  params: {
    product: string;
  };
};

const page = ({ params }: Props) => {
  const { product } = params;
  return (
    <div>
      {/* <div className="flex justify-center items-center text-justify text-6xl text-black space-y-1">
        {product.replace('-', ' ').toUpperCase()}
      </div> */}
      <ProductDetails />
    </div>
  );
};

export default page;

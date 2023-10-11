import { useProduct } from '@/modules/Add-Edit-Forms/hooks/useProduct';
import { ProductDetails } from '@/modules/products';
import React from 'react';

type Props = {
  params: {
    productId: string;
  };
};

const Page: React.FC<Props> = ({ params }) => {
  const { productId } = params;

  return (
    <div>
      <ProductDetails slug={productId} />
    </div>
  );
};

export default Page;

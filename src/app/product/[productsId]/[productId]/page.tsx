import React from 'react';
import { PenProd } from '@/modules/Pens';

type Props = {
  params: {
    productId: string;
  };
};

const page = ({ params }: Props) => {
  const { productId } = params;
  return (
    <div>
      <div className="flex justify-center items-center text-justify text-6xl text-black space-y-1">
        {productId}
      </div>
      <PenProd />
    </div>
  );
};

export default page;

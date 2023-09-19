import { ProductsList } from '@/modules/products';

type Props = {
  params: {
    products: string;
  };
};

//const page = ({ params }: { params: { categoryId: string } }) => {

//const { categoryId } = params;

const page = ({ params }: Props) => {
  const { products } = params;
  return (
    <div>
      <div className="justify-center items-center">
          <ProductsList title={products} />
      </div>
    </div>
  );
};

export default page;

//localhost/categoryId/sectionId/itemsId/productId
//{ categoryId: string,sectionId: string, itemId: string }
//<div className="flex justify-center  mt-[5%] text-4xl font-semibold text-black">{categoryId}</div>

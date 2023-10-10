import { ProductsList } from '@/modules/products';
import { useProducts } from '@/modules/products/hooks/useProducts';

type Props = {
  params: {
    slug: string;
  };
};

//const page = ({ params }: { params: { categoryId: string } }) => {

//const { categoryId } = params;

const Products: React.FC<Props> = ({ params }) => {
  const { slug } = params;

  return (
    <div>
      <div className="justify-center items-center">
        <ProductsList slug={slug} />
      </div>
    </div>
  );
};

export default Products;

//localhost/categoryId/sectionId/itemsId/productId
//{ categoryId: string,sectionId: string, itemId: string }
//<div className="flex justify-center  mt-[5%] text-4xl font-semibold text-black">{categoryId}</div>

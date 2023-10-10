import { useCurrentUserQuery } from '@/generated/graphql';
import { ProductsList } from '@/modules/products';

type Props = {
  params: {
    category: string;
  };
};

//const page = ({ params }: { params: { categoryId: string } }) => {

//const { categoryId } = params;

const Page = ({ params }: Props) => {
  const { category } = params;

  return (
    <div>
      <div className="justify-center items-center">
        <ProductsList title={category} />
      </div>
    </div>
  );
};

export default Page;

//localhost/categoryId/sectionId/itemsId/productId
//{ categoryId: string,sectionId: string, itemId: string }
//<div className="flex justify-center  mt-[5%] text-4xl font-semibold text-black">{categoryId}</div>

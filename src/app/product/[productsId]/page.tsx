import { Categories } from '@/modules/categories';

type Props = {
  params: {
    categoryId: string
  }
}

//const page = ({ params }: { params: { categoryId: string } }) => {


  //const { categoryId } = params;

  const page = ({ params }: Props) => {
    const { categoryId } = params
    console.log(categoryId)
  return (
    <div>
      <div className='justify-center items-center'>
        <div className='flex justify-center items-center text-center text-6xl text-black'>{categoryId}</div>
        <div>
          <Categories title={categoryId}/>
        </div>
      </div>
    </div>
  );
};


export default page;

//localhost/categoryId/sectionId/itemsId/productId
//{ categoryId: string,sectionId: string, itemId: string }
//<div className="flex justify-center  mt-[5%] text-4xl font-semibold text-black">{categoryId}</div>
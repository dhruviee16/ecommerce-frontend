import { Layout } from '@/components/Layout';
import { ProductsList } from '@/modules/products';

type Props = {
  params: {
    slug: string;
  };
};


const Products: React.FC<Props> = ({ params }) => {
  const { slug } = params;

  return (
    <Layout>
      <div className="justify-center items-center">
        <ProductsList slug={slug} />
      </div>
    </Layout>
  );
};

export default Products;


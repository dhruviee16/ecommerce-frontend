import { useUpdateProductMutation } from "@/generated/graphql";
import toast from "react-hot-toast";

export const useUpdateProduct = () => {
  const [updateProduct, { data, loading, error }] = useUpdateProductMutation({
    onCompleted(data) {
      toast.success('Product created successfully');
    },
    onError(error) {
      toast.error('Error creating service ' + error.message);
    },
  })

  const handleSubmit = (input: any) => {
    const { id, ...product } = input;
    updateProduct({
      variables: {
        id,
        product
      }
    })
  }

  return {
    handleSubmit,
    loading,
    error
  };
}
import { useCreateProductMutation } from "@/generated/graphql";
import toast from "react-hot-toast";

export const useCreateProduct = () => {
  const [createService, { data, loading, error }] = useCreateProductMutation({
    onCompleted(data) {
      toast.success('Service created successfully');
    },
    onError(error) {
      toast.error('Error creating service ' + error.message);
    },
  })

  const handleSubmit = (input: any) => {
    createService({
      variables: {
        product: input
      }
    })
  }


  return {
    handleSubmit,
    loading,
    error
  };
}
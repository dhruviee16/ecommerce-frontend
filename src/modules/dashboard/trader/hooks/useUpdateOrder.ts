import { useOrderQuery, useUpdateOrderMutation } from "@/generated/graphql"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"

export const useUpdateOrder = (id:any) => {

  const {data:order} = useOrderQuery({
    variables: {
      id
    }
  })

  const router = useRouter()
  const [updateOrder, {data,loading,error}] = useUpdateOrderMutation({
    onCompleted(data) {
      toast.success("Order updated")
      router.refresh()
    },
    onError(error) {
      toast.error("error updating order "+error.message)
    }
  })

  const handleSubmit = (input:any) => {
    if(!order) return
    updateOrder({
      variables: {
        id: order.order?.id,
        order: {
          status: input.status,
        }
      }
    })
  }

console.log(order)

  const initialValues = {
    status: order?.order?.status,
    id: order?.order?.id
  }

  return {
    handleSubmit,
    initialValues,
    loading,
    error
  }
}
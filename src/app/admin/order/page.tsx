import AdminLayout from '@/modules/Admin/AdminLayout'
import { OrderHistory } from '@/modules/Admin/Order'
import { TraderInfo } from '@/modules/Admin/Trader'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <AdminLayout>
      <OrderHistory />
    </AdminLayout>
  )
}

export default page
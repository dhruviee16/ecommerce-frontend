import AdminLayout from '@/modules/Admin/AdminLayout'
import { TraderInfo } from '@/modules/Admin/Trader'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <AdminLayout>
      <TraderInfo />
    </AdminLayout>
  )
}

export default page
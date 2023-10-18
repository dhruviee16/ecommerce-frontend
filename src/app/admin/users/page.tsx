import AdminLayout from '@/modules/Admin/AdminLayout'
import { Content } from '@/modules/Admin/User'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <AdminLayout>
      <Content />
    </AdminLayout>
  )
}

export default page
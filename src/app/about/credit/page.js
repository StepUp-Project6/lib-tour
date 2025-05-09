import PageHeader from '@/app/components/fragments/PageHeader'
import LecturerProfile from '@/app/components/sections/About/LecturerProfile'
import WriterProfile from '@/app/components/sections/About/WriterProfile'
import React from 'react'

const page = () => {
  return (
    <div>
        <PageHeader title="Credit" />
        <WriterProfile />
        <LecturerProfile />
    </div>
  )
}

export default page
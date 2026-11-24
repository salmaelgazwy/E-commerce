import StaticAuth from '@/components/common/staticAuth'
import React from 'react'

export default function LayoutAuth({children}:LayoutProps<"/">) {
  return (
    <div className='container mx-auto my-28 px-4'>
       <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>

        <div className='hidden md:block'>
          <StaticAuth />
        </div>

        <div className='w-full'>
          {children}
        </div>

       </div>

    </div>
  )
}
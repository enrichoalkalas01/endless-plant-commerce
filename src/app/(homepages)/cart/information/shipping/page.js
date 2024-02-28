"use client"

import { useEffect } from 'react'
import BreadCrumb from '@/components/headers/breadcrumbs/BreadCrumb'
import MiniCartDetail from '@/components/cart/MiniCartDetail'

export default function page() {
    
    return(
        <>
            <div>
                <BreadCrumb />
            </div>
            <div className='py-4'>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2'>
                    <div className='py-2 px-4 sm:px-0 sm:px-4'>
                    </div>
                    <div className='py-2 px-4 sm:px-0 md:px-2 sm:px-4'>
                        <MiniCartDetail
                            Discount={50}
                            Shipping={0}
                            Products={[
                                {
                                    id: 1, title: 'HARMONY BONSAI', price: 14500,
                                    thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                                },
                                {
                                    id: 2, title: 'HARMONY BONSAI', price: 18000,
                                    thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                                },
                                {
                                    id: 3, title: 'HARMONY BONSAI', price: 12400,
                                    thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
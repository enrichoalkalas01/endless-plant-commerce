"use client"

import { useEffect, useState } from 'react'
import BreadCrumb from '@/components/headers/breadcrumbs/BreadCrumb'
import MiniCartDetail from '@/components/cart/MiniCartDetail'
import { RadioGroup } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Page() {
    const [breadCrumb, setBreadCrumb] = useState([
        { id: 1, name: 'Cart', href: '/cart' },
        { id: 2, name: 'Information', href: '/cart/information' },
        { id: 3, name: 'Shipping', href: '/cart/information/shipping' },
    ])

    const [sizes , setSizes] = useState([
        { name: 'JNT - CTC (JNT City Courier) 1', inStock: true },
        { name: 'JNT - CTC (JNT City Courier) 2', inStock: true },
    ])

    const [selectedSize, setSelectedSize] = useState(sizes[2])

    return(
        <>
            <div>
                <BreadCrumb breadCrumb={ breadCrumb } />
            </div>
            <div className='py-4'>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2'>
                    <div className='py-2 px-4 sm:px-0 sm:px-4'>
                        <div>
                            <h2 className='font-bold'>Shipping Method</h2>
                        </div>
                        <div>
                            <RadioGroup value={ selectedSize } onChange={ (e) => {
                                // console.log(e)
                                return setSelectedSize
                            } } className="mt-4">
                                <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                                <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-2">
                                    { sizes.map((size, i) => (
                                        <RadioGroup.Option
                                            key={size.name}
                                            value={size}
                                            disabled={!size.inStock}
                                            className={({ active }) =>
                                                classNames(
                                                    size.inStock
                                                    ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                                    : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                                    active ? 'ring-2 ring-indigo-500' : '',
                                                    'group relative flex items-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                                                )
                                            }
                                        >
                                            <div>
                                                <div>
                                                    <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                                </div>
                                                <div>
                                                    asdas
                                                </div>
                                            </div>
                                        </RadioGroup.Option>
                                    )) }
                                </div>
                            </RadioGroup>
                        </div>
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
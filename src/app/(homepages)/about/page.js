"use client"

import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import Image from 'next/image'

const product = {
    name: 'Payment',
    href: '/payment',
    breadcrumbs: [
        { id: 1, name: 'Cart', href: '/cart' },
        { id: 2, name: 'Information', href: '/information' },
        { id: 3, name: 'Shipping', href: '/shipping' },
    ],
    sizes: [
        { name: 'JNT - CTC (JNT City Courier) 1', inStock: true },
        { name: 'JNT - CTC (JNT City Courier) 2', inStock: true },
    ],
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Page() {
    const [selectedSize, setSelectedSize] = useState(product.sizes[2])
    return(
        <>
            <div>
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 lg:max-w-7xl">
                        { product.breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                    {breadcrumb.name}
                                </a>
                                <svg
                                    width={16}
                                    height={20}
                                    viewBox="0 0 16 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-5 w-4 text-gray-300"
                                >
                                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                </svg>
                                </div>
                            </li>
                        )) }
                        <li className="text-sm">
                            <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                {product.name}
                            </a>
                        </li>
                    </ol>
                </nav>
            </div>
            <span>Page Here</span>
            <div>
                <RadioGroup value={ selectedSize } onChange={ (e) => {
                    // console.log(e)
                    return setSelectedSize
                } } className="mt-4">
                    <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-2">
                        { product.sizes.map((size, i) => (
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
                                        'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                                    )
                                }
                            >
                                {({ active, checked }) => (
                                    <>
                                        <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                        { size.inStock ? (
                                            <span
                                                className={classNames(
                                                active ? 'border' : 'border-2',
                                                checked ? 'border-indigo-500' : 'border-transparent',
                                                'pointer-events-none absolute -inset-px rounded-md'
                                                )}
                                                aria-hidden="true"
                                            />
                                            ) : (
                                            <span
                                                aria-hidden="true"
                                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                            >
                                                <svg
                                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                    viewBox="0 0 100 100"
                                                    preserveAspectRatio="none"
                                                    stroke="currentColor"
                                                >
                                                    <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                </svg>
                                            </span>
                                        ) }
                                    </>
                                )}
                            </RadioGroup.Option>
                        )) }
                    </div>
                </RadioGroup>
            </div>
            <div className='py-4'>
                <div className='py-4 px-4 rounded-md border border-gray-200'>
                    <div className='grid grid-cols-12 gap-6'>
                        {/* <div className='col-span-12 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 mx-auto'> */}
                            <Image
                                width={50} height={50}
                                className="inline-block h-20 w-20 rounded ring-2 ring-white"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        {/* </div> */}
                        <div className='col-span-8 sm:col-span-8 md:col-span-4 lg:col-span-4 xl:col-span-4'>
                            <h2>HARMONY BONSAI</h2>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 gap-6 py-4'>
                        <input
                            type="text"
                            name="gift-card"
                            id="gift-card"
                            autoComplete="gift-card"
                            placeholder="Gift Card / Discount code"
                            className="col-span-10 px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <button
                            type="submit"
                            className="col-span-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        > Apply </button>
                    </div>
                    <div className='grid grid-cols-12 gap-6 py-4'>
                        <div className="col-span-5">
                            <span>Sub total</span>
                        </div>
                        <div className='col-span-7'>
                            <span>Rp 2.000.000,-</span>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 gap-6 py-4'>
                        <div className="col-span-5">
                            <span>Tax</span>
                        </div>
                        <div className='col-span-7'>
                            <span>Rp 2.000.000,-</span>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 gap-6 py-4'>
                        <div className="col-span-5">
                            <span>Shipping</span>
                        </div>
                        <div className='col-span-7'>
                            <span>Calculated at next step</span>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 gap-6 py-4'>
                        <div className="col-span-5">
                            <span>Total</span>
                        </div>
                        <div className='col-span-7'>
                            <span>Rp 2.000.000,-</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-4'>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='flex items-center justify-start'>
                        <a href="#" className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 mr-2 text-[#01AA8B] font-semibold">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                            <span className='text-[#01AA8B] font-semibold'>Return to information</span>
                        </a>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="col-span-2 rounded-md bg-[#01AA8B] px-4 py-4 text-sm font-semibold text-white shadow-sm hover:bg-[#008D74] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008D74]"
                        > Continue Shipping </button>
                    </div>
                </div>
            </div>
        </>
    )
}
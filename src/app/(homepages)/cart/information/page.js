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
                        {/* Contact */}
                        <div>
                            <div>
                                <h2 className='font-bold'>Contact</h2>
                            </div>

                            <div className='py-2'>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 mb-1">
                                        <span>Email address</span>
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        placeholder='Email or mobile phone number'
                                        required
                                        className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                        
                        {/* Shipping Address */}
                        <div className='py-4'>
                            <div>
                                <h2 className='font-bold'>Shipping Address</h2>
                            </div>

                            <div className='py-2'>
                                <div>
                                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900 mb-1">
                                        <span>Country/Region</span>
                                    </label>
                                    <input
                                        id="country"
                                        name="country"
                                        type="text"
                                        autoComplete="country"
                                        placeholder='Country / Region'
                                        required
                                        className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className='py-2 grid grid-cols-2 gap-4'>
                                <div>
                                    <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-gray-900 mb-1">
                                        <span>Firstname</span>
                                    </label>
                                    <input
                                        id="firstname"
                                        name="firstname"
                                        type="text"
                                        autoComplete="firstname"
                                        placeholder='Firstname'
                                        required
                                        className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900 mb-1">
                                        <span>Lastname</span>
                                    </label>
                                    <input
                                        id="lastname"
                                        name="lastname"
                                        type="text"
                                        autoComplete="lastname"
                                        placeholder='Lastname'
                                        required
                                        className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className='py-2'>
                                <div>
                                    <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900 mb-1">
                                        <span>Address</span>
                                    </label>
                                    <input
                                        id="address"
                                        name="address"
                                        type="text"
                                        autoComplete="address"
                                        placeholder='Address'
                                        required
                                        className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className='py-2'>
                                <div>
                                    <label htmlFor="house" className="block text-sm font-medium leading-6 text-gray-900 mb-1">
                                        <span>House</span>
                                    </label>
                                    <input
                                        id="house"
                                        name="house"
                                        type="text"
                                        autoComplete="house"
                                        placeholder='House, Apartment, Suite, Etc ( Optional )'
                                        required
                                        className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className='py-2'>
                                <div>
                                    <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900 mb-1">
                                        <span>City</span>
                                    </label>
                                    <input
                                        id="city"
                                        name="city"
                                        type="text"
                                        autoComplete="city"
                                        placeholder='City'
                                        required
                                        className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className='py-2'>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900 mb-1">
                                        <span>Phone Number</span>
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="text"
                                        autoComplete="phone"
                                        placeholder='Phone Number'
                                        required
                                        className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="relative flex gap-x-3">
                                <div className="flex h-6 items-center">
                                    <input
                                    id="candidates"
                                    name="candidates"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                </div>
                                <div className="text-sm leading-6">
                                    <label htmlFor="candidates" className="font-medium text-gray-900">
                                        <span>Save this information for next time</span>
                                    </label>
                                    {/* <p className="text-gray-500">Get notified when a candidate applies for a job.</p> */}
                                </div>
                            </div>

                            <div className='py-4 flex justify-end'>
                                <button
                                    type="submit"
                                    className="col-span-12 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                > Submit Information </button>
                            </div>
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
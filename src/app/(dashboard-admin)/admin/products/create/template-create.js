"use client"

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useState, useEffect } from 'react'

export default function TemplateCreate() {
    const [Title, setTitle] = useState(null)
    const [Price, setPrice] = useState(null)
    const [Stocks, setStocks] = useState(null)
    const [Thumbnail, setThumbnail] = useState(null)
    const [Description, setDescription] = useState(null)
    const [Slug, setSlug] = useState(null)

    useEffect(() => {
        console.log(Title, Price, Stocks, Thumbnail, Description, Slug)
    }, [Title, Price, Stocks, Thumbnail, Description, Slug])

    return(
        <>
            <section className="w-full bg-[#fff] rounded-md py-4 px-6">
                <div className="header">
                    <h2 className="font-bold text-[22px]">Create Products</h2>
                </div>
                <div className="w-full pt-4 flex flex-wrap">
                    {/* Title */}
                    <div className="title sm:w-full md:w-full lg:w-full mb-4">
                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium leading-6 text-gray-900">Title</label>
                            <div className="mt-2">
                                <input onChange={(e) => setTitle(e?.target?.value)} type="text" name="title" id="title" className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                    </div>

                    {/* Price */}
                    <div className="price sm:w-full md:w-1/2 lg:w-1/2 pr-2 mb-4">
                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                            <div className="mt-2">
                                <input onChange={(e) => setPrice(e?.target?.value)} type="number" min={1} name="price" id="price" className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                    </div>

                    {/* Stocks */}
                    <div className="stock sm:w-full md:w-1/2 lg:w-1/2 pl-2 mb-4">
                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium leading-6 text-gray-900">Stocks</label>
                            <div className="mt-2">
                                <input onChange={(e) => setStocks(e?.target?.value)} type="number" min={1} name="stock" id="stock" className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                    </div>

                    {/* Thumbnail */}
                    <div className="thumbnail sm:w-full md:w-full lg:w-full mb-4">
                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium leading-6 text-gray-900">thumbnail</label>
                            <div className="mt-2">
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div className="text-center">
                                        <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input onChange={(e) => setThumbnail(e?.target?.value)} id="file-upload" name="file-upload" type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="description sm:w-full md:w-full lg:w-full mb-4">
                        <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                            Description
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="description"
                                name="description"
                                rows={3}
                                className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={''}
                                onChange={ (e) => setDescription(e?.target?.value) }
                            />
                        </div>
                        <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about your product.</p>
                    </div>

                    {/* Slug */}
                    <div className="slug sm:w-full md:w-full lg:w-full mb-4">
                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium leading-6 text-gray-900">Slug</label>
                            <div className="mt-2">
                                <input onChange={(e) => setSlug(e?.target?.value)} type="text" name="slug" id="slug" className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                    </div>

                    <div className="button sm:w-full md:w-full lg:w-full mb-4 flex justify-end items-center">
                        <a href="/admin/products/" className="text-sm font-semibold leading-6 text-gray-900">Cancel</a>
                        <button
                            type="submit"
                            className="rounded-md ml-4 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            <span>Create Product</span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
"use client"

import { useEffect, useState } from 'react'

export default function BreadCrumb({ breadCrumb = [] }) {

    return(
        <>
            <nav aria-label="Breadcrumb">
                <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 lg:max-w-7xl">
                    { breadCrumb.map((e, i, arr) => (
                        <li key={ i }>
                            <div className="flex items-center">
                                {
                                    i === (arr?.length - 1) ? <span className='text-gray-900 font-semibold hover:text-gray-600'>{ e?.name }</span> :
                                    <a href={e?.href} className="mr-2 text-sm font-semibold text-[#01AA8B]">
                                        <span>{e?.name}</span>
                                    </a>
                                }
                                {
                                    i === (arr?.length - 1) ? '' :
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
                                    // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    //     <path fillRule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                                    // </svg>
                                }
                            </div>
                        </li>
                    )) }
                    {/* <li className="text-sm">
                        <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                            {product.name}
                        </a>
                    </li> */}
                </ol>
            </nav>
        </>
    )
}
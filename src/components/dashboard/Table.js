"use client"

import { useState } from "react"
import TBComponents from "./components/TBComponents"
import ReactPaginationOne from "./ReactPaginationOne"

export default function Table() {
    const [tableBodyData, setTableBodyData] = useState([
        { id: 1, title: 'Apple MacBook Pro 17"', color: 'Silver', category: 'Laptop', price: 2999 },
        { id: 2, title: 'Microsoft Surface Pro', color: 'White', category: 'Laptop PC', price: 1999 },
        { id: 3, title: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: 99 },
        { id: 4, title: 'Google Pixel Phone', color: 'Gray', category: 'Phone', price: 799 },
        { id: 5, title: 'Apple Watch 5', color: 'Red', category: 'Wearables', price: 999 },
    ])
    
    return(
        <>
            <div className="w-full py-4 px-4">
                <div className="bg-white py-6 px-6 rounded-lg">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Color
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Category
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tableBodyData?.map((e, i) => (
                                        <TBComponents
                                            key={ i }
                                            id={ e?.id }
                                            title={ e?.title }
                                            color={ e?.color }
                                            category={ e?.category }
                                            price={ e?.price }
                                        />
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="pt-4">
                        <ReactPaginationOne
                            itemLength={125}
                            itemsPerPage={20}
                            itemOffsetData={5}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
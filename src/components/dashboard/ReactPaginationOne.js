"use client"
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"

export default function ReactPaginationOne({
    itemsPerPage = 5, itemOffsetData = 0, itemLength = 0, callBackDataPagination = null
}) {
    const [itemOffset, setItemOffset] = useState(itemOffsetData || 0)
    const endOffset = itemOffset + itemsPerPage
    console.log(`Loading items from ${itemOffset} to ${endOffset}`)
    const pageCount = Math.ceil(itemLength / itemsPerPage)

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % itemLength
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`)
        let CallbackPassing = { page: event.selected + 1, length: itemLength, pageCount: pageCount, endOffset: newOffset, startOffset: ((event.selected * itemsPerPage) % itemLength) / event.selected }
        console.log(CallbackPassing)
        setItemOffset(newOffset)
    }

    useEffect(() => {

    }, [itemsPerPage, itemOffsetData, itemLength, itemOffset])

    return(
        <>
            <div>
                <ReactPaginate
                    className='flex flex-row text-sm gap-4 items-center font-medium text-[#ABB2B9]'
                    nextClassName='bg-[#F0F2F4] px-1.5 py-1.5 rounded-md text-[#ABB2B9] font-semibold cursor-pointer transition-all ease-linear duration-500'
                    previousClassName='bg-[#F0F2F4] px-1.5 py-1.5 rounded-md text-[#ABB2B9] font-semibold cursor-pointer transition-all ease-linear duration-500'
                    activeClassName='bg-[#1A5CFF] px-2.5 py-1.5 rounded-md text-[#FFFFFF] font-semibold cursor-pointer transition-all ease-linear duration-500'
                    breakLabel="..."
                    nextLabel={<FaChevronRight />}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel={<FaChevronLeft />}
                    renderOnZeroPageCount={null}
                />
            </div>
        </>
    )
}
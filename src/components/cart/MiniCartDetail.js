"use client"
import { useEffect, useState } from "react"
import MiniProductCart from "../products/MiniProductCart";

function convertToRupiah(number) {
    const rupiahFormat = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
    return rupiahFormat.replace("IDR", "Rp");
}

export default function MiniCartDetail({
    SubTotal = 0, Tax  = 0, Shipping  = 0, Total = 0, TotalTax = 11,
    Discount = 0, Products = [],
}) {
    const [subtotal, setSubTotal] = useState(SubTotal)
    const [tax, setTax] = useState(Tax)
    const [totalTax, setTotalTax] = useState(TotalTax)
    const [shipping, setShipping] = useState(Shipping)
    const [total, setTotal] = useState(Total)
    const [discount, setDiscount] = useState(Discount)
    const [totalDiscount, setTotalDiscount] = useState(0)
    const [products, setProducts] = useState(Products)
    
    useEffect(() => {
        // console.log(subtotal, tax, shipping, total)
        // console.log(convertToRupiah(subtotal))

        if ( products?.length > 0 ) {
            let newTotal = 0
            products?.map((e) => newTotal += e?.price )
            setSubTotal(newTotal)
            
            let taxPercent = (newTotal * totalTax) / 100 // percen
            setTax(taxPercent)

            let newTotalFromDiscount = (( newTotal + taxPercent ) * discount) / 100
            setTotalDiscount(newTotalFromDiscount)
            setTotal((newTotal + taxPercent) - newTotalFromDiscount + shipping)
        }
    }, [])

    useEffect(() => {
        
    }, [subtotal, total, tax, discount, shipping, products])

    return(
        <>
            <div className='py-4'>
                <div className='py-4 px-4 rounded-md border border-gray-200'>
                    <div>
                        { products?.map((e, i) => (
                            <div className="mb-4" key={ i }>
                                <MiniProductCart
                                    ProductId={ e?.id }
                                    ThumbnailProduct={ e?.thumbnail }
                                    PriceProduct={ e?.price }
                                    TitleProduct={ e?.title }
                                />
                            </div>
                        )) }
                    </div>
                    <div className='grid grid-cols-12 gap-2 py-3'>
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
                    <div className='grid grid-cols-12 gap-6 py-2 px-1'>
                        <div className="col-span-5">
                            <span className="font-semibold">Sub total</span>
                        </div>
                        <div className='col-span-7'>
                            <span className="font-semibold">{ convertToRupiah(subtotal) }</span>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 gap-6 py-2 px-1'>
                        <div className="col-span-5">
                            <span className="font-semibold">Tax</span>
                        </div>
                        <div className='col-span-7'>
                            <span className="font-semibold">{ convertToRupiah(tax) } ( { totalTax }% PPh )</span>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 gap-6 py-2 px-1'>
                        <div className="col-span-5">
                            <span className="font-semibold">Discount</span>
                        </div>
                        <div className='col-span-7'>
                            <span className="text-[#01AA8B] font-semibold">{ convertToRupiah(totalDiscount) } ( { discount }% )</span>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 gap-6 py-2 px-1'>
                        <div className="col-span-5">
                            <span className="font-semibold">Shipping</span>
                        </div>
                        <div className='col-span-7'>
                            <span className="font-semibold">{ Shipping > 0 ? convertToRupiah(shipping) : 'Calculated at next step' }</span>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 gap-6 py-2 px-1'>
                        <div className="col-span-5">
                            <span className="font-semibold">Total</span>
                        </div>
                        <div className='col-span-7'>
                            <span className="font-semibold">{ convertToRupiah(total) }</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
"use client"

import Image from 'next/image'

function convertToRupiah(number) {
    const rupiahFormat = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
    return rupiahFormat.replace("IDR", "Rp");
}

export default function MiniProductCart({ TitleProduct = null, ThumbnailProduct = null, PriceProduct = 0, ProductId = null }) {
    return(
        <>
            <div className='grid grid-cols-6 gap-2 flex items-center'>
                <Image
                    width={50} height={50}
                    className="inline-block h-auto w-auto rounded ring-2 ring-white"
                    src={ ThumbnailProduct ? ThumbnailProduct : "" }
                    alt={ TitleProduct ? TitleProduct : "" }
                />
                <div className='col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-4 pl-4'>
                    <h4><span className="font-semibold">{ TitleProduct }</span> - <span className="font-normal">{ PriceProduct > 0 ? convertToRupiah(PriceProduct) : convertToRupiah(0) }</span></h4>
                </div>
            </div>
        </>
    )
}
"use client"

import Table from "@/components/dashboard/Table"
import Axios from "axios"
import { useEffect } from "react"

export default function Page() {
    const getDataProducts = async () => {
        try {
            let config = {
                url: `/api/products`,
                method: 'get',
                headers: {
                    'Authorization': `Bearer `,
                    'Content-Type': 'application/json',
                }
            }

            let getData = await Axios(config)
            console.log(getData)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getDataProducts()
    }, [])

    return(
        <>
            <div className="bg-white">
                <Table />
            </div>
        </>
    )
}
"use client"
export default function TBComponents({ id = null, title = null, color = null, category = null, price = null, }) {
    return(
        <>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <span>{ title }</span>
                </th>
                <td className="px-6 py-4">
                    <span>{ color }</span>
                </td>
                <td className="px-6 py-4">
                    <span>{ category }</span>
                </td>
                <td className="px-6 py-4">
                    <span>{ price }</span>
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </>
    )
}
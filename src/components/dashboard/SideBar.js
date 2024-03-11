"use client"

import { Menu } from '@headlessui/react'
import { Popover } from '@headlessui/react'
import { useContext, createContext, useState, Fragment } from "react"
import { IoChevronBackCircleSharp } from "react-icons/io5"
import { IoChevronForwardCircleSharp } from "react-icons/io5"
import { IoEllipsisVertical } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { FaRegChartBar } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineInventory2 } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { MdHelpCenter } from "react-icons/md";


const SidebarContext = createContext()

const links = [
    { href: '/account-settings', label: 'Account settings' },
    { href: '/support', label: 'Support' },
    { href: '/license', label: 'License' },
    { href: '/sign-out', label: 'Sign out' },
]

export default function SideBarDashboard() {
    const [expanded, setExpanded] = useState(true)

    return(
        <>
            <section className="h-screen">
                <div className="h-full flex flex-col bg-white border-r shadow-sm">
                    <div className="p-4 pb-2 flex justify-between items-center">
                        <img
                            src="https://img.logoipsum.com/243.svg"
                            className={`overflow-hidden transition-all ${ expanded ? "w-32 mr-4" : "w-0" }`}
                            alt=""
                        />
                        <button
                            onClick={() => setExpanded((curr) => !curr)}
                            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
                        >
                            {expanded ? <IoChevronBackCircleSharp /> : <IoChevronForwardCircleSharp />}
                        </button>
                    </div>

                    <SidebarContext.Provider value={{ expanded }}>
                        <ul className="flex-1 px-3 py-4">
                            <SidebarItem icon={<MdDashboard />} text="Dashboard" alert={true} active={true} />
                            <SidebarItem icon={<FaRegChartBar />} text="Statistics" alert={false} active={false} />
                            <SidebarItem icon={<HiUsers />} text="Users" alert={false} active={false} />
                            <SidebarItem icon={<FiShoppingCart />} text="Orders" alert={true} active={false} />
                            <SidebarItem icon={<MdOutlineInventory2 />} text="Inventory" alert={false} active={false} />
                            <SidebarItem icon={<MdPayment />} text="Billings" alert={true} active={false} />
                            <SidebarItem icon={<IoIosSettings />} text="Settings" alert={false} active={false} />
                            <SidebarItem icon={<MdHelpCenter />} text="Helps" alert={false} active={false} />
                        </ul>
                    </SidebarContext.Provider>

                    <div className="border-t flex p-3">
                        <img
                            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
                            alt=""
                            className="w-10 h-10 rounded-md"
                        />
                        <div
                            className={`
                                flex justify-between items-center relative
                                overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
                            `}
                        >
                            <div className="leading-4">
                                <h4 className="font-semibold">John Doe</h4>
                                <span className="text-xs text-gray-600">johndoe@gmail.com</span>
                            </div>
                            <Popover className="relative">
                                <Popover.Button>Solutions</Popover.Button>

                                <Popover.Panel className="absolute flex flex-col right-0 p-3 z-10">
                                    <div className="grid grid-cols-2">
                                        <a href="/analytics">Analytics</a>
                                        <a href="/engagement">Engagement</a>
                                        <a href="/security">Security</a>
                                        <a href="/integrations">Integrations</a>
                                    </div>

                                    <img src="/solutions.jpg" alt="" />
                                </Popover.Panel>
                            </Popover>
                            {/* <Menu>
                                <Menu.Button>
                                    <IoEllipsisVertical
                                        className="rounded-lg bg-gray-50 hover:bg-gray-100 cursor-pointer"
                                    />
                                </Menu.Button>
                                <Menu.Items className="absolute flex flex-col right-0 bottom-full p-3">
                                    { links.map((link) => (
                                        <Menu.Item key={link.href} as={Fragment}>
                                            {({ active }) => (
                                            <a
                                                href={link.href}
                                                className={`${
                                                active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                                                }`}
                                            >
                                                {link.label}
                                            </a>
                                            )}
                                        </Menu.Item>
                                    )) }
                                </Menu.Items>
                            </Menu> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export function SidebarItem({ icon, text, active, alert }) {
    const { expanded } = useContext(SidebarContext)
    
    return (
        <li
            className={`
                relative flex items-center py-2 px-3 my-1
                font-medium rounded-md cursor-pointer
                transition-colors group mb-3
                ${
                    active
                    ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                    : "hover:bg-indigo-50 text-gray-600"
                }
            `}
        >
            {icon}
            <span
            className={`overflow-hidden transition-all ${
                expanded ? "w-52 ml-3" : "w-0"
            }`}
            >
            {text}
            </span>
            {alert && (
            <div
                className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
                expanded ? "" : "top-2"
                }`}
            />
            )}
    
            {!expanded && (
            <div
                className={`
                absolute left-full rounded-md px-2 py-1 ml-6
                bg-indigo-100 text-indigo-800 text-sm
                invisible opacity-20 -translate-x-3 transition-all
                group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
            `}
            >
                {text}
            </div>
            )}
        </li>
    )
  }
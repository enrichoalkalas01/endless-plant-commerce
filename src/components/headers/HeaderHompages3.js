"use client"

import { Fragment, useState, useEffect } from 'react'
import { Dialog, Popover, Tab, Transition, Disclosure, Menu } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useSelector, useDispatch } from 'react-redux'
import { SetCartStatus } from '@/redux/reducers/navbar'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function HeaderHomepages3() {
    const store = useSelector((state) => state?.Navbar)
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false)
    const [user, setUser] = useState({
        name: 'Tom Cook',
        email: 'tom@example.com',
        imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    })

    const [navigation, setNavigation] = useState([
        { name: 'Home', href: '/', current: false },
        { name: 'Products', href: '/products', current: false },
        { name: 'About', href: '/about', current: false },
        { name: 'Terms & Condition', href: '/tnc', current: false },
    ])

    const [userNavigation, setUserNavigation] = useState([
        { name: 'Your Profile', href: '#' },
        { name: 'Settings', href: '#' },
        { name: 'Sign out', href: '#' },
    ])

    const [cart, setCart] = useState(false)

    useEffect(() => {
        let newNavigation = []
        navigation.map(e => newNavigation.push({ name: e?.name, href: e?.href, current: window?.location?.pathname === e?.href ? true : false }))
        setNavigation(newNavigation)
        console.log(store?.cartStatus)
        
    }, [])

    useEffect(() => {
        console.log(cart)
    }, [cart])

    return(
        <>
            <div className="bg-white">
                <header className="relative bg-white">
                    <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
                        Get free delivery on orders over $100
                    </p>

                    <nav aria-label="Top" className="mx-auto max-w-7xl px-4">
                        <div className="border-b border-gray-200">
                            <div className="flex h-16 items-center">
                                <button
                                    type="button"
                                    className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                                    onClick={() => setOpen(true)}
                                >
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open menu</span>
                                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                                </button>

                                {/* Logo */}
                                <div className="ml-4 flex lg:ml-0">
                                    <a href="#">
                                        <span className="sr-only">Your Company</span>
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                            alt=""
                                        />
                                    </a>
                                </div>

                                {/* Flyout menus */}
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        { navigation.map((item) => (
                                            <a
                                                key={ item.name}
                                                href={ item.href}
                                                className={ classNames(
                                                item.current
                                                    ? 'bg-gray-900 text-white'
                                                    : 'text-black-300 hover:bg-gray-700 hover:text-white',
                                                'rounded-md px-3 py-2 text-sm font-medium'
                                                ) }
                                                aria-current={ item.current ? 'page' : undefined }
                                            >
                                                {item.name}
                                            </a>
                                        )) }
                                    </div>
                                </div>
                                
                                {/* Right Menu Props */}
                                <div className="ml-auto flex items-center">
                                    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                        <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                            Sign in
                                        </a>
                                        <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                                        <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                            Create account
                                        </a>
                                    </div>

                                    {/* Cart */}
                                    <div className="ml-4 flow-root lg:ml-6">
                                        <a href="#" className="group -m-2 flex items-center p-2" onClick={ () => dispatch(SetCartStatus(true)) }>
                                            <ShoppingBagIcon
                                                className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                                aria-hidden="true"
                                            />
                                            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                                            <span className="sr-only">items in cart, view bag</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </>
    )
}
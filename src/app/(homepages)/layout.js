import { Providers } from "@/redux/Providers"

// import HeaderHomepage from "@/components/headers/HeaderHompages"
// import HeaderHomepages3 from "@/components/headers/HeaderHompages3"
// import Cart from "@/components/headers/Cart"


export default function HomepagesLayout({ children }) {

    return(
        <>
            {/* <Providers>
                <HeaderHomepages3 /> */}
                <main>
                    {/* <Cart /> */}
                    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{ children }</div>
                </main>
            {/* </Providers> */}
        </>
    )
}
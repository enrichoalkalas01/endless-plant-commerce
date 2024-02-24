import HeaderHomepage from "@/components/headers/HeaderHompages"

export default function Home({ children }) {
    return (
        <>
            <HeaderHomepage />
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
                </div>
            </header>
            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    { children }
                    <div className="container mx-auto">
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-12 sm:col-span-12 md:col-span-8 lg:col-span-6 xl:col-span-4">
                                <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
                            </div>
                            <div className="col-span-12 sm:col-span-12 md:col-span-8 lg:col-span-6 xl:col-span-4">
                                <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
                            </div>
                        </div>
                    </div>
                </div>
                
            </main>
        </>
    )
}

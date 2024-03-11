import SideBarDashboard from "@/components/dashboard/SideBar"

export default function Layout({ children }) {
    return(
        <>
            <section className="flex bg-[#eee]">
                <div>
                    <SideBarDashboard />
                </div>
                <div className="w-full py-4 px-4">
                    <div className="w-full">
                        { children }
                    </div>
                </div>
            </section>
        </>
    )
}
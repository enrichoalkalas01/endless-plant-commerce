import SideBarDashboard from "@/components/dashboard/SideBar"

export default function Layout({ children }) {
    return(
        <>
            <section className="flex">
                <div>
                    <SideBarDashboard />
                </div>
                <div className="w-full">
                    { children }
                </div>
            </section>
        </>
    )
}
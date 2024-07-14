
import AdminRoute from "./AdminRoute"
import { faArrowDownShortWide, faBowlRice, faChartLine, faBars } from "@fortawesome/free-solid-svg-icons"

const adminNavigation = [
    {url: '/admin/orders', text: 'Ordenes', blank: false, icon: faArrowDownShortWide},
    {url: '/admin/products', text: 'Productos', blank: false, icon: faBowlRice},
    {url: '/admin/sales', text: 'Análisis de ventas', blank: false, icon: faChartLine},
    {url: '/order/rice', text: 'Ver Menú', blank: true, icon: faBars},
]

export default function AdminSidebar() {

    return (
        <>

            <div className="space-y-3">
                <p className="mt-10 uppercase font-bold text-lg text-gray-200 text-center">Navegación</p>
                <nav className="flex flex-col">
                    {
                        adminNavigation.map(link => (
                            <AdminRoute
                            key={link.url}
                            link={link}
                            />
                        ))
                    }
                </nav>
            </div>
        </>

    )
}

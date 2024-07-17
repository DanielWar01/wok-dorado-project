import OrderCard from "@/components/order/OrderCard"
import { prisma } from "@/src/lib/prisma"
import { formatCurrency } from "@/src/utils"
import Image from "next/image"

async function getPendingOrders() {
    const orders = await prisma.order.findMany({
        where : {
            status : false
        },
        include : {
            orderProducts : {
                include: {
                    product: true
                }
            }
        }
    })
    return orders
}

export default async function Admin() {
    const orders = await getPendingOrders()
    return (
    <div>
        <div className="flex bg-neutral-800 gap-3 p-1 mb-4 rounded-sm items-center justify-evenly">
            <Image height={100} width={100} src="/menu.png" alt="logo menu"/>
            <h2 className="title-menu my-4 text-xl font-bold text-white">Administracion de Ordenes del Wok Dorado</h2>
        </div>
        {
            orders.length ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                    {
                        orders.map(order => (
                            <OrderCard key={order.id} order={order}/>
                        ))
                    }
                </div>
            ) : (<p className="text-center">No hay Ordenes Pendientes</p>)
        }
    </div>
    )
}

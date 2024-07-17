import { prisma } from "@/src/lib/prisma"
import { OrderWithProducts } from "@/src/types"
import { formatCurrency } from "@/src/utils"
import { revalidatePath } from "next/cache"
import Image from "next/image"

type OrderCardProps = {
    order : OrderWithProducts
}

export default function OrderCard({order} : OrderCardProps) {
    async function completeOrder() {
        "use server"
        try{
            await prisma.order.update({
                where : {
                    id : order.id
                },
                data : {
                    status : true,
                    orderReadyAt: new Date(Date.now())
                }
            })
            revalidatePath('/admin/orders')
        }catch (error) {
            console.error(error)
        }
    }
    
    return (
    <div className="card">
        <div className="card_image">
            <Image width={300} height={300} src={`/products/${order.orderProducts[0].product.image}.jpg`} alt="mixed vegetable salad in a mason jar. "/>
        </div>
        <div className="card_content">
            <h2 className="card_title font-bold">Cliente &#x2022; {order.name}</h2>
            <div className="card_text">
                <h2 className="card_subtitle font-bold">Productos ordenados</h2>
                {
                    order.orderProducts.map(orderProduct => (
                        <div key={orderProduct.id}>
                            <p className=""><span className="font-black">-</span>{' ('}{orderProduct.quantity}{') '}{orderProduct.product.name}</p>
                        </div>
                    ))
                }
            </div>
            <div className="card_text flex  items-center gap-1">
                <h2 className="card_subtitle font-bold">Total a pagar:</h2>
                <p className="">{formatCurrency(order.total)}</p>
            </div>
        </div>
        <form action={completeOrder} className="flex justify-center">
            <input type="submit" className="btn-order mb-3 w-10/12 font-bold" value="Marcar Orden Completada"/>
        </form>
    </div>
    )
}

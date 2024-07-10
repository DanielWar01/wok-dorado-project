"use client"
import { useStore } from "@/src/store";
import ProductDetails from "./ProductDetails";
import { formatCurrency } from "@/src/utils";

export default function OrderSummary() {
    const {order} = useStore()

    return (
    <>
        <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
            <h1 className="text-4xl text-center font-black">Mi Pedido</h1>
            {order.length === 0 ? <p className="text-center text-neutral-600 text-lg mt-5 font-semibold">El pedido está vacío</p>:(
                <div className="mt-5">
                    {order.map(item => (
                        <ProductDetails key={item.id} item={item} />
                    ))}
                    <h2 className="clip-path-custom font-black text-xl mt-3 p-3 bg-black text-white shadow-lg rounded-sm">Total a pagar:{' '}
                <span className="text-lg font-semibold text-yellow-600">
                    {formatCurrency(order.reduce((acc, item) => acc + item.subtotal, 0))}
                </span>
            </h2>
                </div>
            )}
        </aside>
    </>
    )
}

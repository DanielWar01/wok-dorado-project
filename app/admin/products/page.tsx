import ProductsPagination from "@/components/products/ProductsPagination"
import ProductsTable from "@/components/products/ProductsTable"
import { prisma } from "@/src/lib/prisma"
import Image from "next/image"

async function getProducts(page: number, pageSize: number) {
    const skip = (page - 1) * pageSize
    const products = await prisma.product.findMany({
        take: pageSize,
        skip: skip,
        include : {
            category: true
        }
    })

    return products
}

export default async function ProductsPage({searchParams} : {searchParams : {page: string}}) {
    const page = +searchParams.page || 1
    const pageSize = 10
    
    const products = await getProducts(page, pageSize)
    return (
    <div>
        <div className="flex bg-neutral-800 gap-3 p-1 mb-4 rounded-sm items-center justify-evenly">
            <Image height={100} width={100} src="/menu.png" alt="logo menu"/>
            <h2 className="title-menu my-4 text-xl font-bold text-white">Administracion de Productos del Wok Dorado</h2>
        </div>
        <ProductsTable products={products}/>
        <ProductsPagination page={page}/>
    </div>
    )
}

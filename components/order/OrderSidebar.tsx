import Image from "next/image"
import { prisma } from "@/src/lib/prisma"
import CategoryIcon from "../Ui/CategoryIcon"

async function getCategories () {
    return await prisma.category.findMany()
}

export default async function OrderSidebar() {
    const categories = await getCategories()

    return (
    <>
        <aside className="orderSidebar-active md:w-72 md:h-screen bg-white overflow-hidden flex-">
            <div className="flex ml-3 mt-5 gap-3 items-center">
                <Image
                    height={50}
                    width={50}
                    src="/icons/categoria.png"
                    alt="Icono categorias"
                />
                <h2 className=" text-2xl font-black">Categorias</h2>
            </div>
            <nav className="mt-5 flex flex-col">
                {
                    categories.map(category => (<>
                        <CategoryIcon 
                            key={category.id}
                            category={category}
                        />
                    </>))
                }
            </nav>
        </aside>
    </>
    )
}


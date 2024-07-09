import { Category } from "@prisma/client"
import Image from "next/image"

type CategoryIconProps = {
    category : Category
}

export default function CategoryIcon({category} : CategoryIconProps) {
    return (
    <>
        <a href="" className={` flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b font-bold pl-3 text-xl`}>
            <Image 
            width={50}
            height={50}
            src={`/icons/${category.slug}.png`} 
            alt="Icono Categoria" />
            {category.name}
        </a>
    </>
    )
}

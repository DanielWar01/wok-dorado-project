import Image from "next/image"

export default function Admin() {
    return (
    <div>
        <div className="flex bg-neutral-800 gap-3 p-1 mb-4 rounded-sm items-center justify-evenly">
            <Image height={100} width={100} src="/menu.png" alt="logo menu"/>
            <h2 className="title-menu my-4 text-xl font-bold text-white">Administracion del Wok Dorado</h2>
        </div>
    </div>
    )
}

import Link from "next/link";

export default function ProductsPagination({page} : {page: number}) {
    return (
    <nav className="flex justify-center py-10 items-center gap-2">
        <Link className=" border-2 border-stone-800 p-3 rounded-l-xl font-black" href={`/admin/products?page=${page-1}`}>&laquo;</Link>
        <p className="font-bold">{page}</p>
        <Link className=" border-2 border-stone-800 p-3 rounded-r-xl font-black" href={`/admin/products?page=${page+1}`}>&raquo;</Link>
    </nav>
    )
}

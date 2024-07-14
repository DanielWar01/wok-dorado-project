import Link from "next/link"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type AdminRouteProps = {
    link : {
        url : string
        text : string
        blank : boolean
        icon : IconDefinition
    }
}

export default function AdminRoute({link} : AdminRouteProps) {
    return (
    <>
        <Link
            className="flex items-center gap-3 font-bold text-lg py-2 pl-3 border-t text-white border-gray-200 last-of-type:border-b duration-200 hover:text-yellow-600 relative link-admin"
            href={link.url}
        >
            <FontAwesomeIcon className="h-5" icon={link.icon}/>
            {link.text}
        </Link>
    </>
    )
}

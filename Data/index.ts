import { LinkType } from "@/Types"
import { faHome, faList, faCircleInfo } from "@fortawesome/free-solid-svg-icons"

export const linksHome : LinkType[] = [
    {
        name: "Home",
        path: "/",
        icon: faHome
    },
    {
        name: "Menu",
        path: "/order/rice",
        icon: faList
    },
    {
        name: "About",
        path: "/about",
        icon: faCircleInfo
    }
]
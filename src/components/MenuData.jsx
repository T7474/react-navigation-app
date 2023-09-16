import { FaHome,FaUserAlt,FaShoppingCart } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
const MenuData =[
    {
        title:"หน้าแรก",
        path:"/",
        icon:<FaHome/>
    },
    {
        title:"สมาชิก",
        path:"/member",
        icon:<FaUserAlt/>
    },
    {
        title:"สินค้า",
        path:"/product",
        icon:<FaShoppingCart/>
    },
    {
        title:"แดชบอร์ด",
        path:"/dashboard",
        icon:<MdDashboardCustomize/>
    },
]

export default MenuData
"use client";

import Link from "next/link";
import styles from "./navLinks.module.css"
import { usePathname } from "next/navigation";

const NavLink = ({item}) =>{

    const pathName = usePathname();

    return(
        <div className={styles.container}>
            <Link href= {item.path} className={`${styles.container} ${
                pathName === item.path && styles.active
            }`}>
                {item.title}
        </Link>
        </div>
        
    )
}

export default NavLink;
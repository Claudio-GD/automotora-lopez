"use client";
import Link from "next/link"
import styles from "./Header.module.css"
import { useState } from "react"
import Image from "next/image";
import menuOpenIcon from '../../../../public/images/icons/menu_FILL0_wght400_GRAD0_opsz24.svg'
import menuCloseIcon from '../../../../public/images/icons/close_FILL0_wght400_GRAD0_opsz24.svg'

const links = [
    {
        label: "Inicio",
        route: "/",
    },
    {
        label: "Autos",
        route: "/autos",
    },
    {
        label: "Camionetas",
        route: "/camionetas",
    },
    {
        label: "Suv",
        route: "/suv",
    },
    {
        label: "Contactenos",
        route: "/contactenos",
    },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleBtn = () => {
        setIsOpen(!isOpen)
    };

    return (
        <header>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <a href="#">Automotora López</a>
                </div>
                <ul className={styles.links}>
                    {links.map(({ label, route }) => (
                        <li key={route} className={styles.li}>
                            <Link href={route}>{label}</Link>
                        </li>
                    ))}
                </ul>
                <div className={styles.toggle_btn} onClick={toggleBtn}>
                    <Image src={isOpen ? menuCloseIcon : menuOpenIcon} alt="Menú" />
                </div>
            </div>

            <div className={`${styles.dropdown_menu} ${isOpen ? styles.open : ''}`}>
                <ul>
                {links.map(({ label, route }) => (
                    <li key={route}>
                        <Link href={route}>{label}</Link>
                    </li>
                ))}
                </ul>
            </div>
        </header>
    );
}

import Link from "next/link";
import styles from './Header.module.css'

const links = [{
    label: 'Inicio',
    route: '/'
}, {
    label: 'Autos',
    route: '/autos'
}, {
    label: 'Camionetas',
    route: '/camionetas'
}, {
    label: 'Suv',
    route: '/suv'
}, {
    label: 'Contactenos',
    route: '/contactenos'
  }]

export function Header() {
    return (
        <header className={styles.header}>
          <nav>
            <ul className={styles.navigation}>
              {links.map(({ label, route})=> (
                <li key={route}>
                  <Link href={route}>
                    {label}
                  </Link>
                </li>
              )
              )}
            </ul>
          </nav>
        </header>
    )
}
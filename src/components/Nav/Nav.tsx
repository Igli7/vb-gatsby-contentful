import React from "react"

import { Link } from "gatsby"

import * as styles from "./Nav.module.scss"

interface ILink {
  name: string
  link: string
}

interface INav {
  links: ILink
}

const Nav = ({ links }: INav) => {
  return (
    <nav>
      <ul className={styles.navList}>
        {links.map((link: ILink, i: number) => (
          <li key={i} className={styles.navListLink}>
            <Link className={styles.navListLink} to={link.link}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav

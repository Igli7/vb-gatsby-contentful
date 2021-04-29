import React from "react"

import { Link } from "gatsby"
import cn from "classnames"

import * as styles from "./Nav.module.scss"

interface ILink {
  name: string
  link: string
}

interface INav {
  links: ILink[]
  orientation?: "horizontal" | "vertical"
}

const Nav = ({ links, orientation }: INav) => {
  return (
    <nav className={cn({ [styles.navVertical]: orientation === "vertical" })}>
      <ul className={styles.navList}>
        {links &&
          links.map((link: ILink, i: number) => (
            <li key={i} className={styles.navListItem}>
              <Link
                className={styles.navListLink}
                to={link.link}
                activeClassName={styles.navListLinkActive}
                partiallyActive={true}
              >
                {link.name}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  )
}

export default Nav

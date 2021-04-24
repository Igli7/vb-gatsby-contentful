import React, { useState, useEffect } from "react"

import { useStaticQuery, graphql, Link } from "gatsby"
import { throttle } from "lodash"
import { useMediaQuery } from "react-responsive"
import cn from "classnames"

import Container from "../Container"
import Nav from "../Nav"

import * as styles from "./Header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulHeader {
        logo {
          file {
            url
          }
          title
        }
        logoLink
        links {
          name
          link
        }
      }
    }
  `)

  const pageData = data.contentfulHeader

  const {
    logo: { file, title },
    links,
    logoLink,
  } = pageData

  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [activeHeader, setActiveHeader] = useState(false)

  const isDesktopLg = useMediaQuery({ query: `(min-width: 1024px)` })

  useEffect(() => {
    const handleScroll = throttle(() => {
      setActiveHeader(window.pageYOffset > 70)
    }, 250)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [activeHeader])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (menuIsOpen) {
      document.body.classList.add("modal-open")
    } else {
      document.body.classList.remove("modal-open")
    }
  }, [menuIsOpen])

  useEffect(() => {
    if (isDesktopLg) {
      setMenuIsOpen(false)
    }
  }, [isDesktopLg])

  return (
    <header
      className={cn(styles.header, { [styles.activeHeader]: activeHeader })}
    >
      <Container className={styles.headerInner}>
        <Link to={logoLink}>
          <img src={file.url} alt={title} />
        </Link>
        <Nav links={links} />
      </Container>

      
    </header>
  )
}

export default Header

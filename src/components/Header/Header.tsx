import React, { useState, useEffect } from "react"

import { useStaticQuery, graphql, Link } from "gatsby"
import { throttle } from "lodash"
import { useMediaQuery } from "react-responsive"
import cn from "classnames"

import Container from "../Container"
import Nav from "../Nav"
import Icon from "../Icon"
import { DesktopUp, DesktopDown } from "../../ui/responsive"

import * as styles from "./Header.module.scss"
import Menu from "../Menu"

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

  const isDesktop = useMediaQuery({ query: `(min-width: 769px)` })

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
    if (isDesktop) {
      setMenuIsOpen(false)
    }
    setScrollbarWidth(window.innerWidth - document.body.offsetWidth)
  }, [isDesktop])

  const [scrollbarWidth, setScrollbarWidth] = useState(0)

  return (
    <header
      className={cn(styles.header, { [styles.activeHeader]: activeHeader })}
    >
      <Container className={styles.headerInner}>
        <Link to={logoLink}>
          <img src={file.url} alt={title} />
        </Link>

        {isDesktop && <Nav links={links} />}
        {!isDesktop && (
          <div>
            <button
              className={styles.headerToggle}
              onClick={() => setMenuIsOpen(!menuIsOpen)}
            >
              <Icon name="burger" fill="#fff" />
            </button>
          </div>
        )}

        {menuIsOpen && (
          <Menu closeModal={() => setMenuIsOpen(false)}>
            <div className={cn(styles.header, styles.headerMenu)}>
              <Container className={styles.headerToggleContainer}>
                <button
                  className={styles.headerToggle}
                  onClick={() => setMenuIsOpen(!menuIsOpen)}
                  style={{ marginRight: scrollbarWidth }}
                >
                  <Icon name="close" fill="#fff" />
                </button>
              </Container>
            </div>

            <Nav links={links} orientation="vertical" />
          </Menu>
        )}
      </Container>
    </header>
  )
}

export default Header

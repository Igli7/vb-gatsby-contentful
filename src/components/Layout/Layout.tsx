import React from "react"

import { Helmet } from "react-helmet"

import Footer from "../Footer/Footer"
import Header from "../Header/Header"

import * as styles from "./Layout.module.scss"

interface ILayout {
  children: React.ReactNode
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dwight Capital</title>
        <link rel="icon" href="your fav icon here" /> {/* To be changed*/}
      </Helmet>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

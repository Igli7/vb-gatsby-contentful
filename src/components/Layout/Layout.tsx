import React from "react"

import Footer from "../Footer/Footer"
import Header from "../Header/Header"

import * as styles from "./Layout.module.scss"

interface ILayout {
  children: React.ReactNode
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

import React from "react"

import Modal from "../Modal"

import * as styles from "./Menu.module.scss"

interface IMenu {
  children: React.ReactNode
  closeModal: () => void
}

const Menu = ({ children, closeModal }: IMenu) => {
  return (
    <Modal closeModal={closeModal} className={styles.menuModal}>
      <menu className={styles.menu}>{children}</menu>
    </Modal>
  )
}

export default Menu

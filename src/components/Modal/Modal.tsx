import React from "react"

import { createPortal } from "react-dom"
import cn from "classnames"

import * as styles from "./Modal.module.scss"

interface IModal {
  className?: string
  children: React.ReactNode
  closeModal: () => void
}

const Modal = ({ className, children, closeModal }: IModal) => {
  return createPortal(
    <div className={styles.modal}>
      <div
        className={styles.modalClose}
        onClick={closeModal}
        role="presentation"
        aria-label="Close Modal"
      ></div>
      <div className={cn(styles.modalInner, className)}>{children}</div>
    </div>,
    document.getElementById("modal-root")!
  )
}

export default Modal

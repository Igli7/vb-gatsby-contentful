import React from "react"

import cn from "classnames"

import * as styles from "./Container.module.scss"

interface IContainerProps {
  children: React.ReactNode
  className?: string
}

const Container = ({ children, className }: IContainerProps) => {
  return <div className={cn(styles.container, className)}>{children}</div>
}

export default Container

import React from "react"

import Burger from "./Burger"
import Close from "./Close"

export interface ICommonIconProps {
  style?: React.CSSProperties
  fill?: string
  className?: string
  viewBox?: string
  width?: string | number
  height?: string | number
}

export type IconName = "close" | "burger"

interface IIconProps extends ICommonIconProps {
  name: IconName
}

const Icon = (props: IIconProps): JSX.Element => {
  switch (props.name) {
    case "close":
      return <Close {...props} />
    case "burger":
      return <Burger {...props} />
    default:
      return <div />
  }
}

export default Icon

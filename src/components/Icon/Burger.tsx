import React from "react"

import { ICommonIconProps } from "."

type IBurgerProps = ICommonIconProps

const Burger = ({
  fill = "#000",
  width = "24px",
  height = "24px",
  className = "",
  viewBox = "0 0 24 24",
}: IBurgerProps): JSX.Element => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox={viewBox}
    fill="none"
  >
    <rect y="3" width="24" height="2" rx="1" fill={fill} />
    <rect y="11" width="24" height="2" rx="1" fill={fill} />
    <rect y="19" width="24" height="2" rx="1" fill={fill} />
  </svg>
)

export default Burger

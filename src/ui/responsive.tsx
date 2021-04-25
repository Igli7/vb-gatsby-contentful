import React from "react"
import PropTypes from "prop-types"
import MediaQuery from "react-responsive"

interface Iui {
  children: React.ReactNode
}

export const TabletDown = ({ children }: Iui) => (
  <MediaQuery maxWidth="479px">{children}</MediaQuery>
)

export const TabletUp = ({ children }: Iui) => (
  <MediaQuery minWidth="480px">{children}</MediaQuery>
)

export const TabletLgDown = ({ children }: Iui) => (
  <MediaQuery maxWidth="599px">{children}</MediaQuery>
)

export const TabletLgUp = ({ children }: Iui) => (
  <MediaQuery minWidth="600px">{children}</MediaQuery>
)

export const DesktopDown = ({ children }: Iui) => (
  <MediaQuery maxWidth="768px">{children}</MediaQuery>
)

export const DesktopUp = ({ children }: Iui) => (
  <MediaQuery minWidth="769px">{children}</MediaQuery>
)

export const DesktopLgDown = ({ children }: Iui) => (
  <MediaQuery maxWidth="1023px">{children}</MediaQuery>
)

export const DesktopLgUp = ({ children }: Iui) => (
  <MediaQuery minWidth="1024px">{children}</MediaQuery>
)

export const DesktopXLDown = ({ children }: Iui) => (
  <MediaQuery maxWidth="1199px">{children}</MediaQuery>
)

export const DesktopXLUp = ({ children }: Iui) => (
  <MediaQuery minWidth="1200px">{children}</MediaQuery>
)

TabletDown.propTypes = { children: PropTypes.node.isRequired }
TabletUp.propTypes = { children: PropTypes.node.isRequired }
TabletLgDown.propTypes = { children: PropTypes.node.isRequired }
TabletLgUp.propTypes = { children: PropTypes.node.isRequired }
DesktopDown.propTypes = { children: PropTypes.node.isRequired }
DesktopUp.propTypes = { children: PropTypes.node.isRequired }
DesktopLgDown.propTypes = { children: PropTypes.node.isRequired }
DesktopLgUp.propTypes = { children: PropTypes.node.isRequired }
DesktopXLDown.propTypes = { children: PropTypes.node.isRequired }
DesktopXLUp.propTypes = { children: PropTypes.node.isRequired }

import React from "react"
// import { Link } from "gatsby"
import MouseCursor from "./_sections/mouseCursor/MouseCursor"

const Layout = ({ children }) => (
  <div>
    <MouseCursor hover />
    {children}
  </div>
)

export default Layout

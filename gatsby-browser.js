/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

//

import React from "react"
// import CustomCursor from "custom-cursor-react"

import "./static/fonts/fonts.css"

// eslint-disable-next-line import/no-unresolved
import MouseCursor from "./src/components/_sections/mouseCursor/MouseCursor"
// const CustomCursor = require("custom-cursor-react")

import Layout from "./src/components/layout/index"

// import "custom-cursor-react/dist/index.css"

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line react/prop-types
/*
exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
*/

// eslint-disable-next-line import/prefer-default-export
export const wrapPageElement = ({ props, element }) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Layout {...props}>{element}</Layout>
  )
}

export const onRouteUpdate = ({ location }) => {
  // console.warn(location.pathname) // this works
}
// You can delete this file if you're not using it

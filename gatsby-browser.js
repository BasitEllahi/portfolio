/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const React = require("react")
const Layout = require("./src/components/layout/index").default

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line react/prop-types
exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

// You can delete this file if you're not using it

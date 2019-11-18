/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable func-names */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-rest-params */
import PropTypes from "prop-types"
import React, { PureComponent } from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { colors } from "../../style-utils"

import Cursor from "../_sections/home/Cursor"

import "./reset.scss"

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0;
  position: relative;
  background-color: ${colors.customWhite};
  overflow-x: hidden;
`

export default class Layout extends PureComponent {
  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  printLayout = data => {
    const { children } = this.props

    return (
      <div>
        <Helmet title={data.site.siteMetadata.title}>
          <html lang="nl" />
          <meta name="viewport" content="width=device-width" />
        </Helmet>
        <Cursor />
        <Wrapper>{children}</Wrapper>
      </div>
    )
  }

  render = () => (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={this.printLayout}
    />
  )
}

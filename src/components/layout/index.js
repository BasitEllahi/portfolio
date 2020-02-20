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
import { colors, media } from "../../style-utils"

import Cursor from "../_sections/home/Cursor"

import "./reset.scss"

const Container = styled.div`
  position: relative;
`
const CursorSection = styled(Cursor)`
  display: none;

  ${media.tablet`
    display: flex;
  `};
`

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
      <Container>
        <Helmet title={data.site.siteMetadata.title}>
          <html lang="nl" />
          <meta name="viewport" content="width=device-width" />
          <link
            rel="stylesheet"
            href="https://unpkg.com/kursor/dist/kursor.css"
          />
        </Helmet>
        <CursorSection />
        <Wrapper>{children}</Wrapper>
      </Container>
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

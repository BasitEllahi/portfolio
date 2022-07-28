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

import MouseCursor from "../_sections/mouseCursor/MouseCursor"

import "./reset.scss"

const Container = styled.div`
  position: relative;
  width: 100vw;
`

/*
const CursorSection = styled(Cursor)`s
  display: none;

  ${media.tablet`
    display: flex;
  `};
`
*/

const Wrapper = styled.div`
  width: 100vw;
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
    const { children, location } = this.props

    return (
      <Container>
        <Helmet title={data.site.siteMetadata.title}>
          <html lang="nl" />
          <meta name="viewport" content="width=device-width" />
          <meta name="description" content="Basit Ellahi portfolio" />
        </Helmet>
        {/* <CursorSection /> */}
        {/* <MouseCursor hover={true} location={location} /> */}
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

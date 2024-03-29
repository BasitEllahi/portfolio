import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { fonts, media } from "../../style-utils"

import "./hamburger.scss"

const Container = styled.nav`
  display: none;
  ${media.tablet`
    z-index: 1; 
    display: inline-block;
    width: auto;
    height: auto;
    position: static;
    bottom: auto;
    left: auto;
    justify-content: flex-end;
    box-shadow: none;
    background-color: transparent;
  `};
`
const Menu = styled.div`
  display: flex;
`

const HamburgerMenu = styled.nav`
  display: flex;
  z-index: 107;
  ${media.tablet`
    display: none;
  `};
`

const Links = styled(AniLink)`
  position: relative;
  display: block;
  box-sizing: border-box;
  flex-grow: 1;
  text-align: center;
  color: black;
  text-decoration: none;
  padding: 20px 10px;
  font-weight: 700;
  font-size: 0.7rem;
  font-family: ${fonts.avenir};
  border-bottom: 1px solid transparent;
  background: white;
  transition: all 0.3s;

  & > span {
    position: relative;
  }
  &:hover,
  &:active {
    user-select: none;
    color: #336af3;
    ${media.tablet`
      color: white;
    `};
  }
  &:active {
    padding-top: 6px;
    ${media.desktop`
      padding-top: 0;
    `};
  }
  ${media.phoneXL`
    font-size: 0.8rem;
  `};
  ${media.tablet`
    color: black;
  `};
  ${media.tablet`
    font-size: 0.8rem;
    display: inline-block;
    flex-grow: unset;
    background: transparent;
    padding: 0px;
    margin-left: 0vw;
    margin-right: 3vw;
    &:first-child {
      margin-left: 0;
    }
  `};
`
const BurgerLinks = styled(AniLink)`
  position: relative;
  display: block;
  box-sizing: border-box;
  flex-grow: 1;
  text-align: center;
  color: white;
  text-decoration: none;
  padding: 20px 10px;
  font-weight: 700;
  font-size: 1.7rem;
  font-family: ${fonts.avenir};
  transition: all 0.3s;

  & > span {
    position: relative;
  }
  &:hover,
  &:active {
    user-select: none;
    color: white;
    ${media.tablet`
      color: white;
    `};
  }
  &:active {
    ${media.desktop`
      padding-top: 0;
    `};
  }
`
const ALink = styled(Link)`
  position: relative;
  display: block;
  box-sizing: border-box;
  flex-grow: 1;
  text-align: center;
  color: black;
  text-decoration: none;
  padding: 20px 10px;
  font-weight: 700;
  font-size: 0.7rem;
  font-family: ${fonts.avenir};
  border-bottom: 1px solid transparent;
  background: white;
  transition: all 0.3s;

  & > span {
    position: relative;
  }
  &:hover,
  &:active {
    user-select: none;
    color: #336af3;
    ${media.tablet`
      color: white;
    `};
  }
  &:active {
    padding-top: 6px;
    ${media.desktop`
      padding-top: 0;
    `};
  }
  ${media.phoneXL`
    font-size: 0.8rem;
  `};
  ${media.tablet`
    color: black;
  `};
  ${media.tablet`
    font-size: 0.8rem;
    display: inline-block;
    flex-grow: unset;
    background: transparent;
    padding: 0px;
    margin-left: 0vw;
    margin-right: 3vw;
    &:first-child {
      margin-left: 0;
    }
  `};
`

const BLink = styled(Link)`
  position: relative;
  display: block;
  box-sizing: border-box;
  flex-grow: 1;
  text-align: center;
  color: white;
  text-decoration: none;
  padding: 20px 10px;
  font-weight: 700;
  font-size: 1.7rem;
  font-family: ${fonts.avenir};
  transition: all 0.3s;

  & > span {
    position: relative;
  }
  &:hover,
  &:active {
    user-select: none;
    color: white;
    ${media.tablet`
      color: white;
    `};
  }
  &:active {
    ${media.desktop`
      padding-top: 0;
    `};
  }
`

const MenuBottom = () => (
  <Menu>
    <HamburgerMenu>
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span />
          <span />
          <span />
          <ul id="menu">
            <BLink to="/">Home</BLink>
            <BurgerLinks
              paintDrip
              to="/work"
              hex="#F9DD51"
              activeStyle={{ color: "#262626" }}
            >
              Work
            </BurgerLinks>
            <BurgerLinks
              to="/about"
              paintDrip
              hex="#F9DD51"
              activeStyle={{ color: "#262626" }}
            >
              About
            </BurgerLinks>
          </ul>
        </div>
      </nav>
    </HamburgerMenu>
    <Container>
      <ALink to="/">
        Home
      </ALink>
      <Links
        paintDrip
        to="/work"
        hex="#F9DD51"
        activeStyle={{ color: "#336AF3" }}
      >
        Work
      </Links>
      <Links
        paintDrip
        to="/about"
        hex="#F9DD51"
        activeStyle={{ color: "#336AF3" }}
      >
        About
      </Links>
    </Container>
  </Menu>
)

export default MenuBottom

import { Link } from "gatsby"
import React, { Component } from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { colors, fonts, media } from "../../style-utils"

const Container = styled.nav`
  display: flex;
  justify-content: center;
  background-color: ${colors.customWhite};
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: 0px 0px 11px 0px #0000003d;
  z-index: 10;
  ${media.tablet`
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
  `};  color: black;
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

const MenuBottom = () => (
  <Container>
    <Links paintDrip to="/work" hex="#336AF3">
      Work
    </Links>
    <Links to="/contact">About</Links>
    <Links to="/team">Contact</Links>
  </Container>
)

export default MenuBottom

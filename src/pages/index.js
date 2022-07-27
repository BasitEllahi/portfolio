import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"

import SectionHome from "../components/_sections/home/SectionHome"
import Animation from "../components/_sections/home/Container"

import MouseCursor from "../components/_sections/mouseCursor/MouseCursor"

import { media } from "../style-utils"


const Container = styled.div`
  position: relative;
  min-height: 100%;

  ${media.tablet`
    min-height: 100%;
  `};

  ${media.desktop`
    min-height: 100%;
    height: 100vh;
  `};
`

const IndexPage = () => (
  <Container>
    <MouseCursor />
    <Header />
    <SectionHome />
    <Footer />
    <Animation time={1.6} color="#262626" delay={1} />
    <Animation time={1.3} color="#336AF3" delay={1} />
  </Container>
)

export default IndexPage
//  <Animation time={1.6} color="#336AF3" />

import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"

import AboutPage from "../components/_sections/about/About"
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

const About = () => (
  <Container>
    <Animation time={1} color="#336AF3" delay={0.3} />
    <MouseCursor hover={true} />
    <Header />
    <AboutPage />
    <Footer />
  </Container>
)

export default About

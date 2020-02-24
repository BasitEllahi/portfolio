import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"

import AboutPage from "../components/_sections/about/About"

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
    <Header />
    <AboutPage />
    <Footer />
  </Container>
)

export default About

import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"

import SectionHome from "../components/_sections/home/SectionHome"
import Animation from "../components/_sections/home/Container"

import { media } from "../style-utils"

const Container = styled.div`
  position: relative;
  height: 100vh;

  ${media.tablet`
    height: 100%;
  `};

  ${media.desktop`
    height: 100vh;
  `};
`

const IndexPage = () => (
  <Container>
    <Header />
    <SectionHome />
    <Footer />
    <Animation time={1.9} color="#FFDC21" />
    <Animation time={1.6} color="#336AF3" />
  </Container>
)

export default IndexPage

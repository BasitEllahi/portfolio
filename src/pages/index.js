import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"

import SectionHome from "../components/_sections/home/SectionHome"
import Animation from "../components/_sections/home/Container"

const Container = styled.div`
  position: relative;
`

const IndexPage = () => (
  <Container>
    <Header />
    <SectionHome />
    <Footer />
    <Animation />
  </Container>
)

export default IndexPage

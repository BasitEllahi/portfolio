import React from "react"
import { Link } from "gatsby"

import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"
import SectionHome from "../components/_sections/home/SectionHome"

const IndexPage = () => (
  <div>
    <Header />
    <SectionHome />
    <Footer />
  </div>
)

export default IndexPage

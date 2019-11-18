import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"
import Slider from "../components/_sections/workSlider/Slider"
import Projects from "../components/_sections/projects/Projects"

import project from "../assets/dekruen.png"

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0;
  position: relative;
  background-color: black;
  padding: 2rem;
  padding-bottom: 0;
  height: 100%;
`
const slideData = [
  {
    index: 0,
    headline: "De Kreun",
    button: "Shop now",
    src: project,
  },
  {
    index: 1,
    headline: "In The Wilderness",
    button: "Book travel",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg",
  },
  {
    index: 2,
    headline: "For Your Current Mood",
    button: "Listen",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg",
  },
  {
    index: 3,
    headline: "Focus On The Writing",
    button: "Get Focused",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg",
  },
  {
    index: 4,
    headline: "Focus On The Writing",
    button: "Get Focused",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg",
  },
]

const SecondPage = () => (
  <div>
    <Header />
    <Wrapper>
      <Slider heading="Example Slider" slides={slideData} />
    </Wrapper>
    <Projects />
    <Footer />
  </div>
)

export default SecondPage

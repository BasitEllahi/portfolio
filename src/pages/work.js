import React from "react"
import styled, { keyframes } from "styled-components"
import { graphql } from "gatsby"
import get from "lodash/get"
// import Img from "gatsby-image"
import { slideOutLeft } from "react-animations"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { colors, fonts, media } from "../style-utils"

import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"
import Slider from "../components/_sections/workSlider/Slider"

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0;
  position: relative;
  background-color: black;
  padding: 2rem;
  padding-bottom: 0;
  height: 100%;
  @media (prefers-color-scheme: dark) {
    body {
      background-color: black;
      color: white;
    }
  }
`
const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 4rem;
  justify-content: center;
  align-items: center;
`

const ProjectBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  justify-content: center;
  transition: transform 0.3s;
  will-change: transform;
  ${media.desktop`
    justify-content: center;
  `};
`
const scale = keyframes`
  0% {
    background-color: ${colors.customWhite};
    transform: scale(1);
  }
  60% {
    transform: scale(22.9);
  }
  80% {
    transform: scale(22.1);
  }
  100% {
    transform: scale(22.1);
  }
`
const scaleBack = keyframes`
  100% {
    background-color: ${colors.customWhite};
    transform: scale(1);
  }
  80% {
    transform: scale(1);
  }
  60% {
    transform: scale(1);
  }
  0% {
    transform: scale(22.1);
  }
`

const stroke = keyframes`
  from {
      stroke-dashoffset: 1000;
  }
  to {
      stroke-dashoffset: 0;
  }
`

const Project = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  position: relative;
  justify-self: center;

  :hover {
    div {
      > div {
        animation: 0.5s ${scale} cubic-bezier(0.51, 0.05, 0.38, 1.01) forwards;
        opacity: 0.7;
      }

      > img {
        filter: grayscale(0);
      }
      > svg {
        & .stroke-1 {
          animation: 1.7s ${stroke} cubic-bezier(0.51, 0.05, 0.38, 1.01) forwards;
          animation-fill-mode: forwards;
          animation-delay: 0.1s;
        }

        & .stroke-2 {
          animation: 1.9s ${stroke} cubic-bezier(0.51, 0.05, 0.38, 1.01) forwards;
          animation-fill-mode: forwards;
          animation-delay: 0.1s;
        }
      }
      > span {
        opacity: 1;
      }
    }
  }
`
const ProjectBack = styled.div`
  display: flex;
  flex-direction: column;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: #176bfc;
  position: absolute;
  bottom: 50%;
  left: 5%;
  right: 50%;
  top: 84%;
  z-index: 1;
  transition: all 600ms ease;
  animation: 0.8s ${scaleBack} cubic-bezier(0.51, 0.05, 0.38, 1.01) forwards;
  :hover {
  }
`
const Arrow = styled.svg`
  display: flex;
  flex-direction: column;
  width: 3rem;
  height: 3rem;
  position: absolute;
  left: 5rem;
  bottom: 2rem;
  z-index: 1;
  fill: none;
  transition: all 600ms ease;
  & .stroke-1 {
    stroke-dashoffset: 1000;
    stroke-dasharray: 1000;
    fill: none;
    stroke: white;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3px;
  }

  & .stroke-2 {
    stroke-dashoffset: 1000;
    stroke-dasharray: 1000;
    fill: none;
    stroke: white;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3px;
  }
  :hover {
  }
`

const ImgBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  max-height: 25rem;
  margin-bottom: 1rem;
  position: relative;
  overflow: hidden;
  background-color: ${colors.lightGrey};
  & :after {
    display: flex;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: green;
  }
`

const Image = styled.img`
  max-width: 15rem;
  max-height: 25rem;
  object-fit: cover;
  z-index: 0;
  transition: all 600ms ease;
  filter: grayscale(1);

  ${media.phoneXL`
    max-width: 17rem;
  `};

  ${media.phablet`
    max-width: 20rem;
  `};
`

const Title = styled(AniLink)`
  color: white;
  font-size: 2rem;
  margin-top: 0.5rem;
  line-height: 1;
  font-family: bebas;
  font-weight: 200;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  position: absolute;
  z-index: 2;

  text-shadow: 0px 1px 4px rgba(150, 150, 150, 0.36);
  background-color: #eb4fb3;
  padding: 0.5rem;
  left: -1rem;
  top: 3rem;
  ${media.phablet`
    font-size: 3rem;
    left: -3rem;
    top: 3rem;
    padding: 1rem;
  `};
`

const BackgroundTitle = styled.span`
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  color: none;
  -webkit-text-stroke: 1px black;
  font-size: 1.5rem;
  margin-top: 0.5rem;
  line-height: 1;
  font-family: Black;
  font-weight: 200;
  text-align: center;
  -webkit-text-decoration: none;
  -webkit-text-decoration: none;
  text-decoration: none;
  position: absolute;
  z-index: -1;
  padding: 1rem;
  width: 100%;
  left: 6rem;
  top: -3rem;

  ${media.phablet`
    font-size: 3rem;
    left: 8rem;
    top: 0;
  `};

  ${media.tablet`
    left: -10rem;
    font-size: 6rem;
    width: 41rem;
    text-align: center;
    top: -3rem;
  }

  `};
`

const UnderTitle = styled.span`
  color: #2d2d2d;
  font-size: 0.6rem;
  line-height: 1;
  font-family: ${fonts.helvetica};
  font-weight: 200;
  text-align: left;
  margin-bottom: 0.3rem;
`

const SvgTitle = styled.span`
  position: absolute;
  left: 1.5rem;
  bottom: 2.8rem;
  font-size: 0.8rem;
  font-family: bebas;
  color: white;
  z-index: 3;
  opacity: 0;
  transition: 0.3s;
`

const slideData = [
  {
    index: 0,
    headline: "De Kreun",
    button: "Shop now",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg",
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

const SecondPage = props => {
  const projects = get(props, "data.allContentfulProject.edges", [])

  console.warn(projects)

  return (
    <div>
      <Header />
      <Wrapper>
        <Slider heading="Example Slider" slides={slideData} />
      </Wrapper>
      <MainSection>
        <ProjectBox>
          {projects.map(({ node: detail }) => {
            if (!detail) return null

            return (
              <Project key={detail.id}>
                <UnderTitle>{detail.role}</UnderTitle>
                <ImgBox>
                  <Image src={detail.cover.fluid.src} alt="de kreun" />
                  <SvgTitle x={0} y={0}>
                    Check case
                  </SvgTitle>
                  <ProjectBack />
                  <Arrow viewBox="0 0 72 35" width="4rem" height="4rem">
                    <path
                      className="stroke-1"
                      d="M7.5 16.5h41"
                      id="arrow_svg__line"
                    />
                    <path
                      className="stroke-2"
                      d="M47.81 4.81l15 11.59a.61.61 0 010 .82l-15 11.59"
                      id="arrow_svg__line2"
                    />
                  </Arrow>
                </ImgBox>
                <Title
                  paintDrip
                  to={`/post/${detail.slug}`}
                  duration={1}
                  hex="#176bfc"
                  direction="up"
                >
                  {detail.name}
                </Title>
                <BackgroundTitle>{detail.name}</BackgroundTitle>
              </Project>
            )
          })}
        </ProjectBox>
      </MainSection>
      <Footer />
    </div>
  )
}

export default SecondPage

export const query = graphql`
  query GetWorks {
    allContentfulProject(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          id
          slug
          role
          name
          number
          body {
            body
          }
          cover {
            fluid {
              src
            }
          }
          photos {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          video
        }
      }
    }
  }
`

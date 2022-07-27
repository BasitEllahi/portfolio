import React, { useEffect, useRef } from "react"
import styled, { keyframes } from "styled-components"
import { graphql } from "gatsby"
import get from "lodash/get"
import { TimelineLite, Power3 } from "gsap"
import { slideOutLeft } from "react-animations"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { colors, fonts, media } from "../style-utils"

import Animation from "../components/_sections/home/Container"
import MouseCursor from "../components/_sections/mouseCursor/MouseCursor"

import "../components/utils/text.scss"
import "../templates/project.scss"

import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"
// import Slider from "../components/_sections/workSlider/Slider"

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0;
  position: relative;
  padding: 0.5rem;
  padding-bottom: 0;
  height: 100%;
  width: 95%;
  ${media.tablet`
    width: 80%;
    padding: 2rem;
  `};
`
const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 4rem;
  justify-content: center;
  align-items: center;
  background-color: #176bfc;
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
    .ImgBox {
      transform: scale(0.9);
    }
    div {
      > div {
        animation: 0.5s ${scale} cubic-bezier(0.51, 0.05, 0.38, 1.01) forwards;
        opacity: 1;
      }

      > img {
        filter: grayscale(1);
      }
      > svg {
        & .stroke-1 {
          animation: 1.7s ${stroke} cubic-bezier(0.51, 0.05, 0.38, 1.01)
            forwards;
          animation-fill-mode: forwards;
          animation-delay: 0.1s;
        }

        & .stroke-2 {
          animation: 1.9s ${stroke} cubic-bezier(0.51, 0.05, 0.38, 1.01)
            forwards;
          animation-fill-mode: forwards;
          animation-delay: 0.1s;
        }
      }
      a {
        opacity: 1;
      }
      .maskt-title {
        transform: scale(1.1);
      }
    }
  }
`
const ProjectBack = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #2d2d2d;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
  transition: all 600ms ease;
  animation: 0.8s ${scaleBack} cubic-bezier(0.51, 0.05, 0.38, 1.01) forwards;
  :hover {
  }
`
const Arrow = styled.svg`
  display: flex;
  flex-direction: column;
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  left: 5rem;
  bottom: 1.2rem;
  z-index: 1;
  fill: none;
  transition: all 600ms ease;
  & .stroke-1 {
    stroke-dashoffset: 1000;
    stroke-dasharray: 1000;
    fill: none;
    stroke: black;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3px;
  }

  & .stroke-2 {
    stroke-dashoffset: 1000;
    stroke-dasharray: 1000;
    fill: none;
    stroke: black;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3px;
  }
  :hover {
    stroke: #eb4fb3;
  }
`

const ImgBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  max-height: 15rem;
  margin-bottom: 1rem;
  position: relative;
  overflow: hidden;
  background-color: ${colors.lightGrey};
  transition: all 400ms ease;
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

  ${media.phoneXL`
    max-width: 17rem;
  `};

  ${media.phablet`
    max-width: 20rem;
  `};
`

const Title = styled.span`
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
    font-size: 2rem;
    left: 18rem;
    top: 1rem;
    padding: 0.8rem;
  `};
`

const BackgroundTitle = styled.span`
  font-size: 1.5rem;
  margin-top: 0.5rem;
  line-height: 1;
  color: white;
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
  left: 3rem;
  top: -1rem;
  transition: all 0.3s ease;

  ${media.phablet`
    font-size: 3rem;
    left: -4rem;
    top: 4rem;
    width: 21rem;
  `};

  ${media.tablet`
    left: -21rem;
    font-size: 6rem;
    width: 61rem;
    text-align: center;
    top: 4rem;
  }

`};
`
const TitleSecond = styled(BackgroundTitle)`
  z-index: 2;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  color: none;
  -webkit-text-stroke: 1px white;
`

const UnderTitle = styled.span`
  color: white;
  font-size: 0.6rem;
  line-height: 1;
  font-family: ${fonts.Montserrat};
  font-weight: 200;
  text-align: left;
  margin-bottom: 0.3rem;
`

const SvgTitle = styled(AniLink)`
  position: absolute;
  left: 1.5rem;
  bottom: 1.2rem;
  font-size: 0.8rem;
  font-family: ${fonts.bebas};
  text-decoration: none;
  background-color: white;
  border: solid 1px black;
  width: 4rem;
  padding: 0.2rem;
  color: #262626;
  z-index: 3;
  opacity: 0;
  transition: 0.3s;
  text-align: center;
  :hover {
    color: #eb4fb3;
  }
`
const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  font-size: 1rem;
  justify-content: space-between;
  & h1 {
    margin-bottom: 0px !important;
  }

  & p {
    margin-bottom: 10px !important;
  }
  ${media.tablet`
    margin-bottom: 2rem;
    flex-direction: row;
    justify-content: space-between;
    & h1 {
      margin-bottom: 24px;
    }
  `};
`
const InfoTitle = styled.div`
  color: black;
  font-weight: bold;
  font-size: 2rem;
  line-height: 1;
  font-family: ${fonts.Montserrat};
  display: flex;
  jusfity-content: right;

  ${media.tablet`
    font-size: 3rem;
  `};

  & span {
    color: ${colors.main};
    margin-right: 0.5rem;
  }
`
const Description = styled.p`
  color: ${colors.darkGrey};
  font-size: 0.8rem;
  line-height: 1.2;
  font-family: ${fonts.helvetica};
  font-weight: 200;
  margin-top: 0.5rem;
  width: 100%;
  ${media.tablet`
    width: 90%;
  `};
  ${media.desktop`
    width: 60%;
  `};
`
/*
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
*/

const SecondPage = props => {
  const projects = get(props, "data.allContentfulProject.edges", [])

  let content = useRef(null)

  const tl = new TimelineLite({ delay: 0.8 })

  useEffect(() => {
    // content vars
    const headlineFirst = content.children[0].children[0]
    const contentP = content.children[1]
    // Content Animation

    tl.staggerTo(
      [headlineFirst.children],
      1,
      {
        y: 0,
        ease: Power3.easeOut,
      },
      0.15,
      "Start"
    ).to(contentP, 1, { y: 0, opacity: 1, ease: Power3.easeOut }, 0.4)
  }, [tl])

  return (
    <div>
      <MouseCursor hover={true} />
      <Animation time={1} color="#EB4FB3" delay={0.3} />
      <Header />
      <Wrapper>
        <InfoBox>
          <div className="hero-content-inner" ref={el => (content = el)}>
            <h1>
              <div className="hero-content-line-work">
                <InfoTitle className="hero-content-line-inner-work">
                  Projects
                </InfoTitle>
              </div>
            </h1>
            <Description>
              All my passion and client work down below. Ranging from motion to
              design and development.
            </Description>
          </div>
        </InfoBox>
      </Wrapper>
      <MainSection>
        <ProjectBox>
          {projects.map(({ node: detail }, i) => {
            if (!detail) return null

            return (
              <Project key={detail.id}>
                <UnderTitle>{detail.role}</UnderTitle>
                <ImgBox className="ImgBox">
                  <Image
                    src={detail.cover.localFile.childImageSharp.fluid.src}
                    alt="de kreun"
                  />
                  <SvgTitle
                    x={0}
                    y={0}
                    paintDrip
                    to={`/post/${detail.slug}`}
                    duration={1}
                    hex="#EB4FB3"
                    direction="up"
                  >
                    Check case
                  </SvgTitle>
                  <ProjectBack />
                </ImgBox>
                <Title>
0
{i + 1}
                </Title>
                <div>
                  <BackgroundTitle className="maskt-title">
                    {detail.name}
                  </BackgroundTitle>
                  <TitleSecond className="maskt-title">
                    {detail.name}
                  </TitleSecond>
                </div>
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
            localFile {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
          photos {
            localFile {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
          video
        }
      }
    }
  }
`
/*
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
                  */

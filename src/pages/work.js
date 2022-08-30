/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useRef, useState } from "react"
import styled, { keyframes } from "styled-components"
import { graphql } from "gatsby"
import get from "lodash/get"
import { TimelineLite, Power3 } from "gsap"
import { slideOutLeft } from "react-animations"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { colors, fonts, media } from "../style-utils"

import Animation from "../components/_sections/home/Container"
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
  max-width: 1400px;
  ${media.tablet`
    width: 100%;
  `};
`
const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 4rem;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
`
const FilterSection = styled.div`
  background-color: #f8f8f8;
  padding: 1rem;
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid grey;
  ${media.tablet`
    padding: 2rem;
  `};
  & div {
    max-width: 1400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: baseline;
    ${media.tablet`
      flex-direction: row;
      justify-content: space-between;
      align-items: baseline;
    `};
  }
`
const FilterList = styled.ul`
  color: black;
  font-weight: 400;
  text-decoration: none;
  list-style: none;
  font-size: 1.2rem;
  line-height: 1;
  font-family: ${fonts.Montserrat};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: unset;
  margin: 0;
  ${media.tablet`
    font-size: 1.4rem;
  `};

  & li {
    margin-right: 1rem;
    transition: 0.3s;
    font-size: 1rem;

    &:hover {
      color: #d95aaf;
    }
  }

  & span {
    color: ${colors.main};
    margin-right: 0.5rem;
  }
`

const LiButton = styled.li`
  color: ${props => (props.active ? "#eb4fb3" : "black")};
`

const ProjectBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  transition: transform 0.3s;
  will-change: transform;
  max-width: 1400px;
  padding: 2rem;
  ${media.desktop`
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
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
  width: 75%;
  max-height: 25rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  position: relative;
  justify-self: center;
  ${media.tablet`
    width: 45%;
  `};
  ${media.desktop`
    max-height: unset;
    height: 25rem;
    width: 25rem;
  `};
  ${media.midDesktop`
    max-height: unset;
    height: 25rem;
    width: 25rem;
  `};

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
  max-height: 100%;
  margin-bottom: 1rem;
  position: relative;
  overflow: hidden;
  background-color: ${colors.lightGrey};
  transition: all 400ms ease;
  border: 1px solid grey;
  & :after {
    display: flex;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: green;
  }
`

const Image = styled.img`
  object-fit: cover;
  z-index: 0;
  transition: all 600ms ease;
  width: 100%;

  ${media.phoneXL`

  `};

  ${media.phablet`
  `};
`

const Title = styled.span`
  color: white;
  font-size: 2rem;
  margin-top: 0.5rem;
  line-height: 1;
  font-family: bebas;
  font-weight: 200;
  -webkit-text-decoration: none;
  text-decoration: none;
  position: absolute;
  z-index: -1;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  color: none;
  -webkit-text-stroke: 1px black;
  /*text-shadow: 0px 1px 4px rgba(150, 150, 150, 0.36);*/
  padding: 0.5rem;
  right: 0;
  top: 3rem;
  display: flex;
  width: auto;
  opacity: 0.1;

  ${media.phablet`
    font-size: 7rem;
    right: 0rem;
    top: -5rem;
    padding: 0.8rem;
  `};
`

const BackgroundTitle = styled.span`
  font-size: 1.5rem;
  margin-top: 0.5rem;
  line-height: 1;
  color: black;
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
    font-size: 3rem;
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
  -webkit-text-stroke: 1px black;
`

const UnderTitle = styled.span`
  color: black;
  font-size: 0.6rem;
  line-height: 1;
  font-family: ${fonts.Montserrat};
  font-weight: 200;
  text-align: left;
  margin-bottom: 0.3rem;
`

const SvgTitle = styled(AniLink)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  bottom: 0;
  font-size: 2rem;
  font-family: ${fonts.bebas};
  text-decoration: none;
  width: 100%;
  height: 100%;
  padding: 0.2rem;
  color: #eb4fb3;
  z-index: 3;
  opacity: 0;
  transition: 0.3s;
  text-align: center;
  :hover {
    color: white;
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

const InfoTitleSmall = styled.span`
  color: black;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1;
  font-family: ${fonts.Montserrat};
  display: flex;
  jusfity-content: right;

  ${media.tablet`
    font-size: 2rem;
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

const SecondPage = props => {
  const [tag, setCount] = useState("All")
  const projects = get(props, "data.allContentfulProject.edges", [])

  let content = useRef(null)

  let speed = 0

  let position = 0

  let rounded = 0

  const tl = new TimelineLite({ delay: 0.8 })

  useEffect(() => {
    // content vars
    const headlineFirst = content.children[0].children[0]
    const contentP = content.children[1]
    // Content Animation
    const scroll = e => {
      speed += e.deltaY * 0.0002
      // console.warn(speed)
    }

    const raf = () => {
      position += speed
      speed *= 0.8
      rounded = Math.round(position)
      const diff = rounded - position

      position += Math.sign(diff) * Math.pow(Math.abs(diff), 0.7) * 0.015
      window.requestAnimationFrame(raf)
    }

    raf()

    window.addEventListener("wheel", scroll)

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

    return () => {
      window.removeEventListener("wheel", scroll)
    }
  }, [tl])

  const ShowArticles = () => {
    const projectsFilter = get(props, "data.allContentfulProject.edges", [])
    const AllArticles = projectsFilter.filter(object => {
      console.warn(object)

      return object.node.tag === tag
    })

    /* const articles = AllArticles.filter(articleObject => {
      if (articleObject.categoriesServices[0]) {
        return articleObject.categoriesServices.find(tagObject => {
          return tagObject.title === tag
        })
      }

      return null
    }) */

    if (AllArticles.length < 1) {
      return projectsFilter
    }

    return AllArticles
  }

  return (
    <div>
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
      <FilterSection>
        <div>
          <h3>
            <div className="hero-content-line-work">
              <InfoTitleSmall className="hero-content-line-inner-work">
                Our work
              </InfoTitleSmall>
            </div>
          </h3>
          <FilterList>
            <LiButton
              onClick={() => setCount("All")}
              active={tag === "All" && true}
            >
              All
            </LiButton>
            <LiButton
              onClick={() => setCount("development")}
              active={tag === "development"}
            >
              Website
            </LiButton>
            <LiButton
              onClick={() => setCount("design")}
              active={tag === "design"}
            >
              Design
            </LiButton>
            <LiButton
              onClick={() => setCount("motion")}
              active={tag === "motion"}
            >
              Animation
            </LiButton>
          </FilterList>
        </div>
      </FilterSection>
      <MainSection>
        <ProjectBox>
          {}
          {ShowArticles().map(({ node: detail }, i) => {
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
                  {i < 9 && "0"}
                  {i + 1}
                </Title>
                <div>
                  {/*
                  <BackgroundTitle className="maskt-title">
                    {detail.name}
                  </BackgroundTitle>
                  <TitleSecond className="maskt-title">
                    {detail.name}
                  </TitleSecond>
                */}
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
          tag
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

import React, { useEffect, useRef } from "react"
import { TimelineLite, Power3, Power4 } from "gsap"
import styled, { keyframes } from "styled-components"
import Fade from "react-reveal/Fade"
import { fadeInRight, slideOutLeft } from "react-animations"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { colors, fonts, media } from "../../../style-utils"
import "./link.scss"

import Svg from "./SvgAnimation"
// import SvgRect from "./SvgAnimationRect"

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-height: calc(100vh - 10rem);
  ${media.tablet`
    height: 80%;
  `};
  ${media.desktop`
    flex-direction: row;
    height: 80%;
  `};
`

const Topsection = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  top: 0;
  position: absolute;
  background-color: white;
  opacity: 0.9;
  animation: 1s ${keyframes`${slideOutLeft}`}
    cubic-bezier(0.51, 0.05, 0.38, 1.01);
  animation-fill-mode: forwards;
`

const scale = keyframes`
  0% {
    width: 0;
    background-color: ${colors.customWhite};
  }
  60% {
    width: 0.5rem;
    transform: scale(1);
  }
  100% {
    transform: scale(0.7);
    width: 0.5rem;
    background-color: black;
  }
`

const Line = styled.div`
  height: 80%;
  position: absolute;
  display: none;
  background-color: black;
  padding: 0;
  animation: 1s ${scale} cubic-bezier(0.51, 0.05, 0.38, 1.01);
  animation-fill-mode: forwards;
  animation-delay: 1.2s;
  z-index: 5;
  ${media.desktop`
    display: flex;
  `};
`

const InfoSection = styled.div`
  background-color: ${colors.customWhite};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  order: 2;
  ${media.desktop`
    width: 50%;
  `};
`

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 2rem;
  margin-top: 1rem;
  ${media.tablet`
    width: 60%;
    margin-top: unset;
    margin-top: 1rem;
  `};
  ${media.desktop`
    width: 24rem;
  `};
`

const InfoSubTitle = styled.div`
  color: ${colors.darkGrey};
  font-weight: 200;
  font-size: 0.6rem;
  font-family: ${fonts.avenir};

  ${media.tablet`
    font-size: 0.6rem;
  `};
`

const InfoTitle = styled.div`
  color: white;
  margin-top: 1rem;
  font-size: 2rem;
  line-height: 1;
  font-family: ${fonts.Black};
  display: flex;
  z-index: 106;

  ${media.tablet`
    margin-bottom: 1.5rem;
    font-size: 2.2rem;
  `};
  ${media.desktop`
    font-size: 3rem;
  `};

  > div:nth-child(2) > span {
    color: none !important;
    text-stroke-width: 1px !important;
    text-stroke-color: black !important;
  }
`

const InfoP = styled.div`
  font-family: ${fonts.helvetica};
  font-size: 0.8rem;
  font-weight: 200;
  margin-bottom: 2rem;
  height: 5rem;
  line-height: 1rem;
`

const WorkLink = styled(AniLink)`
  font-family: ${fonts.Montserrat};
  font-size: 0.8rem;
  color: white;
  text-decoration: none;
  background-color: #336af3;
  width: 8rem;
  height: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;

  :hover {
    color: black;
  }
`
const InfoContainer = styled.div`
  padding-left: 0.6rem;
`

const PhotoSection = styled.div`
  background-color: #ff3db7;
  width: 100%;
  height: 18rem;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: 1.2s ${keyframes`${fadeInRight}`}
    cubic-bezier(0.51, 0.05, 0.38, 1.01);
  animation-delay: 1.3s;
  order: 1;

  ${media.tablet`
    height: 20rem;
  `};

  ${media.desktop`
    width: 50%;
    height: 100%;
    position: absolute;
    left: 50vw;
    top: 0;
  `};
`
const SectionHome = () => {
  let title = useRef(null)

  let info = useRef(null)
  const tl = new TimelineLite({ delay: 0.1 })
  const tlInfo = new TimelineLite({ delay: 0.1 })

  useEffect(() => {
    // Images Vars

    const ContainerFirst = title.children[0]
    const ContainerSecond = title.children[1]

    const InfoSub = info.children[0]
    const InfoP = info.children[1]
    const InfoLink = info.children[2]

    // Content Animation

    tl.staggerTo(
      [ContainerFirst.children],
      1,
      {
        y: 0,
        ease: Power3.easeInOut,
      },
      0.7,
      "Start"
    )
      .to(
        [ContainerSecond.children],
        1,
        {
          y: 0,
          ease: Power3.easeInOut,
        },
        0.3,
        "Start"
      )
      .to(
        [ContainerFirst.children, ContainerSecond.children],
        1.5,
        {
          x: "10px",
          color: "black",
          ease: Power4.easeInOut,
        },
        0.8
      )
    tlInfo
      .to(
        [InfoSub.children],
        1,
        {
          y: 0,
          ease: Power3.easeInOut,
        },
        1.1
      )
      .to(
        [InfoP.children],
        1,
        {
          y: 0,
          ease: Power3.easeInOut,
        },
        1.2
      )
      .to(
        [InfoLink.children],
        1,
        {
          y: 0,
          ease: Power3.easeInOut,
        },
        1.3
      )
  }, [tl, tlInfo])

  return (
    <MainSection>
      <Topsection />
      <Line />
      <InfoSection id="home">
        <InfoBox>
          <InfoTitle ref={el => (title = el)}>
            <div className="home-content-line">
              <span className="home-line-inner">HELLO</span>
            </div>
            <div className="home-content-line">
              <span id="second-text" className="home-line-inner">THERE</span>
            </div>
          </InfoTitle>
          <InfoContainer ref={el => (info = el)}>
            <InfoSubTitle className="sub-content-line">
              <span className="sub-line-inner">
                DEV, UI, WEBSITES, INTERIOR, ANIMATION
              </span>
            </InfoSubTitle>
            <InfoP className="p-content-line">
              <span className="p-line-inner">
                I am Basit Ellahi, and i am a passionate developer and motion
                designer. Living in Belgium
              </span>
            </InfoP>
            <WorkLink
              paintDrip
              to="work"
              duration={1}
              hex="#191919"
              className="link-content-line"
            >
              <span className="link-line-inner">See my work</span>
            </WorkLink>
          </InfoContainer>
        </InfoBox>
      </InfoSection>
      <PhotoSection>
        <Svg />
      </PhotoSection>
    </MainSection>
  )
}

export default SectionHome

// <Grain src={illustration} />

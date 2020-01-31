import React, { useEffect, useRef } from "react"
import { TimelineLite, Power3, Power4 } from "gsap"
import styled, { keyframes } from "styled-components"
import Fade from "react-reveal/Fade"
import { fadeInRight, slideOutLeft } from "react-animations"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { colors, fonts } from "../../../style-utils"
import "./link.scss"

import illustration from "../../../assets/grain.jpg"
import Home from "../../../assets/home.svg"

const MainSection = styled.div`
  display: flex;
  flex-direction: row;
  height: 76vh;
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
  display: flex;
  background-color: black;
  padding: 0;
  animation: 1s ${scale} cubic-bezier(0.51, 0.05, 0.38, 1.01);
  animation-fill-mode: forwards;
`

const InfoSection = styled.div`
  background-color: ${colors.customWhite};
  width: 50%;
  display: flex;
  justify-content: center;
`

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 24rem;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
`

const InfoSubTitle = styled.div`
  color: ${colors.darkGrey};
  font-weight: 500;
  font-size: 0.7rem;
  font-family: ${fonts.avenir};
`

const InfoTitle = styled.div`
  color: white;
  font-size: 3rem;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1;
  font-family: ${fonts.Black};
  display: flex;
  z-index: 106;
`

const InfoP = styled.div`
  font-family: ${fonts.helvetica};
  font-size: 0.9rem;
  font-weight: 200;
  margin-bottom: 2rem;
`

const WorkLink = styled(AniLink)`
  font-family: ${fonts.acumin};
  font-size: 1.2rem;
  color: black;
  text-decoration: none;

  :hover {
    color: white;
  }
`

const PhotoSection = styled.div`
  background-color: #e9e9e9;
  width: 50%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50vw;
  top: 0;
  animation: 1.2s ${keyframes`${fadeInRight}`}
    cubic-bezier(0.51, 0.05, 0.38, 1.01);
`
const flash = keyframes`
  0% {
    width: 70%;
    transform: scale(0.6);
  }
  60% {
    width: 80%;
  }
  100% {
    width: 100%;
    transform: scale(1);
  }
`

const Img = styled.img`
  display: flex;
  max-width: 25rem;
  max-height: 25rem;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  animation: 1.2s ${flash} cubic-bezier(0.51, 0.05, 0.38, 1.01);
  animation-fill-mode: forwards;
  transition: all 200ms cubic-bezier(0.77, 0, 0.175, 1);
  & :hover {
    cursor: pointer;
  }
`
const Grain = styled.img`
  display: flex;
  width: 100%0.9rem;
  height: 100%;
  mix-blend-mode: overlay;
  opacity: 0.7;
  position: absolute;
  left: 0;
  bottom: 0;
  background: url("../../../assets/grain.jpg");
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

    console.warn(InfoSub)
    // Content Animation

    // tl.staggerTo(ContainerFirst, 1, { width: "0%", ease: Power3.easeInOut })

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

    /*
    tl.from(ContainerFirst, 1, {
      scaleX: 0,
      transformOrigin: "left",
      ease: Power3.easeInOut,
    }).to(
      ContainerFirst,
      1,
      { scaleX: 0, transformOrigin: "right", ease: Power3.easeInOut },
      "reveal"
    )
    */
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
              <span className="home-line-inner">THERE</span>
            </div>
          </InfoTitle>
          <div ref={el => (info = el)}>
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
              <span className="link-line-inner">See my work &gt;</span>
            </WorkLink>
          </div>
        </InfoBox>
      </InfoSection>
      <PhotoSection>
        <Img src={Home} id="home-illustration" alt="Basit" />
        <Grain src={illustration} />
      </PhotoSection>
    </MainSection>
  )
}

export default SectionHome

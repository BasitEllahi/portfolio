import { Link } from "@reach/router"
import React from "react"
import styled, { keyframes } from "styled-components"
import Fade from "react-reveal/Fade"
import { fadeInRight, slideOutLeft } from "react-animations"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { colors, fonts } from "../../../style-utils"
import "./link.scss"

import illustration from "../../../assets/me.svg"

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
  color: black;
  font-size: 3rem;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1;
  font-family: ${fonts.acumin};
  display: flex;
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

  & span {
    margin-left: 0.5rem;
  }

  :hover {
    color: white;
  }
`

const PhotoSection = styled.div`
  background-color: ${colors.main};
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

const SectionHome = () => (
  <MainSection>
    <Topsection />
    <Line />
    <InfoSection id="home">
      <InfoBox>
        <Fade bottom>
          <InfoSubTitle>DEV, UI, WEBSITES, INTERIOR, ANIMATION</InfoSubTitle>
          <InfoTitle>
            <span className="link link--kukuri" data-letters="Hello">
              Hello
            </span>
            <span className="glitch" data-text="THERE">
              THERE
            </span>
          </InfoTitle>
          <InfoP>
            I am Basit Ellahi, and i am a passionate developer and motion
            designer. Living in Belgium
          </InfoP>
          <WorkLink paintDrip to="work" duration={1} hex="#191919">
            See my work &gt;
          </WorkLink>
        </Fade>
      </InfoBox>
    </InfoSection>
    <PhotoSection>
      <Img src={illustration} id="home-illustration" alt="Basit" />
    </PhotoSection>
  </MainSection>
)

export default SectionHome

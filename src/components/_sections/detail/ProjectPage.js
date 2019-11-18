/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable func-names */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-rest-params */
import React, { useEffect, useRef } from "react"
import styled from "styled-components"
// import Img from 'gatsby-image'
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { colors, fonts, media } from "../../../style-utils"

import blade1 from "../../../assets/blade-1.png"
import blade2 from "../../../assets/blade-2.png"
import blade3 from "../../../assets/blade-3.png"
import blade4 from "../../../assets/blade-4.png"

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 2rem;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const ProjectBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  width: 80%;
  justify-content: right;
  transition: transform 0.3s;
  will-change: transform;
  ${media.desktop`
    justify-content: space-around;
  `};
`

const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
  font-size: 1rem;
  justify-content: space-between;
`

const YearInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  margin-right: 4rem;
  font-family: ${fonts.helvetica};
  font-size: 1rem;
  width: 20%;
`

const List = styled.ul`
  list-style: none;
  padding: none;
`
const InnerList = styled.li`
  list-style: none;
`

const VideoBox = styled.iframe`
  display: flex;
  width: 100%;
  height: 56vw;
  margin-bottom: 3rem;
  margin-top: 2rem;
`
const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 5rem;
`

const Img = styled.img`
  max-width: 30rem;
  max-height: 45rem;
  object-fit: cover;
  cursor: pointer;
`

const Title = styled.span`
  color: black;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  line-height: 1;
  font-family: ${fonts.acumin};
  font-weight: 500;
  text-align: center;
  margin-right: 0.2rem;
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

const Description = styled.p`
  color: ${colors.darkGrey};
  font-size: 0.8rem;
  line-height: 1.2;
  font-family: ${fonts.helvetica};
  font-weight: 200;
  margin-top: 0.5rem;
  width: 50%;
`

const InfoTitle = styled.div`
  color: black;
  font-size: 2.5rem;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1;
  font-family: ${fonts.acumin};
  display: flex;
  jusfity-content: right;

  & span {
    color: ${colors.main};
    margin-right: 0.5rem;
  }
`

const ProjectPage = () => {
  const requestRef = useRef()
  const section = document.getElementById("project")

  let currentPos = window.pageYOffset

  const update = () => {
    const newPos = window.pageYOffset
    const diff = newPos - currentPos
    const speed = diff * 0.05

    section.style.transform = `skewY(${speed}deg)`

    currentPos = newPos

    requestRef.current = requestAnimationFrame(update)
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(update)

    return () => {
      cancelAnimationFrame(requestRef.current)
    }
  })

  return (
    <MainSection>
      <ProjectBox id="project">
        <InfoTitle>De Kreun</InfoTitle>
        <InfoBox>
          <Description>
            What if book sharing can be easy, fun and also make friends? Under
            the course ‘Web and Interactive Media Design’ at Silpakorn
            University. I designed and developed this application as a community
            space for book sharing that allows users to easily find books.
            Through a built-in messenger service, users can easily communicate
            with each other and match the book if both they are satisfied.
          </Description>
          <YearInfo>
            <List>
              <InnerList>
                <Title>Year: </Title>
                <UnderTitle>2019</UnderTitle>
              </InnerList>
              <InnerList>
                <Title>Role: </Title>
                <UnderTitle> Webdesign, UI / UX</UnderTitle>
              </InnerList>
            </List>
          </YearInfo>
        </InfoBox>
      </ProjectBox>
      <VideoBox
        title="video"
        src="https://player.vimeo.com/video/373909372"
        width="640"
        height="360"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      />
      <ImgBox>
        <Img src={blade1} alt="de kreun" />
      </ImgBox>
      <ImgBox>
        <Img src={blade2} alt="de kreun" />
      </ImgBox>
      <ImgBox>
        <Img src={blade3} alt="de kreun" />
      </ImgBox>
      <ImgBox>
        <Img src={blade4} alt="de kreun" />
      </ImgBox>
    </MainSection>
  )
}

export default ProjectPage

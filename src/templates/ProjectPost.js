import React from "react"

import { graphql } from "gatsby"
import styled from "styled-components"

import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"

import blade1 from "../assets/blade-1.png"
import blade2 from "../assets/blade-2.png"
import blade3 from "../assets/blade-3.png"
import blade4 from "../assets/blade-4.png"

import { colors, fonts, media } from "../style-utils"

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

const ProjectPage = data => {
  const project = data.data.contentfulProject

  const Photos = project.photos.map(img => (
    <ImgBox key={img.fluid.src}>
      <Img src={img.fluid.src} alt="img" />
    </ImgBox>
  ))

  return (
    <div>
      <Header />
      <MainSection>
        <ProjectBox id="project">
          <InfoTitle>{project.name}</InfoTitle>
          <InfoBox>
            <Description>{project.body.body}</Description>
            <YearInfo>
              <List>
                <InnerList>
                  <Title>Year: </Title>
                  <UnderTitle>{project.year}</UnderTitle>
                </InnerList>
                <InnerList>
                  <Title>Role: </Title>
                  <UnderTitle> {project.role}</UnderTitle>
                </InnerList>
              </List>
            </YearInfo>
          </InfoBox>
        </ProjectBox>
        {project.video && (
          <VideoBox
            title="video"
            src={project.video}
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        )}
        {Photos}
      </MainSection>
      <Footer />
    </div>
  )
}

export default ProjectPage

export const query = graphql`
  query($id: String!) {
    contentfulProject(id: { eq: $id }) {
      id
      name
      role
      year
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
          src
        }
      }
      video
    }
  }
`

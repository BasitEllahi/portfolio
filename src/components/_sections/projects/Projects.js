/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable func-names */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-rest-params */
import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import get from "lodash/get"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { colors, fonts, media } from "../../../style-utils"

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 4rem;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const ProjectBox = styled.div`
  display: grid;
  flex-direction: row;
  align-items: center;
  grid-template-columns: unset;
  width: 80%;
  justify-content: center;
  transition: transform 0.3s;
  will-change: transform;
  ${media.desktop`
    grid-template-columns: 20rem 20rem;
    justify-content: space-around;
  `};
`

const Project = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 25rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`
const ImgBox = styled.div`
  display: flex;
  width: 20rem;
  height: 25rem;
  margin-bottom: 1rem;
  background-color: ${colors.lightGrey};
  cursor: pointer;
`

const Image = styled(Img)`
  max-width: 20rem;
  max-height: 25rem;
  object-fit: cover;
`

const Title = styled(AniLink)`
  color: black;
  font-size: 1.5rem;
  margin-top: 0.5rem;
  line-height: 1;
  font-family: ${fonts.acumin};
  font-weight: 500;
  text-align: center;
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
  text-align: center;
  margin-top: 0.5rem;
`

const InfoTitle = styled.div`
  color: black;
  font-size: 3rem;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1;
  font-family: ${fonts.acumin};
  display: flex;
  jusfity-content: center;

  & span {
    color: ${colors.main};
    margin-right: 0.5rem;
  }
`

const Projects = props => {
  const requestRef = useRef()
  const section = document.getElementById("projectBox")
  const projects = get(props, "data.allContentfulProject.edges", [])

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
      <InfoTitle>
        <span>All</span>
        Cases
      </InfoTitle>
      <ProjectBox id="projectBox">
        {projects.map(({ node: project }) => {
          if (!project) return null

          return (
            <Project key={project.id}>
              <UnderTitle> WEB, UI / UX</UnderTitle>
              <ImgBox>
                <Image fluid={project.photo.fluid} alt="de kreun" />
              </ImgBox>
              <Title paintDrip to="detail" duration={1} hex="#191919">
                {project.name}
              </Title>
              <Description>{project.body.body}`</Description>
            </Project>
          )
        })}

        <Project>
          <UnderTitle> WEB, UI / UX</UnderTitle>
          <ImgBox>
            <Img src={kreun} alt="de kreun" />
          </ImgBox>
          <Title paintDrip to="detail" duration={1} hex="#191919">
            De Kreun
          </Title>
          <Description>
            A branding and design concept for the real-time public transit
            tracking system on a mobile application.
          </Description>
        </Project>
        <Project>
          <UnderTitle>Motion Design</UnderTitle>
          <ImgBox>
            <Img src={blade} alt="daikin" />
          </ImgBox>
          <Title>De Kreun</Title>
          <Description>
            A branding and design concept for the real-time public transit
            tracking system on a mobile application.
          </Description>
        </Project>
        <Project>
          <UnderTitle> APP, UI / UX</UnderTitle>
          <ImgBox>
            <Img src={daikin} alt="daikin" />
          </ImgBox>
          <Title>Daikin</Title>
          <Description>
            A branding and design concept for the real-time public transit
            tracking system on a mobile application.
          </Description>
        </Project>
        <Project>
          <UnderTitle> Web, UI / UX</UnderTitle>
          <ImgBox>
            <Img src={baby} alt="daikin" />
          </ImgBox>
          <Title>De Kreun</Title>
          <Description>
            A branding and design concept for the real-time public transit
            tracking system on a mobile application.
          </Description>
        </Project>
        <Project>
          <UnderTitle> Motion Design</UnderTitle>
          <ImgBox>
            <Img src={project} alt="daikin" />
          </ImgBox>
          <Title>De Kreun</Title>
          <Description>
            A branding and design concept for the real-time public transit
            tracking system on a mobile application.
          </Description>
        </Project>
      </ProjectBox>
    </MainSection>
  )
}

export default Projects

export const query = graphql`
  query GetProjects {
    allContentfulProject {
      edges {
        node {
          id
          name
          body {
            body
          }
          cover {
            fluid {
              ...GatsbyContentfulFluid
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

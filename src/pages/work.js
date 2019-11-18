import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import get from "lodash/get"
// import Img from "gatsby-image"
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
`
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

const Image = styled.img`
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
  text-decoration: none;
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
                </ImgBox>
                <Title
                  paintDrip
                  to={`/post/${detail.slug}`}
                  duration={1}
                  hex="#191919"
                  direction="up"
                >
                  {detail.name}
                </Title>
                <Description>{detail.body.body}</Description>
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
    allContentfulProject {
      edges {
        node {
          id
          slug
          role
          name
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

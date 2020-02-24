import React, { useEffect, useRef } from "react"

import { graphql } from "gatsby"
import { TimelineLite, Power3 } from "gsap"
import CSSRulePlugin from "gsap/CSSRulePlugin"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"
import Img from "gatsby-image"

import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"
import "./project.scss"

import { colors, fonts, media } from "../style-utils"

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: unset;
  width: 100%;
  justify-content: center;
  align-items: center;
  ${media.tablet`
    margin-top: 2rem;
  `};
`

const ProjectBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  width: 90%;
  justify-content: right;
  transition: transform 0.3s;
  will-change: transform;

  ${media.tablet`
    width: 80%;
  `};
  ${media.desktop`
    justify-content: space-around;
  `};
`

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  font-size: 1rem;
  justify-content: space-between;
  border-top: 1px solid #EBEBEB;
  ${media.tablet`
    flex-direction: row;
    justify-content: space-between;
  `};
`

const YearInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  font-family: ${fonts.helvetica};
  font-size: 1rem;
  width: 8rem;
  justify-content: flex-end;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`
const InnerList = styled.li`
  list-style: none;
`

const VideoBox = styled.iframe`
  display: flex;
  width: 35rem;
  height: 46vh;
  margin-bottom: 3rem;
  margin-top: 2rem;
`

const BannerImg = styled(Img)`
  width: 100%;
  object-fit: cover;
  cursor: pointer;
`

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 5rem;
`

const Image = styled(Img)`
  width: 80%;
  max-height: 45rem;
  object-fit: cover;
  cursor: pointer;

  ${media.tablet`
    width: 30rem;
  `};
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
  width: 100%;
  ${media.tablet`
    width: 90%;
  `};
  ${media.desktop`
    width: 60%;
  `};
`

const InfoTitle = styled.div`
  color: black;
  font-size: 2.5rem;
  line-height: 1;
  font-family: ${fonts.acumin};
  display: flex;
  jusfity-content: right;

  & span {
    color: ${colors.main};
    margin-right: 0.5rem;
  }
`
const Backbutton = styled(AniLink)`
  color: #666;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: #ebebeb;
  padding: 0.2rem;
  font-size: 0.5rem;
  width: 6rem;
  text-align: center;
  font-family: ${fonts.Montserrat};
  text-decoration: none;
  font-weight: bold;
  display: flex;
  justify-content: center;
  border-radius: 28px;
  align-items: center;
  :hover {
    transition: all 0.3s ease;
    background-color: #336af3;
    color: white;
  }

  ${media.tablet`
    margin-top: 1rem;
    margin-bottom: 2rem;
  `};
`
const ProjectPage = data => {
  const project = data.data.contentfulProject

  let content = useRef(null)

  let year = useRef(null)

  let image = useRef(null)

  const imageReveal = CSSRulePlugin.getRule(".img-container:after")

  const tl = new TimelineLite({ delay: 0.8 })
  const tlImage = new TimelineLite({ delay: 1 })
  const tlInfo = new TimelineLite({ delay: 0.8 })

  useEffect(() => {
    // Images Vars

    // content vars
    const headlineFirst = content.children[0].children[0]
    const contentP = content.children[1]

    const contentYear = year.children[0].children[0].children[0]
    const contentRole = year.children[0].children[1].children[0]

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

    tlImage.staggerTo(imageReveal, 1, { width: "0%", ease: Power3.easeInOut })

    tlInfo
      .staggerTo(
        [contentYear],
        1,
        {
          y: 0,
          ease: Power3.easeOut,
        },
        0.15,
        "Start"
      )
      .to(contentRole, 1, { y: 0, opacity: 1, ease: Power3.easeOut }, 0.4)
  }, [tl, tlInfo, tlImage])

  const Photos = project.photos.map((img, i) => (
    <ImgBox key={i}>
      <Image fluid={img.localFile.childImageSharp.fluid} alt="img" />
    </ImgBox>
  ))

  return (
    <div>
      <Header />
      <MainSection>
        <ProjectBox id="project">
          <Backbutton
            paintDrip
            to="/work"
            duration={1}
            hex="#176bfc"
            direction="up"
          >
            Back to projects
          </Backbutton>
          <InfoBox>
            <div className="hero-content-inner" ref={el => (content = el)}>
              <h1>
                <div className="hero-content-line">
                  <InfoTitle className="hero-content-line-inner">
                    {project.name}
                  </InfoTitle>
                </div>
              </h1>
              <Description>{project.body.body}</Description>
            </div>
            <YearInfo ref={el => (year = el)}>
              <List>
                <InnerList className="date-content-line">
                  <div className="date-line-inner">
                    <Title>Year: </Title>
                    <UnderTitle>{project.year}</UnderTitle>
                  </div>
                </InnerList>
                <InnerList className="date-content-line">
                  <div className="date-line-inner">
                    <Title>Role: </Title>
                    <UnderTitle> {project.role}</UnderTitle>
                  </div>
                </InnerList>
              </List>
            </YearInfo>
          </InfoBox>
        </ProjectBox>
        {project.banner && (
          <div className="img-container">
            <BannerImg
              ref={el => (image = el)}
              fluid={project.banner.localFile.childImageSharp.fluid}
            />
          </div>
        )}
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
      banner {
        localFile {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body {
        body
      }
      cover {
        fluid {
          src
        }
      }
      photos {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      video
    }
  }
`

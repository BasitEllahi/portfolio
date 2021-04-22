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
  margin-bottom: 0;
  font-size: 1rem;
  justify-content: space-between;
  border-top: 1px solid #ebebeb;
  ${media.tablet`
    margin-bottom: 2rem;
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
  width: 100%;
  max-height: 13rem;
  margin-bottom: 3rem;
  margin-top: 2rem;

  ${media.phablet`
    max-height: 25rem;
    margin-bottom: 3rem;
    margin-top: 2rem;
  `};

  ${media.tablet`
    width: 35rem;
    height: 46vh;
    max-height: 100%;
  `};
`

const BannerImg = styled(Img)`
  width: 100%;
  object-fit: cover;
  cursor: pointer;
`
const BannerImgsvg = styled.img`
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
  border: 1px solid #eaeaea;
  cursor: pointer;

  ${media.tablet`
    width: 35rem;
  `};
`
const ImageSVG = styled.img`
  width: 80%;
  max-width: 17rem;
  width: 17rem;
  max-height: 20rem;
  border: 1px solid #eaeaea;
  cursor: pointer;

  ${media.tablet`
    max-width: 35rem;
    width: 35rem;
    max-height: 45rem;
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
const FullProject = styled.div`
  color: ${colors.darkGrey};
  font-size: 0.7rem;
  line-height: 1.2;
  font-family: ${fonts.acumin};
  font-weight: 200;
  margin-top: 2rem;
  width: 100%;
  ${media.tablet`
    width: 90%;
  `};
  ${media.desktop`
    width: 60%;
  `};
  a {
    text-decoration: none;
    color: Black;

    :hover {
      color: #3369f3;
    }
  }
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
const InfoLink = styled.a`
  color:#2355F5;
  font-size: 0.8rem;
  line-height: 1;
  font-family: ${fonts.acumin};
  display: flex;
  text-decoration: none;
  transition: 0.3s;
  :hover {
    color: black;
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
    background-color: #eb4fb3;
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

  const Photos = project.photos.map((img, i) => {
    const Svg = img.file.contentType.includes("svg")

    let Type

    if (Svg) {
      Type = <ImageSVG src={img.localFile.url} alt="img" />
    } else {
      Type = <Image fluid={img.localFile.childImageSharp.fluid} alt="img" />
    }

    return <ImgBox key={i}>{Type}</ImgBox>
  })

  const Banner = () => {
    const Svg = project.banner.file.contentType.includes("svg")

    return Svg ? (
      <BannerImgsvg
        ref={el => (image = el)}
        src={project.banner.localFile.url}
      />
    ) : (
      <BannerImg
        ref={el => (image = el)}
        fluid={project.banner.localFile.childImageSharp.fluid}
      />
    )
  }

  return (
    <div>
      <Header />
      <MainSection>
        <ProjectBox id="project">
          <Backbutton
            paintDrip
            to="/work"
            duration={1}
            hex="#EB4FB3"
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
              {project.link && <InfoLink href={project.link}>Check out</InfoLink> }
              
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
                  <RoleBox className="date-line-inner">
                    <Title>Role: </Title>
                    <UnderTitle>{project.role}</UnderTitle>
                  </RoleBox>
                </InnerList>
              </List>
            </YearInfo>
          </InfoBox>
        </ProjectBox>
        {project.banner && <div className="img-container">{Banner()}</div>}
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
      link
      banner {
        localFile {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
          url
        }
        file {
          contentType
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
          url
        }
        file {
          contentType
        }
      }
      video
    }
  }
`

import React, { useEffect, useRef } from "react"

import { TimelineLite, Power3 } from "gsap"
import CSSRulePlugin from "gsap/CSSRulePlugin"
import Fade from "react-reveal/Fade"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"
import Img from "gatsby-image"

import Me from "../../../assets/myself.svg"

import { colors, fonts, media } from "../../../style-utils"

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: unset;
  width: 100%;
  justify-content: center;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
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

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  font-size: 1rem;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ebebeb;
  ${media.tablet`
    flex-direction: row;
    justify-content: space-between;
  `};
`

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  justify-content: space-between;
  & h1 {
    margin-bottom: 0 !important;
  }
  order: 2;
  ${media.tablet`
    order: 1;
    flex-direction: column;
    justify-content: space-between;
  `};
`

const YearInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
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

const Title = styled.span`
  color: black;
  font-size: 0.6rem;
  margin-top: 0.5rem;
  line-height: 1;
  font-family: ${fonts.Montserrat};
  font-weight: bold;
  text-align: center;
  margin-right: 0.2rem;
`
const UnderTitle = styled.span`
  color: #2d2d2d;
  font-size: 0.7rem;
  line-height: 1;
  font-family: ${fonts.Montserrat};
  font-weight: 200;
  text-align: left;
  margin-bottom: 0.3rem;
`

const Description = styled.p`
  color: ${colors.darkGrey};
  font-size: 0.8rem !important;
  line-height: 1.4 !important;
  font-family: ${fonts.helvetica};
  font-weight: 200;
  margin-top: 0.5rem;
  margin-bottom: 0 !important;
  width: 100%;
  ${media.tablet`
    width: 100%;
    font-size: 0.7rem !important;
  `};
  ${media.desktop`
    width: 25rem;
    font-size: 0.8rem !important;
  `};
`

const InfoTitle = styled.div`
  color: black;
  font-size: 2rem;
  line-height: 1;
  font-family: ${fonts.Montserrat};
  display: flex;
  font-weight: bold;
  jusfity-content: right;

  & span {
    color: ${colors.main};
    margin-right: 0.5rem;
  }
  ${media.tablet`
    font-size: 2rem;
  `};
  ${media.desktop`
    font-size: 2.5rem;
  `};
`

const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  margin-bottom: 1rem;
  justify-content: space-between;
`
const AboutInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${media.phabletXL`
    flex-direction: row;
  `};
`

const SkillBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;

  ${media.phablet`
    width: 50%;
  `};
  ${media.desktop`
    width: auto;
  `};
`
const SkillBoxWork = styled(SkillBox)`
  width: 100%;

  ${media.phablet`
    width: 16rem;
  `};

  ${media.tablet`
    width: 28rem;
  `};
  ${media.desktop`
    width: 20rem;
  `};
`

const Skills = styled.ul`
  display: flex;
  flex-direction: column;
  jusfity-content: right;
  padding: 0;
`

const SkillBigContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0;
  width: 100%;

  ${media.phablet`
    flex-direction: row;
  `};
`

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  jusfity-content: right;
  padding: 0;
  width: 15rem;
`

const SkilTitle = styled.span`
  color: black;
  font-size: 1.2rem;
  line-height: 1;
  font-family: ${fonts.Montserrat};
  display: flex;
  font-weight: bold;
`

const SmallTitle = styled.span`
  color: #336af3;
  font-size: 0.8rem;
  margin-top: 1rem;
  line-height: 1;
  font-family: ${fonts.Montserrat};
  display: flex;
  font-weight: bold;
`

const SkilItem = styled.li`
  color: black;
  font-size: 0.7rem;
  line-height: 1.5;
  padding: 0;
  margin-bottom: 0.5rem;
  font-family: ${fonts.Montserrat};
  display: flex;
  font-weight: light;
  jusfity-content: right;

  & span {
    color: #336af3;
    font-weight: bold;
    margin-right: 0.5rem;
  }
`
const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  order: 1;
  ${media.tablet`
    order: 2;
  `};
`
const ImageMe = styled.img`
  display: flex;
  justify-content: center;
  width: 13rem;
  ${media.tablet`
    width: 17rem;
  `};
  ${media.desktop`
    width: 20rem;
  `};
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
  let content = useRef(null)

  let year = useRef(null)

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

  return (
    <div>
      <MainSection>
        <ProjectBox id="project">
          <InfoContainer>
            <InfoBox>
              <div className="hero-content-inner" ref={el => (content = el)}>
                <h1>
                  <div className="hero-content-line">
                    <InfoTitle className="hero-content-line-inner">
                      About Me
                    </InfoTitle>
                  </div>
                </h1>
                <Description>
                  I’m a Belgium-based Digital creative and interested in
                  designing, developing and animating interactive products with
                  a comprehensive user-centered design process from user
                  research to beautiful pixels. I am a young digital dreamer
                  influenced by technology, design and people, always lean
                  towards simplicity and human touch. I ve graduated Devine from
                  the Howest University Kortrijk.
                </Description>
              </div>
              <YearInfo ref={el => (year = el)}>
                <List>
                  <InnerList className="date-content-line">
                    <div className="date-line-inner">
                      <Title>NAME: </Title>
                      <UnderTitle>Basit Ellahi</UnderTitle>
                    </div>
                  </InnerList>
                  <InnerList className="date-content-line">
                    <div className="date-line-inner">
                      <Title>AGE: </Title>
                      <UnderTitle>25 years</UnderTitle>
                    </div>
                  </InnerList>
                </List>
              </YearInfo>
            </InfoBox>
            <ImageContainer>
              <Fade right delay={750}>
                <ImageMe src={Me} />
              </Fade>
            </ImageContainer>
          </InfoContainer>
          <AboutContainer>
            <AboutInfoContainer>
              <SkillBox>
                <Fade bottom cascade>
                  <SkilTitle> Skills</SkilTitle>
                </Fade>
                <SkillBigContainer>
                  <Fade bottom cascade>
                    <SkillContainer>
                      <SmallTitle>Motion & Animation</SmallTitle>
                      <Skills className="List">
                        <SkilItem> Vray rendering</SkilItem>
                        <SkilItem> 2D Animation, Explainers</SkilItem>
                        <SkilItem> Storyboards</SkilItem>
                        <SkilItem> Cinema 4d</SkilItem>
                        <SkilItem> SketchUp</SkilItem>
                      </Skills>
                    </SkillContainer>
                  </Fade>
                  <Fade bottom cascade>
                    <SkillContainer>
                      <SmallTitle>UX / UI</SmallTitle>
                      <Skills className="List">
                        <SkilItem> Adobe Creative Suite</SkilItem>
                        <SkilItem>Illustrator, Sketch</SkilItem>
                        <SkilItem>Isometric design</SkilItem>
                        <SkilItem>Infographics</SkilItem>
                      </Skills>
                    </SkillContainer>
                  </Fade>
                  <Fade bottom cascade>
                    <SkillContainer>
                      <SmallTitle>Development</SmallTitle>
                      <Skills className="List">
                        <SkilItem>React framework</SkilItem>
                        <SkilItem>Gatsby, Next js, PWA</SkilItem>
                        <SkilItem>Javascript</SkilItem>
                        <SkilItem>Graphql</SkilItem>
                        <SkilItem>
                          Css ( Css3, Styled Components, ant design, ...)
                        </SkilItem>
                        <SkilItem>Gsap animation</SkilItem>
                        <SkilItem>Contentfull, GraphCMS</SkilItem>
                      </Skills>
                    </SkillContainer>
                  </Fade>
                </SkillBigContainer>
              </SkillBox>
              <Fade bottom cascade>
                <SkillBoxWork>
                  <SkilTitle> Work</SkilTitle>
                  <Skills>
                    <SkilItem>
                      <span>2014 - 2017</span>
                      Devine Education @ Howest
                    </SkilItem>
                    <SkilItem>
                      <span>2017 - 2018</span>
                      Motion Designer @Mediamonks
                    </SkilItem>
                    <SkilItem>
                      <span>2018 - Now</span>
                      Frontend @Appeel.io
                    </SkilItem>
                  </Skills>
                </SkillBoxWork>
              </Fade>
            </AboutInfoContainer>
          </AboutContainer>
        </ProjectBox>
      </MainSection>
    </div>
  )
}

export default ProjectPage

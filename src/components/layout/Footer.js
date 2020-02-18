import React from "react"
import styled, { keyframes } from "styled-components"

import { slideInUp } from "react-animations"

import { colors, fonts, media } from "../../style-utils"

const OuterSection = styled.div`
  background-color: ${colors.lightGrey};
  animation: 1s ${keyframes`${slideInUp}`} cubic-bezier(0.51, 0.05, 0.38, 1.01);
  animation-fill-mode: forwards;
  animation-delay: 1.6s;
  transform: translateY(100%);
  margin-bottom: 3.5rem;
  height: 10%;

  ${media.tablet`
    margin-bottom: 0;
  `};
`

const fadeIn = keyframes`
  0% {
    width: 60%;
  }
  100% {
    width: 80%;
  }
`

const Section = styled.div`
  margin: 0 auto;
  text-align: center;
  padding-bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60%;
  text-align: left;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  animation: 0.6s ${fadeIn} cubic-bezier(0.51, 0.05, 0.38, 1.01);
  animation-fill-mode: forwards;

  animation-delay: 1.8s;
`

const Location = styled.div``

const Contacts = styled.div``

const Title = styled.h2`
  font-size: 0.7rem;
  color: black;
  font-family: ${fonts.acumin};
  margin: 0;
`

const Box = styled.div`
  ${media.tablet`
    padding-right: 0.7rem;
    float: left;
    width: 10rem;
  `};
`

const SubTitle = styled.span`
  font-size: 0.7rem;
  text-align: center;
  font-family: ${fonts.bebas};
  letter-spacing: 0.05rem;
  margin: 0;
  ${media.tablet`
    text-align: left;
    margin-bottom: .5em;
  `};

  & ul {
    text-decoration: none;
  }
`
const List = styled.ul`
  font-weight: 700;
  font-size: 1.1rem;
  text-decoration: none;
  font-family: ${fonts.helvetica};
  letter-spacing: 0.05rem;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-decoration: row;
  li  {
    font-size: 0.6rem;
    font-family: ${fonts.helvetica};
    font-weight: 100;
    margin-right: 1rem;
    a {
      text-decoration: none;
      color: black;
    }
  }
`

const Paragraph = styled.p`
  text-align: center;
  font-family: ${fonts.helvetica};
  font-weight: lighter;
  font-size: 0.6rem;
  margin: 0;
  display: flex;
  text-align: left;
  line-height: 1.5;
`

const SectionFooter = () => (
  <OuterSection>
    <Section id="contact">
      <Location>
        <Title>CONTACT ME</Title>
        <Box>
          <Paragraph>
            Pk103_basit@hotmail.com
            <br />
            +32489645363
          </Paragraph>
        </Box>
      </Location>

      <Contacts>
        <Title>FOLLOW ME</Title>
        <List>
          <li>
            <a href="/">Dribble</a>
          </li>
          <li>
            <a href="/">Behance</a>
          </li>
          <li>
            <a href="/">Vimeo</a>
          </li>
        </List>
      </Contacts>
    </Section>
  </OuterSection>
)

export default SectionFooter

import React from "react"
import styled, { keyframes } from "styled-components"

import { slideInUp } from "react-animations"

import { colors, fonts, media } from "../../style-utils"

import Dribble from "../icons/dribble"
import Behance from "../icons/behance"
import Vimeo from "../icons/vimeo"

const OuterSection = styled.div`
  background-color: ${colors.lightGrey};
  animation: 1s ${keyframes`${slideInUp}`} cubic-bezier(0.51, 0.05, 0.38, 1.01);
  animation-fill-mode: forwards;
  animation-delay: 1.6s;
  transform: translateY(100%);
  height: 5rem;
  ${media.tablet`
    margin-bottom: 0;
    margin-top: unset;
    height: 5rem;
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
  height: 100%;
  text-align: center;
  padding-bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  align-items: center;

  animation: 0.6s ${fadeIn} cubic-bezier(0.51, 0.05, 0.38, 1.01);
  animation-fill-mode: forwards;

  animation-delay: 1.8s;
`

const Location = styled.div`
  display: flex;
  flex-direction: column;
`

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
`

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
    margin-right: 0.5rem;
    margin-left: 0.5rem;
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
  text-align: center;
  line-height: 1.5;
`

const SectionFooter = () => (
  <OuterSection>
    <Section id="contact">
      <Location>
        <Title>Contact me</Title>
        <Box>
          <Paragraph>
            Pk103_basit@hotmail.com
            <br />
            +32489645363
          </Paragraph>
        </Box>
      </Location>

      <Contacts>
        <Title>Follow me</Title>
        <List>
          <li>
            <a target="_black" href="https://dribbble.com/BasitPk103">
              <Dribble />
            </a>
          </li>
          <li>
            <a target="_black" href="https://www.behance.net/basitellahi">
              <Behance />
            </a>
          </li>
          <li>
            <a target="_black" href="https://vimeo.com/user33084808">
              <Vimeo />
            </a>
          </li>
        </List>
      </Contacts>
    </Section>
  </OuterSection>
)

export default SectionFooter

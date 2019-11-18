import React from "react"
import styled from "styled-components"
import Bottom from "./Bottom"
import Logo from "./Logo"
import { media } from "../../style-utils"

const OuterSection = styled.div`
  background-color: transparent;
  position: absolute;
  width: 100%;
  position: relative;
  ${media.desktop`
    background-color: transparent;
  `};
  z-index: 1000;
`

const Section = styled.div`
  margin: 0 auto;
  text-align: center;
  padding-top: 1rem;
  padding: 1rem;
  ${media.desktop`
    text-align: left;
    padding-top: 1rem;
  `};
`

const MenuContainer = styled.div`
  float: right;
  margin-top: 30px;
  & > * {
    vertical-align: middle;
  }
`

const Socials = styled.div`
  display: none;
  ${media.desktop`
    line-height: 1;
    text-align: left;
    display: inline-block;
    margin-left:60px;
  `};
`

const SiteLogo = styled(Logo)`
  float: left;
`

const SocialLink = styled.a`
  margin-left: 14px;
  &:first-child {
    margin-left: 0;
  }
`

const SectionHeader = () => (
  <OuterSection>
    <Section>
      <SiteLogo />
      <MenuContainer>
        <Bottom />
      </MenuContainer>
    </Section>
  </OuterSection>
)

export default SectionHeader

import React from "react"
import styled from "styled-components"
import Bottom from "./Bottom"
import Logo from "./Logo"
import { media } from "../../style-utils"

const OuterSection = styled.div`
  background-color: transparent;
  position: absolute;
  width: 100%;
  height: 10%;
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
  ${media.tablet`
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

const SiteLogo = styled(Logo)`
  float: left;
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

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
`

const Section = styled.div`
  margin: 0 auto;
  text-align: center;
  padding-top: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${media.tablet`
    text-align: left;
    padding-top: 1rem;
  `};
`

const MenuContainer = styled.div`
  float: right;
  margin-top: 15px;
  & > * {
    vertical-align: middle;
  }
`

const SiteLogo = styled(Logo)`
  float: left;
  display: flex;
  width: 3rem;
  height: 3rem;
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

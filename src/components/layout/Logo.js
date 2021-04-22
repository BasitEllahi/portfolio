import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import LogoImg from "../../assets/logo.svg"

const ALink = styled(Link)`
  display: flex;
  width: 3rem;
  height: 3rem;
`

const Img = styled.img`
  max-width: 4rem;
`

const Logo = () => (
  <ALink to="/">
    <Img src={LogoImg} alt="Basit.io" />
  </ALink>
)

export default Logo

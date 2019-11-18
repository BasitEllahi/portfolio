import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import LogoImg from '../../assets/logo.svg'

const Img = styled.img`
  max-width: 4rem;
`

const Logo = () => (
  <Link to="/">
    <Img src={LogoImg} alt="Basit.io" />
  </Link>
)

export default Logo

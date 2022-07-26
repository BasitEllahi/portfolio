import React, { useEffect, useRef } from "react"
import styled from "styled-components"

import svgIllustration from "../../../assets/web-illustration.svg"

const ImageContainer = styled.div`
  display: flex;
  max-width: 100%;
`

const Image = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
`

const Illustration = () => {
  return (
    <ImageContainer>
      <Image src={svgIllustration} />
    </ImageContainer>
  )
}

export default Illustration
//       <Animation ref={el => (image = el)} color={props.color} />

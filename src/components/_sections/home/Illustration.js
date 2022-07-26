import React, { useEffect, useRef } from "react"
import styled from "styled-components"

import svgIllustration from "../../../assets/web-illustration.svg"

const Image = styled.img`
  display: flex;
  width: 100%;
  height: 100%100%;
`

const Illustration = () => {
  return (
    <div>
      <Image src={svgIllustration} />
    </div>
  )
}

export default Illustration
//       <Animation ref={el => (image = el)} color={props.color} />

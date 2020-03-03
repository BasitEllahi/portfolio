import React from "react"
import styled from "styled-components"
import { media } from "../../style-utils"

const Icon = styled.svg`
  display: flex;
  width: 1rem;
  height: 1rem;

  ${media.tablet`
    width: 1.3rem;
    height: 1.3rem;
  `};

  & :hover {
    transition: all 0.3s ease;
    fill: #eb4fb3;
  }
`

const Vimeo = () => {
  return (
    <Icon viewBox="0 0 85.36 83.75" width="1em" height="1em">
      <defs>
        <style>{".vimeo-2{fill:#333}"}</style>
      </defs>
      <path
        className="vimeo-2"
        d="M40.3,0C18.1,0,0.1,17.8,0,39.9C-0.1,62,18,80.1,40.2,80.1c21.9,0,40.2-17.9,40.2-39.5
		C80.5,17.9,62.8,0,40.3,0z M61.3,35.9c-3.9,7.7-8.9,14.6-15.5,20.2c-1.7,1.5-3.9,2.4-6,3.3c-2.2,1-4.3,0.2-5.5-1.6
		c-1.4-2-2.6-4.2-3.3-6.5c-1.4-4.2-2.4-8.6-3.6-12.8c-0.2-0.7-0.4-1.3-0.6-2c-1.8-5.1-2.5-5.4-7.3-2.9c-0.6-0.8-1.3-1.6-2.2-2.7
		C20.7,28,24,25,27.5,22.5c4.3-3.1,8.1-1.7,9.4,3.6c1,4.1,1.5,8.3,2.4,12.4c0.4,1.8,0.9,3.6,1.6,5.3c0.9,2.2,2.2,2.5,3.5,0.6
		c2-2.7,3.9-5.6,5.2-8.6c1.7-3.9-0.3-5.9-4.5-5.1c-0.4,0.1-0.7,0.1-1.1,0.1C45,24,51.2,19.4,57.6,20.5c2.9,0.5,4.6,2.2,5.2,5.1
		C63.5,29.2,62.9,32.7,61.3,35.9z"
      />
    </Icon>
  )
}

export default Vimeo

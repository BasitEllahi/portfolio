import React, { useEffect, createRef } from "react"
import lottie from "lottie-web"
import styled from "styled-components"

import svgIllustration from "../../../assets/web-illustration.svg"

import jsonData2 from "../../../assets/json/after_effects_animation.json"

const ImageContainer = styled.div`
  display: flex;
  max-width: 100%;
  width: 100%;
`

const Image = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
`
const Logocontainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

const Illustration = () => {
  const animationContainer = createRef()

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: jsonData2,
    })

    return () => anim.destroy() // optional clean up for unmounting
  }, [])

  return (
    <ImageContainer>
      {/* <Image src={svgIllustration} /> */}
      <Logocontainer ref={animationContainer} />
    </ImageContainer>
  )
}

export default Illustration
//       <Animation ref={el => (image = el)} color={props.color} />

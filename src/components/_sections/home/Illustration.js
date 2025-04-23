import React, { useEffect, useRef, useState } from "react"
import lottie from "lottie-web"
import styled from "styled-components"

import jsonData2 from "../../../assets/json/data.json" // Your Lottie JSON file

const ImageContainer = styled.div`
  display: flex;
  max-width: 100%;
  width: 100%;
`

const Logocontainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.2s ease-out;
`

const Illustration = () => {
  const animationContainer = useRef(null)
  const animRef = useRef(null)

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: jsonData2, // Your isometric factory animation data
    })

    animRef.current = anim

    // Handle mouse movement for slider control
    const handleMouseMove = (e) => {
      // Horizontal movement (adjust position of the slider)
      const progressX = (e.clientX / window.innerWidth) * 100  // Normalize X to 0-100
      const sliderPosition = progressX * 1.5 // Adjust for proper scale

      // Find the slider layer and modify its position using playSegments or goToAndStop
      const sliderLayer = animRef.current.getLayerByName("Slider button/Isometric] [Recovered].ai")
      
      if (sliderLayer) {
        // Set the position of the slider dynamically
        sliderLayer.updateTransform({ x: sliderPosition, y: sliderPosition })
      }

      // Optional: Update other animation properties as needed
    }

    // Adding mouse event listener
    window.addEventListener("mousemove", handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      anim.destroy()
    }
  }, [])

  return (
    <ImageContainer>
      <Logocontainer ref={animationContainer} />
    </ImageContainer>
  )
}

export default Illustration

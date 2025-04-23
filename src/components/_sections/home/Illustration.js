import React, { useEffect, useRef, useState } from "react"
import lottie from "lottie-web"
import styled from "styled-components"

import jsonData2 from "../../../assets/json/data.json"

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
  const currentSpeed = useRef(0)
  const targetSpeed = useRef(0)
  const animRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: jsonData2,
    })

    animRef.current = anim

    // Handle mouse movement for scrubbing and speed control
    const handleMouseMove = e => {
      // Horizontal movement (scrub animation)
      const progress = e.clientX / window.innerWidth
      anim.goToAndStop(progress * anim.totalFrames, true)

      // Vertical movement (control speed/direction)
      const mid = window.innerHeight / 2
      const normalizedY = (e.clientY - mid) / mid
      targetSpeed.current = Math.max(-2, Math.min(2, normalizedY)) // Clamp speed
    }

    // Easing function for smooth speed change
    const updateSpeed = () => {
      const diff = targetSpeed.current - currentSpeed.current
      currentSpeed.current += diff * 0.05 // Smoothing factor
      anim.setSpeed(currentSpeed.current)
      requestAnimationFrame(updateSpeed)
    }

    // Mouse hover interaction to reverse the animation or trigger other effects
    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)

    // Adding event listeners
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    animationContainer.current.addEventListener("mouseenter", handleMouseEnter)
    animationContainer.current.addEventListener("mouseleave", handleMouseLeave)

    // Start the speed update loop
    updateSpeed()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      animationContainer.current.removeEventListener("mouseenter", handleMouseEnter)
      animationContainer.current.removeEventListener("mouseleave", handleMouseLeave)
      anim.destroy()
    }
  }, [])

  useEffect(() => {
    if (animRef.current) {
      // Reverse animation on hover
      if (isHovered) {
        animRef.current.setDirection(-1) // Reverse
      } else {
        animRef.current.setDirection(1) // Forward
      }
    }
  }, [isHovered])

  return (
    <ImageContainer>
      <Logocontainer ref={animationContainer} />
    </ImageContainer>
  )
}

export default Illustration

import React, { useEffect, useRef } from "react"
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
`

const Illustration = () => {
  const animationContainer = useRef(null)
  const currentSpeed = useRef(0)
  const targetSpeed = useRef(0)
  const animRef = useRef(null)

  useEffect(() => {
    animRef.current = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: jsonData2,
    })

    const handleMouseMove = e => {
      const midpoint = window.innerHeight / 2
      const delta = (e.clientY - midpoint) / midpoint // range [-1, 1]
      targetSpeed.current = delta // map to animation speed
    }

    const animate = () => {
      const diff = targetSpeed.current - currentSpeed.current
      currentSpeed.current += diff * 0.1 // easing factor (0.1 = smooth, <1)
      if (animRef.current) {
        animRef.current.setSpeed(currentSpeed.current)
      }
      requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      animRef.current.destroy()
    }
  }, [])

  return (
    <ImageContainer>
      <Logocontainer ref={animationContainer} />
    </ImageContainer>
  )
}

export default Illustration

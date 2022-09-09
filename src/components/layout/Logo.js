import { Link } from "gatsby"
import React, { useEffect, createRef } from "react"
import lottie from "lottie-web"
import styled from "styled-components"

import jsonData from "../../assets/json/logo.json"
// import jsonData2 from "../../assets/json/after_effects_animation.json"

// import LogoImg from "../../assets/logo.svg"

const ALink = styled(Link)`
  display: flex;
  width: 3rem;
  height: 3rem;
`

const Logocontainer = styled.div`
  max-width: 4rem;
`

const Logo = () => {
  const animationContainer = createRef()

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: jsonData,
    })

    return () => anim.destroy() // optional clean up for unmounting
  }, [])

  return (
    <ALink to="/">
      {/* <Img src={LogoImg} alt="Basit.io" /> */}
      <Logocontainer ref={animationContainer} />
    </ALink>
  )
}

export default Logo

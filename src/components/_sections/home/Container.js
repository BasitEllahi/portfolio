import React, { useEffect, useRef } from "react"
import { TimelineLite, Power3 } from "gsap"
import styled from "styled-components"

const Animation = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: right;
  top: 0;
  left: 0;
  background-color: ${props => props.color};
  z-index: 1;
`

const Container = props => {
  let image = useRef(null)
  const tl = new TimelineLite({ delay: 1 })

  useEffect(() => {
    // Images Vars

    const ContainerFirst = image

    // Content Animation

    // tl.staggerTo(ContainerFirst, 1, { width: "0%", ease: Power3.easeInOut })

    return () => {
      //tl.kill();
      tl.staggerTo(ContainerFirst, props.time, { xPercent: 100, ease: Power3.easeInOut });
    }
  }, [tl])

  return <Animation ref={el => (image = el)} color={props.color} />
}

export default Container

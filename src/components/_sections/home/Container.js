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
  background-color: #ff1d25;
  z-index: 1;
`

const Container = () => {
  let image = useRef(null)
  const tl = new TimelineLite({ delay: 1 })

  useEffect(() => {
    // Images Vars

    const ContainerFirst = image

    // Content Animation

    // tl.staggerTo(ContainerFirst, 1, { width: "0%", ease: Power3.easeInOut })

    tl.to(
      ContainerFirst,
      1.6,
      { xPercent: 100, ease: Power3.easeInOut },
      "Start"
    )
    /*
    tl.from(ContainerFirst, 1, {
      scaleX: 0,
      transformOrigin: "left",
      ease: Power3.easeInOut,
    }).to(
      ContainerFirst,
      1,
      { scaleX: 0, transformOrigin: "right", ease: Power3.easeInOut },
      "reveal"
    )
    */
  }, [tl])

  return <Animation ref={el => (image = el)} />
}

export default Container

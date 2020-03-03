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
const Rect = styled.div`
  position: absolute;
  width: 100%;
  height: ${props => props.height}vh;
  transform-origin: right;
  top: 0;
  left: 0;
  background-color: ${props => props.color};
  z-index: ${props => props.index};
`

const Container = props => {
  let image = useRef(null)

  let rect1 = useRef(null)

  let rect2 = useRef(null)

  let rect3 = useRef(null)

  let rect4 = useRef(null)
  const tl = new TimelineLite({ delay: props.delay })

  useEffect(() => {
    // Images Vars

    const firstRect = rect1
    const secondRect = rect2
    const thirdRect = rect3
    const fourthRect = rect4

    // Content Animation

    // tl.staggerTo(ContainerFirst, 1, { width: "0%", ease: Power3.easeInOut })
    // tl.to(ContainerFirst, props.time, { xPercent: 100, ease: Power3.easeInOut })
    tl.to(firstRect, props.time, { xPercent: 100, ease: Power3.easeInOut }, 0.4)
    tl.to(
      secondRect,
      props.time,
      { xPercent: 100, ease: Power3.easeInOut },
      0.3
    )
    tl.to(thirdRect, props.time, { xPercent: 100, ease: Power3.easeInOut }, 0.2)
    tl.to(
      fourthRect,
      props.time,
      { xPercent: 100, ease: Power3.easeInOut },
      0.1
    )

    /*
    return () => {
      tl.kill(); 
    }
    */
  }, [tl])

  return (
    <div>
      <Rect
        ref={el => (rect1 = el)}
        height={25}
        index={5}
        color={props.color}
      />
      <Rect
        ref={el => (rect2 = el)}
        height={50}
        index={4}
        color={props.color}
      />
      <Rect
        ref={el => (rect3 = el)}
        height={75}
        index={3}
        color={props.color}
      />
      <Rect
        ref={el => (rect4 = el)}
        height={100}
        index={2}
        color={props.color}
      />
    </div>
  )
}

export default Container
//       <Animation ref={el => (image = el)} color={props.color} />

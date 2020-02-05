import React, { useEffect, useRef } from "react"
import { TimelineLite, Power3 } from "gsap"
import styled, { keyframes } from "styled-components"

const scale = keyframes`
  0% {
    transform: scale(0)
  }
  85% {
    transform: scale(1.4)
  }
  100% {
    transform: scale(1)
  }
`
const scaleBlue = keyframes`
  0% {
    transform: scale(0);
    transform: translateY(180px);
  }
  50% {
    transform: translateY(0px);
    transform: translateX(0px);
    transform: scale(1.4)
  }
  70%{
    transform: scale(1);
  }
  100% {
    transform: translateX(-120px);
  }
`

const transform = keyframes`
  0% {
    transform: translateY(0px)
  }
  100% {
    transform: translateY(620px)
  }
`
const transformPink = keyframes`
  0% {
    transform: translateY(0)
  }
  100% {
    transform: translateY(-620px)
  }
`

const trapezium = keyframes`
  0% {
    transform: scale(1)
  }
  100% {
    transform: scale(2)
  }
`

const stroke = keyframes`
  from {
      stroke-dashoffset: 1000;
  }
  to {
      stroke-dashoffset: 0;
  }
`
const strokeCircle = keyframes`
  0% {
      transform: scale(0);
  }
  40% {
      stroke-dashoffset: 1000;
  }
  100% {
      stroke-dashoffset: 0;
      transform: scale(1);
  }
`

const Animation = styled.svg`
  animation: 1s cubic-bezier(0.51, 0.05, 0.38, 1.01);
  animation-fill-mode: forwards;
  transform-origin: 50% 50%;
  width: 100%;
  height: 100%;

  & .rect1 {
    animation: 1.5s ${transform} cubic-bezier(0.51, 0.05, 0.38, 1.01);
    animation-fill-mode: forwards;
    animation-delay: 1.5s;
    fill: #176bfc;
  }
  & .rect2 {
    animation: 1.5s ${transform} cubic-bezier(0.51, 0.05, 0.38, 1.01);
    animation-fill-mode: forwards;
    animation-delay: 1.9s;
    fill: #176bfc;
  }
  & .rect3 {
    animation: 1.5s ${transform} cubic-bezier(0.51, 0.05, 0.38, 1.01);
    animation-fill-mode: forwards;
    animation-delay: 2.1s;
    fill: #176bfc;
  }
  & .rect4 {
    animation: 1.5s ${transform} cubic-bezier(0.51, 0.05, 0.38, 1.01);
    animation-fill-mode: forwards;
    animation-delay: 2.3s;
    fill: #176bfc;
  }
`

const SvgBackgroundRect = () => {
  let rect = useRef(null)
  const tl = new TimelineLite({ delay: 0.1 })

  useEffect(() => {
    tl.to(
      rect,
      1,
      {
        scale: 2,
        svgOrigin: "250 250",
        ease: Power3.easeInOut,
      },
      2
    )
  }, [tl])

  return (
    <Animation id="rects_svg__animation" width="100%">
      <defs>
        <style>{".rects_svg__cls-1{fill:#176bfc}"}</style>
      </defs>
      <path className="rect1" d="M.61-2H93v544H.61z" ref={el => (rect = el)} />
      <path className="rect2" d="M92.21-2H186v544H92.21z" />
      <path className="rect3" d="M183.81-2H279v544h-95.19z" />
      <path className="rect4" d="M275.41-2H367v544h-91.59z" />
    </Animation>
  )
}

export default SvgBackgroundRect

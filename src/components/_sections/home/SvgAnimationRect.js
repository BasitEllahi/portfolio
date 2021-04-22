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
    <Animation viewBox="0 0 670 691" width="1em" height="1em">
      <defs>
        <style>
          {
            ".design_svg__cls-1{fill:#2b2d2c}.design_svg__cls-2{fill:#fff}.design_svg__cls-3{fill:none;stroke:#2b2d2c;stroke-miterlimit:10;stroke-width:.5px}.design_svg__cls-5{fill:#176bfc}"
          }
        </style>
      </defs>
      <g id="design_svg__background">
        <circle className="design_svg__cls-1" cx={481.5} cy={258.5} r={6} />
        <circle className="design_svg__cls-2" cx={347.5} cy={341.5} r={170} />
        <circle className="design_svg__cls-3" cx={348.5} cy={341.5} r={146} />
        <circle
          cx={350.5}
          cy={343.5}
          r={125}
          stroke="#fff"
          strokeWidth={0.5}
          strokeMiterlimit={10}
          fill="#fff"
        />
      </g>
      <g id="design_svg__Layer_2" data-name="Layer 2">
        <path
          className="design_svg__cls-5"
          transform="rotate(90 336 351)"
          d="M300 315h72v72h-72z"
        />
        <circle className="design_svg__cls-1" cx={321} cy={198} r={10} />
        <path fill="#ffdc21" d="M233 215h227v252H233z" />
        <path
          d="M278.8 397.51a79.5 79.5 0 11115.52-109.25"
          strokeWidth={35}
          strokeMiterlimit={10}
          stroke="#2b2d2c"
          fill="none"
        />
        <circle
          cx={333.5}
          cy={343.5}
          r={79}
          stroke="#fff"
          strokeWidth={0.5}
          strokeMiterlimit={10}
          fill="none"
        />
        <path className="design_svg__cls-2" d="M314 273h134v150H314z" />
        <path
          className="design_svg__cls-5"
          d="M313.12 344.73L223.7 422.5h89.8l-.38-77.77z"
        />
        <path className="design_svg__cls-1" d="M413 192h32v32h-32z" />
        <circle className="design_svg__cls-1" cx={402} cy={323} r={3} />
        <circle className="design_svg__cls-2" cx={255} cy={353} r={3} />
        <circle
          cx={388}
          cy={385}
          r={21}
          strokeWidth={22}
          stroke="#fff"
          strokeMiterlimit={10}
          fill="none"
        />
        <circle
          cx={388}
          cy={385}
          r={21}
          strokeWidth={6}
          stroke="#176bfc"
          strokeMiterlimit={10}
          fill="none"
        />
        <path
          strokeWidth={2}
          stroke="#176bfc"
          strokeMiterlimit={10}
          fill="none"
          d="M429 306V176"
        />
        <circle className="design_svg__cls-3" cx={347.5} cy={345.5} r={59} />
        <path fill="#ff3db7" d="M265 283h127v18H265z" />
      </g>
    </Animation>
  )
}

export default SvgBackgroundRect

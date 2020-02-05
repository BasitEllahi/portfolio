import React, { useEffect, useRef } from "react"
import { TimelineLite, Power3, Power4 } from "gsap"
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

const scaleTriangle = keyframes`
  0% {
    transform: translateX(0px);
  }
  25% {
    transform: translateX(30px) ;
  }
  75% {
    transform: translateX(30px);
  }
  100% {
    transform: translateX(0px);
  }
`

const transform = keyframes`
  0% {
    transform: translateX(0px);
  }
  25% {
    transform: translateX(-80px);
  }
  75% {
    transform: translateX(-80px);
  }
  100% {
    transform: translateX(0px);
  }
`
const transformPink = keyframes`
  0% {
    transform: translateX(-120px)
  }
  25% {
    transform: translateX(0px);
  }
  75% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(-120px)
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
  width: 60%;
  height: 60%;

  & .rect-back {
    animation: 2s ${scale} cubic-bezier(0.51, 0.05, 0.38, 1.01);
    animation-fill-mode: forwards;
    animation-delay: 1s;
  }

  & .white-rect {
    animation: 3s ${transform} cubic-bezier(0.51, 0.05, 0.38, 1.01) infinite;
    animation-fill-mode: forwards;
    animation-delay: 1.7s;
  }

  & .pink-rect {
    animation: 2s ${transformPink} cubic-bezier(0.51, 0.05, 0.38, 1.01) infinite;
    animation-fill-mode: forwards;
    animation-delay: 1.5s;
  }

  & .black-stroke {
    animation: 1.5s ${stroke} cubic-bezier(0.42, 0, 0.58, 1);
    animation-fill-mode: forwards;
    animation-delay: 1.8s;
    stroke-dashoffset: 1000;
    stroke-dasharray: 1000;
  }

  & .trapezium {
    animation: 1.5s ${trapezium} cubic-bezier(0.42, 0, 0.58, 1);
    animation-fill-mode: forwards;
    animation-delay: 1.8s;
    transform-origin: 50% 50%;
  }

  & .pink-circle {
    transform-origin: center;
    transform-box: fill-box;
    fill: white;
  }
  & .blue-rect {
    animation: 1.6s ${scaleBlue} cubic-bezier(0.42, 0, 0.58, 1);
    animation-fill-mode: forwards;
    animation-delay: 1.6s;
    transform-origin: center;
    transform-box: fill-box;
    fill: #176bfc;
  }

  & .triangle {
    animation: 2s ${scaleTriangle} cubic-bezier(0.51, 0.05, 0.38, 1.01) infinite;
    animation-fill-mode: forwards;
    animation-delay: 1.7s;
    transform-origin: center;
    transform-box: fill-box;
    fill: #176bfc;
  }

  & .stroke-blue {
    animation: 1.3s ${strokeCircle} cubic-bezier(0.36, 0.07, 0.49, 1);
    animation-fill-mode: forwards;
    animation-delay: 1.8s;
    stroke-dashoffset: 1000;
    stroke-dasharray: 1000;
    transform-origin: center;
    transform-box: fill-box;
  }

  & .stroke-white {
    animation: 1.3s ${strokeCircle} cubic-bezier(0.36, 0.07, 0.49, 1);
    animation-fill-mode: forwards;
    animation-delay: 2s;
    stroke-dashoffset: 1000;
    stroke-dasharray: 1000;
    transform-origin: center;
    transform-box: fill-box;
  }

  & .line {
    transform-origin: center;
    transform-box: fill-box;
  }
`

const SvgBackgroundShapes = () => {
  let rect = useRef(null)
  const tl = new TimelineLite({ delay: 0.1 })

  useEffect(() => {
    const eyeBall = document.querySelector(".white-rect")

    const pupil = document.querySelector(".line")
    const circle = document.querySelector(".pink-circle")

    const eyeArea = eyeBall.getBoundingClientRect()
    const pupilArea = pupil.getBoundingClientRect()
    const circleArea = circle.getBoundingClientRect()

    const R = 5
    const r = pupilArea.width
    const rCircle = circleArea.width
    const centerX = eyeArea.left + R
    const centerY = eyeArea.top + R

    console.warn(R, r)

    console.warn(eyeBall)
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

    document.addEventListener("mousemove", e => {
      const x = e.clientX - centerX
      const y = e.clientY - centerY
      const theta = Math.atan2(y, x)
      const angle = (theta * 180) / Math.PI + 20

      pupil.style.transform = `translateX(${`${R -
        r}px`}) rotate(${`${angle}deg`})`
      pupil.style.transformOrigin = `${`${r}px`} center`

      circle.style.transform = `translateX(${`${R -
        rCircle}px`}) rotate(${`${angle}deg`})`
      circle.style.transformOrigin = `${`${r}px`} center`
    })
  }, [tl])

  return (
    <Animation
      id="background-shapes_svg__animation"
      viewBox="0 0 342.24 342.24"
      width="50%"
      height="50%"
    >
      <defs>
        <style>
          {
            ".background-shapes_svg__cls-1{fill:#176bfc}.background-shapes_svg__cls-5{fill:#ff3db7}"
          }
        </style>
      </defs>
      <path
        id="background-shapes_svg__rect-back"
        className="background-shapes_svg__cls-1 rect-back"
        d="M259 353h72v72h-72z"
        ref={el => (rect = el)}
      />
      <path
        className="yellow"
        id="yellowBox"
        transform="rotate(45 497.236 114.032)"
        fill="#ffdc21"
        d="M186 264h242v242H186z"
      />
      <path
        d="M101.92 221.63a79.5 79.5 0 11115.52-109.25"
        className="black-stroke"
        stroke="#2b2d2c"
        strokeWidth={35}
        fill="none"
        strokeMiterlimit={10}
      />
      <path
        id="background-shapes_svg__rect-middle"
        fill="#fff"
        className="white-rect"
        d="M137.12 97.12h134v150h-134z"
      />
      <path
        id="background-shapes_svg__rechthoek"
        className="background-shapes_svg__cls-5 pink-rect"
        d="M88.12 107.12h127v18h-127z"
      />
      <path
        id="background-shapes_svg__blauw-driehoek"
        className="triangle"
        d="M136.24 168.85l-89.42 77.77h89.8l-.38-77.77z"
      />
      <path
        id="background-shapes_svg__rect-small"
        className="blue-rect "
        d="M236.12 16.12h32v32h-32z"
      />
      <circle
        id="background-shapes_svg__kleine-circkel"
        className="pink-circle"
        cx={86.12}
        cy={45.12}
        r={11}
      />
      <circle
        id="background-shapes_svg__stroke-white"
        cx={211.12}
        cy={209.12}
        r={21}
        stroke="#ffdc21"
        strokeWidth={22}
        fill="none"
        strokeMiterlimit={10}
        className="stroke-white"
      />
      <circle
        id="background-shapes_svg__stroke-blue"
        cx={211.12}
        cy={209.12}
        r={21}
        strokeWidth={6}
        stroke="#176bfc"
        fill="none"
        strokeMiterlimit={10}
        className="stroke-blue"
      />
      <path
        id="background-shapes_svg__line"
        strokeWidth={2}
        stroke="#176bfc"
        fill="none"
        strokeMiterlimit={10}
        d="M252.12 130.12V.12"
        className="line"
      />
    </Animation>
  )
}

export default SvgBackgroundShapes

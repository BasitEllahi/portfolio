import React, { useEffect, useRef } from "react"
import { TimelineLite, Power3, Power4 } from "gsap"
import styled, { keyframes } from "styled-components"

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const scale = keyframes`
  0% {
    transform: scale(0)
  }
  100% {
    transform: scale(1)
  }
`
const clip = keyframes`
  0% {
    clip-path: inset(0 0 0 0);
  }
  100% {
    clip-path: inset(0 80% 0 0);
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
    clip-path: inset(0 0 0 0);
  }
  25% {
    transform: translateX(-80px);
    clip-path: inset(0 50% 0 0);
  }
  50% {
    transform: translateX(0px);
    clip-path: inset(0 0 0 0);
  }
  75% {
    transform: translateX(-80px);
    clip-path: inset(0 50% 0 0);
  }
  100% {
    transform: translateX(0px);
    clip-path: inset(0 0 0 0);
  }
`
const textClip = keyframes`
  0% {
    clip-path: inset(0 0 0 0);
  }
  25% {
    clip-path: inset(0 50% 0 0);
  }
  50% {
    clip-path: inset(0 0 0 0);
  }
  75% {
    clip-path: inset(0 50% 0 0);
  }
  100% {
    clip-path: inset(0 0 0 0);
  }
`

const transformPink = keyframes`
  0% {
    transform: translateX(-30px);
    clip-path: inset(0 30% 0 30%);
  }
  25% {
    transform: translateX(0px);
    clip-path: inset(0 0 0 0);
  }
  75% {
    transform: translateX(0px);
    clip-path: inset(0 0 0 0);
  }
  100% {
    transform: translateX(-30px);
    clip-path: inset(0 30% 0 30%);
  }
`

const path = keyframes`
  from {
    offset-distance: 0%;
  }
  to {
    offset-distance: 100%;
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
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 0.3 ease;

  & .yellow-rect {
    animation: 8s ${rotate} linear infinite;
    animation-fill-mode: forwards;
    animation-delay: 1s;
    transform-origin: center center;
    transform-box: fill-box;
  }

  & .big-circle {
    animation: 1.8s ${scale} cubic-bezier(0.51, 0.05, 0.38, 1.01);
    animation-fill-mode: forwards;
    animation-delay: 1.2s;
    transform-origin: center center;
    transform-box: fill-box;
  }

  & .black-rect {
    animation: 1.8s ${scale} cubic-bezier(0.51, 0.05, 0.38, 1.01);
    animation-fill-mode: forwards;
    animation-delay: 1.2s;
    transform-origin: center center;
    transform-box: fill-box;
  }

  & .black-circle-1 {
    animation: 20s ${path} linear infinite;
    animation-fill-mode: forwards;
    animation-delay: 1.8s;
    transform-origin: center center;
    transform-box: fill-box;
    offset-path: path("M202.5,341.5a146,146 0 1,0 292,0a146,146 0 1,0 -292,0");
    offset-distance: 0%;
  }

  & .white-circle-2 {
    animation: 15s ${path} linear infinite;
    animation-fill-mode: forwards;
    animation-delay: 1.8s;
    transform-origin: center center;
    transform-box: fill-box;
    fill: white;
    mix-blend-mode: difference;
    offset-path: path("M254.5,343.5a79,79 0 1,0 158,0a79,79 0 1,0 -158,0");
    offset-distance: 0%;
  }

  & .white-rect {
    animation: 3s ${transform} cubic-bezier(0.51, 0.05, 0.38, 1.01) infinite;
    animation-fill-mode: forwards;
  }

  & .text-group {
    animation: 3s ${textClip} cubic-bezier(0.51, 0.05, 0.38, 1.01) infinite;
    animation-fill-mode: forwards;
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
    fill: #176bfc;
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

const Title = styled.text`
  position: absolute;
  font-size: 1rem;
  font-family: bebas;
  color: black;
`

const SvgBackgroundShapes = () => {
  // let rect = useRef(null)
  const tl = new TimelineLite({ delay: 0.1 })

  useEffect(() => {
    const text = document.querySelector(".svgText")
    const rect = document.querySelector(".mainSvg")
    const circle = document.querySelector(".big-circl-stroke")
    const button = document.querySelector(".link-content-line")

    const words = [
      {
        name: "UI UX",
        color: "#336AF3",
        colorStroke: "white",
      },
      {
        name: "HTML CSS",
        color: "#EB4FB3",
        colorStroke: "white",
      },
      {
        name: "ANIMATION",
        color: "#F9DD51",
        colorStroke: "black",
      },
    ]

    let loopItem = 0

    const changeText = () => {
      loopItem += 1
      if (loopItem === words.length) {
        loopItem = 0
      }
      rect.style.backgroundColor = words[loopItem].color
      circle.style.stroke = words[loopItem].colorStroke
      text.innerHTML = words[loopItem].name
      button.style.backgroundColor = words[loopItem].color
      button.style.transition = "all 0.6s"
      rect.style.transition = "all 0.6s"
    }

    const interval = setInterval(() => {
      changeText()
    }, 1550)

    return () => clearInterval(interval)

    /*
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
    */
  }, [tl])

  return (
    <Animation
      id="background-shapes_svg__animation"
      viewBox="0 0 670 691"
      width="80%"
      height="80%"
      className="mainSvg"
    >
      <defs>
        <style>
          {
            ".design_svg__cls-1{fill:#2b2d2c}.design_svg__cls-2{fill:#fff}.design_svg__cls-3{fill:none;stroke:#2b2d2c;stroke-miterlimit:10;stroke-width:.5px}.design_svg__cls-5{fill:#176bfc}"
          }
        </style>
      </defs>
      <g id="design_svg__background">
        <circle
          cx={350.5}
          cy={343.5}
          r={250}
          stroke="#fff"
          strokeWidth={0.5}
          strokeMiterlimit={10}
          fill="none"
          className="big-circl-stroke"
        />
        <circle
          cx={347.5}
          cy={341.5}
          r={170}
          className="big-circle"
          fill="white"
        />
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
        <path transform="rotate(90 336 351)" d="M300 315h72v72h-72z" />
        <circle
          className="black-circle-1"
          fill="black"
          cx={321}
          cy={198}
          r={10}
        />
        <path
          fill="#ffdc21"
          d="M233 215h227v252H233z"
          className="yellow-rect"
        />
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
          className="white-circle"
        />
        <g className="text-group">
          <path d="M314 273h134v150H314z" className="white-rect" fill="white" />
          <Title className="svgText" x={320.5} y={350.5}>
            Designer
          </Title>
        </g>
        <path
          className="trapezium"
          d="M313.12 344.73L223.7 422.5h89.8l-.38-77.77z"
        />
        <path d="M413 192h32v32h-32z" className="black-rect" />
        <circle
          cx={402}
          cy={323}
          r={3}
          className="black-circle-3"
          fill="green"
        />
        <circle className="white-circle-2" cx={255} cy={353} r={3} />
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
        <path fill="#ff3db7" d="M265 283h127v18H265z" className="pink-rect" />
      </g>
    </Animation>
  )
}

export default SvgBackgroundShapes

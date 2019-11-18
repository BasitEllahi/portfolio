import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"

import "./link.scss"

import {
  handleMouseDown,
  handleMouseEnter,
  handleMouseMove,
  handleMouseOut,
  handleMouseUp,
  handleMouseHoverEnter,
} from "../../utils/mouse"

const MainSection = styled.div`
  display: flex;
`

const Cursor = () => {
  const bigMouseCircle = useRef(null)
  const smallMouseCircle = useRef(null)

  useEffect(() => {
    // Bind the event listener
    document.addEventListener(
      "mousemove",
      handleMouseMove(bigMouseCircle, smallMouseCircle)
    )
    document.addEventListener(
      "mousedown",
      handleMouseDown(bigMouseCircle, smallMouseCircle)
    )
    document.addEventListener(
      "mouseup",
      handleMouseUp(bigMouseCircle, smallMouseCircle)
    )
    document.addEventListener(
      "mouseout",
      handleMouseOut(bigMouseCircle, smallMouseCircle)
    )
    document.addEventListener(
      "mouseenter",
      handleMouseEnter(bigMouseCircle, smallMouseCircle)
    )
    document.addEventListener(
      "mouseover",
      handleMouseHoverEnter(bigMouseCircle, smallMouseCircle)
    )

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener(
        "mousemove",
        handleMouseMove(bigMouseCircle, smallMouseCircle)
      )
      document.removeEventListener(
        "mousedown",
        handleMouseDown(bigMouseCircle, smallMouseCircle)
      )
      document.removeEventListener(
        "mouseup",
        handleMouseUp(bigMouseCircle, smallMouseCircle)
      )
      document.removeEventListener(
        "mouseout",
        handleMouseOut(bigMouseCircle, smallMouseCircle)
      )
      document.removeEventListener(
        "mouseenter",
        handleMouseEnter(bigMouseCircle, smallMouseCircle)
      )
      document.removeEventListener(
        "mouseover",
        handleMouseHoverEnter(bigMouseCircle, smallMouseCircle)
      )
    }
  })

  return (
    <MainSection>
      <div className="cursor">
        <div ref={bigMouseCircle} className="cursor__ball cursor__ball--big" />
        <div
          ref={smallMouseCircle}
          className="cursor__ball cursor__ball--small"
        />
      </div>
    </MainSection>
  )
}

export default Cursor

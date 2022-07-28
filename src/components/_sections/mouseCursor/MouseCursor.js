/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line import/no-duplicates
import React from "react"
// eslint-disable-next-line import/no-duplicates
import { useEffect, useState, useRef} from "react"
import { motion } from "framer-motion"

function MouseCursor(props) {
  const { hover, location } = props
  const myRef = useRef({
    location: null,
  })
  const [mousePosition, setMousePosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  })
  const [cursorVariant, setCursorVariant] = useState("default")

  const textEnter = () => setCursorVariant("text")
  const textLeave = () => setCursorVariant("default")

  const handleLinkHoverEvents = () => {
    window.document.querySelectorAll("a").forEach(el => {
      el.addEventListener("mouseover", () => textEnter())
      el.addEventListener("mouseout", () => textLeave())
    })
    window.document.querySelectorAll("button").forEach(el => {
      el.addEventListener("mouseover", () => textEnter())
      el.addEventListener("mouseout", () => textLeave())
    })

    window.document.querySelectorAll("img").forEach(el => {
      el.addEventListener("mouseover", () => textEnter())
      el.addEventListener("mouseout", () => textLeave())
    })
  }

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", mouseMove)
    handleLinkHoverEvents()

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  })

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 1,
      width: 1,
    },
    text: {
      height: 1,
      width: 1,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      mixBlendMode: "difference",
    },
  }

  const variantsHover = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      mixBlendMode: "difference",
    },
  }

  return (
    <motion.div
      ref={myRef}
      className="cursor"
      variants={hover ? variantsHover : variants}
      animate={cursorVariant}
    />
  )
}

export default MouseCursor

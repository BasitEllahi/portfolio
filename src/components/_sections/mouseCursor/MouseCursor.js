/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line import/no-duplicates
import React from "react"
// eslint-disable-next-line import/no-duplicates
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

function MouseCursor(props) {
  const { hover } = props
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })
  const [cursorVariant, setCursorVariant] = useState("default")

  const textEnter = () => setCursorVariant("text")
  const textLeave = () => setCursorVariant("default")

  const handleLinkHoverEvents = () => {
    window.document.querySelectorAll("a").forEach(el => {
      console.warn(el)
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
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 1,
      width: 1,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      mixBlendMode: "difference",
    },
  }

  const variantsHover = {
    default: {
      x: mousePosition.x - 1,
      y: mousePosition.y - 1,
      height: 0,
      width: 0,
    },
    text: {
      height: 100,
      width: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      mixBlendMode: "difference",
    },
  }

  return (
    <motion.div
      className="cursor"
      variants={hover ? variantsHover : variants}
      animate={cursorVariant}
    />
  )
}

export default MouseCursor

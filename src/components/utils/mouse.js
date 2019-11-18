import { gsap } from "gsap"

const customMouse = `pointer`

export const handleMouseMove = (bigMouseCircle, smallMouseCircle) => e => {
  gsap.to(bigMouseCircle.current, {
    duration: 0.3,
    x: e.clientX - 19,
    y: e.clientY - 19,
  })
  gsap.to(smallMouseCircle.current, {
    duration: 0.1,
    x: e.clientX - 4,
    y: e.clientY - 4,
  })
}

export const handleMouseDown = (bigMouseCircle, smallMouseCircle) => e => {
  gsap.to(bigMouseCircle.current, {
    duration: 0.3,
    delay: 0.02,
    scale: 0.8,
  })
  gsap.to(smallMouseCircle.current, { duration: 0.3, scale: 0.8 })
}

export const handleMouseUp = (bigMouseCircle, smallMouseCircle) => e => {
  gsap.to(bigMouseCircle.current, {
    duration: 1,
    delay: 0.06,
    ease: "elastic(1, 0.3)",
    scale: 1,
  })
  gsap.to(smallMouseCircle.current, {
    duration: 1,
    ease: "elastic(1, 0.3)",
    scale: 1,
  })
}

export const handleMouseOut = (bigMouseCircle, smallMouseCircle) => e => {
  handleMouseMove(bigMouseCircle, smallMouseCircle)
  // eslint-disable-next-line no-param-reassign
  e = e ? e : window.event
  const from = e.relatedTarget || e.toElement

  if (!from || from.nodeName === "HTML") {
    gsap.to(smallMouseCircle.current, {
      duration: 0.2,
      ease: "elastic.out(1, 0.75)",
      css: {
        scale: 0,
        opacity: 0,
      },
    })
    gsap.to(bigMouseCircle.current, {
      duration: 0.2,
      ease: "elastic.out(1, 0.75)",
      css: {
        scale: 0,
        opacity: 0,
      },
    })
  }

  if (window.getComputedStyle(e.target).cursor === customMouse) {
    gsap.to(bigMouseCircle.current, {
      duration: 1.5,
      ease: "elastic.out(1, 0.75)",
      css: {
        scale: 1,
        borderColor: "black",
        background: "transparent",
        mixBlendMode: "normal",
      },
    })
    gsap.to(smallMouseCircle.current.parentElement, {
      duration: 2,
      ease: "elastic.out(1, 0.75)",
      css: {
        mixBlendMode: "normal",
        scale: 1,
      },
    })
    gsap.to(smallMouseCircle.current, {
      duration: 1.5,
      ease: "elastic.out(1, 0.75)",
      css: {
        background: "black",
        scale: 1,
      },
    })
  }
}

export const handleMouseEnter = (bigMouseCircle, smallMouseCircle) => e => {
  handleMouseMove(bigMouseCircle, smallMouseCircle)
  e = e ? e : window.event
  const from = e.relatedTarget || e.toElement

  if (from || from.nodeName === "HTML") {
    gsap.to(smallMouseCircle.current, {
      duration: 0.2,
      scale: 1,
      opacity: 1,
    })
    gsap.to(bigMouseCircle.current, {
      duration: 0.2,
      scale: 1,
      opacity: 1,
    })
  }
}

export const handleMouseHoverEnter = (
  bigMouseCircle,
  smallMouseCircle
) => e => {
  let scaled = 6

  if (e.target.id === "home-illustration") {
    scaled = 16
  } else {
    scaled = 6
  }
  console.warn(window.getComputedStyle(e.target).cursor)
  if (window.getComputedStyle(e.target).cursor === customMouse) {
    handleMouseMove(bigMouseCircle, smallMouseCircle)
    gsap.to(bigMouseCircle.current, {
      duration: 2,
      ease: "elastic.out(1, 0.3)",
      css: {
        scale: 1,
        borderColor: "transparent",
      },
    })
    gsap.to(smallMouseCircle.current.parentElement, {
      duration: 2,
      ease: "elastic.out(1, 0.5)",
      css: {
        mixBlendMode: "difference",
      },
    })
    gsap.to(smallMouseCircle.current, {
      duration: 2,
      ease: "elastic.out(1, 0.5)",
      css: {
        scale: scaled,
        background: "white",
      },
    })
  }
}

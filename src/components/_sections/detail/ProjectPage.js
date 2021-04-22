import React, { useEffect, useRef } from "react"
import { TimelineLite, TweenMax, Power3, gsap } from "gsap"

import "./App.scss"

function App() {
  let content = useRef(null)
  const tl = new TimelineLite({ delay: 0.8 })

  useEffect(() => {
    // Images Vars

    // content vars
    const headlineFirst = content.children[0].children[0]
    const headlineSecond = headlineFirst.nextSibling
    const headlineThird = headlineSecond.nextSibling
    const contentP = content.children[1]

    // Content Animation

    tl.staggerTo(
      [headlineFirst.children, headlineSecond.children, headlineThird.children],
      1,
      {
        y: 0,
        ease: Power3.easeOut,
      },
      0.15,
      "Start"
    ).to(contentP, 1, { y: 0, opacity: 1, ease: Power3.easeOut }, 0.5)

    /*
    gsap.to(headlineFirst.children, {
      y: 0,
      ease: Power3.easeOut,
      duration: 1,
      delay: 0.8,
    })
    gsap.to(headlineSecond.children, {
      y: 0,
      ease: Power3.easeOut,
      duration: 1,
      delay: 0.8,
    })
    */
  }, [tl])

  return (
    <div className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={el => (content = el)}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    Relieving the burden
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    of disease caused
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">by behaviors.</div>
                </div>
              </h1>
              <p>
                Better treats serious cardiometabolic diseases to transform
                lives and reduce healthcare utilization through the use of
                digital therapeutics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

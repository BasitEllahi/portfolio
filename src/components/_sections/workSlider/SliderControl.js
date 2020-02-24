/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable func-names */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-rest-params */
import React from "react"

import "./slider.scss"

const SliderControl = ({ type, title, handleClick }) => {
  console.warn(type)

  return (
    <button
      className={`btn btn--${type}`}
      title={title}
      onClick={handleClick}
      type="button"
    >
      <svg className="icon" viewBox="0 0 24 24">
        <path
          fill="black"
          d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
        />
      </svg>
    </button>
  )
}

export default SliderControl

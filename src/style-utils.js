const { css } = require("styled-components")

const sizes = {
  xlDesltop: 1640,
  lgDesktop: 1300,
  midDesktop: 1100,
  desktop: 992,
  tablet: 768,
  phablet: 500,
  phoneXL: 414,
}

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `

  return acc
}, {})

module.exports = {
  colors: {
    main: "#F0D66B",
    lightWhite: "#F1F1F1",
    darkGrey: "#B3B3B3",
    lightGrey: "#F2F2F2",
  },
  fonts: {
    sansSerif: "arial",
    bebas: "bebas, arial, Serif",
    helvetica: "Helvetica, arial, Serif",
    acumin: "acumin",
    avenir: "avenir, arial, Serif",
    Black: "Black",
  },
  size: {
    xlDesltop: "1640",
    blogWidth: "35rem",
  },
  media,
}

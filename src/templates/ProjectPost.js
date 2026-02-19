import React, { useEffect, useMemo, useRef } from "react"
import { graphql } from "gatsby"
import { Power3, gsap } from "gsap"
import CSSRulePlugin from "gsap/CSSRulePlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { BLOCKS, INLINES } from "@contentful/rich-text-types"

import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"
import "./project.scss"
import { colors, fonts, media } from "../style-utils"

// Register GSAP plugins (SSR safe)
if (typeof window !== "undefined") {
  gsap.registerPlugin(CSSRulePlugin, ScrollTrigger)
}

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: unset;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #ffffffff;
  ${media.tablet`
    margin-top: 2rem;
  `};
`

const ProjectBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  width: 90%;
  justify-content: right;
  transition: transform 0.3s;
  will-change: transform;

  ${media.tablet`
    width: 80%;
  `};
  ${media.desktop`
    justify-content: space-around;
  `};
`

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  font-size: 1rem;
  justify-content: space-between;
  border-top: 1px solid #ebebeb;
  ${media.tablet`
    margin-bottom: 2rem;
    flex-direction: row;
    justify-content: space-between;
  `};
`

const YearInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  font-family: ${fonts.helvetica};
  font-size: 1rem;
  width: 8rem;
  justify-content: flex-end;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`
const InnerList = styled.li`
  list-style: none;
`

const VideoBox = styled.iframe`
  display: flex;
  width: 100%;
  max-height: 13rem;
  margin-bottom: 3rem;
  margin-top: 2rem;

  ${media.phablet`
    max-height: 25rem;
    margin-bottom: 3rem;
    margin-top: 2rem;
  `};

  ${media.tablet`
    width: 35rem;
    height: 46vh;
    max-height: 100%;
  `};
`

const BannerImg = styled(GatsbyImage)`
  width: 100%;
  object-fit: cover;
  cursor: pointer;
`
const BannerImgsvg = styled.img`
  width: 100%;
  object-fit: cover;
  cursor: pointer;
`

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 5rem;
`

const Image = styled(GatsbyImage)`
  width: 80%;
  max-height: 45rem;
  object-fit: cover;
  cursor: pointer;

  ${media.tablet`
    width: 35rem;
  `};
`
const ImageSVG = styled.img`
  width: 80%;
  max-width: 17rem;
  width: 17rem;
  max-height: 20rem;
  cursor: pointer;

  ${media.tablet`
    max-width: 35rem;
    width: 35rem;
    max-height: 45rem;
  `};
`

const ImageGIF = styled.img`
  width: 80%;
  max-width: 17rem;
  width: 17rem;
  max-height: 20rem;
  border: 1px solid #eaeaea;
  cursor: pointer;

  ${media.tablet`
    max-width: 35rem;
    width: 35rem;
    max-height: 45rem;
  `};
`

const Title = styled.span`
  color: black;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  line-height: 1;
  font-family: ${fonts.Raleway};
  font-weight: 500;
  text-align: center;
  margin-right: 0.2rem;
`
const UnderTitle = styled.span`
  color: #2d2d2d;
  font-size: 0.6rem;
  line-height: 1;
  font-family: ${fonts.helvetica};
  font-weight: 200;
  text-align: left;
  margin-bottom: 0.3rem;
`

const Description = styled.p`
  color: ${colors.black};
  font-size: 1rem;
  line-height: 1.2;
  font-family: ${fonts.Roboto};
  margin-top: 0.5rem;
  width: 100%;
  ${media.tablet`
    width: 90%;
  `};
  ${media.desktop`
    width: 60%;
  `};
`

// ---------- SUMMARY (CASE STUDY) STYLES ----------
const SummaryRoot = styled.div`
  width: 100%;
  margin: 2rem 0 4rem 0;
`

// full-bleed band (black or white) even if parent has max-width
const FullBleedBand = styled.section`
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  padding: 2.2rem 0;
  ${media.tablet`padding: 1rem 0;`}
`

const SummaryInner = styled.div`
  width: 100%;
  max-width: 1000px; /* child max width */
  margin: 0 auto;
  padding: 0 1.2rem;
  ${media.tablet`padding: 0 1rem;`}
`

// NOTE: you currently set both sections as white-ish. Keep as-is.
const DarkBand = styled(FullBleedBand)`
  background: #ffffffff;
  color: #000000ff;
`

const WhiteBand = styled(FullBleedBand)`
  background-color: #fff;
  color: ${colors.black};
`

const SummaryH2 = styled.h2`
  font-family: ${fonts.Raleway};
  font-weight: 900;
  font-size: 1.15rem;
  line-height: 1.25;
  margin: 0 0 1.1rem 0;
  padding: 0;
  letter-spacing: 0.2px;
  color: inherit;
  ${media.tablet`font-size: 1.4rem;`}
`

const SummaryH3 = styled.h3`
  font-family: ${fonts.Raleway};
  font-weight: 800;
  font-size: 1rem;
  line-height: 1.25;
  margin: 1.4rem 0 0.6rem 0;
  padding: 0;
  color: inherit;
`

const SummaryP = styled.p`
  color: ${colors.black};
  font-size: 17px;
  line-height: 24px;
  font-weight: 300;
  font-family: ${fonts.Roboto};
  margin: 0.85rem 0;
  padding: 0;
`

const SummaryPOnDark = styled.p`
  color: #000000ff;
  font-size: 17px;
  line-height: 24px;
  font-weight: 300;
  font-family: ${fonts.Roboto};
  margin: 0.85rem 0;
  padding: 0;
`

const SummaryHr = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
  margin: 2rem 0;
`

const QuoteBlock = styled.blockquote`
  margin: 2.2rem auto;
  padding: 2rem 0;
  max-width: 850px;

  font-family: ${fonts.Roboto};
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.7;
  color: inherit;

  ${media.tablet`
    font-size: 1.4rem;
  `}

  p {
    margin: 0;
    font-size: 1.8rem;
    line-height: 1.25;
    color: inherit;
  }

  opacity: 0.95;
`

const SummaryUl = styled.ul`
  margin: 1rem 0 1.2rem 0;
  padding-left: 1.1rem;
  list-style: disc;

  li {
    margin: 0.35rem 0;
    font-family: ${fonts.Roboto};
    font-size: 17px;
    line-height: 24px;
    font-weight: 300;
    color: ${colors.black};
  }
`
const SummaryOl = styled.ol`
  margin: 1rem 0 1.2rem 0;
  padding-left: 1.25rem;
  list-style: decimal;

  li {
    margin: 0.35rem 0;
    font-family: ${fonts.Roboto};
    font-size: 17px;
    line-height: 24px;
    font-weight: 300;
    color: ${colors.black};
  }
`

const SummaryUlDark = styled.ul`
  margin: 1rem 0 1.2rem 0;
  padding-left: 1.1rem;
  list-style: disc;

  li {
    margin: 0.35rem 0;
    font-family: ${fonts.Roboto};
    font-size: 17px;
    line-height: 24px;
    font-weight: 300;
    color: #000000ff;
  }
`
const SummaryOlDark = styled.ol`
  margin: 1rem 0 1.2rem 0;
  padding-left: 1.25rem;
  list-style: decimal;

  li {
    margin: 0.35rem 0;
    font-family: ${fonts.Roboto};
    font-size: 17px;
    line-height: 24px;
    font-weight: 300;
    color: #000000ff;
  }
`

const SummaryCaption = styled.figcaption`
  margin-top: 0.55rem;
  font-family: ${fonts.Roboto};
  font-size: 0.85rem;
  line-height: 1.5;
  font-weight: 300;
  color: #111;
  opacity: 0.85;
`

const SummaryCaptionDark = styled(SummaryCaption)`
  color: #111;
  opacity: 0.8;
`

// ✅ Overlay reveal wrapper for summary media (works per-image, not CSSRule)
const SummaryMediaWrap = styled.figure`
  margin: 0;
  position: relative;
  overflow: hidden;

  .gatsby-image-wrapper,
  img {
    width: 100%;
    display: block;
    height: auto;
  }
`

const SummaryMediaOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: ${p => p.$bg || "#fff"};
  z-index: 10;
  pointer-events: none;
`

// Full-bleed media INSIDE SummaryInner (escapes max-width)
const SummaryFullBleedMedia = styled.div`
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  margin-top: 1.6rem;
  margin-bottom: 1.6rem;

  .gatsby-image-wrapper,
  img {
    width: 100%;
    display: block;
    height: auto;
  }
`

// Case study layout blocks
const SplitBlock = styled.div`
  margin: 1.6rem 0;
  display: grid;
  gap: 1.2rem;
  align-items: center;

  ${media.tablet`grid-template-columns: 1.1fr 0.9fr; gap: 1.6rem;`}

  .media {
    overflow: hidden;
  }

  .gatsby-image-wrapper,
  img {
    width: 100%;
    display: block;
  }
`

const GalleryBlock = styled.div`
  margin: 1.2rem 0 1.4rem 0;
  display: grid;
  gap: 1rem;
  border-radius: 5px;

  ${media.tablet`grid-template-columns: 1fr 1fr; gap: 1.2rem;`}

  .media {
    overflow: hidden;
  }

  .gatsby-image-wrapper,
  img {
    width: 100%;
    display: block;
    margin-bottom:1rem;
  }
`

const FullImageBlock = styled.div`
  margin: 1.6rem 0;
  overflow: hidden;

  .gatsby-image-wrapper,
  img {
    width: 100%;
    display: block;
  }
`

const FullProject = styled.div`
  width: 100%;
`
// -----------------------------------------------

const InfoTitle = styled.div`
  color: black;
  font-size: 1.9rem;
  line-height: 1;
  font-family: ${fonts.Raleway};
  display: flex;
  justify-content: left;

  ${media.tablet`
    font-size: 2.5rem;
  `};

  & span {
    color: ${colors.main};
    margin-right: 0.5rem;
  }
`

const InfoLink = styled.a`
  color: #2355f5;
  font-size: 0.7rem;
  line-height: 1;
  font-family: ${fonts.acumin};
  display: flex;
  text-decoration: none;
  transition: 0.3s;
  margin-top: 1rem;
  :hover {
    color: black;
  }
`

const RoleBox = styled.div`
  width: 10rem;
`

const Backbutton = styled(AniLink)`
  color: #666;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: #ebebeb;
  padding: 0.2rem;
  font-size: 0.5rem;
  width: 6rem;
  text-align: center;
  font-family: ${fonts.Montserrat};
  text-decoration: none;
  font-weight: bold;
  display: flex;
  justify-content: center;
  border-radius: 28px;
  align-items: center;
  :hover {
    transition: all 0.3s ease;
    background-color: #eb4fb3;
    color: white;
  }

  ${media.tablet`
    margin-top: 1rem;
    margin-bottom: 2rem;
  `};
`

const ProjectPage = ({ data }) => {
  const project = data.contentfulProject

  const contentRef = useRef(null)
  const yearRef = useRef(null)
  const summaryRootRef = useRef(null)

  // ------------ SUMMARY RENDERER (H2 => alternates dark bands) ------------
  const summaryEl = useMemo(() => {
    const raw = project?.summary?.raw
    if (!raw) return null

    let doc
    try {
      doc = typeof raw === "string" ? JSON.parse(raw) : raw
    } catch {
      return null
    }

    const refs = project?.summary?.references || []
    const byId = new Map(refs.map(r => [r.contentful_id, r]))

    const nodes = Array.isArray(doc?.content) ? doc.content : []
    if (nodes.length === 0) return null

    const textOfParagraph = pNode =>
      (pNode?.content || [])
        .filter(n => n?.nodeType === "text")
        .map(n => n?.value || "")
        .join("")
        .trim()

    const isEmptyParagraph = pNode => textOfParagraph(pNode).length === 0

    const renderInline = n => {
      if (!n) return null

      if (n.nodeType === "text") {
        const val = n.value || ""
        const parts = val.split("\n")
        let out = parts.flatMap((p, i) => (i === 0 ? [p] : [<br key={`br-${i}`} />, p]))

        const marks = n.marks || []
        if (marks.some(m => m.type === "code")) out = <code>{out}</code>
        if (marks.some(m => m.type === "underline")) out = <u>{out}</u>
        if (marks.some(m => m.type === "italic")) out = <em>{out}</em>
        if (marks.some(m => m.type === "bold")) out = <strong>{out}</strong>

        return out
      }

      if (n.nodeType === INLINES.HYPERLINK) {
        const href = n.data?.uri
        return (
          <a href={href} target="_blank" rel="noreferrer">
            {(n.content || []).map((c, i) => (
              <React.Fragment key={i}>{renderInline(c)}</React.Fragment>
            ))}
          </a>
        )
      }

      return (n.content || []).map((c, i) => (
        <React.Fragment key={i}>{renderInline(c)}</React.Fragment>
      ))
    }

    const renderParagraph = (pNode, isDark) => {
      if (!pNode || isEmptyParagraph(pNode)) return null
      const PTag = isDark ? SummaryPOnDark : SummaryP
      return (
        <PTag className="summary-animate">
          {(pNode.content || []).map((c, i) => (
            <React.Fragment key={i}>{renderInline(c)}</React.Fragment>
          ))}
        </PTag>
      )
    }

    // ✅ Image + overlay reveal + caption from graphql (description/title)
    const renderAssetFigure = (assetNode, { isDark = false, fullBleed = false } = {}) => {
      const id = assetNode?.data?.target?.sys?.id
      const asset = id ? byId.get(id) : null
      if (!asset) return null

      const contentType = asset.file?.contentType || ""
      const url = asset.file?.url
      const desc = asset.description || ""
      const captionText = desc

      if (!contentType.startsWith("image/")) return null

      const img = getImage(asset.gatsbyImageData)
      const media = img ? (
        <GatsbyImage image={img} alt={desc} />
      ) : url ? (
        <img src={url} alt={desc} />
      ) : null

      if (!media) return null

      // overlay background should match band background (both are white in your current design)
      const overlayBg = "#fff"
      const CaptionTag = isDark ? SummaryCaptionDark : SummaryCaption

      // full-bleed image but caption stays aligned to content width
      if (fullBleed) {
        return (
          <>
            <SummaryFullBleedMedia className="summary-media summary-media-wrap">
              <SummaryMediaWrap style={{ margin: 0 }}>
                <div className="summary-media-inner">{media}</div>
                <SummaryMediaOverlay className="summary-media-overlay" $bg={overlayBg} />
              </SummaryMediaWrap>
            </SummaryFullBleedMedia>

            {captionText ? (
              <figure style={{ margin: 0 }}>
                <CaptionTag className="summary-animate">{captionText}</CaptionTag>
              </figure>
            ) : null}
          </>
        )
      }

      return (
        <SummaryMediaWrap className="summary-media summary-media-wrap" style={{ margin: 0 }}>
          <div className="summary-media-inner">{media}</div>
          <SummaryMediaOverlay className="summary-media-overlay" $bg={overlayBg} />
          {captionText ? <CaptionTag className="summary-animate">{captionText}</CaptionTag> : null}
        </SummaryMediaWrap>
      )
    }

    const renderList = (listNode, isDark) => {
      const Tag = listNode.nodeType === BLOCKS.OL_LIST ? "ol" : "ul"
      const Wrapper =
        listNode.nodeType === BLOCKS.OL_LIST
          ? isDark
            ? SummaryOlDark
            : SummaryOl
          : isDark
            ? SummaryUlDark
            : SummaryUl

      return (
        <Wrapper as={Tag} className="summary-animate">
          {(listNode.content || []).map((li, idx) => {
            const para = li?.content?.find(x => x.nodeType === BLOCKS.PARAGRAPH)
            return (
              <li key={idx}>
                {(para?.content || []).map((c, k) => (
                  <React.Fragment key={k}>{renderInline(c)}</React.Fragment>
                ))}
              </li>
            )
          })}
        </Wrapper>
      )
    }

    // ✅ Split into sections by H2, alternate DARK/LIGHT per H2 section
    const sections = []
    let sectionIndex = 0
    let current = { key: "pre", mode: "light", items: [] }

    const pushCurrent = () => {
      if (current.items.length) sections.push(current)
    }

    const isH2 = node => node?.nodeType === "heading-2" || node?.nodeType === BLOCKS.HEADING_2

    nodes.forEach((n, i) => {
      if (isH2(n)) {
        pushCurrent()
        sectionIndex += 1
        const isDark = sectionIndex % 2 === 1
        current = { key: `sec-${i}`, mode: isDark ? "dark" : "light", items: [n] }
      } else {
        current.items.push(n)
      }
    })

    pushCurrent()

    const renderItems = (items, isDark) => {
      const out = []
      for (let i = 0; i < items.length; i++) {
        const n = items[i]

        if (n.nodeType === BLOCKS.HEADING_2) {
          out.push(
            <SummaryH2 key={`h2-${i}`} className="summary-animate">
              {(n.content || []).map((c, k) => (
                <React.Fragment key={k}>{renderInline(c)}</React.Fragment>
              ))}
            </SummaryH2>
          )
          continue
        }

        if (n.nodeType === BLOCKS.HEADING_3) {
          out.push(
            <SummaryH3 key={`h3-${i}`} className="summary-animate">
              {(n.content || []).map((c, k) => (
                <React.Fragment key={k}>{renderInline(c)}</React.Fragment>
              ))}
            </SummaryH3>
          )
          continue
        }

        if (n.nodeType === BLOCKS.QUOTE || n.nodeType === "blockquote" || n.nodeType === "quote") {
          out.push(
            <QuoteBlock key={`quote-${i}`} className="summary-animate">
              {(n.content || []).map((c, k) => {
                if (c.nodeType === BLOCKS.PARAGRAPH) {
                  return (
                    <p key={k}>
                      {(c.content || []).map((x, idx) => (
                        <React.Fragment key={idx}>{renderInline(x)}</React.Fragment>
                      ))}
                    </p>
                  )
                }
                return (
                  <React.Fragment key={k}>
                    {(c.content || []).map((x, idx) => (
                      <React.Fragment key={idx}>{renderInline(x)}</React.Fragment>
                    ))}
                  </React.Fragment>
                )
              })}
            </QuoteBlock>
          )
          continue
        }

        if (n.nodeType === "hr" || n.nodeType === BLOCKS.HR) {
          out.push(<SummaryHr key={`hr-${i}`} className="summary-animate" />)
          continue
        }

        // P + Asset + Asset + P => gallery (stays constrained)
        if (
          n.nodeType === BLOCKS.PARAGRAPH &&
          items[i + 1]?.nodeType === BLOCKS.EMBEDDED_ASSET &&
          items[i + 2]?.nodeType === BLOCKS.EMBEDDED_ASSET &&
          items[i + 3]?.nodeType === BLOCKS.PARAGRAPH
        ) {
          const p1 = renderParagraph(n, isDark)
          const m1 = renderAssetFigure(items[i + 1], { isDark })
          const m2 = renderAssetFigure(items[i + 2], { isDark })
          const p2 = renderParagraph(items[i + 3], isDark)

          out.push(
            <React.Fragment key={`gallery-${i}`}>
              {p1}
              <GalleryBlock>
                <div className="media">{m1}</div>
                <div className="media">{m2}</div>
              </GalleryBlock>
              {p2}
            </React.Fragment>
          )

          i += 3
          continue
        }

        // P + Asset + P => split
        if (
          n.nodeType === BLOCKS.PARAGRAPH &&
          items[i + 1]?.nodeType === BLOCKS.EMBEDDED_ASSET &&
          items[i + 2]?.nodeType === BLOCKS.PARAGRAPH
        ) {
          const p1 = renderParagraph(n, isDark)
          const media = renderAssetFigure(items[i + 1], { isDark })
          const p2 = renderParagraph(items[i + 2], isDark)

          out.push(
            <SplitBlock key={`split-${i}`}>
              <div>
                {p1}
                {p2}
              </div>
              <div className="media">{media}</div>
            </SplitBlock>
          )

          i += 2
          continue
        }

        // ✅ Image alone:
        // - LIGHT section: constrained + caption
        // - DARK section: full-bleed image + caption stays constrained
        if (n.nodeType === BLOCKS.EMBEDDED_ASSET) {
          const figure = renderAssetFigure(n, { isDark, fullBleed: isDark })
          if (figure) out.push(<React.Fragment key={`img-${i}`}>{figure}</React.Fragment>)
          continue
        }

        if (n.nodeType === BLOCKS.UL_LIST || n.nodeType === BLOCKS.OL_LIST) {
          out.push(<React.Fragment key={`list-${i}`}>{renderList(n, isDark)}</React.Fragment>)
          continue
        }

        if (n.nodeType === BLOCKS.PARAGRAPH) {
          const p = renderParagraph(n, isDark)
          if (p) out.push(<React.Fragment key={`p-${i}`}>{p}</React.Fragment>)
          continue
        }
      }
      return out
    }

    return (
      <SummaryRoot ref={summaryRootRef} className="summary-root">
        {sections.map(sec => {
          const isDark = sec.mode === "dark"
          return isDark ? (
            <DarkBand key={sec.key} className="summary-section summary-section--dark">
              <SummaryInner className="summary-inner">{renderItems(sec.items, true)}</SummaryInner>
            </DarkBand>
          ) : (
            <WhiteBand key={sec.key} className="summary-section summary-section--light">
              <SummaryInner className="summary-inner">{renderItems(sec.items, false)}</SummaryInner>
            </WhiteBand>
          )
        })}
      </SummaryRoot>
    )
  }, [project?.summary?.raw, project?.summary?.references])
  // ----------------------------------------------------------------------

  // Existing top animations (unchanged)
  useEffect(() => {
    const contentEl = contentRef.current
    const yearEl = yearRef.current
    if (!contentEl || !yearEl) return

    const headlineFirst = contentEl?.children?.[0]?.children?.[0]
    const contentP = contentEl?.children?.[1]

    const contentYear = yearEl?.children?.[0]?.children?.[0]?.children?.[0]
    const contentRole = yearEl?.children?.[0]?.children?.[1]?.children?.[0]

    const imageReveal =
      typeof window !== "undefined" ? CSSRulePlugin.getRule(".img-container:after") : null

    const tl = gsap.timeline({ delay: 0.8 })
    const tlImage = gsap.timeline({ delay: 1 })
    const tlInfo = gsap.timeline({ delay: 0.8 })

    if (headlineFirst?.children) {
      tl.to([headlineFirst.children], { duration: 1, y: 0, ease: Power3.easeOut }, 0.15)
    }
    if (contentP) {
      tl.to(contentP, { duration: 1, y: 0, opacity: 1, ease: Power3.easeOut }, 0.4)
    }
    if (imageReveal) {
      tlImage.to(imageReveal, { duration: 1, width: "0%", ease: Power3.easeInOut })
    }
    if (contentYear) {
      tlInfo.to([contentYear], { duration: 1, y: 0, ease: Power3.easeOut }, 0.15)
    }
    if (contentRole) {
      tlInfo.to(contentRole, { duration: 1, y: 0, opacity: 1, ease: Power3.easeOut }, 0.4)
    }

    return () => {
      tl.kill()
      tlImage.kill()
      tlInfo.kill()
    }
  }, [])

  // ✅ GSAP scroll animations ONLY for summary (NO parallax on images)
  useEffect(() => {
    if (typeof window === "undefined") return
    const root = summaryRootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      // text reveal
      const textEls = root.querySelectorAll(".summary-animate")
      gsap.set(textEls, { y: 18, opacity: 0 })

      ScrollTrigger.batch(textEls, {
        start: "top 85%",
        onEnter: batch => {
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.08,
            overwrite: true,
          })
        },
        onEnterBack: batch => {
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.06,
            overwrite: true,
          })
        },
      })

      // ✅ per-image overlay reveal (works for all images)
      const overlays = root.querySelectorAll(".summary-media-overlay")
      overlays.forEach(ov => {
        gsap.set(ov, { width: "100%" })

        gsap.to(ov, {
          width: "0%",
          duration: 1.1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ov.parentElement, // the figure
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      })

      // subtle section lift
      const sections = root.querySelectorAll(".summary-section")
      sections.forEach(section => {
        gsap.fromTo(
          section,
          { y: 12, opacity: 0.98 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 92%",
            },
          }
        )
      })
    }, root)

    return () => ctx.revert()
  }, [project?.summary?.raw, project?.summary?.references])

  const Photos = useMemo(() => {
    return (project?.photos || []).map((img, i) => {
      const fileType = img?.file?.contentType
      const url = img?.localFile?.url
      if (!fileType || !url) return null

      const isSvg = fileType.includes("svg")
      const isGif = fileType.includes("gif")
      const isVideo = fileType.includes("video")

      let Type = null

      if (isSvg) Type = <ImageSVG src={url} alt="img" />
      else if (isGif) Type = <ImageGIF src={url} alt="GIF Image" />
      else if (isVideo) {
        Type = (
          <video autoPlay loop muted playsInline style={{ width: "100%", maxHeight: "45rem" }}>
            <source src={url} type={fileType} />
            Your browser does not support the video tag.
          </video>
        )
      } else {
        const gatsbyImg = img?.localFile?.childImageSharp?.gatsbyImageData
        Type = gatsbyImg ? <Image image={gatsbyImg} alt="img" /> : null
      }

      return Type ? <ImgBox key={i}>{Type}</ImgBox> : null
    })
  }, [project?.photos])

  const Banner = useMemo(() => {
    const fileType = project?.banner?.file?.contentType
    const url = project?.banner?.localFile?.url
    if (!fileType || !url) return null

    const isSvg = fileType.includes("svg")
    const isVideo = fileType.includes("video")

    if (isVideo) {
      return (
        <video autoPlay loop muted playsInline style={{ width: "100%", height: "auto", objectFit: "cover" }}>
          <source src={url} type={fileType} />
          Your browser does not support the video tag.
        </video>
      )
    }

    if (isSvg) return <BannerImgsvg src={url} alt="banner" />

    const gatsbyImg = project?.banner?.localFile?.childImageSharp?.gatsbyImageData
    return gatsbyImg ? <BannerImg image={gatsbyImg} alt="banner" /> : null
  }, [project])

  return (
    <div>
      <Header />
      <MainSection>
        <ProjectBox id="project">
          <Backbutton paintDrip to="/work" duration={1} hex="#EB4FB3" direction="up">
            Back to projects
          </Backbutton>

          <InfoBox>
            <div className="hero-content-inner" ref={contentRef}>
              <h1>
                <div className="hero-content-line">
                  <InfoTitle className="hero-content-line-inner">{project?.name}</InfoTitle>
                </div>
              </h1>

              <Description>
                {project?.body?.body}
                {project?.link && <InfoLink href={project.link}>Check out website</InfoLink>}
              </Description>
            </div>

            <YearInfo ref={yearRef}>
              <List>
                <InnerList className="date-content-line">
                  <div className="date-line-inner">
                    <Title>Year: </Title>
                    <UnderTitle>{project?.year}</UnderTitle>
                  </div>
                </InnerList>
                <InnerList className="date-content-line">
                  <RoleBox className="date-line-inner">
                    <Title>Role: </Title>
                    <UnderTitle>{project?.role || ""}</UnderTitle>
                  </RoleBox>
                </InnerList>
              </List>
            </YearInfo>
          </InfoBox>
        </ProjectBox>

        {Banner && <div className="img-container">{Banner}</div>}

        {/* ✅ SUMMARY */}
        {summaryEl && <FullProject className="summary">{summaryEl}</FullProject>}

        {project?.video && (
          <VideoBox
            title="video"
            src={project.video}
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen muted"
            allowFullScreen
          />
        )}

        {Photos}
      </MainSection>
      <Footer />
    </div>
  )
}

export default ProjectPage

export const query = graphql`
  query($id: String!) {
    contentfulProject(id: { eq: $id }) {
      id
      name
      role
      year
      link
      banner {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
          url
        }
        file {
          contentType
        }
      }
      body {
        body
      }
      summary {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            description
            file {
              url
              contentType
            }
            gatsbyImageData(width: 1600)
          }
        }
      }
      photos {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
          url
        }
        file {
          contentType
        }
      }
      video
    }
  }
`

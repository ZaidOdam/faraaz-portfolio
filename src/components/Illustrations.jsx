import { useState } from 'react'

import illust1 from '../assets/illustration/art1.jpeg'
import illust2 from '../assets/illustration/art2.jpeg'
import illust3 from '../assets/illustration/art3.jpeg'
import illust4 from '../assets/illustration/art4.jpeg'
import illust5 from '../assets/illustration/art5.jpeg'
import illust6 from '../assets/illustration/art6.jpeg'

const illustrations = [
  {
    src: illust1,
    title: 'The Weight of It All',
    desc: 'A comic-panel narrative exploring emotional turmoil through expressive character art and cinematic framing.',
    span: 'wide',
  },
  {
    src: illust2,
    title: 'Cosmic Explorer',
    desc: 'A whimsical space adventure featuring an astronaut discovering alien worlds — vibrant digital painting.',
    span: 'tall',
  },
  {
    src: illust3,
    title: 'Inspector Tavade',
    desc: 'A character illustration set in a bustling Indian street scene, blending manga style with local flavour.',
    span: 'normal',
  },
  {
    src: illust4,
    title: 'The Wanderer',
    desc: 'Fantasy character portrait with dynamic split-tone lighting and an adventurous spirit.',
    span: 'wide',
  },
  {
    src: illust5,
    title: 'Bus Stop Conversations',
    desc: 'A slice-of-life comic panel capturing an everyday moment between two friends at golden hour.',
    span: 'normal',
  },
  {
    src: illust6,
    title: 'Lantern Village',
    desc: 'A moody environmental illustration of a hidden forest settlement, rich with atmosphere and detail.',
    span: 'normal',
  },
]

function Illustrations() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxSrc, setLightboxSrc] = useState('')
  const [activeIndex, setActiveIndex] = useState(null)

  const openLightbox = (src, index) => {
    setLightboxSrc(src)
    setLightboxOpen(true)
    setActiveIndex(index)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setLightboxSrc('')
    setActiveIndex(null)
  }

  const navigateLightbox = (direction, e) => {
    e.stopPropagation()
    const newIndex = (activeIndex + direction + illustrations.length) % illustrations.length
    setActiveIndex(newIndex)
    setLightboxSrc(illustrations[newIndex].src)
  }

  return (
    <section className="illustrations-section" id="illustrations">
      {/* ── Section Header ── */}
      <p className="section-label reveal">Creative Works</p>
      <h2 className="section-title reveal">
        Illustration<br /><em>Gallery</em>
      </h2>

      <p className="illustrations-intro reveal">
        A curated collection of original digital illustrations spanning comic panels,
        character portraits, and environmental art — each piece crafted with a unique
        narrative and visual identity.
      </p>

      {/* ── Masonry Gallery Grid ── */}
      <div className="illustrations-grid reveal">
        {illustrations.map((art, i) => (
          <div
            className={`illust-card illust-${art.span}`}
            key={i}
            onClick={() => openLightbox(art.src, i)}
          >
            <div className="illust-card-img">
              <img src={art.src} alt={art.title} loading="lazy" />
              <div className="illust-card-overlay">
                <div className="illust-card-meta">
                  <h4>{art.title}</h4>
                  <p>{art.desc}</p>
                </div>
                <span className="illust-zoom-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Lightbox Modal ── */}
      {lightboxOpen && (
        <div className="lightbox-backdrop" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Navigation arrows */}
          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => navigateLightbox(-1, e)}
            aria-label="Previous illustration"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <img
            src={lightboxSrc}
            alt={illustrations[activeIndex]?.title || 'Illustration'}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => navigateLightbox(1, e)}
            aria-label="Next illustration"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Counter */}
          <div className="lightbox-counter" onClick={(e) => e.stopPropagation()}>
            {activeIndex + 1} / {illustrations.length}
          </div>
        </div>
      )}
    </section>
  )
}

export default Illustrations

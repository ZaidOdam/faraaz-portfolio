import { useState } from 'react'
import art1 from '../assets/certification/art1.jpeg'
import art2 from '../assets/certification/art2.jpeg'
import prizePhoto from '../assets/certification/prize_felicitation.jpeg'

const CERTIFICATE_LINK = 'https://drive.google.com/file/d/16UKdHEYTDuHre3TutZ46LuOvt-Qe9m5N/view?usp=sharing'

const artworks = [
  {
    src: art1,
    title: 'Still Life — Watercolour',
    desc: 'A vivid watercolour still-life study of a flower vase and books, showcasing depth, shadow, and colour mixing technique.',
  },
  {
    src: art2,
    title: 'Bharati Vidyapeeth University — Pencil Sketch',
    desc: 'A detailed pencil illustration capturing the university campus in a manga-inspired comic panel style.',
  },
]

function Achievement() {
  const [activeArt, setActiveArt] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxSrc, setLightboxSrc] = useState('')

  const openLightbox = (src) => {
    setLightboxSrc(src)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setLightboxSrc('')
  }

  return (
    <section className="achievement-section" id="achievements">
      {/* ── Section Header ── */}
      <p className="section-label reveal">Recognition</p>
      <h2 className="section-title reveal">
        Awards &<br /><em>Artwork</em>
      </h2>

      {/* ── Award Highlight Card ── */}
      <div className="award-showcase reveal">
        <div className="award-showcase-img" onClick={() => openLightbox(prizePhoto)}>
          <img src={prizePhoto} alt="Prize distribution ceremony — Static Bloom 1st Prize" />
          <div className="award-img-overlay">
            <span className="award-img-zoom">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </span>
          </div>
        </div>
        <div className="award-showcase-info">
          <div className="award-badge">🏆 1st Prize</div>
          <h3 className="award-title">Static Bloom</h3>
          <p className="award-event">Inter-College Design Competition</p>
          <p className="award-location">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px', verticalAlign: '-2px'}}>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Bharati Vidyapeeth, Kolhapur
          </p>
          <p className="award-desc">
            Awarded 1st place for exceptional still-life illustration at the inter-college level design competition <em>"Static Bloom"</em>, organised by Bharati Vidyapeeth Institute of Management. The competition tested artistic precision, composition, and watercolour technique.
          </p>
          <a
            href={CERTIFICATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="award-cert-link"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            View Certificate
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '4px'}}>
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── Artwork Gallery ── */}
      <div className="artwork-gallery reveal">
        <h3 className="artwork-gallery-title">
          <span className="artwork-gallery-line" />
          Winning Artworks
          <span className="artwork-gallery-line" />
        </h3>
        <div className="artwork-grid">
          {artworks.map((art, i) => (
            <div
              className={`artwork-card${activeArt === i ? ' active' : ''}`}
              key={i}
              onMouseEnter={() => setActiveArt(i)}
              onClick={() => openLightbox(art.src)}
            >
              <div className="artwork-card-img">
                <img src={art.src} alt={art.title} />
                <div className="artwork-card-overlay">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
              </div>
              <div className="artwork-card-info">
                <h4>{art.title}</h4>
                <p>{art.desc}</p>
              </div>
            </div>
          ))}
        </div>
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
          <img
            src={lightboxSrc}
            alt="Enlarged view"
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}

export default Achievement

import { useState, useEffect } from 'react'
import foLogo from '../assets/FO_logo.PNG'

const TAGLINE = 'Communication Designer · Kolhapur, India'

function Hero() {
  const [typedText, setTypedText] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    let typingInterval
    // Delay typing to sync with page loader fade-out
    const startDelay = setTimeout(() => {
      let i = 0
      typingInterval = setInterval(() => {
        if (i < TAGLINE.length) {
          setTypedText(TAGLINE.slice(0, i + 1))
          i++
        } else {
          clearInterval(typingInterval)
          setTimeout(() => setCursorVisible(false), 2500)
        }
      }, 45)
    }, 800)

    return () => {
      clearTimeout(startDelay)
      if (typingInterval) clearInterval(typingInterval)
    }
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <p className="hero-tag">
          {typedText}
          {cursorVisible && <span className="typing-cursor" />}
        </p>
        <h1 className="hero-name">
          Faraaz<br />
          <em>Odam</em>
        </h1>
        <p className="hero-desc">
          A visual communicator with a passion for brand identity, illustration, and storytelling. Crafting meaningful designs that speak before words do.
        </p>
        <div className="hero-contact">
          <a href="mailto:farazodam@gmail.com">✉ farazodam@gmail.com</a>
          <a href="tel:+919075525456">✆ +91 90755 25456</a>
          <a href="#">↗ Kolhapur, Maharashtra</a>
        </div>
        <div className="hero-socials">
          <a href="https://www.instagram.com/its.faraaz.art?igsh=YmV2dnlhZW5hNjJw&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/faraaz-odam-1a1b51285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-logo-wrapper">
          <img src={foLogo} alt="Faraaz Odam - Communication Designer" className="hero-logo-img" />
        </div>
      </div>
    </section>
  )
}

export default Hero

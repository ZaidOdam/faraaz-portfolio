import { useEffect, useState, useRef, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Achievement from './components/Achievement'
import Illustrations from './components/Illustrations'
import Projects from './components/Projects'
import Education from './components/Education'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [loaded, setLoaded] = useState(false)
  const observerRef = useRef(null)

  // Page loader: show for 800ms then fade out
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 800)
    return () => clearTimeout(timer)
  }, [])

  const handleReveal = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, [])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleReveal, {
      threshold: 0.15,
    })

    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach((el) => observerRef.current.observe(el))

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [handleReveal])

  return (
    <>
      {/* Page load transition */}
      <div className={`page-loader${loaded ? ' loaded' : ''}`}>
        <div className="page-loader-content">
          <div className="page-loader-logo">
            F<em>O</em>
          </div>
          <div className="page-loader-bar" />
        </div>
      </div>

      {/* Ambient floating background */}
      <div className="ambient-bg" aria-hidden="true">
        <div className="ambient-orb ambient-orb-1" />
        <div className="ambient-orb ambient-orb-2" />
        <div className="ambient-orb ambient-orb-3" />
      </div>

      <Navbar />
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Skills />
      <div className="section-divider" />
      <Achievement />
      <div className="section-divider" />
      <Illustrations />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <Education />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App

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
  const [revealedElements, setRevealedElements] = useState(new Set())
  const observerRef = useRef(null)

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

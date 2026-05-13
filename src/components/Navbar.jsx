import { useState, useEffect, useRef, useCallback } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Illustrations', href: '#illustrations' },
  { label: 'Work', href: '#work' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')
  const observerRef = useRef(null)

  // Track scroll for navbar background
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // IntersectionObserver to detect which section is in view
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.substring(1))
    const sectionEls = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (sectionEls.length === 0) return

    const handleIntersect = (entries) => {
      // Find the entry that is most visible
      const visibleEntries = entries.filter((e) => e.isIntersecting)
      if (visibleEntries.length > 0) {
        // Pick the one with the highest intersection ratio
        const best = visibleEntries.reduce((a, b) =>
          a.intersectionRatio > b.intersectionRatio ? a : b
        )
        setActiveSection('#' + best.target.id)
      }
    }

    observerRef.current = new IntersectionObserver(handleIntersect, {
      rootMargin: '-20% 0px -60% 0px',
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
    })

    sectionEls.forEach((el) => observerRef.current.observe(el))

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    setActiveSection(href)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const handleLogoClick = useCallback((e) => {
    e.preventDefault()
    setMenuOpen(false)
    setActiveSection('#home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <a href="#" className="nav-logo" onClick={handleLogoClick}>
        F<em>O</em>
      </a>
      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={activeSection === item.href ? 'active' : ''}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <button
        className={`mobile-toggle${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  )
}

export default Navbar

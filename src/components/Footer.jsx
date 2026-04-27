function Footer() {
  return (
    <footer id="contact">
      <div className="footer-name">
        Let's<br />
        <em>Connect</em>
      </div>
      <div className="footer-links">
        <a href="mailto:farazodam@gmail.com">farazodam@gmail.com</a>
        <a href="tel:+919075525456">+91 90755 25456</a>
        <div className="footer-socials">
          <a href="https://www.instagram.com/its.faraaz.art?igsh=YmV2dnlhZW5hNjJw&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/faraaz-odam-1a1b51285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Faraaz Odam. All Rights Reserved.</p>
        <p>Designed & Developed with Passion</p>
      </div>
    </footer>
  )
}

export default Footer

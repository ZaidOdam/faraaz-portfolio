const infoBlocks = [
  {
    title: 'Education',
    content: 'BBA — Sanjay Ghodawat University (SGU)\nKolhapur',
  },
  {
    title: 'Tools',
    content: 'Canva · Ibis Paint X\nSketchbook · Adobe Suite',
  },
  {
    title: 'Interests',
    content: 'Brand Identity · Illustration\nComics · Motion · Typography',
  },
  {
    title: 'Currently',
    content: 'Seeking admission to\nMaster of Design',
  },
]

function About() {
  return (
    <section id="about">
      <p className="section-label reveal">About</p>
      <h2 className="section-title reveal">
        Where Art Meets<br /><em>Intention</em>
      </h2>
      <div className="about-grid">
        <div className="about-text reveal">
          <p>
            I'm Faraaz Salim Odam, an aspiring Communication Designer with a deep rooted love for visual storytelling — one that began long before I learned the word "design."
          </p>
          <p>
            My journey started with a sketchbook and a stubborn belief that every idea deserves a beautiful form. From hand-drawn comics to brand identities for real businesses, I've always been drawn to the space where art and purpose intersect. I find meaning in the details — the curve of a letterform, the weight of a tagline, the colour that makes someone feel something without knowing why.
          </p>
          <p>
            Pursuing a Master of Communication Design is the next natural step — a chance to deepen my craft, understand design systems at scale, and grow from a maker into a thinker who makes.
          </p>
        </div>
        <div className="about-sidebar reveal">
          {infoBlocks.map((block) => (
            <div className="info-block" key={block.title}>
              <h4>{block.title}</h4>
              <p>
                {block.content.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < block.content.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

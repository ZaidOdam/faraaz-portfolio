const skills = [
  {
    icon: '✦',
    title: 'Brand Identity',
    desc: "Designing logos and visual systems that carry a brand's soul — from concept sketches to final mark.",
    tags: ['Logo Design', 'Visual Systems', 'Taglines'],
  },
  {
    icon: '◈',
    title: 'Illustration',
    desc: 'Hand-crafted and digital illustrations with a distinct personal voice — from editorial to character art.',
    tags: ['Ibis Paint X', 'Sketchbook', 'Digital Art'],
  },
  {
    icon: '◎',
    title: 'Storytelling & Comics',
    desc: 'Sequencing visuals into narratives — comics, storyboards, and illustrated sequences with emotional depth.',
    tags: ['Comics', 'Storyboarding', 'Narrative Design'],
  },
  {
    icon: '⬡',
    title: 'Digital Design Tools',
    desc: 'Proficient in design tools for layout, graphics, and animation to bring ideas from mind to screen.',
    tags: ['Canva', 'Animation Basics', 'Typography'],
  },
]

function Skills() {
  return (
    <section id="skills">
      <p className="section-label reveal">Capabilities</p>
      <h2 className="section-title reveal">
        What I Bring<br />to the Table
      </h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card reveal" key={skill.title}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.desc}</p>
            <div className="skill-tags">
              {skill.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

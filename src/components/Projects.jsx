import varunraj_logo from '../assets/varunraj_logo.jpeg'
import bracelet_bar_logo from '../assets/bracelet_bar_logo.jpeg'

const projects = [
  {
    num: '01',
    type: 'Brand Identity · Agriculture',
    title: 'Varunraj Associates',
    desc: 'A logo and brand identity for an agricultural company rooted in community and growth. The design communicates trust and sustainability through a warm, nature-inspired palette. The tagline "Enriching Lives" guided every visual decision — from the earthy tones to the symbol of nurturing hands cradling new growth.',
    tags: ['Logo Design', 'Brand Identity', 'Illustration', 'Agriculture'],
    image: varunraj_logo,
  },
  {
    num: '02',
    type: 'Brand Identity · Fashion & Lifestyle',
    title: 'The Bracelet Bar',
    desc: 'A complete brand identity for a homegrown jewellery startup. The design captures the brand\'s intimate, personal character — a hand-illustrated mascot on a moody mauve canvas, paired with the poetic tagline "Wear your story, bead by bead." Typography and illustration work in harmony to evoke warmth, personality, and artisanal craftsmanship.',
    tags: ['Logo Design', 'Illustration', 'Startup Branding', 'Typography'],
    image: bracelet_bar_logo,
  },
]

function Projects() {
  return (
    <section id="work">
      <p className="section-label reveal">Selected Work</p>
      <h2 className="section-title reveal">
        Projects That<br />Tell a Story
      </h2>

      {projects.map((project, index) => (
        <div
          className={`project-card reveal${index % 2 !== 0 ? ' reverse' : ''}`}
          key={project.num}
        >
          <div className="project-img">
            <div className="img-placeholder">
              <img src={project.image} alt={project.title} />
            </div>
          </div>
          <div className="project-info">
            <div className="project-num">{project.num}</div>
            <p className="project-type">{project.type}</p>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.desc}</p>
            <div className="project-meta">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Projects

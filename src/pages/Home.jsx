import profile from '../data/profile.json'
import projects from '../data/projects.json'
import SectionDivider from '../components/SectionDivider'
import ProjectCard from '../components/ProjectCard'
import './Home.css'
import heroImage from '../assets/images/hero.jpg'
import profilePhoto from '../assets/images/foto.png'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <p className="hero-overline">{profile.role}</p>
          <h1 className="hero-name">
            André<br />Francisco
          </h1>
          <p className="hero-bio">{profile.bio}</p>
          <a href="#work" className="hero-cta" onClick={(e) => {
            e.preventDefault()
            document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
          }}>
            Ver trabalho
          </a>
        </div>
        <div className="hero-right" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="hero-bg-text"></div>
          <div className="hero-right-inner">
            <div className="hero-tools">
              <p className="hero-tools-label">Meios &amp; ferramentas</p>
              <div className="tools-grid">
                {profile.tools.map((tool) => (
                  <span key={tool} className="tool-tag">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider label="Trabalho selecionado" value="2020 — 2025" />

      {/* WORK */}
      <section className="work-section" id="work">
        <div className="section-header">
          <h2 className="section-title">Projetos</h2>
          <span className="section-note">{String(projects.length).padStart(2, '0')} trabalhos</span>
        </div>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

      <SectionDivider label="Sobre o autor" value="Aveiro, PT" />

      {/* ABOUT */}
      <section className="about-section" id="about">
        <div className="about-left">
          <p className="about-title">Quem sou</p>
          {profile.aboutTexts.map((text, i) => (
            <p key={i} className="about-text">{text}</p>
          ))}
        </div>
        <div className="about-right" style={{ backgroundImage: `url(${profilePhoto})` }}>
          <p className="about-quote">"{profile.quote}"</p>
          <span className="about-quote-attr">{profile.name}</span>
        </div>
      </section>

      <SectionDivider label="Contacto" value="Disponível para projetos" />

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="contact-left">
          <p className="contact-eyebrow">Vamos trabalhar juntos?</p>
          <a href={`mailto:${profile.email}`} className="contact-email">
            {profile.email}
          </a>
        </div>
        <div className="contact-right">
          <div className="social-links">
            {profile.social.map((s) => (
              <a key={s.name} href={s.url} className="social-link">{s.name}</a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

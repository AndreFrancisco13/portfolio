import { useParams, Link } from 'react-router-dom'
import projects from '../data/projects.json'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="detail-not-found">
        <h2>Projeto não encontrado</h2>
        <Link to="/" className="detail-back">Voltar ao início</Link>
      </div>
    )
  }

  const currentIndex = projects.indexOf(project)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return (
    <div className="detail-page">
      {/* HEADER */}
      <section className="detail-hero">
        <div className="detail-hero-left">
          <Link to="/" className="detail-back-link">Voltar</Link>
          <p className="detail-season">{project.season}</p>
          <h1 className="detail-title">{project.title}</h1>
          <div className="detail-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="detail-tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className="detail-hero-right">
          <div className="detail-hero-number">{project.number}</div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="detail-divider">
        <span className="detail-divider-label">Sobre o projeto</span>
        <div className="detail-divider-line"></div>
        <span className="detail-divider-num">{project.number}</span>
      </div>

      {/* DESCRIPTION */}
      <section className="detail-description">
        <div className="detail-desc-left">
          <h2 className="detail-subtitle">{project.detail.subtitle}</h2>
          <p className="detail-full-desc">{project.detail.fullDescription}</p>
        </div>
      </section>

      {/* PROCESS DIVIDER */}
      <div className="detail-divider">
        <span className="detail-divider-label">Processo</span>
        <div className="detail-divider-line"></div>
        <span className="detail-divider-num">{project.detail.process.length} etapas</span>
      </div>

      {/* PROCESS */}
      <section className="detail-process">
        <div className="detail-process-inner">
          {project.detail.process.map((step, i) => (
            <div key={i} className="process-step">
              <span className="process-step-num">{String(i + 1).padStart(2, '0')}</span>
              <p className="process-step-text">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* IMAGES DIVIDER */}
      <div className="detail-divider">
        <span className="detail-divider-label">Galeria</span>
        <div className="detail-divider-line"></div>
        <span className="detail-divider-num">{project.detail.images.length} imagens</span>
      </div>

      {/* IMAGE GALLERY */}
      <section className="detail-gallery">
        <div className="gallery-grid">
          {project.detail.images.map((img, i) => (
            <div key={i} className="gallery-item" style={{ background: project.cardBg }}>
              <div className="gallery-placeholder">
                <span className="gallery-placeholder-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="gallery-placeholder-label">Imagem</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NAVIGATION */}
      <div className="detail-divider">
        <span className="detail-divider-label">Navegação</span>
        <div className="detail-divider-line"></div>
      </div>

      <section className="detail-nav">
        <div className="detail-nav-inner">
          {prevProject ? (
            <Link to={`/projeto/${prevProject.id}`} className="detail-nav-link detail-nav-prev">
              <span className="detail-nav-direction">Anterior</span>
              <span className="detail-nav-title">{prevProject.title}</span>
            </Link>
          ) : (
            <div></div>
          )}
          {nextProject ? (
            <Link to={`/projeto/${nextProject.id}`} className="detail-nav-link detail-nav-next">
              <span className="detail-nav-direction">Seguinte</span>
              <span className="detail-nav-title">{nextProject.title}</span>
            </Link>
          ) : (
            <Link to="/" className="detail-nav-link detail-nav-next">
              <span className="detail-nav-direction">Voltar</span>
              <span className="detail-nav-title">Início</span>
            </Link>
          )}
        </div>
      </section>
    </div>
  )
}

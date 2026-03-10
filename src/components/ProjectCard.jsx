import { Link } from 'react-router-dom'
import './ProjectCard.css'

export default function ProjectCard({ project, index }) {
  const delays = [0.1, 0.25, 0.4, 0.55, 0.7, 0.85]

  return (
    <Link
      to={`/projeto/${project.id}`}
      className="project-card"
      style={{ animationDelay: `${delays[index] || 0.1}s` }}
    >
      <div className="project-image" style={{ background: project.cardBg }}>
        <div className="project-image-placeholder">{project.number}</div>
      </div>
      <div className="project-body">
        <p className="project-season">{project.season}</p>
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <div className="project-actions">
            <span className="project-btn" title="Ver projeto">↗</span>
          </div>
        </div>
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  )
}

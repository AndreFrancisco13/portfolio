import './SectionDivider.css'

export default function SectionDivider({ label, value }) {
  return (
    <div className="section-divider">
      <span className="divider-label">{label}</span>
      <div className="divider-line"></div>
      <span className="divider-num">{value}</span>
    </div>
  )
}

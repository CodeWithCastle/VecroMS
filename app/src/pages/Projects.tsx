import { useParams } from 'react-router-dom'

const meta: Record<string, { title: string; desc: string }> = {
  garagepro: { title: 'Garage Pro', desc: 'Workshop management module.' },
  autovin: { title: 'AUTOVIN', desc: 'Vehicle identification / VIN lookup module.' },
  lagride: { title: 'LAGRIDE', desc: 'Ride-hailing fleet module.' },
}

export default function Projects() {
  const { slug } = useParams()
  const m = meta[slug ?? ''] ?? { title: 'Project', desc: 'Module.' }
  return (
    <div className="bg-surface rounded-xl shadow-sm border border-slate-200 p-6">
      <h2 className="font-semibold mb-2">{m.title}</h2>
      <p className="text-ink-secondary text-sm">{m.desc}</p>
    </div>
  )
}

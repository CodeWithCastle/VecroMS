import { jobs, workshopsTraffic } from '../data/mock'

const stats = [
  { label: 'Customers', value: '1,480', tone: 'text-primary' },
  { label: 'Vehicles', value: '3,240', tone: 'text-success' },
  { label: 'Open jobs', value: '86', tone: 'text-warning' },
  { label: 'Revenue (NGN)', value: '₦4.2M', tone: 'text-info' },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-surface rounded-xl shadow-sm border border-slate-200 p-5">
            <p className="text-xs uppercase tracking-wide text-ink-secondary">{s.label}</p>
            <p className={`text-2xl font-bold mt-2 ${s.tone}`}>{s.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-surface rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
            <h2 className="font-semibold">Job status</h2>
            <button className="text-sm text-primary font-medium">See all</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-surface-subtle text-ink-secondary">
                <tr>
                  <th className="text-left px-5 py-3 font-medium">Customer</th>
                  <th className="text-left px-5 py-3 font-medium">Job description</th>
                  <th className="text-left px-5 py-3 font-medium">Status</th>
                  <th className="text-left px-5 py-3 font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((j) => (
                  <tr key={j.id} className="border-t border-slate-100">
                    <td className="px-5 py-3 font-medium">{j.customer}</td>
                    <td className="px-5 py-3 text-ink-secondary">{j.description}</td>
                    <td className="px-5 py-3">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                        j.status === 'Completed' ? 'bg-success-bg text-success-fg' :
                        j.status === 'Pending' ? 'bg-warning-bg text-warning-fg' :
                        'bg-info-bg text-info-fg'
                      }`}>{j.status}</span>
                    </td>
                    <td className="px-5 py-3 text-ink-secondary">{j.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-surface rounded-xl shadow-sm border border-slate-200">
          <div className="px-5 py-4 border-b border-slate-100">
            <h2 className="font-semibold">Workshops traffic</h2>
          </div>
          <ul className="divide-y divide-slate-100">
            {workshopsTraffic.map((w) => (
              <li key={w.lga} className="px-5 py-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium">{w.lga}</span>
                  <span className="text-sm text-ink-secondary">{w.customers.toLocaleString()}</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${w.pct}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

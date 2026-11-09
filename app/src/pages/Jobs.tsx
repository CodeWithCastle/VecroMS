import { jobs } from '../data/mock'

export default function Jobs() {
  return (
    <div className="bg-surface rounded-xl shadow-sm border border-slate-200">
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold">Job bank</h2>
        <button className="bg-primary text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-primary-hover">New job</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-surface-subtle text-ink-secondary">
            <tr>
              <th className="text-left px-5 py-3 font-medium">#</th>
              <th className="text-left px-5 py-3 font-medium">Customer</th>
              <th className="text-left px-5 py-3 font-medium">Description</th>
              <th className="text-left px-5 py-3 font-medium">Status</th>
              <th className="text-left px-5 py-3 font-medium">Date</th>
              <th className="text-right px-5 py-3 font-medium">Total (NGN)</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((j) => (
              <tr key={j.id} className="border-t border-slate-100">
                <td className="px-5 py-3">JB-{1000 + j.id}</td>
                <td className="px-5 py-3 font-medium">{j.customer}</td>
                <td className="px-5 py-3 text-ink-secondary">{j.description}</td>
                <td className="px-5 py-3">{j.status}</td>
                <td className="px-5 py-3 text-ink-secondary">{j.date}</td>
                <td className="px-5 py-3 text-right">₦{j.total.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

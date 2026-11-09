import { services } from '../data/mock'

export default function Services() {
  return (
    <div className="bg-surface rounded-xl shadow-sm border border-slate-200">
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold">Services</h2>
        <button className="bg-primary text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-primary-hover">Add service</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-surface-subtle text-ink-secondary">
            <tr>
              <th className="text-left px-5 py-3 font-medium">Name</th>
              <th className="text-left px-5 py-3 font-medium">Description</th>
              <th className="text-right px-5 py-3 font-medium">Amount (NGN)</th>
            </tr>
          </thead>
          <tbody>
            {services.map((s) => (
              <tr key={s.id} className="border-t border-slate-100">
                <td className="px-5 py-3 font-medium">{s.name}</td>
                <td className="px-5 py-3 text-ink-secondary">{s.description}</td>
                <td className="px-5 py-3 text-right">₦{s.amount.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

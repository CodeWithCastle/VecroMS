import { customers } from '../data/mock'

export default function Customers() {
  return (
    <div className="bg-surface rounded-xl shadow-sm border border-slate-200">
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold">Customers</h2>
        <button className="bg-primary text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-primary-hover">Add customer</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-surface-subtle text-ink-secondary">
            <tr>
              <th className="text-left px-5 py-3 font-medium">Name</th>
              <th className="text-left px-5 py-3 font-medium">Phone</th>
              <th className="text-left px-5 py-3 font-medium">Email</th>
              <th className="text-left px-5 py-3 font-medium">Address</th>
              <th className="text-left px-5 py-3 font-medium">LGA</th>
              <th className="text-left px-5 py-3 font-medium">Vehicles</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.id} className="border-t border-slate-100">
                <td className="px-5 py-3 font-medium">{c.name}</td>
                <td className="px-5 py-3">{c.phone}</td>
                <td className="px-5 py-3 text-ink-secondary">{c.email}</td>
                <td className="px-5 py-3 text-ink-secondary">{c.address}</td>
                <td className="px-5 py-3">{c.lga}</td>
                <td className="px-5 py-3">{c.vehicles}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

import { vehicles } from '../data/mock'

export default function Vehicles() {
  return (
    <div className="bg-surface rounded-xl shadow-sm border border-slate-200">
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold">Vehicles</h2>
        <button className="bg-primary text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-primary-hover">Add vehicle</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-surface-subtle text-ink-secondary">
            <tr>
              <th className="text-left px-5 py-3 font-medium">Plate</th>
              <th className="text-left px-5 py-3 font-medium">Customer</th>
              <th className="text-left px-5 py-3 font-medium">Make</th>
              <th className="text-left px-5 py-3 font-medium">Model</th>
              <th className="text-left px-5 py-3 font-medium">VIN</th>
              <th className="text-left px-5 py-3 font-medium">Year</th>
              <th className="text-left px-5 py-3 font-medium">Body</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((v) => (
              <tr key={v.id} className="border-t border-slate-100">
                <td className="px-5 py-3 font-mono">{v.plate}</td>
                <td className="px-5 py-3">{v.customer}</td>
                <td className="px-5 py-3">{v.make}</td>
                <td className="px-5 py-3">{v.model}</td>
                <td className="px-5 py-3 font-mono text-ink-secondary">{v.vin}</td>
                <td className="px-5 py-3">{v.year}</td>
                <td className="px-5 py-3">{v.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

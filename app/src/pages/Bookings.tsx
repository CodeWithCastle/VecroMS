import { bookings } from '../data/mock'

export default function Bookings() {
  return (
    <div className="bg-surface rounded-xl shadow-sm border border-slate-200">
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold">Bookings</h2>
        <button className="bg-primary text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-primary-hover">New booking</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-surface-subtle text-ink-secondary">
            <tr>
              <th className="text-left px-5 py-3 font-medium">Customer</th>
              <th className="text-left px-5 py-3 font-medium">Order no.</th>
              <th className="text-left px-5 py-3 font-medium">Booking date</th>
              <th className="text-left px-5 py-3 font-medium">Due date</th>
              <th className="text-left px-5 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.id} className="border-t border-slate-100">
                <td className="px-5 py-3 font-medium">{b.customer}</td>
                <td className="px-5 py-3">{b.orderNo}</td>
                <td className="px-5 py-3 text-ink-secondary">{b.bookingDate}</td>
                <td className="px-5 py-3 text-ink-secondary">{b.dueDate}</td>
                <td className="px-5 py-3">{b.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

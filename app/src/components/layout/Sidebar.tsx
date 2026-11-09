import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Briefcase, Calendar, Users, Car, Wrench, FileText, Building2, Settings, User } from 'lucide-react'

const links = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/jobs', label: 'Job Bank', icon: Briefcase },
  { to: '/bookings', label: 'Bookings', icon: Calendar },
  { to: '/customers', label: 'Customers', icon: Users },
  { to: '/vehicles', label: 'Vehicles', icon: Car },
  { to: '/inspections', label: 'Inspections', icon: Wrench },
  { to: '/reports', label: 'Reports', icon: FileText },
  { to: '/manage', label: 'Manage Workshop', icon: Building2 },
  { to: '/services', label: 'Services', icon: Settings },
  { to: '/user', label: 'User', icon: User },
]

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:flex-col w-64 bg-white border-r border-slate-200 fixed inset-y-0 left-0 z-30">
      <div className="flex items-center gap-2 px-6 py-5 border-b border-slate-100">
        <img src="/brand/logo.svg" alt="VecroMS" className="h-8" />
        <span className="font-semibold text-slate-800">VecroMS</span>
      </div>
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive ? 'bg-primary-subtle text-primary-fg-subtle' : 'text-slate-600 hover:bg-slate-100'
              }`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="px-6 py-4 border-t border-slate-100 text-xs text-slate-400">
        VecroMS (Vehicle Reporting and Organization Management Systems)
      </div>
    </aside>
  )
}

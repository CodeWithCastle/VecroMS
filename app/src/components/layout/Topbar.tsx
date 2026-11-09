import { Bell, Search, User } from 'lucide-react'

export default function Topbar({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-semibold text-ink">{title}</h1>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 bg-surface-subtle rounded-lg px-3 py-1.5">
            <Search size={16} className="text-ink-secondary" />
            <input className="bg-transparent outline-none text-sm w-48" placeholder="Search" />
          </div>
          <button className="relative text-ink-secondary hover:text-ink">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-danger rounded-full" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary-subtle flex items-center justify-center">
              <User size={16} className="text-primary-fg-subtle" />
            </div>
            <span className="hidden md:inline text-sm font-medium">Ada</span>
          </div>
        </div>
      </div>
    </header>
  )
}

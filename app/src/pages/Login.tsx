import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-subtle">
      <div className="w-full max-w-md bg-surface rounded-xl shadow-sm border border-slate-200 p-8">
        <div className="flex items-center mb-6">
          <img src="/brand/logo.svg" alt="VecroMS" className="h-9 w-auto" />
        </div>
        <h1 className="text-xl font-semibold mb-1">Sign in</h1>
        <p className="text-ink-secondary text-sm mb-6">Vehicle Reporting and Organization Management Systems</p>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); navigate('/') }}>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="customer@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input type="password" className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full bg-primary text-white font-medium py-2 rounded-lg hover:bg-primary-hover">Sign in</button>
        </form>
      </div>
    </div>
  )
}

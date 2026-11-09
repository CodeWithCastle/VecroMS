import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function Layout() {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <div className="md:ml-64">
        <Topbar title="VecroMS" />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

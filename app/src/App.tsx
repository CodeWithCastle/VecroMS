import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard'
import Customers from './pages/Customers'
import Vehicles from './pages/Vehicles'
import Jobs from './pages/Jobs'
import Bookings from './pages/Bookings'
import Inspections from './pages/Inspections'
import Services from './pages/Services'
import Reports from './pages/Reports'
import Manage from './pages/Manage'
import UserProfile from './pages/UserProfile'
import Settings from './pages/Settings'
import Messages from './pages/Messages'
import Login from './pages/Login'
import Projects from './pages/Projects'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/inspections" element={<Inspections />} />
        <Route path="/services" element={<Services />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/user/settings" element={<Settings />} />
        <Route path="/user/messages" element={<Messages />} />
        <Route path="/projects/:slug" element={<Projects />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

import type { Customer, Vehicle, Job, Booking, Service, Technician, User } from '../types'

export const customers: Customer[] = Array.from({ length: 5 }).map((_, i) => ({
  id: i + 1,
  name: 'Ada O',
  phone: '08000000000',
  email: 'customer@example.com',
  address: '12 Example Street, Lagos',
  lga: 'Ikeja',
  company: 'VecroMS Fleet',
  vehicles: 20,
  registeredAt: '27 Jul 2019',
}))

export const vehicles: Vehicle[] = Array.from({ length: 4 }).map((_, i) => ({
  id: i + 1,
  plate: 'LAG-123-AB',
  customer: 'Ada Okafor',
  make: 'Toyota',
  model: 'Highlander',
  vin: 'TESTVIN0000000001',
  year: 2008,
  body: 'SUV',
}))

export const jobs: Job[] = [
  { id: 1, customer: 'Ada O', description: 'Full service inspection and oil change', status: 'Completed', date: '27/07/2019', total: 84500 },
  { id: 2, customer: 'Ada O', description: 'Brake pad replacement', status: 'Completed', date: '27/07/2019', total: 42000 },
  { id: 3, customer: 'Ada O', description: 'AC recharge', status: 'Pending', date: '27/07/2019', total: 18500 },
  { id: 4, customer: 'Ada O', description: 'Tyre rotation', status: 'Completed', date: '27/07/2019', total: 12000 },
  { id: 5, customer: 'Ada O', description: 'Battery replacement', status: 'Completed', date: '27/07/2019', total: 35000 },
]

export const bookings: Booking[] = Array.from({ length: 5 }).map((_, i) => ({
  id: i + 1,
  customer: 'Ada Okafor',
  orderNo: `ORD-${1000 + i}`,
  bookingDate: '2019-07-27',
  dueDate: '2019-08-03',
  status: i === 2 ? 'Suspended' : 'Active',
}))

export const services: Service[] = [
  { id: 1, name: 'Oil change', description: 'Engine oil + filter', amount: 15000 },
  { id: 2, name: 'Brake service', description: 'Pads + fluid', amount: 30000 },
  { id: 3, name: 'AC service', description: 'Recharge + clean', amount: 20000 },
  { id: 4, name: 'Wheel alignment', description: 'Front + rear', amount: 12000 },
]

export const technicians: Technician[] = [
  { id: 1, name: 'Ada O', area: 'Ikeja', points: 120 },
  { id: 2, name: 'Tunde Bello', area: 'Lekki', points: 95 },
]

export const users: User[] = [
  { id: 1, name: 'Ada Okafor', nick: 'ada', role: 'IT Manager', level: 'Admin' },
]

export const workshopsTraffic = [
  { lga: 'Ojodu', customers: 1480, pct: 60 },
  { lga: 'Lekki', customers: 5480, pct: 90 },
  { lga: 'Ikeja', customers: 3200, pct: 75 },
]

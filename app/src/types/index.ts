export type Customer = {
  id: number
  name: string
  phone: string
  email: string
  address: string
  lga: string
  company: string
  vehicles: number
  registeredAt: string
}

export type Vehicle = {
  id: number
  plate: string
  customer: string
  make: string
  model: string
  vin: string
  year: number
  body: string
}

export type Job = {
  id: number
  customer: string
  description: string
  status: 'Completed' | 'Pending' | 'In progress' | 'Cancelled'
  date: string
  total: number
}

export type Booking = {
  id: number
  customer: string
  orderNo: string
  bookingDate: string
  dueDate: string
  status: string
}

export type Service = {
  id: number
  name: string
  description: string
  amount: number
}

export type Technician = {
  id: number
  name: string
  area: string
  points: number
}

export type User = {
  id: number
  name: string
  nick: string
  role: string
  level: string
}

'use client'

import React, { useState, useEffect } from 'react'
import LoginHeader from '@/components/LoginHeader'

interface User {
  id: number
  first_name: string
  last_name: string
  email: string
  phone: string
  address: string
  service: string
  created_at: string
}

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/fetch-users')

        if (response.ok) {
          const contentType = response.headers.get('Content-Type')
          if (contentType && contentType.includes('application/json')) {
            const data: User[] = await response.json()
            setUsers(data)
          } else {
            console.error('Unexpected response format:', await response.text())
            setError('Unexpected response format. Please try again.')
          }
        } else {
          const errorText = (await response.text()) || 'Unknown server error'
          console.error('Server error:', errorText)
          setError(`Server error: ${errorText}`)
        }
      } catch (error) {
        console.error('An error occurred:', error)
        setError('An error occurred. Please try again.')
      }
    }

    fetchUsers()
  }, [])

  return (
    <main>
      <div className="fixed left-0 right-0 top-0 z-10 bg-white shadow-md">
        <LoginHeader />
      </div>
      <div className="container mx-auto p-4">
        <h1 className="mb-4 text-2xl font-bold">Users</h1>
        {error && <p className="mb-4 text-red-500">{error}</p>}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="border-b px-4 py-2 text-left">ID</th>
                <th className="border-b px-4 py-2 text-left">First Name</th>
                <th className="border-b px-4 py-2 text-left">Last Name</th>
                <th className="border-b px-4 py-2 text-left">Email</th>
                <th className="border-b px-4 py-2 text-left">Phone</th>
                <th className="border-b px-4 py-2 text-left">Address</th>
                <th className="border-b px-4 py-2 text-left">Service</th>
                <th className="border-b px-4 py-2 text-left">Created At</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-100">
                  <td className="border-b px-4 py-2">{user.id}</td>
                  <td className="border-b px-4 py-2">{user.first_name}</td>
                  <td className="border-b px-4 py-2">{user.last_name}</td>
                  <td className="border-b px-4 py-2">{user.email}</td>
                  <td className="border-b px-4 py-2">{user.phone}</td>
                  <td className="border-b px-4 py-2">{user.address}</td>
                  <td className="border-b px-4 py-2">{user.service}</td>
                  <td className="border-b px-4 py-2">{user.created_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}

export default UsersPage

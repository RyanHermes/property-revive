'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import LoginHeader from '@/components/LoginHeader'

const Login: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const response = await fetch('/api/fetch-login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })

    const data = await response.json()
    if (data.success) {
      router.push('/users')
    } else {
      setError(data.message || 'Invalid credentials')
    }
  }

  return (
    <main>
      <LoginHeader />
      <div className="login-container flex h-screen w-full items-center justify-center">
        <div className="login-box rounded-lg p-10 shadow-2xl">
          <h1 className="mb-5 text-center text-2xl font-bold">Login</h1>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              className="mb-4 rounded border p-2"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="mb-4 rounded border p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="mb-4 text-red-500">{error}</p>}
            <button
              type="submit"
              className="rounded bg-blue-500 p-2 text-white"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Login

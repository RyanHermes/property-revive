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
			<div className="login-container w-full h-screen flex items-center justify-center">
				<div className="login-box p-10 shadow-2xl rounded-lg">
					<h1 className="text-center text-2xl font-bold mb-5">
						Login
					</h1>
					<form className="flex flex-col" onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="Username"
							className="mb-4 p-2 border rounded"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<input
							type="password"
							placeholder="Password"
							className="mb-4 p-2 border rounded"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						{error && <p className="text-red-500 mb-4">{error}</p>}
						<button
							type="submit"
							className="p-2 bg-blue-500 text-white rounded"
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

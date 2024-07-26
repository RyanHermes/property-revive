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
					if (
						contentType &&
						contentType.includes('application/json')
					) {
						const data: User[] = await response.json()
						setUsers(data)
					} else {
						console.error(
							'Unexpected response format:',
							await response.text()
						)
						setError(
							'Unexpected response format. Please try again.'
						)
					}
				} else {
					const errorText =
						(await response.text()) || 'Unknown server error'
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
			<div className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
				<LoginHeader />
			</div>
			<div className="container mx-auto p-4">
				<h1 className="text-2xl font-bold mb-4">Users</h1>
				{error && <p className="text-red-500 mb-4">{error}</p>}
				<div className="overflow-x-auto">
					<table className="min-w-full bg-white border border-gray-200">
						<thead>
							<tr className="bg-gray-100">
								<th className="px-4 py-2 border-b text-left">
									ID
								</th>
								<th className="px-4 py-2 border-b text-left">
									First Name
								</th>
								<th className="px-4 py-2 border-b text-left">
									Last Name
								</th>
								<th className="px-4 py-2 border-b text-left">
									Email
								</th>
								<th className="px-4 py-2 border-b text-left">
									Phone
								</th>
								<th className="px-4 py-2 border-b text-left">
									Address
								</th>
								<th className="px-4 py-2 border-b text-left">
									Service
								</th>
								<th className="px-4 py-2 border-b text-left">
									Created At
								</th>
							</tr>
						</thead>
						<tbody>
							{users.map((user) => (
								<tr key={user.id} className="hover:bg-gray-100">
									<td className="px-4 py-2 border-b">
										{user.id}
									</td>
									<td className="px-4 py-2 border-b">
										{user.first_name}
									</td>
									<td className="px-4 py-2 border-b">
										{user.last_name}
									</td>
									<td className="px-4 py-2 border-b">
										{user.email}
									</td>
									<td className="px-4 py-2 border-b">
										{user.phone}
									</td>
									<td className="px-4 py-2 border-b">
										{user.address}
									</td>
									<td className="px-4 py-2 border-b">
										{user.service}
									</td>
									<td className="px-4 py-2 border-b">
										{user.created_at}
									</td>
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

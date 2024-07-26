'use client'

import React, { useState, useEffect } from 'react'

interface User {
	id: number
	first_name: string
	last_name: string
	email: string
	phone: string
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
		<div>
			<h1>Users</h1>
			{error && <p style={{ color: 'red' }}>{error}</p>}
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Phone</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user.id}>
							<td>{user.id}</td>
							<td>{user.first_name}</td>
							<td>{user.last_name}</td>
							<td>{user.email}</td>
							<td>{user.phone}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default UsersPage

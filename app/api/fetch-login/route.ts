import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

export async function POST(req: NextRequest) {
	const { username, password } = await req.json()

	try {
		const result =
			await sql`SELECT * FROM accounts WHERE username = ${username} AND password = ${password}`
		if (result.rows.length > 0) {
			return NextResponse.json({
				success: true,
				message: 'Login successful',
			})
		} else {
			return NextResponse.json(
				{ success: false, message: 'Invalid credentials' },
				{ status: 401 }
			)
		}
	} catch (err) {
		console.error(err)
		return NextResponse.json(
			{ success: false, message: 'Internal server error' },
			{ status: 500 }
		)
	}
}

export async function OPTIONS(req: NextRequest) {
	return NextResponse.json(
		{ message: `Method ${req.method} Not Allowed` },
		{ status: 405 }
	)
}

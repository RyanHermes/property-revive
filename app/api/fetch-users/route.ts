import { sql } from '@vercel/postgres'

export async function GET() {
	try {
		const result =
			await sql`SELECT id, first_name, last_name, email, phone FROM users`
		return new Response(JSON.stringify(result.rows), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		})
	} catch (err) {
		console.error(err)
		return new Response(
			JSON.stringify({ message: 'Internal server error' }),
			{
				status: 500,
				headers: { 'Content-Type': 'application/json' },
			}
		)
	}
}

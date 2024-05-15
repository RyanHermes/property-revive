'use server'

import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { firstName, lastName, email, phone, address, service } = data;

    if (!firstName || !lastName || !email || !address || !service) {
      throw new Error('First name, last name, email, address, and service are required');
    }

    await sql`INSERT INTO users (first_name, last_name, email, phone, address, service, created_at) VALUES (${firstName}, ${lastName}, ${email}, ${phone}, ${address}, ${service}, NOW());`;

    return NextResponse.json({ message: 'User inserted successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const users = await sql`SELECT * FROM users;`;
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

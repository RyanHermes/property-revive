'use server'

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const firstName = searchParams.get('firstName');
  const lastName = searchParams.get('lastName');
  const email = searchParams.get('email');
  const phone = searchParams.get('phone');
  const address = searchParams.get('address');
  const service = searchParams.get('service');

  try {
    if (!firstName || !lastName || !email || !address || !service) {
      throw new Error('First name, last name, email, address, and service are required');
    }

    await sql`INSERT INTO users (first_name, last_name, email, phone, address, service, created_at) VALUES (${firstName}, ${lastName}, ${email}, ${phone}, ${address}, ${service}, NOW());`;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const users = await sql`SELECT * FROM users;`;
  return NextResponse.json({ users }, { status: 200 });
}

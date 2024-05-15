'use server'

import { createPool } from '@vercel/postgres';

const pool = createPool(process.env.POSTGRES_URL);

export async function insertUser(data) {
  try {
    if (!data.firstName || !data.lastName || !data.email || !data.address || !data.service) throw new Error('First name, last name, email, address, and service are required');
    await pool.query(`INSERT INTO users(first_name, last_name, email, phone, address, service, created_at) VALUES($1, $2, $3, $4, $5, $6, NOW())`, [data.firstName, data.lastName, data.email, data.phone, data.address, data.service]);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getUsers() {
  try {
    const { rows: users } = await pool.query(`SELECT * FROM users;`);
    return users;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
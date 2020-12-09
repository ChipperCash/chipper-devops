import * as pg from 'pg'

const { Pool } = pg

const connectionString =
  process.env.DATABASE_URL || 'postgresql://chipper:pass@localhost:5432/db'
const db = new Pool({ connectionString })

export async function getDbVersion (): Promise<string> {
  const { rows: [first] } = await db.query('SELECT version()')
  return first.version
}

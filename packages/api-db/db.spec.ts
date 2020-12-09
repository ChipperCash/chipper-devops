import { getDbVersion } from './db'

describe('api-db', () => {
  it('returns correct DB version', async () => {
    const postgresVersion = await getDbVersion()
    expect(postgresVersion).toBe('PostgreSQL 12.5 (Debian 12.5-1.pgdg100+1) on x86_64-pc-linux-gnu, compiled by gcc (Debian 8.3.0-6) 8.3.0, 64-bit')
  })
})

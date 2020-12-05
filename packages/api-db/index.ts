import * as Koa from 'koa'
import { Pool } from 'pg'

const port = process.env.PORT || 3000
const connectionString =
  process.env.DATABASE_URL || 'postgresql://chipper:pass@localhost:5432/db'
const db = new Pool({ connectionString })
const app = new Koa()

app.use(async (ctx) => {
  if (ctx.path === '/db') {
    const { rows: [first] } = await db.query('SELECT version()')
    ctx.body = { version: first.version }
  } else {
    ctx.throw(404)
  }
})

console.log(`Starting server on ${port}`)
app.listen(port)

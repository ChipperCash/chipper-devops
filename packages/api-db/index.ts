import * as Koa from 'koa'
import { getDbVersion } from './db'

const port = process.env.PORT || 3000
const app = new Koa()

app.use(async (ctx) => {
  if (ctx.path === '/db') {
    ctx.body = { version: await getDbVersion() }
  } else {
    ctx.throw(404)
  }
})

console.log(`Starting server on ${port}`)
app.listen(port)

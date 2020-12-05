import * as Koa from 'koa'

const port = process.env.PORT || 3001
const app = new Koa()

app.use(async (ctx) => {
  if (ctx.path === '/version') {
    ctx.body = { version: process.env.npm_package_version }
  } else {
    ctx.throw(404)
  }
})

console.log(`Starting server on ${port}`)
app.listen(port)

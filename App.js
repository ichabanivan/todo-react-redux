const Koa = require('koa');
const serve = require('koa-static');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
// response
app.use(serve(__dirname + '/build'))

app.listen(3000);

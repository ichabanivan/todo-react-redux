const Koa = require('koa');
const serve = require('koa-static');
const Router = require('koa-router');
const koaBody = require('koa-body');
const mongo = require('koa-mongo');

const router = new Router();
const app = new Koa();

const db = require('./db')

app.use(mongo({
  uri: 'mongodb://localhost:27017/todos'
}));

router
  .post('/getTodos', db.getTodos)
  .post('/addTodo', koaBody(), db.addTodo)
  .post('/updateTodo', koaBody(), db.updateTodo)
  .post('/removeTodo', koaBody(), db.removeTodo)
  .get('*', serve(__dirname + '/../build/'));

app.use(router.routes())

app.listen(3000);

module.exports = app

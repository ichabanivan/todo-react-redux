const Koa = require('koa');
const serve = require('koa-static');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
// const MongoClient = require('mongodb').MongoClient;
const koaBody = require('koa-body');
const url = 'mongodb://localhost:27017/todos';
const db = require('monk')(url)
// let todos; // убрать
// Connection URL
const todos = db.get('todos')



// console.log(todos);
// Database Name
// const dbName = 'todos';

router.post('/getTodos', async (ctx) => {
  // Use connect method to connect to the server
  
  await todos.find({}).then(function (todos) {
    ctx.body = JSON.stringify(todos);
  })

});

router.post('/addTodo', koaBody(), async (ctx) => {
  console.log(ctx.request.body) // new todo
  console.log(ctx.request.body._id)
  ctx.body = true;
});

router.post('/changeStatus', koaBody(), async (ctx) => {
  console.log(ctx.request.body) // todo with new status
  console.log(typeof ctx.request.body._id)

  // db.update({_id: new ObjectID(_id)}, {$set: body}, done);
  ctx.body = true;
});

router.post('/updateTodo', koaBody(), async (ctx) => {
  console.log(ctx.request.body) // new todo
  ctx.body = true;
});

router.post('/removeTodo', koaBody(), async (ctx) => {
  console.log(ctx.request.body) // _id for remove todo
  ctx.body = true;
});

router.get('*', serve(__dirname + '/../build'));

app.use(router.routes())

app.listen(3000);

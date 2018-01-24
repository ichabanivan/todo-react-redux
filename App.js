const Koa = require('koa');
const serve = require('koa-static');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const MongoClient = require('mongodb').MongoClient;
const koaBody = require('koa-body');

let todos; // убрать
let db;
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'todos';




router.post('/getTodos', async (ctx) => {
  // Use connect method to connect to the server
  MongoClient.connect(url,  (err, client) => {
    console.log('Connected successfully to server');

    db = client.db(dbName);

    // Get the documents collection
    const collection = db.collection('todos');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      todos = docs;
      ctx.body = JSON.stringify(docs);
      client.close();
    });
  });
  console.log(todos)

  ctx.body = JSON.stringify(todos);

});

router.post('/addTodo', koaBody(), async (ctx) => {
  console.log(ctx.request.body) // new todo
  console.log(ctx.request.body.id)
  ctx.body = true;
});

router.post('/changeStatus', koaBody(), async (ctx) => {
  console.log(ctx.request.body) // todo with new status
  console.log(typeof ctx.request.body.id)

  // db.update({_id: new ObjectID(id)}, {$set: body}, done);
  ctx.body = true;
});

router.post('/updateTodo', koaBody(), async (ctx) => {
  console.log(ctx.request.body) // new todo
  ctx.body = true;
});

router.post('/removeTodo', koaBody(), async (ctx) => {
  console.log(ctx.request.body) // id for remove todo
  ctx.body = true;
});

router.get('*', serve(__dirname + '/build'));

app.use(router.routes())

app.listen(3000);

const Koa = require('koa');
const serve = require('koa-static');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const MongoClient = require('mongodb').MongoClient;
const koaBody = require('koa-body');

let todos = [];

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'todos';

const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('todos');
    // Insert some documents
    collection.insertMany(todos, function(err, result) {
    callback(result);
  });
};

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    todos = docs;
    callback(docs);
  });
};

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  console.log('Connected successfully to server');

  const db = client.db(dbName);

  insertDocuments(db, function () {
    findDocuments(db, function () {
      client.close();
    })
  })
});


router.post('/getTodos', async (ctx) => {
  ctx.body = JSON.stringify(todos);
});

router.post('/addTodo', koaBody(), async (ctx) => {
  console.log(ctx.request.body) // new todo
  ctx.body = true;
});

router.post('/changeStatus', koaBody(), async (ctx) => {
  console.log(ctx.request.body) // todo with new status
  ctx.body = true;
});

router.post('/updateTodo', koaBody(), async (ctx) => {
  console.log(ctx.request.body) // todo with new status
  ctx.body = true;
});

router.post('/removeTodo', koaBody(), async (ctx) => {
  console.log(ctx.request.body) // id for remove todo
  ctx.body = true;
});

router.get('*', serve(__dirname + '/build'));

app.use(router.routes())

app.listen(3000);

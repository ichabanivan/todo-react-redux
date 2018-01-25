const Koa = require('koa');
const serve = require('koa-static');
const Router = require('koa-router');
const router = new Router();
const ObjectId = require('mongodb').ObjectID;
const koaBody = require('koa-body');
const mongo = require('koa-mongo');
// const MongoClient = require('mongodb').MongoClient;

const app = new Koa();

app.use(mongo({
  uri: 'mongodb://localhost:27017/todos'
}));

router.post('/getTodos', async (ctx) => {

  await ctx.mongo.db('todos').collection('todos').find().toArray().then((todos) => {
    ctx.body = JSON.stringify(todos);
  })

});

router.post('/addTodo', koaBody(), async (ctx) => {

  await ctx.mongo.db('todos').collection('todos')
    .insertOne(JSON.parse(ctx.request.body))
    .then((todos) => {
      ctx.body = todos.ops[0];
    })

});

router.post('/updateTodo', koaBody(), async (ctx) => {

  let todo = JSON.parse(ctx.request.body);
  let id = new ObjectId(todo._id);

  await ctx.mongo.db('todos').collection('todos')
    .findOneAndUpdate({ _id: id }, {
      $set: { 
        'modified': todo.modified, 
        'body': todo.body,
        'status': todo.status 
      } 
    }, { returnOriginal: false })
    .then((todo) => {
      ctx.body = todo.value;
    })

});

router.post('/removeTodo', koaBody(), async (ctx) => {
  
  let id = new ObjectId(ctx.request.body);

  await ctx.mongo.db('todos').collection('todos')
    .deleteOne({ _id: id })
    .then(() => {
      ctx.body = true;
    })

});

router.get('*', serve(__dirname + '/../build/'));

app.use(router.routes())

app.listen(3000);

module.exports = app

const ObjectId = require('mongodb').ObjectID;

async function getTodos(ctx) {
  await ctx.mongo.db('todos').collection('todos').find().toArray().then((todos) => {
    ctx.body = JSON.stringify(todos);
  })
}

async function addTodo(ctx) {
  await ctx.mongo.db('todos').collection('todos')
    .insertOne(JSON.parse(ctx.request.body))
    .then((todos) => {
      ctx.body = todos.ops[0];
    })
}

async function updateTodo(ctx) {
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
}

async function removeTodo(ctx) {
  let id = new ObjectId(ctx.request.body);

  await ctx.mongo.db('todos').collection('todos')
    .deleteOne({ _id: id })
    .then(() => {
        ctx.body = true;
    })
}

module.exports = {
  getTodos,
  addTodo,
  updateTodo,
  removeTodo
}

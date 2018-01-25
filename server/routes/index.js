const Router = require('koa-router');
const koaBody = require('koa-body');
const serve = require('koa-static');
const ObjectId = require('mongodb').ObjectID;

const router = new Router();

router.post('/getTodos', async (ctx) => {

    await ctx.mongo.db('todos').collection('todos').find().sort({ created: 1 }).toArray().then((todos) => {
        ctx.body = JSON.stringify(todos);
    })

})
.post('/addTodo', koaBody(), async (ctx) => {

    console.log(ctx.request.body);
    await ctx.mongo.db('todos').collection('todos')
        .insertOne(JSON.parse(ctx.request.body))
        .then((todos) => {
            ctx.body = todos.ops[0];
        })

})
.post('/updateTodo', koaBody(), async (ctx) => {

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

})
.post('/removeTodo', koaBody(), async (ctx) => {

    let id = new ObjectId(ctx.request.body);

    await ctx.mongo.db('todos').collection('todos')
        .deleteOne({ _id: id })
        .then(() => {
            ctx.body = true;
        })
})
.get('*', serve(__dirname + '/../build'));

module.export = router;

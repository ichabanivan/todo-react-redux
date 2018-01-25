const MongoClient = require('mongodb').MongoClient;
const MONGO_URL = 'mongodb://localhost:27017/todos';

module.exports = function (app) {
  MongoClient.connect(MONGO_URL)
    .then((connection) => {
      app.todos = connection.collection('todos');
      console.log('Database connection established')
    })
    .catch((err) => console.error(err))
};

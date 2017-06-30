// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var user = {name:'Steven', age:25};
var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if (err) {
      return console.log('Unable to connect to MongoDB server.');
   };
   console.log('Connected to MongoDB server.');

   // db.collection('Todos').insertOne({
   //    text: 'Something to do',
   //    completed: false
   // }, (err, result) => {
   //    if (err) {
   //       return console.log('Unable to insert todo', err);
   //    }
   //
   //    console.log(JSON.stringify(result.ops, undefined, 2));
   // });

   //Insert new docs into Users (name, age, location)

   // db.collection('Users').insertOne({
   //    name: 'Steven Dao',
   //    age: 21,
   //    location: 'HCM City'
   // }, (err, result) => {
   //    if (err) {
   //       return console.log('Unable to insert Users', err);
   //    }
   //    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
   // });

   db.close();
});

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

   // db.collection('Todos').find({
   //    _id: new ObjectID('5954ac5dc2ba6f23d8809c83')
   // }).toArray().then((docs) => {
   //    console.log('Todos');
   //    console.log(JSON.stringify(docs, undefined, 2));
   // }, (err) => {
   //    console.log('Unable to fetch todos', err);
   // });

   // db.collection('Todos').find().count().then((count) => {
   //    console.log(`Todos count: ${count}`,);
   // }, (err) => {
   //    console.log('Unable to fetch todos', err);
   // });

   db.collection('Users').find({name: "Steven Dao"}).toArray().then((docs) => {
      console.log('Users');
      console.log(JSON.stringify(docs, undefined, 2));
   }, (error) => {
      console.log('Unable to fetch Users', error);
   });
});

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

   //deleteMany
   // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
   //    console.log(result);
   // }, (er) => {
   //    console.log('Unable to');
   // });

   //deleteOne
   // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
   //    console.log(result);
   // }, (er) => {
   //    console.log('Unable to');
   // });
   //findOneAndDelete
   // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
   //    console.log(result);
   // }, (er) => {
   //    console.log('Unable to');
   // });

   db.collection('Users').deleteMany({name: 'Steven Dao'}).then((result) => {
      console.log(result);
   });

   db.collection('Users').deleteOne({_id: new ObjectID('5954b9e2aa1b6b26fb70b83d')}).then((result) => {
      console.log(result);
   });

   db.collection('Users').findOneAndDelete({name: 'Hoang'}).then((result) => {
      console.log(JSON.stringify(result, undefined, 2));
   });

   //db.close();
});

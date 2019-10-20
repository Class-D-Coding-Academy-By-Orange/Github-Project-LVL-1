 const mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost/github10-7', {
   useNewUrlParser: true
 });
 const db = mongoose.connection;
 db.on('error', function() {
  console.log('mongoose connection error');
  console.log('____________________________');
});
db.once('open', function() {
  console.log('mongoose connected successfully');
  console.log('____________________________');
});
let tasksSchema = new mongoose.Schema({
  title: String,
  language: String,
  Private: Boolean
});
let Tasks = mongoose.model('tasks', tasksSchema);

let getTasks = (cb) => {
  console.log('GET TASKS FROM DATABASE');
  //fund  
  Tasks.find({},function (err, docs) {
    if (err) {
              console.log('ERR:', err);
             }

        console.log('DOCS:', docs);
        cb(docs);
  });
};
  

let insetReap = (cb,obj) => {s
  console.log( obj)
  console.log('ADD TASKS FROM DATABASE');
  Tasks.insertMany([{title:obj.title,Private:true}],function (err, newDocs) {
    if (err) {
              console.log('ERR:', err);
             }

        console.log('DOCS:', newDocs);
        getTasks(cb); 
         //find i need all the data i have th function befor
  });
  console.log('obj:----', obj)
  cb('Newss .....LLLLLLLLLLbase') 
};
 
let removeOne =(cd,ID)=>{
 cd("dta abter removes")
}
module.exports = {
  a:1111,
  getTasks:getTasks,
  insert:insetReap,
  remove:removeOne
};


// Tasks.find({}, function(err, docs) {
  //   if (err) {
  //     console.log('ERR:', err);
  //   }
  //   console.log('DOCS:', docs);
  //   cb(docs);
  // });


// let insertTask = (cb, obj) => {
//   console.log('OBJ:', obj);
//   console.log('INSERT TASK TO DATABASE');
//   Tasks.insertMany([{ title: obj.title, isCompleted: false }], function(
//     err,
//     NewTask
//   ) {
//     if (err) {
//       console.log('ERR:', err);
//     }
//     console.log('NEWTASK:', NewTask);
//     getTasks(cb);
//   });
// };

// let removeOne = (cb, ID) => {
//   console.log('ID:', ID);
//   cb('DATABASE AFTER REMOVE');
// };
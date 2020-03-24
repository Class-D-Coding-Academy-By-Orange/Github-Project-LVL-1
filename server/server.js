const express = require("express");
const cors = require("cors");
const DB = require('./../db');

const app = express();

 app.use(cors());
 app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
 app.use(express.json()); 
 
 //unduned the name'title

const PORT = 9003;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));


console.log("lolololo", DB)

app.get("/data", (req, res) => {
  DB.getTasks(x=>{
    console.log("call back from sever.js kkkk");
    res.json(x);

  });
});

app.post("/addNewTask", (req, res) => {
  let box =req.body;
  DB.insert((x)=>{
    console.log("call back from sever.js to add newwwww");
    res.json(x);

  },box);
});


app.delete("/delete/:id", (req, res) => {
DB.remove((retsult)=>{
  res.json(retsult);
},req.params.id) //بنادي fanction from db
});

app.get("/", (req, res) => {
  res.json("worknnnnnnnnnnnis");
});


// app.post('/', (req, res) => {
//   let box = req.body;
//   console.log('BOX:', box);
//   DB.insert(baba => {
//     console.log('CALL BACK FROM SERVER');
//     res.json(baba);
//   }, box);
// });

// app.get("/getAll", (req, res) => {
//   res.json(db);
// });
// //  app.get("/addTask", (req, res) => {
// //    let box = req.body;
// //     console.log('BOX:', box);
// //     DB.insert(baba => {
// //     console.log('CALL BACK FROM SERVER');
// //     res.json(baba);
// //   }, box);
  
// //    });


 

// // //  app.get("/del/:ID", (req, res) => {
// // //    console.log('is delet' ,req.params.ID);
// // //    console.log('is delet' ,typeof req.params.ID);
// // //  let deletedID = (parseInt(req.params.ID))

// // //  newdb = db.filter((elem,i)=>{
// // //      return deletedID !== elem.id; 
// // //     });
// // //  res.json(newdb);
// // //  });



// // // // // here data base [no need to do in]
// let db = [
//   {
//     id: 1,
//     title: "oop",
//     status: "Private",
//     language: "JS"
//   },
//   {
//     id: 2,
//     title: "print",
//     status: "Public",
//     language: "pthyon"
//   },
// ]
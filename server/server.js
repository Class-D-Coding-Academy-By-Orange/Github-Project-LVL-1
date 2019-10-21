const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./../database/db.js");

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Orogin", "*");
  res.header(
    "Access-Control-Allow-Orogin",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  // res.json(database);
  db.getRepos(cb => {
    res.json(cb);
  });
});

app.delete("/delete/:id", (req, res) => {
  // console.log("req", req.params.id);
  database = database.filter(x => {
    return parseInt(req.params.id) !== x.id;
  });
  res.json(database);
});

app.post("/addrepo", (req, res) => {
  // let newRepo = {
  //   id: ++newId,
  //   title: req.body.title,
  //   language: req.body.language,
  //   status: req.body.status
  // };
  // database.push(newRepo);
  // res.json(database);
  let repo = req.body;
  db.addRepo(cb => {
    res.json(cb);
  }, repo);
});

const port = 9000;
app.listen(port, () => console.log(`Server is listening to ${port}`));

let database = [
  {
    id: 1,
    title: "lmao",
    status: "Private",
    language: "HTML"
  },
  {
    id: 2,
    title: "rofl",
    status: "Public",
    language: "JavaScript"
  },
  {
    id: 3,
    title: "XD",
    status: "Public",
    language: "JavaScript"
  }
];
let newId = database.length;

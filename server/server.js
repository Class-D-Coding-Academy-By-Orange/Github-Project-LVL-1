const express = require("express");
const cors = require("cors");
const uuid = require("uuid");

const app = express();
app.use(express.json());
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/", (req, res) => {
  res.json("server is working ");
});
app.get("/get", (req, res) => {
  // Array yroo7
  res.json(array);
});
app.post("/post", (req, res) => {
  // console.log(req.body);
  let newRepo = {
    id: uuid(),
    title: req.body.repo.title,
    language: req.body.repo.language,
    status: req.body.repo.status
  };
  array.push(newRepo);
  // console.log('object');
  res.json(array);
});
app.get("/delete/:id", (req, res) => {
  // console.log(req.params.id);

  array = array.filter(item => {
    return item.id != req.params.id;
    //parseIntO()
  });
  res.json(array);
});
app.put("/put", (req, res) => {
  res.json("This is Put");
});
const PORT = 9002;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));

let array = [
  {
    id: uuid(),
    title: "Array",
    status: "Private",
    language: "HTML"
  },
  {
    id: uuid(),
    title: "Object",
    status: "Public",
    language: "JavaScript"
  },
  {
    id: uuid(),
    title: "Map",
    status: "Private",
    language: "HTML"
  },
  {
    id: uuid(),
    title: "Filter",
    status: "Public",
    language: "JavaScript"
  }
];

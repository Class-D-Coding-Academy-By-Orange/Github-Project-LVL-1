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

// console.log("Alaa Aldein")
app.get("/", (req, res) => {
  let x = 2 * 2;
  res.json(`x: ${x}`);
});

//---------------------------------------------------show--------------------------------------
app.get("/data", (req, res) => {
  // console.log('array.data', array.data);
  res.json(array);
});

//--------------------------------------------Add--------------------------------------------------

app.post("/add", (req, res) => {
  console.log("REQ.BODY", req.body);
  console.log(req.body.repos.title != null);
  // start fun
  if(  req.body.repos.title != '' && req.body.repos.status != '' && req.body.repos.language != '')
{
  let newdata = {
    id: uuid(),
    title:req.body.repos.title,
    status: req.body.repos.status,
    language: req.body.repos.language
  };

  console.log("newd :", newdata);
  array.push(newdata);

  //end function

  res.json(array);
}
// else{
  // let newdata = {
  //   id: uuid(),
  //   title:req.body.repos.title,
  //   status: req.body.repos.status,
  //   language: req.body.repos.language
  // };

  // console.log("newd :", newdata);
  // array.push(newdata);

  // //end function

  // res.json(array);
// }
});
 

//--------------------------------------------------DELETE------------------------------------

app.get("/delete/:ID", (req, res) => {
  console.log("array.params", req.params.ID);
  // let ID = req.params.id;
  array = array.filter(item => {
    return item.id != req.params.ID;
    //STRING OR INT
    // return item.id !== parseInt(req.params.ID);
  });

  res.json(array);
});

const PORT = 9000;
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
    title: "Array",
    status: "Private",
    language: "HTML"
  },
  {
    id: uuid(),
    title: "Array",
    status: "Private",
    language: "HTML"
  }
];

/*
  // app.use(express.json());


  const PORT = process.env.PORT || 9000;
  */

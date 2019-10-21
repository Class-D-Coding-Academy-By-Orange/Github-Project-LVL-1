const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/GithubProject", {
  userNewUrlParser: true
});
const db = mongoose.connection;

db.on("error", () => {
  console.log("mongoose connection error");
});

db.once("open", () => {
  console.log("mongoose connected successfully");
  console.log("_________________________");
});

let reposSchema = new mongoose.Schema({
  title: String,
  status: String,
  language: String
});

let Repos = mongoose.model("repos", reposSchema);

let getRepos = cb => {
  Repos.find({}, (err, docs) => {
    if (err) {
      console.log("Error:", err);
    }
    console.log("Docs:", docs);
    cb(docs);
  });
};
let addRepo = (cb, obj) => {
  Repos.insertMany(obj, (err, repo) => {
    if (err) {
      console.log("Error:", err);
    }
    console.log("Docs:", repo);
    cb(repo);
  });
};

module.exports = {
  getRepos: getRepos,
  addRepo: addRepo
};

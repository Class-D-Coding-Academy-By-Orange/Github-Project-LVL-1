import React, { Component } from "react";
import Add from "./components/Add.js";
import Table from "./components/Table.js";
import axios from "axios";

export default class App extends Component {
  state = {
    repos: [
      // {
      //   id: 1,
      //   title: "Array",
      //   status: "Private",
      //   language: "HTML"
      // },
      // {
      //   id: 2,
      //   title: "Object",
      //   status: "Public",
      //   language: "JavaScript"
      // }
    ]
  };
  addRepoCallback = (title, language, status) => {
    // let newRepo = {
    //   id: this.state.repos.length + 1,
    //   title,
    //   status,
    //   language
    // };
    // // console.log(title, language, status, id);
    // // this.setState({ repo: title, language, status, id });
    // this.setState({ repos: [...this.state.repos, newRepo] });
    axios
      .post("http://localhost:9000/addrepo", { title, language, status })
      .then(response => {
        // handle success
        this.setState({ repos: response.data });
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  };
  delete = id => {
    // this.setState({
    //   repos: [...this.state.repos.filter(repo => repo.id !== id)]
    // });
    // // console.log(id);
    axios
      .delete(`http://localhost:9000/delete/${id}`)
      .then(response => {
        // handle success
        this.setState({ repos: response.data });
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  };
  changeStatus = (x, id) => {
    // console.log(x, id);
    let newState = Object.assign({}, this.state);
    if (x === "Public") {
      newState.repos[id - 1].status = "Private";
    } else {
      newState.repos[id - 1].status = "Public";
    }
    this.setState(newState);
  };
  getRequest = () => {
    // console.log("get request called");
    axios
      .get("http://localhost:9000/")
      .then(response => {
        // handle success
        this.setState({ repos: response.data });
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  };
  componentDidMount = () => {
    this.getRequest();
  };
  render() {
    const { repos } = this.state;
    return (
      <div style={{ border: "black 1px solid" }}>
        <h6 style={{ textAlign: "center" }}>Github React</h6>
        <Add cb={this.addRepoCallback} />
        <Table
          repos={repos}
          delete={this.delete}
          changeStatus={this.changeStatus}
        />
      </div>
    );
  }
}

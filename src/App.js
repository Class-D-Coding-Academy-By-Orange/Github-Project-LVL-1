import React, { Component } from "react";
import Add from "./components/Add";
import Table from "./components/Table";
import uuid from "uuid";
import axios from "axios";

export default class App extends Component {
  state = {
    repos: []
  };
  handelDelete = id => {
    // let deleteItem = this.state.repos.filter(item => {
    //   return item.id !== id;
    // });
    // this.setState({
    //   repos: deleteItem
    // });
    console.log(id);
    axios.get(`http://localhost:9002/delete/${id}`).then(array => {
      this.setState({ repos: array.data });
    });
  };

  handleChange = id => {
    let updatedRepos = this.state.repos.map(repo => {
      if (repo.id === id) {
        if (repo.status === "Private") {
          repo.status = "Public";
        } else repo.status = "Private";
      }
      return repo;
    });
    this.setState({
      repos: updatedRepos
    });
  };

  addItem = repo => {
    // repo.id = uuid();
    // let newRepos = this.state.repos;
    // newRepos.push(repo);
    // this.setState({ repos: newRepos });
    // console.log(repo);
    // {repo}=> object of object
    axios.post("http://localhost:9002/post", {repo}).then(obj => {
      this.setState({ repos: obj.data });
    });
  };
  getRequest = () => {
    // console.log("get request function");
    axios.get("http://localhost:9002/get").then(array => {
      this.setState({ repos: array.data });
    });
  };

  render() {
    const { repos } = this.state;
    const { handleChange, handelDelete, addItem, getRequest } = this;
    return (
      <div style={{ border: "black 1px solid" }}>
        <Add
          addItem={addItem}
          getRequest={getRequest}
          repos={repos}
          test={this.state}
        />

        <Table
          handleChange={handleChange}
          handelDelete={handelDelete}
          addItem={addItem}
          repos={repos}
        />
      </div>
    );
  }
}

import React, { Component } from "react";
import Add from "./components/Add";
import Table from "./components/Table";

export default class App extends Component {
  state = {
    repos: [
      {
        id: 1,
        title: "Array",
        status: "Private",
        language: "HTML"
      },
      {
        id: 2,
        title: "Object",
        status: "Public",
        language: "JavaScript"
      }
    ]
  };
  handelDelete = id => {
    let deleteItem = this.state.repos.filter(item => {
      return item.id !== id;
    });
    this.setState({
      repos: deleteItem
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

  addItem = (repo) => {
    repo.id=this.state.repos.length+1
    let newRepos=this.state.repos
    newRepos.push(repo)
    this.setState({repos:newRepos})
  };

  render() {
    const { repos } = this.state;
    const { handleChange, handelDelete, addItem } = this;
    return (
      <div style={{ border: "black 1px solid" }}>
        <Add addItem={addItem} repos={repos} test={this.state} />

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

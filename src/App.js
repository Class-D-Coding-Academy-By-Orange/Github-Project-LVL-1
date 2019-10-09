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

  handelAdd = () => {
    let newItem = {
      id: this.state.repos.length + 1,
      title: this.state.inputValue,
      status: "Public",
      language: "HTML"
    };
    console.log(newItem);
    this.setState({ repos: this.state.repos.concat(newItem) });
  };

  render() {
    const { repos } = this.state;
    const { handleChange, handelDelete, handelAdd } = this;
    return (
      <div style={{ border: "black 1px solid" }}>
        <Add handelAdd={handelAdd} repos={repos} />

        <Table
          handleChange={handleChange}
          handelDelete={handelDelete}
          repos={repos}
        />
      </div>
    );
  }
}

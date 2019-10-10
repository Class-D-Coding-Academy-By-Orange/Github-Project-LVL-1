import React, { Component } from "react";
import Add from "./components/Add";
import Table from "./components/Table";
import uuid from 'uuid';

export default class App extends Component {
  state = {
    repos: [
      {
        id: uuid.v4(),
        title: "Array",
        status: "PRIVATE",
        language: "HTML"
      },
      {
        id: uuid.v4(),
        title: "Object",
        status: "PUBLIC",
        language: "JavaScript"
      }
    ],
    status: "",
    isPrivate: ""
  };

  addItem = item => {
    let newState = this.state.repos;
    newState.push(item);
    this.setState({ repos: newState });
  };

  deleteItem = ID => {
    console.log("this ", ID);
    this.setState({
      repos: this.state.repos.filter((elem, id) => {
        return elem.id !== ID;
      })
    });
  };

  edit = ID => {
    //console.log("this :", ID);
    this.setState({
      repos: this.state.repos.map(elem => {
        if (ID === elem.id) {
          if (elem.status === "PRIVATE") {
            elem.status = "PUBLIC";
          } else {
            elem.status = "PRIVATE";
          }
        }
        return elem;
      })
    });
  };

  render() {
    const { repos } = this.state;
    const { edit, addItem, deleteItem } = this;
    return (
      <div>
        <h3 style={{ textAlign: "center", color: "red" }}>GitHub Repo</h3>
        <Add addItem={addItem} id={repos.id} />
        <Table repo={repos} edit={edit} del={deleteItem} />
      </div>
    );
  }
}

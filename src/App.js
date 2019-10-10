import React, { Component } from "react";
import Add from "./components/Add";
import Table from "./components/Table";

export default class App extends Component {
  state = {
    repos: [
      {
        id: 1,
        title: "Array",
        status: "PRIVATE",
        language: "HTML"
      },
      {
        id: 2,
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
    this.setState = {
      repos: this.state.repos.map((elem, id) => {
        if (elem.id === ID) {
          console.log('this :',ID);
          
        }
         return elem;
      })
    };
  };

  render() {
    const { repos } = this.state;
    const { edit, addItem, deleteItem } = this;
    return (
      <div>
        <h3 style={{ textAlign: "center", color: "red" }}>GitHub Repo</h3>
        <Add addItem={addItem} id={repos.id}/>
        <Table repo={repos} edit={edit} del={deleteItem} />
      </div>
    );
  }
}

import React, { Component } from "react";
import Table from "./components/Table";
import Add from "./components/Add";

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

  delItem = ID => {
    let newobj = this.state.repos.filter((elem, i) => {
      return ID !== elem.id;
    });
    this.setState({
      repos: newobj
    });
  };

  addItem = obj => {
    obj.id = this.state.repos.length + 1;
    let newItems = this.state.repos;
    newItems.push(obj);
    this.setState({
      repos: newItems
    });
  };

  check = ID => {
    // console.log(ID);
    const newststus = this.state.repos;
    newststus.map((elem, i) => {
      if (elem.id === ID) {
        if (elem.status === "Private") {
          elem.status = "Public";
        } else {
          elem.status = "Private";
        }
      }
      return elem;
    });
    this.setState({
      repos: newststus
    });
  };
 
  render() {
    // console.log(this.state.repos[0].id)
    const { state, delItem, addItem, check } = this;
    const { repos } = state;
    return (
      <div style={{ border: "black 1px solid" }}>
        <h6>App</h6>
        <Add addItem={addItem} />
        <br />
        <Table repos={repos} del={delItem} check={check} />
      </div>
    );
  }
}

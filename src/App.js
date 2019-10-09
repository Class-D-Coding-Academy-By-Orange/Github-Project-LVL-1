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
    ]
  };
  render() {
    const {repos}=this.state;
    return (
      <div style={{ border: "black 1px solid" }}>
        <h3 style={{ textAlign: "center", color: "red" }}>GitHub Repo</h3>
        <Add />
        <Table repo={repos}  />
      </div>
    );
  }
}

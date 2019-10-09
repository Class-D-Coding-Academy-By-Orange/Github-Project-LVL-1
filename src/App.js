import React, { Component } from "react";
import Add from "./components/Add.js";
import Table from "./components/Table.js";

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
  render() {
    return (
      <div style={{ border: "black 1px solid" }}>
        <center>
          <h6>Github React</h6>
        </center>
        <Add />
        <Table repos={this.state.repos} />
      </div>
    );
  }
}

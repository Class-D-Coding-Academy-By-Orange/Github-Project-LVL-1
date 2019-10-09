import React, { Component } from "react";
import Repo from "./Repo";

export default class Table extends Component {
  render() {
    const { repos, del } = this.props;
    return (
      <div style={{ border: "3px green dotted" }}>
        <h6>Table</h6>
        <table style={{ width: "100%" }}>
          <tr>
            <th>Number</th>
            <th>Title</th>
            <th>Repo Status</th>
            <th>Check</th>
            <th>Is Private</th>
            <th>Language</th>
            <th>Delete</th>
          </tr>
        </table>
        {repos.map((elem, i) => {
          return <Repo elem={elem} key={i} deleteT={del}/>;
        })}
      </div>
    );
  }
}

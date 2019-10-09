import React, { Component } from "react";

export default class Repo extends Component {
  render() {
    return (
      <div style={{ border: "3px red solid" }}>
        <h6>Repo</h6>
        {/* <tr>
          <th scope="row">{this.props.repos.id}</th>
          <td>{this.props.repos.title}</td>
          <td>{this.props.repos.status}</td>
          <td>{this.props.repos.language}</td>
        </tr> */}
      </div>
    );
  }
}

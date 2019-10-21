import React, { Component } from "react";

export default class Repo extends Component {
  render() {
    const { id, title, status, language } = this.props.repo;
    let isPrivate;
    let check;
    if (this.props.repo.status === "Private") {
      isPrivate = "Yes";
    } else {
      isPrivate = "No";
    }
    if (this.props.repo.status === "Private") {
      check = true;
    } else {
      check = false;
    }
    return (
      <>
        <tr>
          <th scope="row">{id}</th>
          <td>{title}</td>
          <td>{status}</td>
          <td>
            <input
              type="checkbox"
              checked={check}
              onChange={this.props.changeStatus.bind(this, status, id)}
            />
          </td>
          <td>{isPrivate}</td>
          <td>{language}</td>
          <td>
            <button
              onClick={this.props.delete.bind(this, id)}
              className="btn btn-danger"
            >
              X
            </button>
          </td>
        </tr>
      </>
    );
  }
}

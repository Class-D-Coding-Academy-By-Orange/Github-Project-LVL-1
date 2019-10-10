import React, { Component } from "react";

export default class Repo extends Component {
  render() {
    const { handelDelete, elem, handleChange } = this.props;
    return (
      <tr>
        <td>{elem.id}</td>
        <td>{elem.title}</td>
        <td>{elem.status}</td>
        <td>
          <input
            checked={elem.status !== "Public" ? true : false}
            onChange={() => handleChange(elem.id)}
            type="checkbox"
          />
        </td>
        <td>{elem.status !== "Public" ? "Yes" : "No"}</td>
        <td>{elem.language}</td>
        <td>
          <button onClick={() => handelDelete(elem.id)}>X </button>
        </td>
      </tr>
    );
  }
}

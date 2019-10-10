import React, { Component } from "react";
export default class Repo extends Component {
  render() {
    const { id, title, status, lang, edit, del } = this.props;
    return (
      <tr style={{ border: "3px  solid" }}>
        <td>{id}</td>
        <td>{title}</td>
        <td>{status}</td>
        <td>
          <input type="checkbox" onChange={edit.bind(this, id)} />
        </td>
        <td>isPrivate</td>
        <td>{lang}</td>
        <td>
          <button
            type="submit"
            onClick={del.bind(this, id)}
            style={{ border: "none", borderRadius: "50%", cursor: "pointer" }}
            className="btn btn-danger btn-sm"
          >
            X
          </button>
        </td>
      </tr>
    );
  }
}

import React, { Component } from "react";
export default class Repo extends Component {
  render() {
    const { id, title, status, lang, edit, del,index } = this.props;
    return (
      <tr>
        <td>{index+1}</td>
        <td>{title}</td>
        <td>{status.toUpperCase()}</td>
        <td>
          <input
            type="checkbox"
            onChange={edit.bind(this,id)}
            defaultChecked={status==="PRIVATE"}
          />
        </td>
        <td>{status === "PRIVATE" ? "Yes" : "No"}</td>
        <td>{lang}</td>
        <td>
          <button
            type="submit"
            onClick={del.bind(this,id)}
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

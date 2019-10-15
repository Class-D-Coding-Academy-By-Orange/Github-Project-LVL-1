import React, { Component } from "react";
// import { isPrivate } from "@babel/types";
// import { isTemplateElement } from '@babel/types';

export default class Repo extends Component {
  state = {};
  render() {
    const { del, check } = this.props;
    const { id, title, status, language } = this.props.repos;

    return (
      
      <tr>
        <td>{id} </td>|<td> {title}</td>|<td>{status.toUpperCase()}</td>|
        <td>
          <input
            type="checkbox"
            checked={status === "Private"}
            onClick={check.bind(this, id)}
            
          />
        </td>
        |<td>{status === "Private" ? "YES" : "NO"}</td>|<td> {language}</td>|
        <td>
          <button
            className="btn btn-danger btn-sm"
            onClick={del.bind(this, id)}
          >
            Delete
          </button>
        </td>
        |
      </tr>
    
    );
  }
}

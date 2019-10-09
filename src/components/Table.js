import React, { Component } from "react";
import Repo from "./Repo.js";

export default class Table extends Component {
  render() {
    return (
      <div style={{ border: "3px green dotted" }}>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Repo Status</th>
              <th scope="col">Language</th>
            </tr>
          </thead>
          <tbody>
            {this.props.repos.map((elem, id) => {
              return (
                <Repo
                  id={this.props.repos.id}
                  title={this.props.repos.title}
                  repoStatus={this.props.repos.status}
                  language={this.props.repos.language}
                  key={id}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

{
  /* <th scope="row">{this.props.repos.id}</th>
            <td>{this.props.repos.title}</td>
            <td>{this.props.repos.status}</td>
            <td>{this.props.repos.language}</td> */
}

import React, { Component } from "react";
import Repo from "./Repo.js";

export default class Table extends Component {
  render() {
    const { repos } = this.props;
    return (
      <div style={{ border: "3px green dotted" }}>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Repo Status</th>
              <th scope="col">Check</th>
              <th scope="col">Is Private?</th>
              <th scope="col">Language</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {repos.map((elem, id) => {
              return (
                <Repo
                  repo={elem}
                  key={id}
                  delete={this.props.delete}
                  changeStatus={this.props.changeStatus}
                />
              );
              // construktouer
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

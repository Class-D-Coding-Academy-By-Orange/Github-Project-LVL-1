import React, { Component } from "react";
import Repo from "./Repo";

export default class Table extends Component {
  render() {
    const { handelDelete, repos, handleChange, addItem } = this.props;

    return (
      <div>
        <table>
          <tr>
            <th>Number</th>
            <th>Title</th>
            <th>Repo status</th>
            <th>Check</th>
            <th>is Private</th>
            <th>Language </th>
            <th>Action</th>
          </tr>

          {repos.map((elem, index) => {
            return (
              <Repo
                handleChange={handleChange}
                handelDelete={handelDelete}
                addItem={addItem}
                elem={elem}
                key={index}
              />
            );
          })}
        </table>
      </div>
    );
  }
}

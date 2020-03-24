import React, { Component } from "react";
import Repo from "./Repo";

export default class Table extends Component {
  render() {
    //  const {seeReps,toStatus}=this.props;
    const { seeReps } = this.props;

    return (
      <div style={{ border: "3px green dotted" }}>
        <h3>Table</h3>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Title</th>
              <th>status</th>
              <th>Check</th>
              <th>Private</th>
              <th>language</th>
            </tr>
          </thead>
          <tbody>
            {
              seeReps.map((repo, _id) => {
                return <Repo key={_id} seeRepo={repo} />;
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

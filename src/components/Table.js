import React, { Component } from "react";
import Repo from "./Repo";
// import { isTemplateElement } from '@babel/types';

export default class Table extends Component {
  render() {
    const { repos, del, adddata, check } = this.props;
    return (
      <div className="container">
        <div>
          <table>
            <tr>
              <th>Number</th>|<th>Title</th>|<th>Repo stat</th>|<th>check</th>|
              <th>isPrivate</th>|<th>Language </th>|<th> Delete</th>|
            </tr>

            {repos.map((item, key) => {
              return (
                <Repo
                  check={check}
                  repos={item}
                  key={key}
                  del={del}
                  adddata={adddata}
                />
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}

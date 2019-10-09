import React, { Component } from "react";
import Repo from "./Repo";

export default class Table extends Component {
  render() {
  this.props.repos.map((elem,key)=>{
    
      return elem;

    });
    // console.log('this.props.repos.id :', this.props.repos);
    return (
      <div style={{ border: "3px green dotted" }}>
        <h6>Table</h6>
        
        <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Title</th>
            <th>Repo status</th>
            <th>Check</th>
            <th>is Private</th>
            <th>Language </th>
            <th>Action</th>
            </tr>
            </thead>
            <tbody>
              <tr>
            <td></td>
            <td>Smith</td>
            <td></td>
            <td><button>X</button></td>
            </tr>
            </tbody>
        </table>
        <Repo />
      </div>
    );
  }
}

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
export default class Add extends Component {
  render() {
    return (
      <div style={{ border: "3px orange solid" ,padding:'10px'  ,gridGap:'10px' }} class="tab form-inline ">
        <input
          type="text"
          name=""
          id="task"
          class="form-control"
          placeholder="Repo title ..."
        />
        <input
          type="text"
          name=""
          id="task"
          class="form-control"
          placeholder="Repo language ..."
        />
        <select class="btn btn-primary">
          <option value="pr">Private</option>
          <option value="pu">Public</option>
          
        </select>
        <button id="helpId" style={{ float: "right" }} class="btn btn-light">
          Add{" "}
        </button>
      </div>
    );
  }
}

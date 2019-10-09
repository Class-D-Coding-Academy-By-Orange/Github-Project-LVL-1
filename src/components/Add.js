import React, { Component } from "react";

export default class Add extends Component {
  render() {
    return (
      <div style={{ border: "3px orange solid" }}>
        <input type="text" name="" id="task" class="form-control" placeholder="insert r" />
        <button id="helpId" style={{float:'right'}} class="text-muted">Add </button>
      </div>
    );
  }
}

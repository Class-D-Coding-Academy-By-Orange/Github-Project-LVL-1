import React, { Component } from "react";

export default class Add extends Component {
  render() {
    return (
      <div style={{ border: "3px orange solid" }}>
        <h6>Add</h6>
        <input
          style={{ width: 500, padding: 10, margin: 10 }}
          type="text"
          placeholder="Repo Title"
        />
        <input
          style={{ width: 500, padding: 10, margin: 10 }}
          type="text"
          placeholder="Repo Language"
        />
        <select style={{ width: 500, padding: 10, margin: 10 }}>
          <option value="volvo"> Repo Status(Private/Public)</option>
          <option value="volvo">Private</option>
          <option value="saab">Public</option>
        </select>
        <button style={{ padding: 10, width: 100 }}>Add</button>
      </div>
    );
  }
}

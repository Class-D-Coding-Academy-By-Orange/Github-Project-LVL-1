import React, { Component } from "react";

export default class Add extends Component {
  render() {
    const { handelAdd } = this.props;
    return (
      <div>
        <input
          style={{ width: 200, padding: 10, margin: 10 }}
          type="text"
          placeholder="Repo Title"
          
        />
        {console.log('this.props.repos :', this.event)}
        <input
          style={{ width: 200, padding: 10, margin: 10 }}
          type="text"
          placeholder="Repo Language"
        />
        <select
          defaultValue={"DEFAULT"}
          style={{ width: 200, padding: 10, margin: 10 }}
        >
          <option disabled value="DEFAULT" hidden>
            Repo Status(Private/Public)
          </option>
          <option>Private</option>
          <option>Public</option>
        </select>
        <button
          onClick={() => handelAdd(this.props.repos.id)}
          style={{ padding: 10, width: 100 }}
        >
          Add
        </button>
      </div>
    );
  }
}

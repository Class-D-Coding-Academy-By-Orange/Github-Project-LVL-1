import React, { Component } from "react";

export default class Add extends Component {
  state = {
    title: "",
    status: "",
    language: ""
  };
  change = event => {
    this.setState({
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value
    });
    // console.log(this.state);
  };
  pushItem = () => {
    this.props.addItem(this.state);
    this.setState({
      title: "",
      status: "",
      language: ""
    });
  };

  render() {
    return (
      <div>
        <input
          style={{ width: 200, padding: 10, margin: 10 }}
          type="text"
          value={this.state.title}
          placeholder="Repo Title"
          name="title"
          onChange={this.change}
        />
        <input
          style={{ width: 200, padding: 10, margin: 10 }}
          type="text"
          name="language"
          value={this.state.language}
          placeholder="Repo Language"
          onChange={this.change}
        />
        <select
          defaultValue={"DEFAULT"}
          onChange={this.change}
          name="status"
          style={{ width: 200, padding: 10, margin: 10 }}
        >
          <option disabled value="DEFAULT" hidden>
            Repo Status(Private/Public)
          </option>
          <option>Private</option>
          <option>Public</option>
        </select>
        <button onClick={this.pushItem} style={{ padding: 10, width: 100 }}>
          Add
        </button>
        <button
          onClick={this.props.getRequest}
          style={{ marginLeft:15,padding: 10, width: 100 }}
        >
          Get request
        </button>
      </div>
    );
  }
}

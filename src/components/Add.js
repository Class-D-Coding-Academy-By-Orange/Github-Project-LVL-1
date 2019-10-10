import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
export default class Add extends Component {
  state = {
    title: "",
    language: "",
    status: ""
  };
  addNewTask = () => {
    let newTask = {
      
      title: this.state.title,
      language: this.state.language,
      status: this.state.status
    };
    this.props.addItem(newTask);
    this.setState({ title: "", language: ""});
  };
  changeTitle = event => {
    // console.log(event.target.value);
    this.setState({ title: event.target.value });
  };
  changeLang = event => {
    // console.log(event.target.value);
    this.setState({ language: event.target.value });
  };
  changeRepo = event => {
    // console.log(event.target.value.toUpperCase());
    this.setState({ status: event.target.value.toUpperCase() });
  };
  render() {
    const { state, addNewTask, changeTitle, changeLang, changeRepo } = this;
    return (
      <div
        style={{ padding: "10px", marginBottom: "40px", marginTop: "40px" }}
        className="tab form-inline "
      >
        <input
          type="text"
          value={state.title}
          name=""
          className="form-control"
          placeholder="Repo title ..."
          onChange={changeTitle}
        />
        <input
          type="text"
          name=""
          value={state.language}
          className="form-control"
          placeholder="Repo language ..."
          onChange={changeLang}
        />
        <select
          onChange={changeRepo}
          value={state.value}
          className="btn btn-dark"
        >
          <option selected disabled hidden>
            Repo Status
          </option>
          <option value={state.value}>Private</option>
          <option value={state.value}>Public</option>
        </select>
        <button
          style={{ float: "right" }}
          onClick={addNewTask}
          className="btn btn-warning"
        >
          <strong>Add</strong>
        </button>
      </div>
    );
  }
}

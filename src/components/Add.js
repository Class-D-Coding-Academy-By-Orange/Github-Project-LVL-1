import React, { Component } from "react";

export default class Add extends Component {
  state = { title: "", language: "", status: "Private" };

  nameChange = e => {
    // this.setState(title:{this.target.value})
    // this.setState({ [e.target.name]: e.target.value });
    this.setState({ title: e.target.value });
    // console.log(e.target.value);
  };
  langChange = e => {
    this.setState({ language: e.target.value });
    // console.log(e.target.value);
  };
  statusChange = e => {
    this.setState({ status: e.target.value });
    // console.log(e.target.value);
  };
  // idChange = e => {
  //   this.setState({ id: e.target.value });
  //   // console.log(e.target.value);
  // };
  // addRepo = () => {
  //   console.log(this);
  // };
  reset = e => {
    // e.preventDefault();
  };
  render() {
    const { title, language, status } = this.state;
    return (
      <form onSubmit={this.reset} style={{ border: "3px orange solid" }}>
        <h6 style={{ textAlign: "center" }}>Add</h6>
        <label htmlFor="name">Repo Name</label>
        <input type="text" name="name" onChange={this.nameChange} />
        <label htmlFor="lang">Language</label>
        <input type="text" name="lang" onChange={this.langChange} />
        <label htmlFor="status">Status</label>
        <select name="status" onChange={this.statusChange}>
          <option>Private</option>
          <option>Public</option>
        </select>
        {/* <label htmlFor="id">ID (for test)</label>
        <input type="number" name="id" onChange={this.idChange} /> */}
        <input
          type="submit"
          style={{ margin: "0 auto", display: "block" }}
          onClick={this.props.cb.bind(this, title, language, status)}
          value={"Create Repo"}
        />
      </form>
    );
  }
}

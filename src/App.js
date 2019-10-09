import React, { Component } from "react";
import Table from "./components/Table";
import Add from './components/Add';

export default class App extends Component {
  state = {
    repos: [
      {
        id: 1,
        title: "Array",
        status: "Private",
        language: "HTML"
      },
      {
        id: 2,
        title: "Object",
        status: "Public",
        language: "JavaScript"
      }
    ]
  };

  delItem = (ID) =>{
      let newobj = this.state.repos.filter((elem,i)=>{
       return ID !== elem.id
      })
      this.setState({
        repos:newobj
      })
  }

  render() {
    const { state, delItem } = this;
    const {repos} = state
    return (
      <div style={{ border: "black 1px solid" }}>
        <h6>App</h6>
        <Add />
        <br/>
        <Table repos={repos} del={delItem}/>
      </div>
    );
  }
}

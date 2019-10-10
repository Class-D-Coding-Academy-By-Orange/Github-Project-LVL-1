import React, { Component } from 'react';
import Add from './components/Add';
import Table from './components/Table';

export default class App extends Component {
  state = {
    repos: [
      {
        id: 1,
        title: 'Array',
        status: 'PRIVATE',
        language: 'HTML'
      },
      {
        id: 2,
        title: 'Object',
        status: 'PUBLIC',
        language: 'JavaScript'
      }
    ]
  };

  addRepo=(repo)=>{
    let newRepo=this.state.repos;
    newRepo.push(repo);
    this.setState({repos:newRepo});
  }

  render() {
    const {repos}=this.state;
    const {addRepo}=this;
    return (
      <div style={{ border: 'black 1px solid' }}>
        <h6>App</h6>
        <Add repos={repos} addRepo={addRepo} />
        <Table repos={repos} />
      </div>
    );
  }
}

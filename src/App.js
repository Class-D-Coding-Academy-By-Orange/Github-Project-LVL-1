import React, { Component } from 'react';
import Table from './components/Table';
import Add from './components/Add';

export default class App extends Component {
  state = {
    repos: [
      {
        id: 1,
        title: 'Array',
        status: 'Private',
        language: 'HTML'
      },
      {
        id: 2,
        title: 'Object',
        status: 'Public',
        language: 'JavaScript'
      }
    ]
  };

  delRepo = (id) => {
    console.log(id);
    this.setState({repos : [...this.state.repos.filter(repo => repo.id !== id)] });
  }

  render() {
    const {repos}=this.state;
    // console.log(repos);
    return (
      <div style={{ border: 'black 1px solid' }}>
        <Add />
        <Table repos={repos} delRepo={this.delRepo}/>
      </div>
    );
  }
}

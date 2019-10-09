import React, { Component } from 'react';
import Add from './components/Add';
import Table from './components/Table';

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
    ],
    
  };


  add = event => {
    event.preventDefault();
    console.log(event.target['repo-title'].value, event.target['repo-language'].value, event.target['repo-status'].value);
  }

  render() {
    return (
      <div className="container-fluid" style={{ border: 'black 1px solid' }}>
        <h6>App</h6>
        <div className="container">
          <Add add={this.add} />
          <Table />
        </div>
      </div>
    );
  }
}

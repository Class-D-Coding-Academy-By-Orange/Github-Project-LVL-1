import React, { Component } from 'react';
import Repo from './components/Repo';

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
  render() {
    console.log(this.state.repos);
    return (
      <div style={{ border: 'black 1px solid' }}>
        <Repo repos={this.state.repos}/>
      </div>
    );
  }
}

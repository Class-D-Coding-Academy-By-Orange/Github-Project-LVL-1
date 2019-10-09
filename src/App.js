import React, { Component } from 'react';
import Add from './components/Add';
import Table  from './components/Table';
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
    //const {title}=this.props.repos;

    return (
      <div style={{ border: 'black 1px solid' }}>
        <h1>App nada</h1>
        <Add />
        <Table/>
        <Repo />
      </div>
    );
  }
}

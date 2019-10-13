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

  addRepo = (repo) => {
    let newRepo = this.state.repos;
    newRepo.push(repo);
    this.setState({ repos: newRepo });
  }

  deleteRepo = (repoId) => {
    let del = this.state.repos.filter((element, i) => {
      return repoId !== element.id;
    });
    this.setState({ repos: del });
  }

  changeCheck = (recentId) => {
    const { repos } = this.state;
    // console.log(recentId);
    let checkValue = repos.map((element, i) => {
      if (recentId === element.id) {
        // repos.status =!repos.status
        if (element.status === 'PUBLIC') {
          element.status = 'PRIVATE';
        }
        else if (element.status === 'PRIVATE') {
          element.status = 'PUBLIC';
        }
      }
      // console.log('object element :', element);
      return element;
    });
// console.log('object :', checkValue);
    this.setState({ repos: checkValue });
  }

  render() {
    const { repos } = this.state;
    const { addRepo, deleteRepo, changeCheck } = this;
    return (
      <div style={{ border: 'black 1px solid' }}>
        <h6>App</h6>
        <Add repos={repos} addRepo={addRepo} deleteRepo={deleteRepo} />
        <Table repos={repos} deleteRepo={deleteRepo} changeCheck={changeCheck} />
      </div>
    );
  }
}

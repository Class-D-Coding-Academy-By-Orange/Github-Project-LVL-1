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

  componentDidMount() {
    console.log('Done By\nAhmad Al-Ghzawi')
  }

  toggleStatus = id => {
    let repos = this.state.repos.map(repo => {
      if (repo.id === id) {
        if (repo.status === 'Private') {
          repo.status = 'Public'
        } else {
          repo.status = 'Private'
        }
      }
      return repo
    })
    this.setState({ repos })
  }

  add = event => {
    event.preventDefault()
    let title = event.target['repo-title'].value
    let status = event.target['repo-status'].value
    let language = event.target['repo-language'].value

    if (!(title === '' || language === '' || status === 'Repo Status (Private/Public)')) {
      let repos = this.state.repos
      let repo = {id: this.state.repos.length + 1, title, status, language}
      this.setState({ repos: repos.concat(repo) })
    }
  }

  remove = id => {
    let repos = this.state.repos.filter(repo => repo.id !== id)
    this.setState({ repos })
  }

  render() {
    return (
      <div className="container-fluid">
        <h6 className="mt-5">github App</h6>
        <div className="container mt-5">
          <Add add={this.add} />
          <Table repos={this.state.repos} toggleStatus={this.toggleStatus} remove={this.remove} />
        </div>
      </div>
    );
  }
}

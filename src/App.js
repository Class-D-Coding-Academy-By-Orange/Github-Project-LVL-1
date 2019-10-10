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
    ]
  };

  deleteItem= ID => {
    console.log('id' ,ID);
    let newState= this.state.repos.filter(
      (elem, i)=>{
        return ID !== elem.id;
      }
    );
    this.setState({repos: newState});
  }

  addRepo = (repo) => {
   
    let newRepo = this.state.repos;
    newRepo.push(repo)
    this.setState({repos: newRepo});

  };
  render() {

    const {repos}=this.state;
    return (
      <div style={{ border: 'black 1px solid' }}>
         <Add addRepo={this.addRepo} repos={repos}/>
         <Table repos={repos}/> 
      </div>
    );
  } 
}
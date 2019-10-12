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
        language: 'HTML',
        isPrivate:'Yes'
      },
      {
        id: 2,
        title: 'Object',
        status: 'Public',
        language: 'JavaScript',
        isPrivate:'No'
      }
    ]
  };
  
  //Delete Repo
  delRepo = (id) => {
    console.log(id);
    this.setState({repos : [...this.state.repos.filter(repo => repo.id !== id)] });
  }

  //Add Repo
  addRepo =(title,status,language) => {
    //console.log(title)
    const newRepos ={
      id:this.state.repos.length +1,
      title :title,
      status:status,
      language:language
    }
    this.setState({repos: [...this.state.repos,newRepos]});
  }
  //Toggle 
  exchange=(id)=>{
    console.log(id)
    this.setState({repos: this.state.repos.map(repos => {
      if(repos.id === id){
        //repos.status = !repos.status;
        if(repos.status==='Private'){
          repos.status='Public';
          repos.isPrivate='No'
        }else{
          repos.status='Private'
          repos.isPrivate='Yes'

        }
      }
      return repos;
    }) });
  }



  render() {
    const {repos}=this.state;
    // console.log(repos);
    return (
      <div style={{ border: 'black 1px solid' }}>
        <Add addRepo={this.addRepo}/>
        <Table repos={repos} delRepo={this.delRepo} exchange={this.exchange}/>
      </div>
    );
  }
}

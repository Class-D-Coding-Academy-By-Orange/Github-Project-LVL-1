import React, { Component } from 'react';
import Table  from './components/Table';
import Add from './components/Add';
//import Repo from './components/Repo';
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
 
  isStatus=(ID)=>{
    console.log('this from app eidt',ID)
    let newStates=this.state.repos.map((elem,i)=>{
      if (ID === elem.id){
      if(elem.status==="Public"){
        elem.status = "Private"
      }
      else if(elem.status==="Private"){
        elem.status = "Public"
      }
        }
      return elem ;
    })
   this.setState({repos:newStates});
  }

  deletRepo = (ID) => {
    //console.log("to delete(id)", ID);
    let newDelete= this.state.repos.filter((elem,i)=>{

      return ID !== elem.id; 
    });
    this.setState( {repos: newDelete});
  };
 
  //item like {id: 55,title:"eat", status:"Public" language: 'pyhon'}
  addRepo = (repo) =>{
    let newRepo = this.state.repos;
    newRepo.push(repo)
    this.setState({repos:newRepo});
  }
  // edit= (ID) =>{
  //   console.log('this from app eidt',ID)
  //   let newStates=this.state.repos.map((elem,i)=>{
  //     if (ID === elem.id){
  //     if(elem.status==="Public"){
  //       elem.status = "Private"
  //     }
  //     else if(elem.status==="Public"){
  //       elem.status = "Private"
  //     }
  //       }
  //     return elem ;
  //   })
  //  this.setState({repos:newStates});
  // }
  

  render() {
    const{deletRepo,isStatus}=this;
    const {repos}=this.state;

    return (
      <div style={{ border: 'black 1px solid' }}>
        <h1 style={{textAlign: "center" , color:'#1279EE'}}>App NADA</h1>
        
        <Add addRepo={this.addRepo}/>
        <button onClick={this.addRepo.bind(this,{id: 3,title:"fununun", status:"Public", language: 'fununun'})} style={{backgroundColor:"#EE126C"}}>fun buttons</button>
        <button onClick={this.deletRepo.bind(this,2)} style={{backgroundColor:"#EE126C"}}> fun delete</button>
        {/* <button onClick={this.edit.bind(this,2)}> fun edit</button> */}

        <Table seeReps={repos} deldel={deletRepo} toStatus={isStatus} />
       

        
       
      </div>
      );
    }
  }

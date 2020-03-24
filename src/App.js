import React, { Component } from 'react';
import axios from 'axios';
import Table  from './components/Table';
import Add from './components/Add';
//import Repo from './components/Repo';
export default class App extends Component {
  state = {
    
    repos:[],
  };

 componentDidMount(){
   this.getRequest()
 }
  
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
  };

  getRequest =()=>{
    console.log('the servier get request this in app')
    
    axios
      .get('http://localhost:9003/data')
      .then( res =>{
       console.log(res.data);
        this.setState({repos:res.data});
      });
  };


  addRepo = title =>{
    axios
      .post('http://localhost:9003/addNewTask',{
        title
      })
      .then( ({data}) =>{
        console.log(data);
       this.setState({repos:data});
      })
      .catch( (error)=> {
        console.log(error);
      });
    }

  //   deletRepo = (ID) => {
  //   //console.log("to delete(id)", ID);
  //   let newDelete= this.state.repos.filter((elem,i)=>{

  //     return ID !== elem.id; 
  //   });
  //   this.setState( {repos: newDelete});
  // };

  addRepo = (repo) =>{
    let newRepo = this.state.repos;
    newRepo.push(repo)
    this.setState({repos:newRepo});
  }
  deletRepo = (ID) => {
    console.log('the servier get deddededede in app')

    axios
      .get(`http://localhost:9003/del/${ID}`)
      .then((data) =>{
        this.setState({repos:data});
      })
  };

  render() {
    //const{deletRepo,isStatus}=this;
    const {repos}=this.state;

    return (
      <div style={{ border: 'black 1px solid' }}>
        <h1 style={{textAlign: "center" , color:'#1279EE'}}>App NADA</h1>
        <button onClick={this.addRepo} > fun getRequest</button>
        <button onClick={this.deletRepo}> fun delete SERVER</button>

        <Add addRepo={this.addRepo}/>
       
        <button onClick={this.addRepo.bind(this,{id: 3,title:"fununun", status:"Public", language: 'fununun'})} style={{backgroundColor:"#EE126C"}}>fun buttons</button>

        {/* <button onClick={this.deletRepo.bind(this,2)} style={{backgroundColor:"#EE126C"}}> fun delete</button> */}
        {/* <button onClick={this.edit.bind(this,2)}> fun edit</button> */}
        <Table seeReps={repos}/>

        {/* <Table seeReps={repos} deldel={deletRepo} toStatus={isStatus} /> */}
      </div>
      );
    }
  }


  
 
  //item like {id: 55,title:"eat", status:"Public" language: 'pyhon'}
  // addRepo = (repo) =>{
  //   let newRepo = this.state.repos;
  //   newRepo.push(repo)
  //   this.setState({repos:newRepo});
  // }

 
    // let newRepo = this.state.repos;
    // newRepo.push(title)
    // this.setState({repos:newRepo});

  
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
  
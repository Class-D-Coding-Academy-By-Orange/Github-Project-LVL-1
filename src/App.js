import React, { Component } from "react";
import Add from "./components/Add";
import Table from "./components/Table";
import uuid from 'uuid';

export default class App extends Component {
  state = {
    
    repos: [
      {
        id: uuid(),
        title: "Array",
        status: "Private",
        language: "HTML"
      },
      {
        id: uuid(),
        title: "Object",
        status: "Public",
        language: "JavaScript"
      }
    ]
  };

  check=(id)=>{
    
    let pri=this.state.repos
    pri.map((ele)=>{

      if(ele.id === id){
        if(ele.status === "Public")
        {
          ele.status='Private' 
        }
        else{
        ele.status='Public'
        }
        return ele;
      }

      this.setState({repos:pri})

    });

  }
  // if(this.state.status == "Privat"){
  //   this.setState({
  //    status:"PRIVAT"
  //   })
    

  // }

  adddata = item => {
    let newdata = this.state.repos;
    newdata.push(item);
    // return repos;

    this.setState({ repos: newdata });
  };

  del = id => {
    // console.log('id :', id);
    let newrepo = this.state.repos.filter(item => {
      return id !== item.id;
    });

    this.setState({ repos: newrepo });
  };

  render() {
    const { del, adddata , check} = this;
    const { repos } = this.state;

    return (
      <div className="container" style={{ border: "black 1px solid" }}>
        <Add repos={repos} adddata={adddata} />
        <Table check={check} repos={repos} del={del} adddata={adddata}/>
      </div>
    );
  }
}

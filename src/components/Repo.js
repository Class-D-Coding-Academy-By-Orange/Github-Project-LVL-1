import React, { Component } from 'react';
import Table from './Table';
import Add from './Add';

export default class Repo extends Component {
  render() {
    const {repos}=this.props;
    return (
      <div style={{ border: '3px red solid' }}>
         {/* {
           repos.map((repos,index)=>{ */}
          <Add /> 
          <Table  repo={repos}/>
           {/* })
      
          } */}
    </div>);
  }
}

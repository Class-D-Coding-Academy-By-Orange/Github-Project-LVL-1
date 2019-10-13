import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Repo extends Component {

  render() {
    const { repos,deleteRepo,changeCheck} = this.props;
    const {id,title,status,language}=repos;
    return (
      <tr style={{ border: '3px red solid' }}>
        <td>{id}</td>
        <td>{title}</td>
        <td>{status}</td>
        <td><input type='checkbox' defaultChecked={status==='PRIVATE'?true:false} onClick={()=>changeCheck(id)}/></td>
        <td>{status==='PRIVATE'?'YES':'NO'}</td>
        <td>{language}</td>
        <td><button type="button" className="btn btn-danger" onClick={()=>deleteRepo(id)}>Delete</button></td>
      </tr>
    );
  }
}
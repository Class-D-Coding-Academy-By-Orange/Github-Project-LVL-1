import React, { Component } from 'react';

export default class Repo extends Component {
  render() {
    const {repo , delRepo ,exchange}=this.props;
    const {id} = this.props.repo;
    console.log(this.props.repos);
    return (
      <>
        <tr>
        <td>{repo.id}</td>
        <td>{repo.title}</td>
        <td>{repo.status}</td>
        <td><input type="checkbox" onChange={exchange.bind(this,id)} /> </td>
        <td>{repo.isPrivate}</td> 
        <td>{repo.language}</td>
        <td><button onClick={delRepo.bind(this,repo.id)} style={btnStyle}>X</button></td>
        </tr>
    </>);
  }
}
const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border:'none',
  padding: '5px 9px',
  borderRedius: '50%',
  cursor:'pointer',
  float:'center'
}
import React, { Component } from 'react';

export default class Repo extends Component {
  render() {
    const {repo}=this.props;

    return (
      <div style={{ border: '3px red solid' }}>
       <table>
       <tr>
    <td  style={{  border: '1px solid black '}}>{repo.id}</td>
    <td  style={{  border: '1px solid black '}}>{repo.title}</td>
    <td  style={{  border: '1px solid black '}}>{repo.status}</td>
    <td  style={{  border: '1px solid black '}}><input type="checkbox"/></td>
    {/* <td  style={{  border: '1px solid black '}}>{:isCompleted?"line-through":"none"}}}</td> */}
    <td  style={{  border: '1px solid black '}}>{repo.language}</td>
    <td  style={{  border: '1px solid black '}}>X</td>
  </tr>
  </table>

      </div>
    );
  }
}
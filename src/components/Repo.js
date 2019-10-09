import React, { Component } from 'react';

export default class Repo extends Component {


  deleteItem =()=>{
    this.props.deleteT(this.props.elem.id)
  }

  render() {
    const {props,deleteItem} = this
    const {elem} = props
    return (
      <div style={{ border: '3px red solid' }}>
        <h6>Repo</h6>
        <table style={{width:'100%'}}>
          <tr>
            <td>{elem.id}</td>
            <td>{elem.title}</td>
            <td>{elem.status}</td>
            <td>Check</td>
            <td>Is Private</td>
            <td>{elem.language}</td>
            <td><button onClick = {deleteItem}>X</button></td>
          </tr>
        </table>
      </div>
    );
  }
}
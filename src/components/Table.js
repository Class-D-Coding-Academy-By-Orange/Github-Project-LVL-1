import React, { Component } from 'react';

export default class Table extends Component {
  render() {
    return (
      <div style={{ border: '3px green dotted' }}>
        <h6>Table</h6>
       <table  style={{  border: '1px solid black '}}>
  <tr>
    <th  style={{  border: '1px solid black '}}>Number</th>
    <th style={{  border: '1px solid black '}}>Title</th> 
    <th  style={{  border: '1px solid black '}}>Repo status</th>
    <th  style={{  border: '1px solid black '}}>Check</th>
    <th style={{  border: '1px solid black '}}>isPrivate</th> 
    <th  style={{  border: '1px solid black '}}>Language</th>
    <th  style={{  border: '1px solid black '}}>Delete</th>

  </tr>
  <tr>
    <td  style={{  border: '1px solid black '}}>Jill</td>
    <td  style={{  border: '1px solid black '}}>Smith</td>
    <td  style={{  border: '1px solid black '}}>50</td>
    <td  style={{  border: '1px solid black '}}> <input type="checkbox"></input></td>
    <td  style={{  border: '1px solid black '}}>No</td>
    <td  style={{  border: '1px solid black '}}>50</td>
    <td  style={{  border: '1px solid black '}}><button> X</button></td>
  </tr>
  <tr>
    <td  style={{  border: '1px solid black '}}>Eve</td>
    <td  style={{  border: '1px solid black '}}>Jackson</td>
    <td  style={{  border: '1px solid black '}}>94</td>
    <td  style={{  border: '1px solid black '}}> <input type="checkbox"></input></td>
    <td  style={{  border: '1px solid black '}}>No</td>
    <td  style={{  border: '1px solid black '}}>50</td>
    <td  style={{  border: '1px solid black '}}><button> X</button></td>
  </tr>
  <tr>
    <td  style={{  border: '1px solid black '}}>John</td>
    <td  style={{  border: '1px solid black '}}>Doe</td>
    <td  style={{  border: '1px solid black '}}>80</td>
    <td  style={{  border: '1px solid black '}}> <input type="checkbox"></input></td>    
    <td  style={{  border: '1px solid black '}}>No</td>
    <td  style={{  border: '1px solid black '}}>50</td>
    <td  style={{  border: '1px solid black '}}><button> X</button></td>
  </tr>
  
</table>
      </div>
    );
  }
}

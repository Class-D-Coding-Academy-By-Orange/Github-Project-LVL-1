import React, { Component } from 'react';

export default class Table extends Component {
  render() {
    return (
      <div style={{ border: '3px green dotted' }}>
        <h3>Table</h3>

        <div style={{ border:'1px solid black', borderCollapse: 'collapse'}}>
        <table >
            <tr style={{ border:'1px solid black', borderCollapse: 'collapse'}}>

              
              <th>Title</th>
              <th>status</th>
              <th>language</th>
             
            </tr>
         
  
          
          </table>
        </div>
      </div>
    );
  }
}



 // <th>Check</th>
 //              <th>is private</th>
 //              <th>Delete</th>
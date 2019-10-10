import React, { Component } from 'react';
import Repo from './Repo';

export default class Table extends Component {
  render() {
    const {repos ,delRepo}=this.props;
    return (
      <div style={{ border: '3px green dotted' }}>
        <table className="table">
          <thead className="thead-light">
        <tr>
          <th scope="col">Number</th>
          <th scope="col">Title</th>
          <th scope="col">Repo status</th>
          {/* <th scope="col">Check</th> */}
          {/* <th scope="col">isPrivate</th> */}
          <th scope="col">Language</th>
          <th scope="col">Delete</th>
        </tr>
          </thead>
          <tbody>
            
          {console.log(repos)}
          {
            repos.map((elem, i)=>(
              <Repo key={i} repo={elem} delRepo={delRepo}/>
            )
            )
          }
          
          </tbody>
        </table>
      </div>
    );
  }
}

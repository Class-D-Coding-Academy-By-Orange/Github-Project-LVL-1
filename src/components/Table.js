import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Repo from './Repo';

export default class Table extends Component {
  render() {
    const { repos } = this.props;
    return (
      <div style={{ border: '3px green dotted' }}>
        <h6>Table</h6>

        <table className="table">
          <thead className='thead-dark'>
            <tr>
              <th scope="col">Number</th>
              <th scope="col">Title</th>
              <th scope="col">Repo Status</th>
              {/* <th scope="col">Check</th> */}
              {/* <th scope="col">isPrivate</th> */}
              <th scope="col">Language</th>
              {/* <th scope="col">Delete</th> */}
            </tr>
          </thead>
          <tbody>
            {
              repos.map((element,id)=>{
                return <Repo key={id} repos={element} />
              })
            }
          </tbody>
        </table>

      </div>
    );
  }
}

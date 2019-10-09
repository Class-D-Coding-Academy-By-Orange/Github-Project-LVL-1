import React, { Component } from 'react';
import { isTemplateElement } from '@babel/types';

export default class Repo extends Component {
  render() {
    const {repos}= this.props
    return (
      <div style={{ border: '3px red solid' }}>
        <h6>Repo</h6>
        <table>
            <tr>
            <th>Number </th>|
            <th>Title</th>|
            {/* <th>Repo status</th>|
            <th>chek</th>|
            <th>isPrivet</th>| */}
            <th>Language</th>|
            <th>Delete</th>|
            </tr>

            
          <tr>
         
          </tr>
        </table>
      </div>
    );
  }
}
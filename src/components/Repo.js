import React, { Component } from 'react';
export default class Repo extends Component {
  render() {
    return (
      <tr style={{ border: '3px  solid' }}>
          
        
            
              <td>{this.props.id}</td>
              <td>{this.props.title}</td>
              <td>{this.props.status}</td>
              <td>{this.props.key}</td>
              <td>{this.props.key}</td>
              <td>{this.props.lang}</td>
              <td>{this.props.title}</td>
            
            
      </tr>
    );
  }
}
import React, { Component } from 'react';

export default class Repo extends Component {
  render() {
    const { repos } = this.props;
    return (
      <tr style={{ border: '3px red solid' }}>
        <td>{repos.id}</td>
        <td>{repos.title}</td>
        <td>{repos.status}</td>
        <td>{repos.language}</td>
      </tr>
    );
  }
}
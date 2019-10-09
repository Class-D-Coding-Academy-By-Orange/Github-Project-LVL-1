import React, { Component } from 'react';

export default class Repo extends Component {
  render() {
    return (

      <tr>
        <th scope="row">{this.props.repo.id}</th>
        <td>{this.props.repo.title}</td>
        <td>{this.props.repo.status}</td>
        <td><input type="checkbox" defaultChecked={this.props.repo.status === 'Private' ? true : false} onClick={() => this.props.toggleStatus(this.props.repo.id)}/></td>
        <td>{this.props.repo.status === "Private" ? 'YES' : 'NO'}</td>
        <td>{this.props.repo.language}</td>
        <td><button className="btn btn-danger" onClick={() => this.props.remove(this.props.repo.id)}>X</button></td>
      </tr>

    );
  }
}
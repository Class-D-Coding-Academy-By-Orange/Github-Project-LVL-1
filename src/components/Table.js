import React, { Component } from 'react';
import Repo from './Repo';

export default class Table extends Component {
  render() {
    return (
      <div style={{ border: '3px green dotted' }}>
        <h6>Table</h6>
        <Repo />
      </div>
    );
  }
}

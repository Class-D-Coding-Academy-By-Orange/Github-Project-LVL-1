import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Add extends Component {
  render() {
    return (
      <div style={{ border: '3px orange solid' }}>
        <h6>Add</h6>

        <form className="form-inline">
          <input type="text" className="form-control mb-2 mr-sm-2" placeholder="Repo Title" />
          <input type="text" className="form-control mb-2 mr-sm-2" placeholder="Repo Language" />

          <select className="custom-select mb-2 mr-sm-2">
            <option defultvalue='selected disabled hidden'>Repo Status(Private/Public)</option>
            <option value="1">Public</option>
            <option value="2">Private</option>
          </select>

          <button type="submit" className="btn btn-primary mb-2">Add Repo</button>

        </form>
      </div>
    );
  }
}

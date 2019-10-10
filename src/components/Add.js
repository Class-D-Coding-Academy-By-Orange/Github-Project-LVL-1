import React, { Component } from 'react';

export default class Add extends Component {
  render() {
    return (
    <div style={{ border: '3px orange solid' }}>
      <div className="form-row">
        <div className="form-group col-md-4">
          <input type="text" className="form-control"  placeholder="repo title" />
        </div>
        <div className="form-group col-md-3">
          <input type="text" className="form-control"  placeholder="repo language" />
        </div>
        <div className="form-group col-md-3">
          <select id="inputState" className="form-control" placeholder="Repo Status(Private/Public)">
            <option >Private</option>
            <option>Public</option>
          </select>
        </div>
    </div>
    </div>
    );
  }
}

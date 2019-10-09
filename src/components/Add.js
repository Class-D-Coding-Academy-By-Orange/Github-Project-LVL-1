import React, { Component } from 'react';

export default class Add extends Component {
  render() {
    return (
      <div style={{ border: '3px orange solid' }}>
            <h6>Add</h6>
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
            </div>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
            
            <select class="custom-select" id="inputGroupSelect03" aria-label="Example select with button addon">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
         
      </div>
    );
  }
}

import React, { Component } from 'react';

export default class Add extends Component {
  render() {
    return (
      <div style={{ border: '3px orange solid' }}>
        <h6>Add</h6>
        <form>
          <input type="text" placeholder="repo title" />
          <input type="text" placeholder="repo language"/>
         
          <select>
            <option value="Private">Private</option>
            <option value="Public">Public</option>
           
          </select>
        </form>
      </div>
    );
  }
}

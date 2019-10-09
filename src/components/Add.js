import React, { Component } from 'react';


export default class Add extends Component {
  render() {
    return (
      <div style={{ border: '3px orange solid' }}>
        <h6>Add</h6>
        
        <input placeholder="Title"></input>
        <input placeholder="language"></input>
       
            <select>
            <option value="Public">Public</option>
            <option value="Private">Private</option>
           </select>


       <button  type="button">Add repo</button>
       
       </div>
     
    );
  }
}

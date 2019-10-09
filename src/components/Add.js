import React, { Component } from 'react';

export default class Add extends Component {

  state = {
       
  }
  render() {

    // const {repo}=this.props
    return (
     
      <div style={{ border: '3px orange solid' }}>  
        <div>
        <input 
        type="text"
        placeholder="repo title"
        />
         <input 
         type="text"
         placeholder="repo language"
          />
            <button>ADD</button>
        <select>
        <option value="" disabled selected hidden>Repo Staute (Privet/Public)</option>
          <option value="Private">Private</option>
          <option value="Public">Public</option>
        </select>

         </div>
        
        
      </div>
    );
  }
}

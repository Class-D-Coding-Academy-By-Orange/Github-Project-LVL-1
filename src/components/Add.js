import React, { Component } from 'react';

export default class Add extends Component {
  state ={
    title:'',
    language:'',
    status:'',
    //isPrivate:
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addRepo(this.state.title,this.state.status, this.state.language);
    this.setState({title : '',status : '',language : ''});
  }
  onChange = (e) => this.setState({
    [e.target.name]: e.target.value
  });

  render() {
    return (
    <div style={{ border: '3px orange solid' }}>
    <form onSubmit={this.onSubmit} >  
      <div className="form-row">
        <div className="form-group col-md-4">
          <input 
          type="text" 
          className="form-control"  
          placeholder="repo title"
          name="title"
          value={this.state.title}
          onChange={this.onChange}
          />
        </div>
        <div className="form-group col-md-3">
          <input
           type="text"
           className="form-control"  
           placeholder="repo language"
           name="language"
           value={this.state.language}
           onChange={this.onChange}
           />
        </div>
        <div className="form-group col-md-3">
          <select 
          id="inputState" 
          className="form-control" 
          placeholder="Repo Status(Private/Public)"
          name="status"
          value={this.state.status}
          onChange={this.onChange}
          >
            <option value="Private">Private</option>
            <option value="Public">Public</option>
          </select>
        </div>
        <button 
          type ="submit" 
          value="Submit" 
          className="btn"
          style={btnStyle}>ADD</button> 
        
    </div>
    </form>
    </div>
    );
  }
}
const btnStyle = {
  background: 'green',
  color: '#fff',
  border:'none',
  padding: '5px 9px',
  borderRedius: '50%',
  cursor:'pointer',
  float:'right'
}

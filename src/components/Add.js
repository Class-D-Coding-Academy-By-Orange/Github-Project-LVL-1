import React, { Component } from 'react';

// const option =[
//   {value: "Public", lable:"Public"}
//   {value: "Private", lable:"Private"}
// ]

export default class Add extends Component {
  state={
    title:"",
    language:"",
  };
  // selectStatus= =>{

  // }
  addNewRepo=()=>{

    let newRepo ={title:this.state.title, status:"Public", language: this.state.language}
    this.props.addRepo(newRepo);
    this.setState({title:"",language:""})
 };
 changeTitle=(event)=>{
  //console.log('event.target',event.target.value);
  this.setState({title:event.target.value})
 };
 changeLanguage=(event)=>{
  this.setState({language:event.target.value})

 }
 changeStatus=()=>{
   this.setState({})
 }
  render() {
    const {addNewRepo,changeTitle,changeLanguage}=this
    const {title,language}=this.state
    return (
      
      <div style={{ border: '3px orange solid', textAlign: "center", marginBottom:"10px", }}>
        <h1>Add</h1>
        <from onSubmit={this.addRepo}>
        <input placeholder="Title" onChange={changeTitle} value={title}></input>
        <input placeholder="language" onChange={changeLanguage} value={language}></input>
        {/* value={} onChange={changeStatus} */}
            <select >
            <option >Status</option>
            <option value="selectStaus" >Public</option>
            <option value="Private">Private</option>
           </select>

       <button  type="submit" onClick={addNewRepo}>Add repo</button>
       </from>
       </div>
     
    );
  }
}


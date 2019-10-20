import React, { Component } from 'react';

// const option =[
//   {value: "Public", lable:"Public"}
//   {value: "Private", lable:"Private"}
// ]

export default class Add extends Component {
  state={
    id:"",
    title:"",
    status:"",
    language:"",
  };
 
  addNewRepo=()=>{

    // let newRepo ={id:this.state.id,title:this.state.title, status:this.state.status, language: this.state.language}
    // this.props.addRepo(newRepo);
    this.props.addRepo(this.state.title,this.state.language);
    this.setState({title:"",language:""})
 };
 
 changeTitle=(event)=>{
  //console.log('event.target',event.target.value);
  this.setState({title:event.target.value})
 };
 changeLanguage=(event)=>{
  this.setState({language:event.target.value})

 }
 changeStatus=(event)=>{
   this.setState({status:event.target.value})
 }
 
  render() {
    // changeID
    const {addNewRepo,changeTitle,changeLanguage,changeStatus}=this
    const {title,language}=this.state
    return (
      
      <div style={{ border: '3px orange solid', textAlign: "center", marginBottom:"10px", }}>
        <h1>Add</h1>
        <form onSubmit={this.addRepo}>

        <input placeholder="Title" 
        onChange={changeTitle} 
        value={title}></input>

        <input placeholder="language" 
        onChange={changeLanguage} 
        value={language}></input>
        {/* value={} onChange={changeStatus} */}
            
            <select onChange={changeStatus}>
            <option >Status</option>
            <option value="Public">Public</option>
            <option value="Private">Private</option>
           </select>

       <button  type="submit" onClick={addNewRepo}>Add repo</button>
       </form>
       </div>
     
    );
  }
}

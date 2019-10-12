import React, { Component } from 'react';

export default class Repo extends Component {

  toCompleted=()=>{
    console.log('toCompleted from item');
    this.props.isStatus(this.props.seeRepo.id);
}
  render() {
   const {id,title,status,language}=this.props.seeRepo;
   const {sosos,isStatus}= this.props;
   const {toCompleted}= this;

    return (
   
      <tr style={{ border: '3px red solid' }}>
        <td>{id}</td>
        <td>{title}</td>
        <td>{status}</td>
        
        <td>
          <input 
        onClick={toCompleted}
        type="checkbox" 
        defaultChecked={status==="Private"} />
        </td>
      
        <td>{status==='Private'?'yes':'No'}</td>
        <td>{language}</td>
        {/* <p> {id} {title} {status}  {language} </p> */}

        <button onClick={()=>sosos(id)}>X</button>
        {/* <button onClick={()=>sosos.bind(id)}>X</button> */}
      </tr>
    );
  }
}

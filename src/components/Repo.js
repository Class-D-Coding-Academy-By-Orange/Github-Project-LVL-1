import React, { Component } from 'react';

export default class Repo extends Component {

  // isPrivate=()=>{
  //   this.props.
  // }
  render() {
   const {id,title,status,language}=this.props.seeRepo
   const {sosos}= this.props
   
    return (
   
      <tr style={{ border: '3px red solid' }}>
        <td>{id}</td>
        <td>{title}</td>
        <td></td>
        {/* {status} */}
        <td>{language}</td>
        <td><input type="checkbox" ></input></td>
        {/* onClick={isPrivate} */}
        <td>yes</td>

        {/* <p> {id} {title} {status}  {language} </p> */}

        <button onClick={()=>sosos(id)}>X</button>
        {/* <button onClick={()=>sosos.bind(id)}>X</button> */}
      </tr>
    );
  }
}

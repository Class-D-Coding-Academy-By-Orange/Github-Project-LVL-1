import React, { Component } from 'react';
import Repo   from './Repo'



export default class Table extends Component {

  // isPrivete=(yes)=>{
  //   console.log("is Privete")
  //   let tooPrivete=this.state.props.status.map((elem,i)=>{
  //     if(yes===elem.status){

  //     }
  //     return yes
  //   })
  // }
  
  render() {

     const {seeReps}=this.props;

    return (
      <div style={{ border: '3px green dotted' }}>
        <h3>Table</h3>

        <div > 
          {/* style={{tableStly}} */}
        <table>
            <tr>
              <th>id</th>
              <th >Title</th>
              <th>status</th>
              <th>language</th>
              <th>Check</th>
              <th>Private</th>
            </tr>

       
            {
            seeReps.map((repo,id)=>{
              return <Repo key={id} seeRepo={repo}  sosos={this.props.deldel} />;
            })
          }
          </table>

        </div>
      </div>
    );
    
  }
  // const tableStly ={
  //   border:'1px solid black', 
  //   borderCollapse: 'collapse',

  // }
  
}
      
      

 // <th>Check</th>
 //              <th>is private</th>
 //              <th>Delete</th>
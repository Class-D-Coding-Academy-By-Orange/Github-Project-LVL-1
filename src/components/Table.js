import React, { Component } from "react";
import Repo from "./Repo";

export default class Table extends Component {
  render() {
    const { id, title, status, language } = this.props.repo;
    return (
      <div style={{ border: "3px green dotted" }}>
        <table class="table table-bordered">

          <thead class="thead-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Repo Status</th>
              <th scope="col">Check</th>
              <th scope="col">isPrivate</th>
              <th scope="col">Language</th>
              <th scope="col">Delete</th>
            </tr>
            
          </thead>
          
              {this.props.repo.map((elem,id)=>
          {
            return(
              <Repo key={elem.id} id={elem.id}title={elem.title} status={elem.status} lang={elem.language}/>

            );
          })}
       
          </table>
        
          
      
      </div>
    );
  }
}

import React, { Component } from "react";
import Repo from "./Repo";

export default class Table extends Component {
  render() {
    const { edit, del } = this.props;
    return (
      <div >
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

          {this.props.repo.map((elem, index) => {
            return (
              <Repo
                key={elem.id}
                id={elem.id}
                title={elem.title}
                status={elem.status}
                lang={elem.language}
                edit={edit}
                del={del}
                index={index}
                
              />
            );
          })}
        </table>
      </div>
    );
  }
}

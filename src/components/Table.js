import React, { Component } from "react";
import Repo from "./Repo";

export default class Table extends Component {
  render() {
    const { handelDelete, repos, handleChange } = this.props;

    return (
      <div>
        {repos.map((elem, index) => {
          return (
            <Repo
              handleChange={handleChange}
              handelDelete={handelDelete}
              elem={elem}
              key={index}
            />
          );
        })}
      </div>
    );
  }
}

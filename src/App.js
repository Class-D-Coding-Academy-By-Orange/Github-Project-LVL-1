import React, { Component } from "react";
import Add from "./components/Add";
import Table from "./components/Table";
import uuid from "uuid";
import axios from "axios";

export default class App extends Component {
  state = {
    repos: [
      // {
      //   id: uuid(),
      //   title: "Array",
      //   status: "Private",
      //   language: "HTML"
      // },
      // {
      //   id: uuid(),
      //   title: "Object",
      //   status: "Public",
      //   language: "JavaScript"
      // }
    ]
  };

  check = id => {
    let pri = this.state.repos;
    pri.map(ele => {
      if (ele.id === id) {
        if (ele.status === "Public") {
          ele.status = "Private";
        } else {
          ele.status = "Public";
        }
        return ele;
      }

      this.setState({ repos: pri });
    });
  };
  // if(this.state.status == "Privat"){
  //   this.setState({
  //    status:"PRIVAT"
  //   })

  // }

  adddata = item => {
    // let newdata = this.state.repos;
    // newdata.push(item);
    // return repos;

    axios
      .post(`http://localhost:9000/add`, { repos: item })
      // console.log('item :', item);
      .then(array => {
        //   // console.log('this :', this);
        this.setState({ repos: array.data });
        //   // console.log('repos :', repos);
        // });

        // this.setState({ repos: newdata });
      });
  };

  getData = () => {
    axios.get(`http://localhost:9000/data`).then(array => {
      let data = array.data;
      this.setState({ repos: data });
    });
  };

  // del = id => {
  //   // console.log('id :', id);
  //   let newrepo = this.state.repos.filter(item => {
  //     return id !== item.id;
  //   });

  //   this.setState({ repos: newrepo });
  // };

  del = id => {
    axios.get(`http://localhost:9000/delete/${id}`).then(array => {
      let data = array.data;
      this.setState({ repos: data });
    });
  };

  render() {
    const { del, adddata, check } = this;
    const { repos } = this.state;

    return (
      <div className="container">
        <button className="btn btn-info" onClick={this.getData}>
          GetData
        </button>
        <Add repos={repos} adddata={adddata} />
        <Table check={check} repos={repos} del={del} adddata={adddata} />
      </div>
    );
  }
}

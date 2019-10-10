import React, { Component } from "react";
import uuid from 'uuid';

export default class Add extends Component {
  state = {
      id:1231,
      title:'',
      status:'',
      language:''
    
  };
  changetitel = (event) => {
    console.log(event.target.value);
    // console.log(this.state.title)
    this.setState({
      title:event.target.value
    })
   
  };
 
  changelanguage = (event) => {
    console.log(event.target.value);
    // console.log(this.state.title)
    this.setState({
      language:event.target.value
    })
  };

  changestatus = (event) => {
    console.log(event.target.value);
    // console.log(this.state.title)
    this.setState({
      status:event.target.value
    })
  };

  addnew = (event)=>{
    let newd={
      id:uuid(),
      title:this.state.title,
      status:this.state.status,
      language:this.state.language,
    };

    this.props.adddata(newd);

       this.setState({
      title:'',
      status:'',
      language:'',
    })


  }

  // changetitel=(event)=> {
  //   console.log("event :",event.target.value);
  //   // let newdata={title:event.target.value}
  //   // this.state.title = event.target.value;
  //   // repos.push(newdata);

  //   // this.setState({
  //   //   // this.setState({title:?})
  //   //   [event.target.name]:event.target.value,
  //   //   // this.state.title :
  //   //   [event.target.name]:event.target.value,
  //   //   [event.target.name]:event.target.value,

  //   // });

  //   // this.setState({
  //   //   title:'',
  //   //   status:'',
  //   //   language:'',
  //   // })
  // }

  render() {
    const {title,language}=this.state
    const {addnew}=this
    const { changetitel ,changelanguage , changestatus} = this;
    // const { repos } = this.props;
    return (
      <div >
        <div>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={changetitel}
            name="title"
            placeholder="repo title"
          />
          <input
            className="form-control"
            type="text"
            value={language}
            name="language"
            onChange={changelanguage}
            placeholder="repo language"
          />
          
          <select 
                  name="status" 
                  onChange={changestatus} >

            <option value="" disabled selected hidden>
              Repo Staute (Privet/Public)
            </option>
            <option 
                   className="dropdown-item"
                   value="Private">Private</option>
            <option value="Public">Public</option>
          </select>

          <button onClick={addnew.bind(this)}>ADD</button>
        </div>
      </div>
    );
  }
  }

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Add extends Component {

  state = {
    id: '',
    title: '',
    status: '',
    language: ''
  }

  addNewRepo = () => {
    const { title, status, language } = this.state;
    if (title !== '' && status !== '' && language !== '') {
      let recentId = (this.props.repos).length + 1;
      // console.log(recentId);
      let newRepo = { id: recentId, title: title, status: status, language: language };
      this.props.addRepo(newRepo);
      this.setState({ title: '', status: '', language: '' });
    }
  }

  changeTitle = (event) => {
    // console.log(event.target.value);
    this.setState({ title: event.target.value });
  }

  changeLanguage = (event) => {
    console.log(event.target.value);
    this.setState({ language: event.target.value });
  }

  changeStatus = (event) => {
    this.setState({ status: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    const { changeTitle, changeLanguage, addNewRepo } = this;
    return (
      <div style={{ border: '3px orange solid' }}>
        <h6>Add</h6>

        <form className="form-inline" onSubmit={this.handleSubmit}>
          <input type="text" className="form-control mb-2 mr-sm-2" placeholder="Repo Title" value={this.state.title} onChange={changeTitle} />
          <input type="text" className="form-control mb-2 mr-sm-2" placeholder="Repo Language" value={this.state.language} onChange={changeLanguage} />

          <select className="custom-select mb-2 mr-sm-2" value={this.state.status} onChange={this.changeStatus} >
            <option defultvalue='selected disabled hidden'>Repo Status(Private/Public)</option>
            <option value="PUBLIC">Public</option>
            <option value="PRIVATE">Private</option>
          </select>

          <button type="submit" className="btn btn-primary mb-2" onClick={addNewRepo}>Add Repo</button>

        </form>
      </div>
    );
  }
}

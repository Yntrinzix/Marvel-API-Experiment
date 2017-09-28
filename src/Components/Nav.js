import React, { Component } from 'react';
import axios from 'axios';

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      charName: "",
      offset: "20"
    }
  }
  handleChange(event) {
    event.preventDefault();

  }

  onSearchChange = (event) =>{

    event.preventDefault();

     axios.get(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${this.state.charName}&ts=1&apikey=349a64d10781d5c4e47647548c57f171&hash=b1bdbe2665cd992d9b9e5f44328a7bb8`)
       .then(resp => {
        this.props.onSubmit(resp.data.data.results)
       })
  }
  render() {

    return (
      <nav className="navbar navbar-inverse">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Marvel Comics</a>
        </div>

        <form className="navbar-form navbar-left" onSubmit={this.onSearchChange}>
          <div className="form-group">
            <input
              value={this.state.charName}
              onChange = {(event)=> this.setState({charName: event.target.value})}
              type={"text"}
              className="form-control"
              placeholder="Search Character" required/>
          </div>
          <button type="submit" className="btn btn-default">Search</button>
        </form>
      </div>
      </nav>
    )
  }
}

export default Nav;

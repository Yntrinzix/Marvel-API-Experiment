import React, { Component } from 'react';
import Lists from './Components/Lists';
import Nav from './Components/Nav';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      offset:"",
      //charName:"c",
      charName2:"a"

    }

    let marvel =`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${this.state.charName2}&limit=50&offset=50&ts=1&apikey=349a64d10781d5c4e47647548c57f171&hash=b1bdbe2665cd992d9b9e5f44328a7bb8`

    axios.get(marvel)
      .then(resp => {
       this.setState(
         {
           response: resp.data.data.results
         })
      })

    this.btnChange1 = this.btnChange1.bind(this);
  }

  btnChange1(data){

    console.log(data)
     this.setState({
       response: data,
     })

  }


  render() {
    var marvelList = this.state.response
    console.log(this.state.response)
    if (!this.state.response ) return <p>Loading...</p>
    //if (this.state.response.length ) return <p>Loading...</p>
    //console.log((this.state.response[0].comics.collectionURI))

    return (

      <div>

        <Nav onSubmit={this.btnChange1}/>
        <Lists lists={marvelList}/>
        <div className="footer col-lg-12">""</div>
      </div>
    );
  }

}

export default App;

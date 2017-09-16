import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import bgVideo from './assets/Background_08.mp4';              // Background Video
import CardList from './containers/container_CardList'; // CardList component
// import {Deck} from './Deck'

//
// // @Dangerous
// function example () {
//   const deck = App._Deck

//   // do shit with deck

//   // manipulate however you want

//   // return n ew state
// }
// //

class App extends Component {

  // static final _Deck = Deck;

  // constructor () {
  //   App._deck = Deck; // Be careful to never change this
  // }

  render() {
    return (
      <div className="App">

      
        <div className="out-video">

          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
        
          <video autoPlay={true} loop id="bgvid" width="100%" height="100%">
            <source src={ bgVideo } type="video/mp4">  
            </source>
          </video>

          <div>
            <CardList />
          </div>

        </div>  

        

        

      </div>
    );
  }
}

export default App;

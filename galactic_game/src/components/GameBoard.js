import React, {Component} from 'react';

import '../App.css';
import bgVideo from '../assets/Background_08.mp4';              // Background Video

import PlayerOneHand from '../containers/container_PlayerOneHand'; // CardList component
import PlayerOnePlayArea from '../containers/container_PlayerOnePlayArea';
import CardInformation from '../containers/container_CardInformation'; // ~~~~~~~~~~~~~~~~~~~~~CHANGE THIS TO CARD INFO CONTAINER ######################################
import CardImageInformation from '../containers/container_CardImageInformation';
import Navbar from "./Navbar/Navbar";

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

// // =========================================== // //
// //     CLAUDIO'S JUNGLE JUICE FUNCTION         // //
// // =========================================== // //
// Array.prototype.shuffle = function() {
//     var i = this.length,
//             j,
//             temp;

//     while (--i > 0) {
//         j = Math.floor(Math.random()*(i + 1));
//         temp = this[j];
//         this[j] = this[i];
//         this[i] = temp;
//     }
//     return this;
// }

// renderList() {
  // this.props.cards.shuffle();
// }

class GameBoard extends Component {

  // static final _Deck = Deck;

  // constructor () {
  //   App._deck = Deck; // Be careful to never change this
  // }

  render() {
    return (
      <div className="App">

      
        <div className="out-video">

          
          <div>
            <Navbar />
          </div>
          
        
          <video autoPlay={true} loop id="bgvid" width="100%" height="100%">
            <source src={ bgVideo } type="video/mp4">  
            </source>
          </video>

          <div className='row'>
            <CardImageInformation />
            <CardInformation />             
            
          </div>
          
          <br style={{"color":"white", "height":"22px"}}/> 

          <div className='row'>
            <PlayerOneHand />       
            <PlayerOnePlayArea />
            
          </div>
          
        </div>  
      </div>
    );
  }
}

export default GameBoard;


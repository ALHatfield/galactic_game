import React, {Component} from 'react';

import '../App.css';
import bgVideo from '../assets/Background_08.mp4';              // Background Video

import PlayerOneHand from '../containers/container_PlayerOneHand'; // CardList component
import PlayerOnePlayArea from '../containers/container_PlayerOnePlayArea';

import PlayerTwoHand from '../containers/container_PlayerTwoHand';
import PlayerTwoPlayArea from '../containers/container_PlayerTwoPlayArea';

import CardInformation from '../containers/container_CardInformation'; // ~~~~~~~~~~~~~~~~~~~~~CHANGE THIS TO CARD INFO CONTAINER ######################################
import CardImageInformation from '../containers/container_CardImageInformation';
import Navbar from "./Navbar/Navbar";

import { connect } from 'react-redux'; // This is the glue that connects react to redux


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
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     playerOne_cardsInPlay: []
  //   }
  // }


  // handleClick (event) {
  //   event.preventDefault();

  //   this.setState({activeCard: this.props.example })
  // }

  render() {

    var cardArray = [];
    // var targetCard = {this.props.card.cardInformation};
    // var targetCard = {return(this.props.card.cardInformation).bind(this)};

    

    // pushCardsToState() {
    //   cardArray = cardArray.push(targetCard);
    //   this.setState = {
    //     playerOne_cardsInPlay: cardArray
    //   }
    // }

    // if statement // Handle undefined
    if (!this.props.card) {
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
            <h1 style={{'color':'yellow'}}>Select a card from your hand</h1>
          </div>
          <div className='row'>
            <PlayerOneHand />       
            <PlayerOnePlayArea />
            <PlayerTwoPlayArea />
            <PlayerTwoHand />
          </div>
        </div>  
      </div>
      )
    }
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

          <div className='card-information row'>
            <li className="card-detail-card-name">{this.props.card.cardInformation.name}</li>
            <li className="card-detail-card-name">damage: {this.props.card.cardInformation.damage}</li>
            <li className="card-detail-card-name">{this.props.card.cardInformation.player}</li>
            
          </div>
          
          <br style={{"color":"white", "height":"22px"}}/> 

          <div className='row'>
            <PlayerOneHand />       
            <PlayerOnePlayArea />
            <PlayerTwoPlayArea />
            <PlayerTwoHand />
            
          </div>
          
        </div>  
      </div>
    );
  }
}


// mapStateToProps
//        card: state.cardInformation
function mapStateToProps(state) {
  return {
    card: state.cardInformation,

  }
}

// connect(mapStateToProps)(cardInformation)

export default connect(mapStateToProps)(GameBoard);


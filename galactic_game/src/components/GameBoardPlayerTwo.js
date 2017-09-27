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



class GameBoard extends Component {


  render() {

    var cardArray = [];

    if (!this.props.card.cardInformation) {
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
            <PlayerTwoHand />       
            <PlayerTwoPlayArea />
            <PlayerOnePlayArea />
            
            
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
            <PlayerTwoHand />       
            <PlayerTwoPlayArea />
            <PlayerOnePlayArea />
            
            
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
    cardp2: state.playerTwoCardInformation

  }
}

// connect(mapStateToProps)(cardInformation)

export default connect(mapStateToProps)(GameBoard);


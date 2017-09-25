import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { PlayerTwoDisplayCards } from '../actions/action_PlayerTwoDisplayCards.js'

class PlayerTwoPlayArea extends Component {

    renderPlayArea() {
        return this.props.playerTwoplayAreaCards.map((card)=> {
            return (
                <li key={card.name}>
                    <img width="40%" src={card.image}/>
                </li>
            );
        });
    }

    render() {
        console.log('string')
        console.log(this.props)
        if(!this.props.card) {
            return(
                <ul
                    style={{'borderStyle': "solid","color":"yellowgreen", "fontSize":"20px",padding: "0px 0px 800px 0px"}} 
                    className="play-area col-sm-3"
                    onClick={() => console.log(this)}>
                </ul>
                
            )
        }

        return(
                <ul
                    style={{'borderStyle': "solid","color":"yellowgreen", "fontSize":"20px",padding: "0px 0px 800px 0px"}} 
                    className="play-area col-sm-3"
                    onClick={() => console.log(this)}>
                </ul> 
        )
    }
}

function mapStateToProps(state) {
    return {
        card: state.cardInformation,
        playerTwoPlayAreaCards: state.PlayerTwoPlayAreaCards
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ playerTwoDisplayCards: PlayerTwoDisplayCards}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerTwoPlayArea);
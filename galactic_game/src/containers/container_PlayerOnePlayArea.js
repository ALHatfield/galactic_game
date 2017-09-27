import React, {Component} from 'react';
import { connect } from 'react-redux'; // This is the glue that connects react to redux
import { bindActionCreators } from 'redux'; // allows our action to flow through our reducers

import { displayCards } from '../actions/action_displayCards';
import { PlayerOneAttacksPlayerTwo } from '../actions/action_PlayerOneAttacksPlayerTwo';


class PlayerOnePlayArea extends Component {

    constructor(props) {
        super(props);

        this.handlePlayAreaClick = this.handlePlayAreaClick.bind(this);
    }
  
    renderPlayArea(event) {
        // console.log(this.props.playAreaCards)
        return this.props.playerOnePlayAreaCards.map((card, i) => {
            return (
                <ul key={i}>
                    <img width="40%" src={card.image}/>
                    <button onClick={() => {console.log('stuffffff'); this.props.PlayerOneAttacksPlayerTwo(card)}}>attack</button>
                    {card.name}
                    {card.health}
                </ul>
            );
        });
    }

    handlePlayAreaClick() {
        if(!this.props.card.cardInformation) {
            return;
        }
        this.props.displayCards(this.props.card.cardInformation);
    }

    render() {
        console.log(this.props)

        // { typeof this.props.playAreaCards.card !== 'undefined' ? this.props.playAreaCards.card.name : null}
        
        return(
            <ul 
            style={{'borderStyle': "solid","color":"purple", "fontSize":"20px",padding: "0px 0px 800px 0px"}} 
            className="play-area col-sm-3"
            onClick={this.handlePlayAreaClick}> 
                Player One
                {this.renderPlayArea()}
            </ul>
        )
    }
}

// Takes in the application state (all of it) and what ever we return gets mapped to props
function mapStateToProps(state) {
    // What ever is returned will show up as props inside of CardList
    return {
        card: state.cardInformation,
        playerOnePlayAreaCards: state.playerOnePlayAreaCards
    };
}

// Anthing returned from this function (dispatch) will end up as props on the cardList container
function mapDispatchToProps(dispatch) {
    // Whenever selectCard is called, the result should be passed to all our reducers.
    // The select Card action gets passed to the dispatch function
    // return bindActionCreators({ displayCards: displayCards, PlayerOneAttacksPlayerTwo: PlayerOneAttacksPlayerTwo}, dispatch)

    return {
        displayCards: card => dispatch(displayCards(card)),
        PlayerOneAttacksPlayerTwo: card => dispatch(PlayerOneAttacksPlayerTwo(card))
    }
}


// The CONNECT function takes a FUNCTION and a COMPONENT and produces a container.
// The container is component that is aware of the state that is contained by redux.
// All functions maping data to props needs to be plugged into this connect function.
export default connect(mapStateToProps, mapDispatchToProps)(PlayerOnePlayArea);
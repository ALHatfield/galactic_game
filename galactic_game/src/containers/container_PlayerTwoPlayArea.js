import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { PlayerTwoDisplayCards } from '../actions/action_PlayerTwoDisplayCards.js'




class PlayerTwoPlayArea extends Component {

    constructor(props) {
        super(props);

        this.handlePlayAreaClick = this.handlePlayAreaClick.bind(this);
    }




    renderPlayArea(event) {
        return this.props.playerTwoPlayAreaCards.map((card, i)=> {
            return (
                <li key={i}>
                    <button onClick={() => { console.log(`clicking ${card.name}`)}}> attack</button>
                    <img width="40%" src={card.image}/>
                </li>
            );
        });
    }
    

    handlePlayAreaClick() {
        if(!this.props.card.playerTwoCardInformation) {
            return;
        }
        this.props.PlayerTwoDisplayCards(this.props.card.playerTwoCardInformation);
    }



    render() {
        console.log(this.props)

        return(
                <ul
                style={{'borderStyle': "solid","color":"yellowgreen", "fontSize":"20px",padding: "0px 0px 800px 0px"}} 
                className="play-area col-sm-3"
                onClick={this.handlePlayAreaClick}>
                    Player Two
                    {this.renderPlayArea()}
                </ul> 
        )
    }
}

function mapStateToProps(state) {
    return {
        card: state.playerTwoCardInformation,
        playerTwoPlayAreaCards: state.playerTwoPlayAreaCards
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ PlayerTwoDisplayCards: PlayerTwoDisplayCards}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerTwoPlayArea);
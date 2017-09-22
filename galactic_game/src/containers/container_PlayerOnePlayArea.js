import React, { Component } from 'react';
import { connect } from 'react-redux'; // This is the glue that connects react to redux


class PlayerOnePlayArea extends Component {
    //
    render() {
        if (!this.props.card) {
            return (
                <div className='card-detail-default'>
                    Select a card from your hand to place here
                    {console.log("container_PlayerOnePlayArea.js cannot find 'this.props.card'")}
                    {console.log(this)} 
                    {console.log("=====================================")}
                </div>
            )
        }

        return (
        <div className='player-one-play-area'>
            {console.log("container_PlayerOnePlayArea.js")}
            {console.log(this.props.card)}
            {console.log("===================")}
            
            <h2 className='card-detail-card-name'>{this.props.card.playerOneHandSelectedCard.name}</h2>

            
            


        </div>
        )
    }
}

// Takes in the application state (all of it) and what ever we return gets mapped to props
function mapStateToProps(state) {
    // What ever is returned will show up as props inside of CardList
    return {
        // this is what took me a weekend to figure out...
        card: state.playerOneHandSelectedCard
    };
}

export default connect(mapStateToProps)(PlayerOnePlayArea);
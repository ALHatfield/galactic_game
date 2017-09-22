import React, { Component } from 'react';
import { connect } from 'react-redux'; // This is the glue that connects react to redux


// ~~~~~~~~~~~~~~~~~~~~~CHANGE THIS TO CARD INFO CONTAINER ######################################
class CardInformation extends Component { 
    //
    render() {
        if (!this.props.card) {
            return (
                <div className='card-detail-default'>
                    Select a card from your hand to place here
                    {console.log("container_CardInformation.js cannot find 'this.props.card'")}
                    {console.log(this)} 
                    {console.log("=====================================")}
                </div>
            )
        }

        return (
        <div className='card-information row'>
                       
                <h2 className='card-detail-card-name'>
                    <img width="3%" src={this.props.card.cardInformation.image}/>
                    {this.props.card.cardInformation.name}
                </h2>
        



                
        </div>
        )
    }
}

// Takes in the application state (all of it) and what ever we return gets mapped to props
function mapStateToProps(state) {
    // What ever is returned will show up as props inside of CardList
    return {
        // this is what took me a weekend to figure out...
        card: state.cardInformation // ~~~~~~~~~~~~~~~~~~~~~CHANGE THIS TO CARD INFO CONTAINER ######################################
    };
}

export default connect(mapStateToProps)(CardInformation); // ~~~~~~~~~~~~~~~~~~~~~CHANGE THIS TO CARD INFO CONTAINER ######################################
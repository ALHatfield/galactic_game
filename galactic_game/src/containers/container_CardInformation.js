import React, { Component } from 'react';
import { connect } from 'react-redux'; // This is the glue that connects react to redux


// ~~~~~~~~~~~~~~~~~~~~~CHANGE THIS TO CARD INFO CONTAINER ######################################
class CardInformation extends Component { 
    //
    render() {
        if (!this.props.card) {
            return (
                <div className='card-detail-default'>
                    
                </div>
            )
        }

        return (
        <div className='card-information row'>
                       
            
            <ul>
                <li className="card-detail-card-name">{this.props.card.cardInformation.name}</li>
                <li className="card-detail-card-name">damage: {this.props.card.cardInformation.damage}</li>
            </ul>
     
            
                
        



                
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
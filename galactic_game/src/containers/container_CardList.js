// Container - just a component that has direct access to the state produced by redux
// Card-list is the highest parent file that cares about when the card-list updates

import React, { Component } from 'react';
import { connect } from 'react-redux'; // This is the glue that connects react to redux

import { selectCard } from '../actions/action_selectCard.js'; // our select card action
import { bindActionCreators } from 'redux'; // allows our action to flow through our reducers


class CardList extends Component {
    
    renderList() {
        return this.props.cards.map((card) => {
            return (
                <li 
                    key={card.name}
                    // onClick={() => console.log("// Card Name: " + card.name + " // Damage: " + card.damage)}
                    onClick={() => this.props.selectCard(card)}
                    className='list-group-item card-list'>
    
                    {card.name}
                </li>
            );
        });
    }

    // Renders the list
    render() {
        return (
            
            <ul className='list-group col-sm-4'>
                {this.renderList()}
            </ul>
        )

    }
}

// Takes in the application state (all of it) and what ever we return gets mapped to props
function mapStateToProps(state) {
    // What ever is returned will show up as props inside of CardList
    return {
        cards: state.cards
    };
}

// Anthing returned from this function (dispatch) will end up as props on the cardList container
function mapDispatchToProps(dispatch) {
    // Whenever selectCard is called, the result should be passed to all our reducers.
    // The select Card action gets passed to the dispatch function
    return bindActionCreators({ selectCard: selectCard }, dispatch)
}



// The CONNECT function takes a FUNCTION and a COMPONENT and produces a container.
// The container is component that is aware of the state that is contained by redux.
// All functions maping data to props needs to be plugged into this connect function.
export default connect(mapStateToProps, mapDispatchToProps)(CardList);
// Container - just a component that has direct access to the state produced by redux
// Card-list is the highest parent file that cares about when the card-list updates

import React, { Component } from 'react';
import { connect } from 'react-redux'; // This is the glue that connects react to redux

import { selectCard } from '../actions/action_selectCard.js'; // our select card action
import { bindActionCreators } from 'redux'; // allows our action to flow through our reducers


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


class CardList extends Component {

    
    renderList() {
        // console.log("======CARD LIST RANDOMIZE=============")
        
        // this.props.cards.shuffle();
        // console.log(this.props.cards)

        // Generating the list of cards
        return this.props.cards.map((card) => {
            return (
                
                <li 
                    key={card.name} // unique ID
                    onClick={() => this.props.selectCard(card)} //action_SelectCard
                    onMouseEnter={() => console.log('mouse hover')}> 

                    <img className="expand-on-hover" height="50%" width="50%" alt="" src={card.image}/>
                </li>
                
            );
        });
    }

    // Renders the list
    render() {
        return (
            
            <ul className='list-group col-sm-3'>
                {console.log("card gallery")}
                {console.log(this)}
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


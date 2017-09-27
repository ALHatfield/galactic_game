import React, { Component } from 'react';
import { connect } from 'react-redux'; // This is the glue that connects react to redux
import { bindActionCreators } from 'redux'; // allows our action to flow through our reducers
import { playerTwoHandSelectCard } from '../actions/action_PlayerTwoHandSelectCard';


class PlayerTwoHand extends Component {

    renderList() {
        return this.props.playerTwoDisplayCards.map((card) => {
            return (
                <li 
                    key={card.name} 
                    onClick={()=> this.props.playerTwoHandSelectCard(card)} 
                    /* onMouseEnter={() => console.log('mouse hover')} */
                    >
            
                      
                    <img className="expand-on-hover" height="50%" width="50%" alt="" src={card.image}/>
                </li>
                
            );
        })
    }; 


    render() {
        return (
            <ul className='list-group col-sm-3'>
                {console.log(this)}
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        playerTwoDisplayCards: state.playerTwoDisplayCards
    };
}
 // map state to props

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ playerTwoHandSelectCard: playerTwoHandSelectCard }, dispatch)
}
    // map dispatch to props
    //      bind action creators

// export default connect(.)(.)

export default connect(mapStateToProps, mapDispatchToProps)(PlayerTwoHand);
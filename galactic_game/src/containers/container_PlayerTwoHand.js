import React, { Component } from 'react';
import { connect } from 'react-redux'; // This is the glue that connects react to redux
import { bindActionCreators } from 'redux'; // allows our action to flow through our reducers
import { playerOneHandSelectCard } from '../actions/action_PlayerOneHandSelectCard';


class PlayerTwoHand extends Component {

    renderList() {
        return this.props.cards.map((card) => {
            return (
                <li 
                    key={card.name} 
                    onClick={()=> this.props.playerOneHandSelectCard(card)} 
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
        cards: state.cards
    };
}
 // map state to props

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ playerOneHandSelectCard: playerOneHandSelectCard }, dispatch)
}
    // map dispatch to props
    //      bind action creators

// export default connect(.)(.)

export default connect(mapStateToProps, mapDispatchToProps)(PlayerTwoHand);
import React, { Component } from 'react';
import { connect } from 'react-redux'; // This is the glue that connects react to redux


class PlayerOnePlayArea extends Component {
    //
    render() {
        
        return (
        <div className='card-detail'>
            {console.log("card:")}
            {console.log(this.props.card)}
            {console.log("===================")}

            
            


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
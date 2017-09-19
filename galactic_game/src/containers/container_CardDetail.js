import React, { Component } from 'react';
import { connect } from 'react-redux'; // This is the glue that connects react to redux


class CardDetail extends Component {
    //
    render() {
        if (!this.props.card) {
            return (
                <div className='card-detail-default'>
                    Select A Card
                    {console.log("CardDetail.js cannot find 'this.props.card'")}
                    {console.log(this)} 
                    {console.log("=====================================")}
                </div>
            )
             
        }
        return (
        <div className='card-detail'>
            {console.log("selected card:")}
            {console.log(this.props.card)}
            {console.log("===================")}

            <div className='card-detail-card-name'>{this.props.card.selectCard.name}</div>
            <div className='card-detail-card-damage'>Damage: {this.props.card.selectCard.damage}</div>
            {/*<img src={this.props.card.selectCard.image}>*/}
        </div>
        )
    }
}

// Takes in the application state (all of it) and what ever we return gets mapped to props
function mapStateToProps(state) {
    // What ever is returned will show up as props inside of CardList
    return {
        // this is what took me a weekend to figure out...
        card: state.activeCard
    };
}

export default connect(mapStateToProps)(CardDetail);
// Container - just a component that has direct access to the state produced by redux
// Card-list is the highest parent file that cares about when the card-list updates

import React, { Component } from 'react';


export default class BlankCardHand extends Component {

    

    // Renders the list
    render() {
        return (
            <div className='list-group col-sm-3'>
                <img height="50%" width="50%" src="../assets/blank_card.png"/>
                <img height="50%" width="50%" src="../assets/blank_card.png"/>
                <img height="50%" width="50%" src="../assets/blank_card.png"/>
                <img height="50%" width="50%" src="../assets/blank_card.png"/>
            </div>
        )
    }
}


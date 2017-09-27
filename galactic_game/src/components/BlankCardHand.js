// Container - just a component that has direct access to the state produced by redux
// Card-list is the highest parent file that cares about when the card-list updates

import React, { Component } from 'react';


export default class BlankCardHand extends Component {

    

    // Renders the list
    render() {
        return (
            <ul className='list-group col-sm-3'>
                
                <li>
                    <img height="50%" width="50%" alt="blank card" src="blank_card.png"/>
                </li>
            </ul>
        )
    }
}


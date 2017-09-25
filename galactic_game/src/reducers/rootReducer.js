// Root Reducer File

// This file takes all our reducer 'components' and combines them together in a master list of keys and reducers
// REMEMBER: reducers are a list of data // 

import { combineReducers } from 'redux';

// Card Gallery::
import CardsReducer from './reducer_cards'; // contains the list of cards
import ActiveCard from './reducer_active_card';

// Player One::
import PlayerOneDisplayCards from './reducer_PlayerOneDisplayCards';
import CardInformation from './reducer_PlayerOneHandSelectedCard';
import PlayerOnePlayAreaCards from './reducer_PlayerOnePlayAreaCards';

// Player Two::
// import playerTwoplayAreaCards from './reducer_PlayerTwoplayAreaCards';



const rootReducer = combineReducers({

    //key = [{name: Plasma Bowman}, {name: Rosery Vertebrate}, {name: Nuke}, ...]

    // Card Gallery Reducers:
    cards: CardsReducer, // CardsReducer
    activeCard: ActiveCard,

    // Player One Reducers:
    playerOneDisplayCards: PlayerOneDisplayCards,
    cardInformation: CardInformation,
    playerOnePlayAreaCards: PlayerOnePlayAreaCards

    // Player Two Reducers:

    // playerTwoplayAreaCards: PlayerTwoPlayAreaCards
});


export default rootReducer;


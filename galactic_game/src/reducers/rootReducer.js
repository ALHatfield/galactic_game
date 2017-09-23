// Root Reducer File

// This file takes all our reducer 'components' and combines them together in a master list of keys and reducers
// REMEMBER: reducers are a list of data // 

import { combineReducers } from 'redux';
import CardsReducer from './reducer_cards'; // contains the list of cards
import ActiveCard from './reducer_active_card';
import CardInformation from './reducer_PlayerOneHandSelectedCard';
import PlayerOnePlayAreaCards from './reducer_PlayerOnePlayAreaCards';

const rootReducer = combineReducers({

    //key = [{name: Plasma Bowman}, {name: Rosery Vertebrate}, {name: Nuke}, ...]
    cards: CardsReducer,
    activeCard: ActiveCard,
    cardInformation: CardInformation,
    playerOnePlayAreaCards: PlayerOnePlayAreaCards
});


export default rootReducer;


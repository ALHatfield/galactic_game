// Root Reducer File

// This file takes all our reducer 'components' and combines them together in a master list of keys and reducers
// REMEMBER: reducers are a list of data // 

import { combineReducers } from 'redux';
import CardsReducer from './reducer_cards'; // contains the list of cards

const rootReducer = combineReducers({

    //key = [{name: Plasma Bowman}, {name: Rosery Vertebrate}, {name: Nuke}, ...]
    cards: CardsReducer
});


export default rootReducer;


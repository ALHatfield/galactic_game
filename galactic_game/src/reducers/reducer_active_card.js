// This file is gets triggered when action_selectCard() passes type: 'CARD_SELECTED'

// 1. click event triggers action_selectCard()
// 2. action_selectCard() returns { type: CARD_SELECTED, payload: card }
// 3. that object gets send to rootReducer
// 4. rootReducer sends that data to all reducers.
// 5. this file reads CARD_SELECTED and returns action.payload (card)


export default function(state = null, action) { 
    switch(action.type) {                                           //
        case 'CARD_SELECTED':                                       // if (action.type === 'CARD_SELECTED') // TRUE
            const {payload} = action;                               // const payload = action.payload;
            return Object.assign({}, state, {selectCard: payload})
        default:
            return state
    }
}



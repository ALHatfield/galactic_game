


export default function(state = null, action) { 
    switch(action.type) {                                           //
        case 'PLAYER_ONE_HAND_SELECT_CARD':                                       // if (action.type === 'CARD_SELECTED') // TRUE
            const {payload} = action;                               // const payload = action.payload;
            return Object.assign({}, state, {playerOneHandSelectedCard: payload})
        default:
            return state
    }
}
export default function(state = null, action) { 
    switch(action.type) {                                           //

        case 'PLAYER_TWO_HAND_SELECT_CARD':
            const {payload} = action;                               // const payload = action.payload;
            return Object.assign({}, state, {playerTwoCardInformation: payload})

        default:
            return state
    }
}

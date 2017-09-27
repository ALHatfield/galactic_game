export default function(state = {cardInformation: null}, action) { 
    switch(action.type) {                                           //

        case 'PLAYER_TWO_HAND_SELECT_CARD':
            const {payload} = action;                               // const payload = action.payload;
            return Object.assign({}, state, {playerTwoCardInformation: payload})
        case 'PLAYER_TWO_DISPLAY_CARDS':
            return Object.assign({}, state, {playerTwoCardInformation: null})
        default:
            return state
    }
}

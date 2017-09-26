


export default function(state = null, action) { 
    switch(action.type) {                                           //
        case 'PLAYER_ONE_HAND_SELECT_CARD':                         // if (action.type === 'CARD_SELECTED') // TRUE
            const {payload} = action;                               // const payload = action.payload;
            return Object.assign({}, state, {cardInformation: payload}) //

        // case 'PLAYER_TWO_HAND_SELECT_CARD':
        //     const {payload} = action;                               // const payload = action.payload;
        //     return Object.assign({}, state, {cardInformation: payload})

        default:
            return state
    }
}


// switch(action.type) {
//     case "PLAYER_ONE_HAND_SELECT_CARD":
    
//     // do the thing .. 

//     case "PLAYER_TWO_HAND_SELECT_CARD":

//     // do the thing

//     default:
//         return state

// }
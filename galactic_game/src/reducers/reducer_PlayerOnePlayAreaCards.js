// This reducer takes the action (action_displayCards) which returns cardInformation object



export default function(state = [], action) {
    switch(action.type) {
        // action_displayCards i
        case "PLAYER_ONE_DISPLAY_CARDS":
            // return {
            //     card: action.card
            // }

            return [...state, action.card]
        default:
            return state;
    }
}
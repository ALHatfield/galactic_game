// This reducer takes the action (action_displayCards) which returns cardInformation object



export default function(state = [], action) {
    switch(action.type) {
        // action_displayCards 
        case "PLAYER_ONE_DISPLAY_CARDS":
            if (action.card.player === "PLAYER_ONE") {
                return [...state, action.card]
            }
        default:
            return state;
    }
}
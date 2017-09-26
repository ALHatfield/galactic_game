export default function(state = [], action) {
    switch(action.type) {
        // action_displayCards 
        case "PLAYER_TWO_DISPLAY_CARDS":

            if (action.card.player === "PLAYER_TWO") {
                return [...state, action.card]
            }
        default:
            return state;
    }
}
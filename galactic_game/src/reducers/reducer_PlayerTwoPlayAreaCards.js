export default function(state = [], action) {
    switch(action.type) {
        // action_displayCards 
        case "PLAYER_TWO_DISPLAY_CARDS":

            if (action.card.player === "PLAYER_TWO") {
                return [...state, action.card]
            }
        
        case 'PLAYER_ONE_ATTACKS_PLAYER_TWO':

            if(state.card[0].health - action.payload.damage < 0) {
                return state.cards.filter((c,i) => i !== 0);
            } else {
                return state.cards.map((c,i) => {
                    if(i ===0) {
                        return Object.assign({}, c, {health: c.health - action.damage});
                    } else { return c;}
                })
            }

        default:
            return state;
    }
}
// This reducer takes the action (action_displayCards) which returns cardInformation object



export default function(state = [], action) {
    switch(action.type) {
        // action_displayCards 
        case "PLAYER_ONE_DISPLAY_CARDS":
            if (action.card.player === "PLAYER_ONE") {
                return [...state, action.card]
        }

        case 'PLAYER_TWO_ATTACKS_PLAYER_ONE':

            if(!state.length) {
                alert("THE GAME IS OVER");
                return [];
            }

            if(state[0].health - action.damage < 0) {
                return state.filter((c,i) => i !== 0);
            } else {
                return state.map((c,i) => {
                    if(i ===0) {
                        return Object.assign({}, c, {health: c.health - action.damage});
                    } else { return c;}
                })
            }

        default:
            return state;
    }
}
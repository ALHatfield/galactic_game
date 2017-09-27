export default function(state = [], action) {
    console.log('playarea')
    switch(action.type) {
        // action_displayCards 
        case "PLAYER_TWO_DISPLAY_CARDS":

            if (action.card.player === "PLAYER_TWO") {
                return [...state, action.card]
            }
        
        case 'PLAYER_ONE_ATTACKS_PLAYER_TWO':

            if(!state.length) {
                return;
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
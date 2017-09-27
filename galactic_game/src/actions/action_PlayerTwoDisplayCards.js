
export function PlayerTwoDisplayCards(card) {

    console.log("action_PlayerTwoDisplayCards.js")
    
    const PLAYER_TWO_DISPLAY_CARDS = "PLAYER_TWO_DISPLAY_CARDS"
    return {
        type: PLAYER_TWO_DISPLAY_CARDS,
        card
    }
}
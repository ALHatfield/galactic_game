export function displayCards(card) {
    
    const PLAYER_ONE_DISPLAY_CARDS = "PLAYER_ONE_DISPLAY_CARDS"
    return {
        type: PLAYER_ONE_DISPLAY_CARDS,
        card
    }
}
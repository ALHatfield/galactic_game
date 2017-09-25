//@TODO: Rename the function to the type. Right now this action is posting an image to the player one play area

export function displayCards(card) {
    
    const PLAYER_ONE_DISPLAY_CARDS = "PLAYER_ONE_DISPLAY_CARDS"
    return {
        type: PLAYER_ONE_DISPLAY_CARDS,
        card
    }
}
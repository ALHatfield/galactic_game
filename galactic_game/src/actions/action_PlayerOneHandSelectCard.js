// This file should be renamed to 'action_PlayerHandSelectCard'
// Both playerOne and playerTwo use this action to update the card information that is displayed in gameboard

// The reason we created playerOneHandSelectCard is to handle the case where playerOne sees a different <route /> than playerTwo and we wanted to isolate the card information between them so that playerOne can't see what playerTwo is doing



export function playerOneHandSelectCard(card) {

    const PLAYER_ONE_HAND_SELECT_CARD = 'PLAYER_ONE_HAND_SELECT_CARD'
    return {
        type: 'PLAYER_ONE_HAND_SELECT_CARD',
        payload: card
    }
}
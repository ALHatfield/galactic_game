export function playerTwoHandSelectCard(card) {
    
    const PLAYER_TWO_HAND_SELECT_CARD = 'PLAYER_TWO_HAND_SELECT_CARD'
    return {
        type: 'PLAYER_TWO_HAND_SELECT_CARD',
        payload: card
    }
}
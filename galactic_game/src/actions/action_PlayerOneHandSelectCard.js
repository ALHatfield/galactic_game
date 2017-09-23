export function playerOneHandSelectCard(card) {

    const PLAYER_ONE_HAND_SELECT_CARD = 'PLAYER_ONE_HAND_SELECT_CARD'
    return {
        type: 'PLAYER_ONE_HAND_SELECT_CARD',
        payload: card
    }
}
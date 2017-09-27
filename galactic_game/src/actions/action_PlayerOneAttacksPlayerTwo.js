export function PlayerOneAttacksPlayerTwo(card) {
    return {
        type: 'PLAYER_ONE_ATTACKS_PLAYER_TWO',
        damage: card.damage
        // payload: card
    }
}
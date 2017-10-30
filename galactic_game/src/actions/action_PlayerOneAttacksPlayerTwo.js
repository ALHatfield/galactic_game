 export function PlayerOneAttacksPlayerTwo(card) {
	console.log('mats')
    return {
        type: 'PLAYER_ONE_ATTACKS_PLAYER_TWO',
        damage: card.damage
        // payload: card
    }
}
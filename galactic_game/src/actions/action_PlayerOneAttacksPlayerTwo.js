export function PlayerOneAttacksPlayerTwo(card) {
	console.log('farts')
    return {
        type: 'PLAYER_ONE_ATTACKS_PLAYER_TWO',
        damage: card.damage
        // payload: card
    }
}
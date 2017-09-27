export function PlayerTwoAttacksPlayerOne(card) {
	console.log('farts')
    return {
        type: 'PLAYER_TWO_ATTACKS_PLAYER_ONE',
        damage: card.damage
        // payload: card
    }
}
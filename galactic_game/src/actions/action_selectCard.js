export function selectCard(card) {
    console.log('A Card has been selected: ' + card.name + ' // damage: ' + card.damage);
    return {
        type: 'CARD_SELECTED',
        payload: card
    }
}
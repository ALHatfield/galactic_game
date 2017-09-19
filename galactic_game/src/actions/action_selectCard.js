export function selectCard(card) {
    console.log('Triggering: /src/actions/action_selectCard')
    console.log('Card Name: ' + card.name);
    console.log('Card Damage: ' + card.damage);
    console.log('==================================================================');
    return {
        type: 'CARD_SELECTED',
        payload: card
    }
}


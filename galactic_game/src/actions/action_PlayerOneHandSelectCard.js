export function playerOneHandSelectCard(card) {
    console.log('Triggering: /src/actions/action_PlayerOneHandSelectCard');
    console.log('Card Name: ' + card.name);
    console.log('Card Damage: ' + card.damage);
    console.log('========================================================');
    return {
        type: 'PLAYER_ONE_HAND_SELECT_CARD',
        payload: card
    }
}
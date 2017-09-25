export default function (state = [
    { 
        name: 'Plasma Bowman',      // 0
        damage: 2,
        health: 15,
        image: require('../assets/PlasmaBowman.png'),
    },      
    { 
        name: 'Roseroot Vertebrate',  // 1
        damage: 0,
        health: 6,
        image: require('../assets/RoserootVertebrate.png'),
    },  
    { 
        name: 'Omnigo Scrapper',               // 2
        damage: 1,
        health: 8,
        image: require('../assets/OmnigoScrapper.png'),
    },                     
    {
        name: 'Atlas Drill',        // 3
        damage: 3,
        health: 10,
        image: require('../assets/AtlasDrill.png'),
    }          
], action) {
switch(action.type) {
    case "PLAYER_TWO_DISPLAY_CARDS":
        return state.filter(c => c.name !== action.card.name);
    default:
        return state;
};
return 
}
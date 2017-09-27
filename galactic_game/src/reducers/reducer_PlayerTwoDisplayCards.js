export default function (state = [
    { 
        name: 'Plasma Bowman',      // 0
        damage: 2,
        health: 15,
        image: require('../assets/PlasmaBowman.png'),
        player: 'PLAYER_TWO',
        sprite: '(ノಠ益ಠ)ノ彡┻━┻'
    },      
    { 
        name: 'Roseroot Vertebrate',  // 1
        damage: 0,
        health: 6,
        image: require('../assets/RoserootVertebrate.png'),
        player: 'PLAYER_TWO',
        sprite: '(づ￣ ³￣)づ'
        
    },  
    { 
        name: 'Omnigo Scrapper',               // 2
        damage: 1,
        health: 8,
        image: require('../assets/OmnigoScrapper.png'),
        player: 'PLAYER_TWO',
        sprite: '(◕‿◕✿)'
        
    },                     
    {
        name: 'Atlas Drill',        // 3
        damage: 3,
        health: 10,
        image: require('../assets/AtlasDrill.png'),
        player: 'PLAYER_TWO',
        sprite: 'ლ(ಠ益ಠლ)'
        
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
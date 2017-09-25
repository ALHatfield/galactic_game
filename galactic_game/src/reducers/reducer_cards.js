// This is our cards reducer file.  It manages the raw data that flows into our app.
// It is exported as 'default' with no name. This module gets it's name on import in the rootReducer file.

// const Cards = [
//     { 
//         name: 'Plasma Bowman',      // 0
//         damage: 2,
//         health: 15,
//         image: require('../assets/PlasmaBowman.png'),
//     },      
//     { 
//         name: 'Roseroot Vertebrate',  // 1
//         damage: 0,
//         health: 6,
//         image: require('../assets/RoserootVertebrate.png'),
//     },  
//     { 
//         name: 'Omnigo Scrapper',               // 2
//         damage: 1,
//         health: 8,
//         image: require('../assets/OmnigoScrapper.png'),
//     },                     
//     {
//         name: 'Atlas Drill',        // 3
//         damage: 3,
//         health: 10,
//         image: require('../assets/AtlasDrill.png'),
//     }          
// ];

// export default Cards;
    
export default function () {
    return (
        [
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
        ]
    )
}
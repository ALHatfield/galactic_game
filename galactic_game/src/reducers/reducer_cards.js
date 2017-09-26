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
    
/*export default function () {
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
}*/

// This is our cards reducer file.  It manages the raw data that flows into our app.
// It is exported as 'default' with no name. This module gets it's name on import in the rootReducer file.
export default function () {
     return [
        { 
            name: 'Plasma Bowman',
            energy_cost: 1,
            health: 3,
            damage: 4,
            range: 3,
            image: require('../assets/PlasmaBowman.png'),
            description: '',
            quantity: 6,
        },
        { 
            name: 'Roseroot Vertebrate',
            energy_cost: 2,
            health: 8,
            damage: 1,
            range: 1,
            image: require('../assets/RoserootVertebrate.png'),
            description: '',
            quantity: 3,
        },
        { 
            name: 'Omnigo Scrapper',
            energy_cost: 0,
            health: 2,
            damage: 1,
            range: 1,
            image: require('../assets/OmnigoScrapper.png'),
            description: '',
            quantity: 3,
        },               
        { 
            name: 'Wax Gas Grenadier',
            energy_cost: 3,
            health: 4,
            damage: 4,
            range: 2,
            image: require('../assets/WaxGasGrenadier.png'),
            description: '',
            quantity: 4,
        },
        { 
            name: 'Crystal Beam Rover',
            energy_cost: 3,
            health: 6,
            damage: 4,
            range: 2,
            image: require('../assets/CrystalBeamRover.png'),
            description: '',
            quantity: 2,
        },
        { 
            name: 'Electromagnetic Ray Cannon',
            energy_cost: 3,
            health: 4,
            damage: 8,
            range: 3,
            image: require('../assets/EMRCannon.png'),
            description: '',
            quantity: 2,
        },
        { 
            name: 'Atlas Drill',
            energy_cost: 1,
            health: 8,
            damage: 0,
            range: 0,
            image: require('../assets/AtlasDrill.png'),
            description: '',
            quantity: 6,
        },
        { 
            name: 'Dragon Draw Festival',
            energy_cost: 2,
            health: 0,
            damage: 0,
            range: 0,
            image: require('../assets/DragonDrawFestival.png'),
            description: '',
            quantity: 4,
        },
        { 
            name: 'Meteor Strike',
            energy_cost: 3,
            health: 0,
            damage: 0,
            range: 0,
            image: require('../assets/MeteorStrike.png'),
            description: '',
            quantity: 2,
        },               
    ];
}
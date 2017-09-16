// This is our cards reducer file.  It manages the raw data that flows into our app.
// It is exported as 'default' with no name. This module gets it's name on import in the rootReducer file.
export default function () {
    return [
        { 
            name: 'Plasma Bowman',      // 0
            damage: 2, 
        },      
        { 
            name: 'Roseroot Vertebrate',  // 1
            damage: 0, 
        },  
        { 
            name: 'Omnigo Scrapper',               // 2
            damage: 1, 
        },                     
        {
            name: 'Atlas Drill',        // 3
            damage: 3, 
        }          
    ];
}
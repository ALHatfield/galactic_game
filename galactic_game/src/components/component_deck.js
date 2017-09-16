let idAccumulator = 0;
class Card {
    constructor(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription) {
        this.CardName = CardName
        this.CardImage = CardImage
        this.CardEnergy = CardEnergy
        this.CardAttack = CardAttack
        this.CardHealth = CardHealth
        this.CardRange = CardRange
        this.CardDescription = CardDescription
        this.IsPlayerOne = false
        this.IsPlayerTwo = false
        this.id = idAccumulator++
    }
}
class PlasmaBowmen extends Card {
    constructor(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription) {
        super("Plasma Bowman", "", 1, 1, 1, 3, "", false, false)
    }
}
class RoserootVertebrate extends Card {
    constructor(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription) {
        super("Roseroot Vertebrate", "", 2, 4, 5, 1, "", false, false)
    }
}
class StarJumper extends Card {
    constructor(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription) {
        super("Star Jumper", "", 2, 2, 4, 2, "", false, false)
    }
}
class OmnigoScrapper extends Card {
    constructor(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription) {
        super("Omnigo Scrapper", "", 2, 3, 3, 1, "", false, false)
    }
}
class WaxGasGrenadier extends Card {
    constructor(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription) {
        super("Wax Gas Grenadier", "", 3, 5, 2, 2, "", false, false)
    }
}
class CrystalBeamGenerator extends Card {
    constructor(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription) {
        super("Crystal Beam Generator", "", 3, 4, 5, 2, "", false, false)
    }
}
class EMRcannon extends Card {
    constructor(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription) {
        super("EMR Cannon", "", 3, 4, 2, 4, "", false, false)
    }
}
class AtlasDrill extends Card {
    constructor(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription) {
        super("Atlas Drill", "", 1, null, 6, null, "", false, false)
        //At the start of your turn gain 1 more energy to use during that turn
    }
}
class PressureAmplifier extends Card {
    constructor(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription) {
        super("Pressure Amplifier", "", 2, null, 8, null, "", false, false)
        //Increase damage of friendly units by 3 that are within Pressure Amplifier's range (in front of that unit)
    }
}
class MirrorWall extends Card {
    constructor(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription) {
        super("Mirror Wall", "", 2, null, 10, null, "", false, false)
        //Reflect 1/2 damage rounded up back at units that attack mirror wall
    }
}
class OrdersToAdvance extends Card {
    constructor(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription) {
        super("Orders to Advance", "", 2, null, null, null, "", false, false)
        //Move foward all friendly units foward one space from the selected point onwards
    }
}
class DimensionWalk extends Card {
    constructor(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription) {
        super("Dimension Walk", "", 3, null, null, null, "", false, false)
        //Select any unit and move them either left or right one lane in an unoccupied tile right next to their original location
    }
}
class DivineWhirlwind extends Card {
    constructor(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription) {
        super("Divine Whirlwind", "", 3, null, null, null, "", false, false)
        //Move all enemy units back one space from the selected point onwards
    }
}
class MeteorStrike extends Card {
    constructor(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription) {
        super("MeteorStrike", "", 3, null, null, null, "", false, false)
        //Destroy whatever unit is on the selected tile
    }
}
//Deck
var Deck = [
PlasmaBowmen1 = new PlasmaBowmen(),
PlasmaBowmen2 = new PlasmaBowmen(),
PlasmaBowmen3 = new PlasmaBowmen(),
PlasmaBowmen4 = new PlasmaBowmen(),
PlasmaBowmen5 = new PlasmaBowmen(),
PlasmaBowmen6 = new PlasmaBowmen(),
RoserootVertebrate1 = new RoserootVertebrate(),
RoserootVertebrate2 = new RoserootVertebrate(),
RoserootVertebrate3 = new RoserootVertebrate(),
RoserootVertebrate4 = new RoserootVertebrate(),
StarJumper1 = new StarJumper(),
StarJumper2 = new StarJumper(),
StarJumper3 = new StarJumper(),
StarJumper4 = new StarJumper(),
OmnigoScrapper1 = new OmnigoScrapper(),
OmnigoScrapper2 = new OmnigoScrapper(),
OmnigoScrapper3 = new OmnigoScrapper(),
OmnigoScrapper4 = new OmnigoScrapper(),
WaxGasGrenadier1 = new WaxGasGrenadier(),
WaxGasGrenadier2 = new WaxGasGrenadier(),
CrystalBeamGenerator1 = new CrystalBeamGenerator(),
CrystalBeamGenerator2 = new CrystalBeamGenerator(),
EMRcannon1 = new EMRcannon(),
EMRcannon2 = new EMRcannon(),
AtlasDrill1 = new AtlasDrill(),
AtlasDrill2 = new AtlasDrill(),
AtlasDrill3 = new AtlasDrill(),
AtlasDrill4 = new AtlasDrill(),
AtlasDrill5 = new AtlasDrill(),
AtlasDrill6 = new AtlasDrill(),
PressureAmplifier1 = new PressureAmplifier(),
PressureAmplifier2 = new PressureAmplifier(),
PressureAmplifier3 = new PressureAmplifier(),
PressureAmplifier4 = new PressureAmplifier(),
MirrorWall1 = new MirrorWall(),
MirrorWall2 = new MirrorWall(),
MirrorWall3 = new MirrorWall(),
MirrorWall4 = new MirrorWall(),
OrdersToAdvance1 = new OrdersToAdvance(),
OrdersToAdvance2 = new OrdersToAdvance(),
OrdersToAdvance3 = new OrdersToAdvance(),
OrdersToAdvance4 = new OrdersToAdvance(),
DimensionWalk1 = new DimensionWalk(),
DimensionWalk2 = new DimensionWalk(),
DivineWhirlwind1 = new DivineWhirlwind(),
DivineWhirlwind2 = new DivineWhirlwind(),
MeteorStrike1 = new MeteorStrike(),
MeteorStrike2 = new MeteorStrike()
];
module.exports = Deck;
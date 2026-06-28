// Weclome Message

alert(`Welcome, traveler. Today begins your adventure in the haunted forest. Answer these haunted questions to build your own adeventurer..`);

//Character Name

const charName = prompt(`What is your character\'s name, Adventurer?`,  "Wanderer");

//Pet & Companions Name

const petComp = prompt(`What type of creature or companion does your ${charName} have?`);

//Superpower 

const superpower = prompt(`What superpower does ${charName} have?`);

//Years of Training

const trainingYearsText = prompt(`How many years has ${charName} been training? (enter a number)`);

//Conversion practice

const trainingYearsNum = Number(trainingYearsText);

console.log(trainingYearsText, typeof trainingYearsText);
console.log(trainingYearsNum, typeof trainingYearsNum);

const powerLevel = trainingYearsNum * 10;

/* what would trainingYearsText * 10 produce if trainingYearsText is the string "5"?
// Before testing: 50 
// Aftet testing: 50
/* what would trainingYearsText * 10 produce if trainingYearsText is the string "five"?
// Before Testing: Couldn't produce a non-number string
// Aftet testing: Power Level: NaN, this means it couldn't produce a number because user used a text instead of a number. 
*/

//Like fighting monsters

const likesFighting = confirm(`Does ${charName} like fighting monsters? Click OK for YES, Click CANCEL for NO`);

console.log(likesFighting, typeof likesFighting);

//Loading/Preparing Message

alert(`Gathering creatures and lost spirits for ${charName}... almost ready!`);

//Final character story

alert(`====================================
Labels and values:
Name: ${charName}
Pet: ${petComp}
Superpower: ${superpower}
Power Level: ${powerLevel}
Monster fighter? ${likesFighting ? "Yes" : "No"}
====================================

Deep in the dark, haunted forest, the woods grew darker with every step. Nothing an adventurer with level ${powerLevel} couldn\'t handle. ${charName} walks along a forgotten path into the cold forest, but with ${petComp} by their side and the power of ${superpower}, the haunted forest doesn't seem that scary.
====================================`);


function describeCountry(country, population, capitalCity) {
   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

let firstCountry = describeCountry("Portugal", 10, "Lisbon");
let secondCountry = describeCountry("Spain", 47, "Madrid");
let thirdCountry = describeCountry("France", 67, "Paris");

console.log(firstCountry);
console.log(secondCountry);
console.log(thirdCountry);


// Function Declarations vs. Expressions
// Function
console.log("\n");
function percentageOfWorld1(population) {
   return (population / 7900000000 * 100).toFixed(2);;
}

let chinaPopulation = 1410000000;
let moldovaPopulation = 2389000;
let turciaPopulation = 87800000;
let usaPopulation = 340000000;

console.log(`The percentage of World for China is ${percentageOfWorld1(chinaPopulation)}`);
console.log(`The percentage of World for Moldova is ${percentageOfWorld1(moldovaPopulation)}`);
console.log(`The percentage of World for Turkey is ${percentageOfWorld1(turciaPopulation)}`);


// Expressions
const percentageOfWorld2 = function(population) {
   return (population / 7900000000 * 100).toFixed(2);
};

console.log(`The percentage of World for China is ${percentageOfWorld2(chinaPopulation)}`);
console.log(`The percentage of World for Moldova is ${percentageOfWorld2(moldovaPopulation)}`);
console.log(`The percentage of World for Turkey is ${percentageOfWorld2(turciaPopulation)}`);


// Arrow Functions
let percentageOfWorld3 = population => {
   return (population / 7900000000 * 100).toFixed(2);
}

console.log(`The percentage of World for China is ${percentageOfWorld3(chinaPopulation)}`);
console.log(`The percentage of World for Moldova is ${percentageOfWorld3(moldovaPopulation)}`);
console.log(`The percentage of World for Turkey is ${percentageOfWorld3(turciaPopulation)}`);


// Functions Calling Other Functions
console.log("\n");
let describePopulation = (country1, population1) => console.log(`${country1} has ${population1} million people, which is about ${percentageOfWorld1(population1)} %`);

let China4 = describePopulation ("China", chinaPopulation);
let Moldova4 = describePopulation("Moldova", moldovaPopulation);
let Turcia4 = describePopulation("Turcia", turciaPopulation);


// Introduction to Array    
console.log("\n");        
let population2 = [
  chinaPopulation,
  moldovaPopulation,
  turciaPopulation,
  usaPopulation
];
console.log(population2.length === 4);

let percentages = [percentageOfWorld1(chinaPopulation), percentageOfWorld1(moldovaPopulation), percentageOfWorld1(turciaPopulation), percentageOfWorld1(usaPopulation)];
console.log(percentages);


// Basic Array Operations (Methods)
console.log("\n");
let neighbours = ["Romania", "Ukraine"];
console.log(neighbours);
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);


if (!neighbours.includes('Germany')) {
   console.log("Probably not a central European country :D");
}
const index = neighbours.indexOf("Ukraine");
if (index !== -1) {
   neighbours[index] = "Utopia"
}
console.log(neighbours);


// Iteration: The for Loop   
console.log("\n");              
for (let i=1; i<=50; i++)
{
   console.log(`Voter number ${i} is currently voting`)
}

// Looping Arrays, Breaking and Continuing
console.log("\n");
let percentages2 = [];
for (let population of population2) {
   percentages2.push(percentageOfWorld1(population));
   console.log(percentages2);
}

if (JSON.stringify(percentages) === JSON.stringify(percentages2)) {
  console.log("Arrays are equal");
} else {
  console.log("Arrays are not equal");
}

// Looping Backwards and Loops in Loops
console.log("\n");
let listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Poland', 'Sweden', 'Ukraine']];                                       

for (let neighbours of listOfNeighbours) {
   for (let neighbour of neighbours)
   console.log(`Neighbour: ${neighbour}`);
}

// LECTURE: The while Loop      
console.log("\n");         
let i =0;
while (i < population2.length) {
   let percentage3 = percentageOfWorld1(population2[i]);
   console.log(percentage3);
   i++;
}

// Introduction to Objects 
// Object Methods           
console.log("\n");                             
let myCountry = {
   country: "Portugal",
   capital: "Lisbon",
   language: "Portuguese",
   citizens: 10700000,
   neighbours: ["Spain"],
   describe() {
       return `${this.country} has ${this.citizens} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
   },
   checkIsland() {
       this.isIsland = this.neighbours.length === 0;
       return this.isIsland;
   }
}

console.log(myCountry.describe());
console.log(myCountry.checkIsland());

// Dot vs. Bracket Notation 
console.log("\n");                   
console.log(`${myCountry.country} has ${myCountry.citizens} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

console.log(`New population: ${myCountry.citizens += 2000}`);
console.log(`Old population: ${myCountry["citizens"] -= 2000}`);
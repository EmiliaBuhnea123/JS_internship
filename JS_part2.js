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
   return (population / 7900 * 100).toFixed(2);;
}

let China = percentageOfWorld1(1441);
let Moldova = percentageOfWorld1(2389);
let Turcia = percentageOfWorld1(85);

console.log(`The percentage of World for China is ${China}`);
console.log(`The percentage of World for Moldova is ${Moldova}`);
console.log(`The percentage of World for Turkey is ${Turcia}`);


// Expressions
const percentageOfWorld2 = function(population) {
   return (population / 7900 * 100).toFixed(2);
};

let China1 = percentageOfWorld2(1441);
let Moldova1 = percentageOfWorld2(2389);
let Turcia1 = percentageOfWorld2(85);

console.log(`The percentage of World for China is ${China1}`);
console.log(`The percentage of World for Moldova is ${Moldova1}`);
console.log(`The percentage of World for Turkey is ${Turcia1}`);


// Arrow Functions
let percentageOfWorld3 = population => (population / 7900 * 100).toFixed(2);

let China3 = percentageOfWorld3(1441);
let Moldova3 = percentageOfWorld3(2389);
let Turcia3 = percentageOfWorld3(85);

console.log(`The percentage of World for China is ${China3}`);
console.log(`The percentage of World for Moldova is ${Moldova3}`);
console.log(`The percentage of World for Turkey is ${Turcia3}`);


// Functions Calling Other Functions
console.log("\n");
let describePopulation = (country1, population1) => `${country1} has ${population1} million people, which is about ${percentageOfWorld1(population1)} %`;

let China4 = describePopulation ("China", 1441);
let Moldova4 = describePopulation("Moldova", 2389);
let Turcia4 = describePopulation("Turcia", 85);

console.log(China4);
console.log(Moldova4);
console.log(Turcia4);


// Introduction to Array    
console.log("\n");        
let population2 = [1441, 2389, 85, 9034];
console.log(population2.length === 4);

let percentages = [percentageOfWorld1(1441), percentageOfWorld1(2389), percentageOfWorld1(85), percentageOfWorld1(9034)];
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
for (let i=0; i<=50; i++)
{
   console.log(`Person number ${i} is currently traveling`)
}

// Looping Arrays, Breaking and Continuing
console.log("\n");
let population3 = [1441, 2389, 85, 9034];
for (population of population3) {
   let percentages2 = percentageOfWorld1(population);
   console.log(percentages2);
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
let population4 = [1441, 2389, 85, 9034];
let i =0;
while (i < population4.length) {
   let percentage4 = percentageOfWorld1(population4[i]);
   console.log(percentage4);
   i++;
}

// Introduction to Objects 
// Object Methods           
console.log("\n");                              
let myCountry = {
   country: "Moldova",
   capital: "Chisinau",
   language: "romanina",
   Population: 22389,
   neighbours: ["Romania", "Ukraine"],
   describe() {
       console.log(`${this.country} has ${this.Population} million finnish-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
   },
   checkIsland() {
       let numberOfNeighbours = this.neighbours.length;
       this.isIsland1 = numberOfNeighbours == 0 ? true : false;
       console.log(this.isIsland1);
   }
}

// Dot vs. Bracket Notation 
console.log("\n");                   
console.log(`${myCountry.country} has ${myCountry.Population} million finnish-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

console.log(`New population: ${myCountry.Population += 2000}`);
console.log(`Old population: ${myCountry["Population"] -= 2000}`);
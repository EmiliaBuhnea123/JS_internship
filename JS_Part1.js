// Values and Variables
let country = "Moldova";
let continent = "Eurasia";
let population = 2389000;

console.log(`Country: ${country}, Continent: ${continent}, Population ${population}`);

// Data Types
console.log("\n");
let isIsland = false;
let language;

console.log(`Is island - ${typeof isIsland}, Population - ${typeof population}, Country - ${typeof country}, Language - ${typeof language}`);

// Basic Operators
console.log("\n");
//1
let halfPopulation = population / 2;
console.log(halfPopulation);

//2
console.log(++population);

//3
let FinlandPopulation = 5637000;
let morePopulation = population > FinlandPopulation;
console.log(morePopulation);

//4
let averagePopulation = 33000000;
let lessPopulation = population < averagePopulation;
console.log(lessPopulation);

//5 + Strings and Template Literals 
let languageMoldova = "romanian";      
let description = `${country} is in ${continent}, and its ${population} million people speak ${languageMoldova}.`;
console.log(description);

// Equality Operators: == vs. === 
// let numNeighbours = Number(prompt('How many neighbour countries does your country have?', ''));

// if (numNeighbours === 1) {
//     console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//     console.log("More than 1 border");
// } else {
//     console.log("Noborders");
// }

// Logical Operators       
console.log("\n");        
if (language == "English" && population < 50 && isIsland == false)
{
   console.log('You should live in Portugal:)');
} else {
   console.log('Portugal does not meet your criteria :(');
}

// Type Conversion and Coercion   
console.log("\n");                            
console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false 
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143    

//if / else Statements
console.log("\n");
if (population > 33) {
   console.log(`${country}'s population is above average`)
} else {
   console.log(`${country}'s population is ${33 - population} million below average`)
}

// The switch Statement  
console.log("\n");              
language = "Spanish";

switch(language) {
   case "Chinese" :
   case "Mandarin":
       console.log('MOST number of native speakers!');
       break;
   case "Spanish" :
       console.log('2nd place in number of native speakers');
       break;
   case "English" :
       console.log('3rd place');
       break;
   case "Hindi" :
       console.log('Number 4');
       break;
   case "Arabic" :
       console.log('5th most spoken language');
       break;
   default :
   console.log('Great language too :D');
}
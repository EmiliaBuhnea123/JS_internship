// Prototypes
//Task 1
let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};

Object.setPrototypeOf(pockets,bed)
Object.setPrototypeOf(bed,table)
Object.setPrototypeOf(table,head)

console.time("head");
for (let i = 0; i < 1_000_000; i++) {
  let x = head.glasses;
}
console.timeEnd("head");

console.time("pockets");
for (let i = 0; i < 1_000_000; i++) {
  let x = pockets.glasses;
}
console.timeEnd("pockets");
//It is faster to get pockets.glasses

//Task 2
console.log('\n');
let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();
// Rabbit will receive the full property, because 'this' refers to rabbit when calling rabbit.eat()

// Classes
console.log('\n');
class Clock {
    constructor(template) {
        this.template = template
        this.timer = null;
    }

    render() {
        let date = new Date();
        let hours = date.getHours();

    if (hours < 10) hours = '0' + hours;
        let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;
        let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;
      let output = this.template
       .replace('h', hours)
       .replace('m', mins)
       .replace('s', secs);
       console.log(output);
    }

    stop() {
        clearInterval(this.timer);
        this.timer = null; 
    }

    start() {
        this.render();
        if(this.timer==null){
        this.timer = setInterval(() => this.render(), 1000);
        }
    }
}

let clock = new Clock('h:m:s');
clock.start();

// Objects
// Task 1
console.log('\n');
let user = {
  name: 'John',
  age: 30
};

function count(user) {
   return Object.keys(user).length;
}

console.log(count(user));

// Task 2
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(salaries){
  return Object.values(salaries).reduce((total,num) => total + num, 0)
}

console.log(sumSalaries(salaries)); 

// Destructuring assignment
console.log('\n');
let new_user = {
  new_name: "John",
  years: 30
};

let {new_name: new_name, years: age, isAdmin = false} = new_user;

console.log(new_name); 
console.log(age); 
console.log(isAdmin); 

// Map and Set
// Task 1
console.log('\n');
let arr = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr) {
  let set = new Set();
  for(const element of arr){
    set.add(element);
  }
  return [...set];
}
console.log(unique(arr)); 


// Task 2
let map = new Map();
map.set("name", "John");

let keys =[...map.keys()];
keys.push("more");
console.log(keys);
//Databases

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William",
];

const travelMethods = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const devs = [
  { name: "Alex", year: 1988 },
  { name: "Dani", year: 1986 },
  { name: "Matt", year: 1970 },
  { name: "Wes", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

//Code

/*
Level Up exercise 1: Array.prototype.reduce()

Calculate the combined lifespan of all the inventors using 
Array.prototype.reduce()

- Each object in the array includes these properties: 
  'first', 'last', 'year' (birth year), and 'passed' (year of death).
- Use the Array.prototype.reduce() method to calculate the sum of the total 
  years lived by all the inventors.
- Store the total sum in the variable 'totalYearsLived'.

Hints:

- Inside the reduce callback function, calculate the lifespan of each inventor 
  (passed - year).
- Accumulate this lifespan in the 'totalYearsLived' variable.
- Remember, reduce takes a callback function and an initial value for the 
  accumulator.
*/

let totalYearsLived = 0;

// Complete the exercise in the space below:
totalYearsLived = inventors.reduce(function (acc, inventor) {
  return acc + inventor.passed - inventor.year;
}, 0);

// Check your work:
console.log("Level Up 1 my result: ", totalYearsLived);
console.log("Level Up 1 correct result: ", 861);

/*
Level Up exercise 2: Array.prototype.reduce()

Tallying travel methods using Array.prototype.reduce(). 

Count the number of times each travel method appears in the 'travelMethods'
array.

- The resulting object should have keys as the travel methods 
  ('car', 'truck', 'bike', etc.) and values as their respective counts.
- Store this object in the variable 'travelMethodCounts'.

Hints:
- Inside the reduce function, check if the travel method already exists as a key
  in your accumulator object. If it does, increment its count. If not, add it 
  to the object and give it a value of 1.
- Since you want to return an object, be sure to pass an empty {} for the 
  initial value of the "accumulator".
*/

let travelMethodCounts = {};

// Complete the exercise in the space below:
travelMethodCounts = travelMethods.reduce(function (acc, method) {
  acc[method] ? acc[method]++ : (acc[method] = 1);
  return acc;
}, {});

// Check your work:
console.log("Level Up 2 my result: ", travelMethodCounts);
console.log("Level Up 2 correct result: ", {
  car: 5,
  truck: 3,
  bike: 2,
  walk: 2,
  van: 2,
});

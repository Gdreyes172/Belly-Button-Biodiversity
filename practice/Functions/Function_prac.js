// Function practice

var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);

var y=2;
console.log(y);

var numbers = [0,2,4,6,7,8]
var addFive = numbers.map(number => number+5)
    console.log(addFive);
// Another way to use map on string item
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);
        // As you can see, the map operator was able to pull the cities
        // in the our list of objects.


// Filtering using the filter method. 
var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
    });
console.log(larger);

    // Using modulo for filtering
let numbers = [12,15,26,42,105,171,240,700]

let evenNumber = numbers.filter(number => number % 2 == 0)
console.log(evenNumber)

// Fix the code below:
/// var familyAge = [2,3,39,37,9];
 
/// var olderThanFive = familyAge.filter(function(age){
///     return age > 5;
/// });

var familyAge = [2,3,39,37,9];

var olderThanFive = familyAge.filter(age => age > 5)
console.log(olderThanFive)

// Example two: Filter the variable below.
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var sAnimals = words.filter((word) => word.startsWith("s"));
console.log(sAnimals)


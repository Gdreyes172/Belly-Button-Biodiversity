/// Plan for our project:
// 1) Sort the cities in descending order of population growth.
// 2) Select only the top five cities in terms of growth.
// 3) Create separate arrays for the city names and their population growths.
// 4) Use Plotly to create a bar chart with these arrays.
console.log(cityGrowths);

var sortedCities = cityGrowths.sort((a, b) => b.Increase_from_2016 - a.Increase_from_2016);
console.log(sortedCities);
var topFiveCities = sortedCities.slice(0,5);
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

console.log(topFiveCityNames);
console.log(topFiveCityGrowths);
// plot topFiveCities
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);

// Use the same dataset to create a bar chart of the seven largest cities by population.
// Filter and slice the cities with top seven pops
var cityPops = cityGrowths.sort((a, b) => b.population - a.population);
console.log(cityPops);
var topSevenPops = cityPops.slice(0, 7);
// Collect names and population numbers into variables.
var topSevenNames = topSevenPops.map(city => city.City);
var topSevenPopulations = topSevenPops.map(city => parseInt(city.population));
console.log(topSevenNames);
console.log(topSevenPopulations);
/// Plot the data
var trace = {
    x: topSevenNames,
    y: topSevenPopulations,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Largest Cities by Population",
    xaxis: {title: "City" },
    yaxis: {title: "Populations per city"}
  };
  Plotly.newPlot("bar-plot2", data, layout);

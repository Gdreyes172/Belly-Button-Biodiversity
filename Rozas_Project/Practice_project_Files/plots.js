
// Using the init() function; we provide a list of "dataset" options based on our sample names.
// The function parses through each name and creates value for our dropdown menu.
function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
init();

// Giving the "optionChanged" fucntion in our HTML a purpose; we use the lines of code
// below. 
// function optionChanged(newSample) {
//  console.log(newSample);
// }
// Using the code above to produce a "new sample" element that can be iterated through
// by other functions.
function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
}

// Creating the "buildMetadata" funtion to create a div full of the samples metadata.
function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        var result = resultArray[0];
        var Panel = d3.select("#sample-metadata");

        Panel.html("");
        Panel.append("h6").text("ID: " + result.id);
        Panel.append("h6").text("Ethnicity: " + result.ethnicity);
        Panel.append("h6").text("Gender: " + result.gender);
        Panel.append("h6").text("Age: " + result.age);
        Panel.append("h6").text("Home Town: " + result.location);
    });
}
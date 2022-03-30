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

function optionChanged(newSample) {
    console.log(newSample);
}

function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
}
function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");
  
      PANEL.html("");
      PANEL.append("h6").text(result.location);
    });
}
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    var sampleIds = data.samples;
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var filteredIds = sampleIds.filter(sampleObj => sampleObj.id == sample);
    //  5. Create a variable that holds the first sample in the array.
    var sampleId = filteredIds[0].sort((a,b) => b.otu_ids - a.otu_ids);
    console.log(sampleId);
    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    // var otuIds = console.log(sampleId.otu_ids);
    
    // var otuLabels = console.log(sampleId.otu_labels);
    
    // var sampleValues = console.log(sampleId.sample_values);
    
    //console.log(otuIds),
    //console.log(otuLabels),
    //console.log(sampleValues);
    //var isoOtuIds = sampleId.map(id => id.otu_ids);
    //console.log(isoOtuIds);
    //var topFiveCities = sortedCities.slice(0,5);
    //var topFiveCityNames = topFiveCities.map(city => city.City);
    //var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));
    // var topTenIds = result.map(otu_ids => sample.otu_ids);
 
  });
}
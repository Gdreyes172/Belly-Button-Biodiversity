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
      PANEL.append("h6").text("ID: " + result.id);
      PANEL.append("h6").text("Ethnicity: " + result.ethnicity);
      PANEL.append("h6").text("Gender: " + result.gender);
      PANEL.append("h6").text("Collection Location: " + result.location);
      PANEL.append("h6").text("BBtype: " + result.bbtype);
      PANEL.append("h6").text("Wfreq: " + result.wfreq);
    });
}
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    var sampleIds = data.samples;
    console.log(sampleIds);
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var filteredIds = sampleIds.filter(sampleObj => sampleObj.id == sample);
    
    //  5. Create a variable that holds the first sample in the array.
    var sampleId = filteredIds[0];

    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otu_ids = sampleId.otu_ids;
    var otu_labels = sampleId.otu_labels;
    var sample_values = sampleId.sample_values;
    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order so the otu_ids with the most bacteria are last. 
    var yticks = otu_ids.slice(0,10).map(otu => `OTU ${otu}`).reverse();

    // 8. Create the trace for the bar chart. 
    var barData = [{
      x: sample_values.slice(0,10).reverse(),
      y: yticks,
      text: otu_labels.slice(0,10).reverse(),
      type: "bar",
      orientation: "h"
    }];

    // 9. Create the layout for the bar chart. 
    var barLayout = {
      title: "Top 10 Bacteria Cultures Found",
      xaxis: { title: "Sample Values"},
      yaxis: { title: "OTU ID"},
      plot_bgcolor: "rgba(72,72,72,72)",
      paper_bgcolor: "rgba(72,72,72,72)",
      font: {
       color: '#FFFFFF'}
    };
    
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout);

    // Create the buildCharts function.
    // 1. Create the trace for the bubble chart.
    var bubbleData = [ {
      y: sample_values,
      x: otu_ids,
      text: otu_labels,
      mode: 'markers',
      marker: {
        color: otu_ids,
        size: sample_values,
        colorscale: 'plasma' 
      }
    }];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: "Bacteria Cultures per Sample",
      xaxis: {title: "OTU ID"},
      yaxis: {title: "Sample Values"},
      plot_bgcolor: "#212121",
      paper_bgcolor: "#212121",
      yaxis: {
        tickcolor: "#FFFFFF",
        tickwidth: .25,
        
        gridcolor: "#FFFFFF",
        gridwidth: .25,
        
        zerolinecolor: "#FFFFFF",
        zerolinewidth: .25,
      },
      xaxis: {
        tickcolor: "#FFFFFF",
        tickwidth: .25,
        
        gridcolor: "#FFFFFF",
        gridwidth: .25,      
      },
      font: {
       color: '#FFFFFF'},
      showLegend: false,
      hovermode: "closest",
      height: 425,
      width: 1100
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout); 

    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var filteredData = data.metadata.filter(sampleObj => sampleObj.id == sample);

    // 2. Create a variable that holds the first sample in the metadata array.
    var firstSample = filteredData[0];

    // 3. Create a variable that holds the washing frequency.
   var wfreqData = parseFloat(firstSample.wfreq); //do we need parseFloat?
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [ {
      domain: {x: [0,1], y: [0,1]},
      value: wfreqData,
      title: { text: "Belly Button Washing Frequecy<br>Scrubs per Week" },
      type: "indicator",
      mode: "gauge+number",
      gauge: {
        bar: { color: "black" },
        axis: { range: [0, 10], tickwidth: 2, tickcolor: "black"},
        bgcolor: "white",
        steps: [
          { range: [0, 2], color: "red"},
          { range: [2, 4], color: "orange"},
          { range: [4, 6], color: "yellow"},
          { range: [6, 8], color: "lightgreen"},
          { range: [8, 10], color: "Green"}
        ]
      }

    }];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
      width: 525,
      height: 450,
      margin: { t: 0, b: 0},
      plot_bgcolor: "#212121",
      paper_bgcolor: "#212121",
      font: { color: "green", family: "Arial"}
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout);
  });
}
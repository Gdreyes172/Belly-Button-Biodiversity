d3.json("samples.json").then(function(data){
    console.log(data);
});

// getting the data for the first test subject: ID 940
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});
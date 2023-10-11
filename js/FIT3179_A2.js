var spec1 = "js/GDP_Map.vg.json";
vegaEmbed("#choropleth_map", spec1, {"actions": false}).then(function(result) {
}).catch(console.error);

var spec2 = "js/Unicorn.vg.json";
vegaEmbed("#barchart", spec2, {"actions": false}).then(function(result) {
}).catch(console.error);

var spec3 = "js/GDP_Top5.vg.json";
vegaEmbed("#linechart", spec3, {"actions": false}).then(function(result) {
}).catch(console.error);

var spec4 = "js/A2_4.vg.json";
vegaEmbed("#g4", spec4).then(function(result) {
}).catch(console.error);
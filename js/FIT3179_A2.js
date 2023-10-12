var spec1 = "js/GDP_Map.vg.json";
vegaEmbed("#choropleth_map", spec1, {"actions": false}).then(function(result) {
}).catch(console.error);

var spec2 = "js/Unicorn.vg.json";
vegaEmbed("#barchart", spec2, {"actions": false}).then(function(result) {
}).catch(console.error);

var spec3 = "js/GDP_Top5.vg.json";
vegaEmbed("#linechart", spec3, {"actions": false}).then(function(result) {
}).catch(console.error);

var spec4 = "js/Life_exp.vg.json";
vegaEmbed("#linewithpoint", spec4, {"actions": false}).then(function(result) {
}).catch(console.error);

var spec4 = "js/Top5.vg.json";
vegaEmbed("#linewithselecter", spec4, {"actions": false}).then(function(result) {
}).catch(console.error);
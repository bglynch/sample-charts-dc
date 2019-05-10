# Boiler Plate dc.js Project
---
This is a boilerplate project from createing webapps using dc.js
### Tech
| Name        | API | Description          
| ------------- |:-------------| :-------------| 
| [dc.js]           | [dc API]          | Javascript charting library with native crossfilter support. It leverages D3.js to render charts in CSS-friendly SVG format.|
| [D3.js]           | [D3 API]          | JavaScript library for manipulating documents based on data using HTML, SVG, and CSS |
| [crossfilter.js]  | [crossfilter API] | JavaScript library for multidimensional filtering and aggregation of tabular data.|



### Installation
Html snippert for loading the necessary libraries
##### index.html
```html
<head>

    ... 
    
    <!-- Specific Order: first d3, then crossfilter then dc -->
    <script src="https://d3js.org/d3.v4.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crossfilter/1.3.12/crossfilter.js"></script>
    <script src="http://unpkg.com/dc@3/dc.js"></script>
    <link rel="stylesheet" href="http://unpkg.com/dc@3/dc.css" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/queue-async/1.0.7/queue.js"></script>

    <!-- Custom CSS and JS -->
    <link rel="stylesheet" href="css/style.css">
    <script src="js/charts.js"></script> <!-- this is where code for your charts will go -->
    
</head>
```

### Development
Load the data.  
Here we load a json file. [List fo other file acceptable file types](https://github.com/d3/d3/blob/master/API.md#fetches-d3-fetch)
##### js/charts.js
```javascript
queue()
    .defer(d3.json, "data/sample-data.json")
    .await(makeGraphs);
    
function makeGraphs(error, sampleData) {
// Create crossfilter instance
    var ndx = crossfilter(sampleData);
    
    ...
    // Call chart functions here
    name_of_function(ndx);
    ...
    
    dc.renderAll();
}

//Create chart functions
function name_of_function(ndx) {
    var dim = ndx.dimension(dc.pluck('column name'));
    var group = dim.group();

    dc.rowChart("#html_id")
        .width(350)
        .height(330)
        .dimension(dim)
        .group(group)
        .elasticX(true)
        .xAxis().ticks(4);
}
```




### Todos


   [dc.js]: https://github.com/dc-js/dc.js
   [dc API]: http://dc-js.github.io/dc.js/docs/html/
   [D3.js]: https://d3js.org/
   [D3 API]: https://github.com/d3/d3/blob/master/API.md
   [crossfilter.js]: http://square.github.io/crossfilter/
   [crossfilter API]: https://github.com/square/crossfilter/wiki/API-Reference


/*global queue, d3, crossfilter, dc */

// == load the data using queue.js == /
queue()
    .defer(d3.json, "data/sample-data.json")
    .await(makeGraphs);


// == Make charts function creates all the charts
function makeGraphs(error, sampleData) {

    var ndx = crossfilter(sampleData); // ? create the crossfilter dataset "https://github.com/square/crossfilter/wiki/API-Reference"
    console.log(ndx.size())

    // ?? remove all rows where "price_type" = "on-application""
    var helloDim = ndx.dimension(dc.pluck('price_type'));
    helloDim.filter("on-application");
    ndx.remove(); // ? removes all records that match the current filter
    helloDim.filterAll();

    // ?? create new column in data


    // ?? modify data in existing columns
    /*
    d.ReceivedDate = parseDate(d.ReceivedDate); // string to date
    d.ReceivedDateDay = d.ReceivedDate.getDay(); // date to day
    d.salary = parseInt(d.salary);
    d.yrs_since_phd = parseInt(d["yrs.since.phd"]);
    */


    show_areas_of_properties(ndx);
    show_areas_of_properties1(ndx);
    show_areas_of_properties2(ndx);
    dc.renderAll();
}


function show_areas_of_properties(ndx) {
    var dim = ndx.dimension(dc.pluck('area'));
    var group = dim.group();


    dc.rowChart("#areas_of_properties")
        .width(350)
        .height(330)
        .dimension(dim)
        .group(group)
        .elasticX(true)
        .xAxis().ticks(4);
}

function show_areas_of_properties1(ndx) {
    var dim = ndx.dimension(dc.pluck('area'));
    var group = dim.group();

    let chart = dc.rowChart("#areas_of_properties1");

    dc.rowChart("#areas_of_properties1")
        .width($(dc.rowChart("#areas_of_properties1").anchor()).parent().width())
        .height(330)
        .dimension(dim)
        .group(group)
        .elasticX(true)
        .xAxis().ticks(4);
}

function show_areas_of_properties2(ndx) {
    var dim = ndx.dimension(dc.pluck('area'));
    var group = dim.group();

    dc.rowChart("#areas_of_properties2")
        .width(350)
        .height(330)
        .dimension(dim)
        .group(group)
        .elasticX(true)
        .xAxis().ticks(4);
}


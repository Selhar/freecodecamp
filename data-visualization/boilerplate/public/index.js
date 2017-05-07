/* 
    Author: Selhar
    Date: 2017
    Contact: selhar@protonmail.com
    License: GPL

    Configuration variables
*/
const container_div = document.querySelector(".container");
const container_styles = window.getComputedStyle(container_div);

const container_dimensions = {
    width: container_styles.getPropertyValue("width").slice(0,-2),
    height: container_styles.getPropertyValue("height").slice(0,-2)
}

const svg_dimensions = {
    width: container_dimensions.width-100,
    height: container_dimensions.height-100,
    padding: 40,
    padding_right: 60
}

let tooltip_block = d3.select("body").append("div").attr("class", "tooltip").style("opacity", 0);
d3.queue()
    .defer(d3.json, './data_fallback.json')
    .defer(d3.json, 'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/global-temperature.json')
    .await(ready);
    
function ready (error, data, fallback) {
    if(error){
        console.log(error);
        alert('An error ocurred with the remote API, using local fallback data from march 2017');
    }        
    /* Data formatting */
    let api_data = {};

    data.forEach({
        
    });

    /* Data scaling */
    let xScale = d3.scaleLinear()
                    .domain([min, max])
                    .range([min, max]);

    let yScale = d3.scaleTime()
                    .domain([min,max])
                    .range([min, max]);

    let xAxis = d3.axisBottom(xScale);
    let yAxis = d3.axisLeft(yScale);

    let container = d3.select('.graph').append('svg')
                        .attr('width', svg_dimensions.width)
                        .attr('height', svg_dimensions.height );
    
    /* Rendering */
    container.append('g')
                .call(xAxis);
    
    container.append('g')
                .call(yAxis);
}
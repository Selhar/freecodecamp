/* 
    Configuration variables
*/
let fallback_data = {};

d3.json('./data_fallback.json', (error, data) => {
    if(error){
        console.log(error);
    }
    fallback_data = data;
});

//Fetch current CSS dimensions of container div
const container_div = document.querySelector(".container");
const container_styles = window.getComputedStyle(container_div);
const container_dimensions = {
    width: container_styles.getPropertyValue("width"),
    height: container_styles.getPropertyValue("height")
}

const svg_dimensions = {
    width: container_dimensions.width-100,
    height: container_dimensions.height-100
}

let container = d3.select('graph')
    .append('svg')
        .attr('height',svg_dimensions.height)
        .attr('width',svg_dimensions.width);

/* 
    Configuration variables
*/


d3.json('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json', (error, data) => {
    if(error){
        console.log(error+"\n\nAn error ocurred with the remote API, using local fallback data from march 2017");
        data = fallback_data;
    }
});
        
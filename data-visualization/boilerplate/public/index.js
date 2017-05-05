/* 
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

let timeParse = d3.timeParse("%M:%S");
let timeFormat = d3.timeFormat("%M:%S");

let tooltip_block = d3.select("body").append("div")	
                        .attr("class", "tooltip")				
                        .style("opacity", 0);


let fallback_data = {};

d3.json('./data_fallback.json', (error, data) => {
    if(error){
        console.log(error);
    }
    fallback_data = data;
});

d3.json('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json', (error, data) => {
    if(error){
        console.log(error);
        alert('An error ocurred with the remote API, using local fallback data from march 2017');
        data = fallback_data;
    }
        
    /* Data formatting */

    data.forEach((d) => {
        d.Place = +d.Place;
        d.Time = timeParse(d.Time);
    });
    
    let x_axis_builder = d3.scaleLinear()
                .domain([d3.min(data, (d) => {return d.Year-1;}),
                         d3.max(data, (d) => {return d.Year+1;})])
                .range([0, (svg_dimensions.width - svg_dimensions.padding)]);

    let y_axis_builder = d3.scaleTime()
                .domain(d3.extent(data, (d) => {return d.Time;}))
                .range([0, (svg_dimensions.height - svg_dimensions.padding)]);

    let xAxis = d3.axisBottom(x_axis_builder).tickFormat(d3.format('d'));
    let yAxis = d3.axisLeft(y_axis_builder).tickFormat(timeFormat);

    let container = d3.select('.graph').append('svg')
                        .attr('width', svg_dimensions.width)
                        .attr('height', svg_dimensions.height );
    
    container.append('g')
                .attr('transform', 'translate(0, '+(svg_dimensions.height - svg_dimensions.padding)+')')
                .call(xAxis)
                .attr('x', (svg_dimensions.width - svg_dimensions.padding))
                .attr('y', 600 );
    
    container.append('g')
                .call(yAxis);
});
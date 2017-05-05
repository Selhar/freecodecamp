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

    let xAxis = d3.scaleLinear()
                    .domain([d3.min(years), d3.max(years)])
                    .range([0, (svg_dimensions.width - svg_dimensions.padding_right)]);
    
    let yAxis = d3.scaleLinear()
                    .domain([minGdp, maxGdp])
                    .range([svg_dimensions.height - svg_dimensions.padding, (minGdp/maxGdp) * svg_dimensions.height]);

    let xAxis_line = d3.axisBottom().scale(xAxis).tickFormat(d3.format('d'));
    let yAxis_line = d3.axisLeft(yAxis);

    /* Rendering on page */
    let container = d3.select('.graph')
    .append('svg')
        .attr('height', svg_dimensions.height)
        .attr('width', svg_dimensions.width);
        
    container.append('g')
            .call(xAxis_line)
            .attr('transform', 'translate('+ svg_dimensions.padding +','+ (svg_dimensions.height - svg_dimensions.padding) +')');
    
    container.append('g')
        .call(yAxis_line)
            .attr('transform', 'translate('+svg_dimensions.padding+', 0)');

});
        
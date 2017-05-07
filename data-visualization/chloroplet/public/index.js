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

let tooltip_block = d3.select("body").append("div").attr("class", "tooltip").style("opacity", 0);

const json_data= {
    education: 'https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/for_user_education.json',
    county: 'https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/counties.json'
}

d3.queue()
    .defer(d3.json, json_data.county)
    .defer(d3.json, json_data.education)
    .defer('d3')
    .await(ready);
    
function ready (error, county, education) {
    if(error){console.log(error)}
        
    /* Data formatting */
    let api_data = {};

    data.forEach({
        
    });
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
    
    container.append('g')
                .call(xAxis);
    
    container.append('g')
                .call(yAxis);

/*
.on('mouseover', (d) => {
            tooltip_block.transition().duration(150).style('opacity', 0.9);
            let date = new Date(d.year, d.month-1);
            tooltip_block.html("<span class='date'>" + d3.timeFormat("%Y - %B")(date) + "</span>" + "<br />"
                                + "<span class='temperature'>" + d3.format(".1f")(data.baseTemperature + d.variance) 
                                + "&#8451;" + "</span>" + "<br />"
                                + "<span class='variance'>" + d3.format("+.1f")(d.variance) + "&#8451;" + "</span>")
                            .style("left", (d3.event.pageX) + "px")		
                            .style("top", (d3.event.pageY - 28) + "px")})
        .on('mouseout', (d) => {
            tooltip_block.transition().duration(150).style('opacity', 0);
        });
*/

}
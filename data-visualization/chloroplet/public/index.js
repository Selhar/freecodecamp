/* 
    Configuration variables
*/
const container_div = document.querySelector(".container");
const container_styles = window.getComputedStyle(container_div);

const container_dimensions = {
    width: container_styles.getPropertyValue("width").slice(0,-2),
    height: container_styles.getPropertyValue("height").slice(0,-2)
}
const padding_divisor = 10;
const svg = {
    width: container_dimensions.width,
    height: container_dimensions.height,
    padding: {
        height: container_dimensions.height / padding_divisor,
        width: container_dimensions.width / padding_divisor,
        //total padding divided by 2 = padding from each individual side
        width_side: (container_dimensions.width / padding_divisor) / 2,
        height_side: (container_dimensions.height / padding_divisor) / 2
    }
}

let tooltip_block = d3.select("body")
                        .append("div")
                        .attr("class", "tooltip")
                        .style("opacity", 0);

const json_data = {
    education: 'https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/for_user_education.json',
    county: 'https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/counties.json'
}

d3.queue()
    .defer(d3.json, json_data.county)
    .defer(d3.json, json_data.education)
    .await(ready);
    
function ready (error, county, education) {
    if(error){ throw error}
    
    /* Data formatting */
    let container = d3.select('.graph').append('svg')
                    .attr('width', svg.width)
                    .attr('height', svg.height);
    
    let color = d3.scaleThreshold()
                    .domain(d3.range(2.6, 75.1, (75.1-2.6)/8))
                    .range(d3.schemeGreens[6]);
    
    /* Rendering data */
    container.append('g')
                .selectAll('path')
                .data(topojson.feature(county, county.objects.counties).features)
                .enter().append('path')
                .attr('d', d3.geoPath())
                .attr('fill', (d) => {
                    //d.id refers to physical area from the county data
                    //if an id matches a fips, it means that data is references
                    //a specific area. If nothing is found, no data is present for this area.
                    let county_education = education.filter((area) => {
                        return area.fips == d.id;
                    });

                    if(county_education[0]){ 
                        return color(county_education[0].bachelorsOrHigher);
                    }
                    //if no data is found, paint it black
                    return "#000";
                })

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
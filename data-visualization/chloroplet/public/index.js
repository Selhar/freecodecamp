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
    function county_education (county_id){
        //d.id refers to physical area from the county data
        //if an id matches a fips, it means that data is references
        //a specific area. If nothing is found, no data is present for this area.

        return education.filter((area) => {
            return area.fips == county_id;
        });
    }

    let container = d3.select('.graph').append('svg')
                    .attr('width', svg.width)
                    .attr('height', svg.height);
    let data_threshold = d3.range(2.6, 75.1, (75.1-2.6)/8);
    
    let color = d3.scaleThreshold()
                    .domain(data_threshold)
                    .range(d3.schemeGreens[7]);

    /* Rendering data */
    container.append('g')
                .selectAll('path')
                .data(topojson.feature(county, county.objects.counties).features)
                .enter().append('path')
                .attr('d', d3.geoPath())
                .attr('fill', (d) => {
                    let county_data = county_education(d.id);

                    if(county_data[0]){ 
                        return color(county_data[0].bachelorsOrHigher);
                    }
                    //if no data is found, paint it black
                    return "#000";
                })
                .on('mouseover', (d) => {
                    tooltip_block.transition().duration(150).style('opacity', 0.9);
                    tooltip_block.html(
                        () => {
                            let county_data = county_education(d.id);
                            if(county_data[0]){ 
                                return  county_data[0]['area_name'] + 
                                        ', ' + county_data[0]['state'] + 
                                        ': ' + county_data[0].bachelorsOrHigher + '%'
                            }
                        })
                    .style("left", (d3.event.pageX) + "px")		
                    .style("top", (d3.event.pageY - 28) + "px")
                })
                .on('mouseout', (d) => {
                    tooltip_block
                        .transition()
                        .duration(150)
                        .style('opacity', 0);
                });
    /* Legend */
    let legendNode = {
        width: 300,
        node_width: 300 / 9,
        padding: 5
    }
    let xScale = d3.scaleLinear()
                    .domain([1, 900
                            ])
                    .range(0, legendNode.width);
    let xAxis = d3.axisBottom(xScale).tickSize(15);


    let legend = d3.select('.legend').append('svg')
                    .attr('width', legendNode.width + legendNode.padding)
                    .attr('height', legendNode.node_width + legendNode.padding)    
    
    legend.append('g')
            .attr('transform', 'translate('+100+','+0+')')
            .attr('height', 16)
            .attr('width', legendNode.width)
            .call(xAxis);

    // legend.append('g')
    //         .selectAll('.legendNode')
    //         .data(data_threshold)
    //         .enter().append('rect')
    //             .attr('class', 'legendNode')
    //             .attr('x', (d,i) => i * (legendNode.node_width + 1))
    //             .attr('y', 0)
    //             .attr('width', legendNode.node_width)
    //             .attr('height', legendNode.node_width)
    //             .attr('fill', (d,i) => color(d));
}
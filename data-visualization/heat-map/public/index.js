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

let tooltip_block = d3.select("body").append("div").attr("class", "tooltip").style("opacity", 0);

let fallback_data = {};

d3.json('./data_fallback.json', (error, data) => {
    if(error){
        console.log("Fallback error: "+error);
    }
    fallback_data = data;
});

d3.json('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/global-temperature.json', (error, data) => {
    if(error){
        console.log(error);
        alert('An error ocurred with the remote API, using local fallback data from march 2017');
        data = fallback_data;
    }
        
    /* Data formatting */
    let api_data = {
        year: [],
        variance: [],
        month: []
    };
    
    data.monthlyVariance.forEach((item) => {
        api_data.year.push(item.year);
        api_data.variance.push(item.variance);

    });
    
    let node_width = (svg.width - svg.padding.width) / (api_data.year.length / 12);

    let xScale = d3.scaleLinear()
                    .domain([d3.min(api_data.year), d3.max(api_data.year)])
                    .range([0, svg.width - svg.padding.width]);

    let yScale = d3.scaleTime()
                    .domain([new Date(2012, 0, 1), new Date(2012, 11, 31)])
                    .range([0, svg.height - svg.padding.height]);

    let xAxis = d3.axisBottom(xScale);
    
    let yAxis = d3.axisLeft(yScale).tickFormat(d3.timeFormat('%b'));

    let container = d3.select('.graph').append('svg')
                        .attr('width', svg.width)
                        .attr('height', svg.height);
    

    container.append('g')
                .attr('transform', 'translate('+svg.padding.width_side+','+(svg.height - svg.padding.height_side)+')')
                .call(xAxis);

    container.append('g')
                .attr('transform', 'translate('+svg.padding.width_side+','+svg.padding.height_side+')')
                .call(yAxis);
    
    // container.append('g')
    //         .attr('transform', 'translate('+svg.padding.width/2+','+(0)+')')
    //     .selectAll('rect').data(data.monthlyVariance).enter().append('rect')
    //         .attr('y', (item, index) => item.month * 35)
    //         .attr('x', (item, index) => (item.year - api_data.year[0] + 1) * node_width)
    //         .attr('width', node_width)
    //         .attr('height', 35)
    //         .style('fill', '#553');
});
/* 
    Configuration variables
*/
const container_div = document.querySelector(".container");
const container_styles = window.getComputedStyle(container_div);

const container_dimensions = {
    width: container_styles.getPropertyValue("width").slice(0,-2),
    height: container_styles.getPropertyValue("height").slice(0,-2)
}

const svg = {
    width: container_dimensions.width,
    height: container_dimensions.height,
    padding_height: container_dimensions.width / 10,
    padding_width: container_dimensions.width / 10
}

console.log(svg);

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
    
    let xScale = d3.scaleOrdinal()
                    .domain([d3.min(api_data.year), d3.max(api_data.year)])
                    .range(0, svg.width - svg.padding_width);
                    
    let yScale = d3.scaleTime()
                    .domain([new Date(2012, 0, 1), new Date(2012, 11, 31)])
                    .range([0, svg.height - svg.padding_height]);

    let xAxis = d3.axisBottom(xScale).tickValues(api_data.year.filter((item) => {return item % 10 === 0;}))
                                     .tickFormat(d3.timeFormat('%Y'));
    
    let yAxis = d3.axisLeft(yScale).ticks(d3.timeMonth).tickFormat(d3.timeFormat('%b'));

    let container = d3.select('.graph').append('svg')
                        .attr('width', svg.width)
                        .attr('height', svg.height);
    
    // container.append('g')
    //             .attr("transform", 'translate('0)')
    //             .call(xAxis);
    
    container.append('g')
                .attr('transform', 'translate('+svg.padding_width/2+','+svg.padding_height/2+')')
                .call(yAxis);
});
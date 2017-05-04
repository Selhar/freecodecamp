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

let fallback_data = {};

d3.json('./data_fallback.json', (error, data) => {
    if(error){
        console.log(error);
    }
    fallback_data = data;
});

d3.json('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json', (error, data) => {
    if(error){
        console.log(error+"\n\nAn error ocurred with the remote API, using local fallback data from march 2017");
        data = fallback_data;
    }
        
    /* Data formatting */
    let tooltip = {
        quarter: []
    }

    let years = [];
    let gdp = [];
    let minGdp = '';
    let maxGdp = '';
    let bar_width = 0;

    data.data.map((value) => {
            const year = value[0].substring(0, 4);
            let output = year;
            const quarter = value[0].substring(5,7);

            switch(quarter){
                case '01':
                    output += ' Q1';
                    break;
                case '04':
                    output += ' Q2';
                    break;
                case '07':
                    output += ' Q3';
                    break;
                case '10':
                    output += ' Q4';
                    break;
            }
            tooltip.quarter.push(output);
            years.push(year);
            gdp.push(value[1]);
    });
    
    minGdp = d3.min(gdp);
    maxGdp = d3.max(gdp);
    bar_width = svg_dimensions.width / gdp.length;

    let xAxis_line = d3.scaleLinear()
                    .domain([d3.min(years), d3.max(years)])
                    .range([0, (svg_dimensions.width - svg_dimensions.padding_right)]);
    
    let yAxis_line = d3.scaleLinear()
                    .domain([minGdp, maxGdp])
                    .range([svg_dimensions.height - svg_dimensions.padding, (minGdp/maxGdp) * svg_dimensions.height]);

    let xAxis_data = d3.axisBottom().scale(xAxis_line).tickFormat(d3.format('d'));
    let yAxis_data = d3.axisLeft(yAxis_line);
    
    let linearScale = d3.scaleLinear()
                        .domain([minGdp, maxGdp])
                        .range([(minGdp/maxGdp) * svg_dimensions.height, svg_dimensions.height]);

    let gdpScale = gdp.map((value) => {return linearScale(value)});

    /* Rendering on page */
    let container = d3.select('.graph')
    .append('svg')
        .attr('height', svg_dimensions.height)
        .attr('width', svg_dimensions.width);
    
    container.append('text')
                .attr('transform', 'rotate(-90)')
                .attr('x', (-svg_dimensions.height / 2))
                .attr('y', svg_dimensions.padding + 20)
                .text('Gross domestic product');
    
    container.append('g')
            .call(xAxis_data)
            .attr('transform', 'translate('+ svg_dimensions.padding +','+ (svg_dimensions.height - svg_dimensions.padding) +')');
    
    container.append('g')
        .call(yAxis_data)
            .attr('transform', 'translate('+svg_dimensions.padding+', 0)');

    let rectangles = d3.select('svg').selectAll('rect')
                        .data(gdpScale)
                        .enter()
                        .append('rect')
                        .attr('date-date', (gdp_array_item, index) => {return data.data[index][0]})
                        .attr('date-gdp', (gdp_array_item, index) => {return data.data[index][1]})
                        .attr('class', 'bar')
                        .attr('x', (gdp_array_item, index) => {return index * bar_width})
                        .attr('y', (gdp_array_item, index) => {return (svg_dimensions.height - svg_dimensions.padding) - gdp_array_item})
                        .attr('width', bar_width)
                        .attr('height', (gdp_array_item) => {return gdp_array_item})
                        .attr('transform', 'translate('+svg_dimensions.padding+', 0)');

    

});
        
const margin = {
    top: 50, 
    right: 25, 
    bottom: 30, 
    left: 40
};

const dimensions = {
    width: 720 - (margin.left + margin.right),
    height: 500 - (margin.top + margin.bottom)
};

let xAxis = d3.scaleBand().range([0, dimensions.width]).padding(0.15);
let yAxis = d3.scaleLinear().range([dimensions.height, 0]);

let svg = d3.select('body').append('svg')
        .attr('width', dimensions.width + margin.left + margin.right)
        .attr('height', dimensions.height + margin.top + margin.bottom)
    .append('g')
        .attr('transform','translate('+margin.left+','+margin.top+')');
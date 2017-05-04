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

let xAxis = d3.scaleLinear().range([0, dimensions.width]).padding(0.15);
let yAxis = d3.scaleLinear().range([dimensions.height, 0]);

let container = d3.select('body').append('svg')
        .attr('width', dimensions.width + margin.left + margin.right)
        .attr('height', dimensions.height + margin.top + margin.bottom)
    .append('g')
        .attr('transform','translate('+margin.left+','+margin.top+')');

/* 
    Configuration variables
*/


d3.json('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json', (error, data) => {
    if(error){
        console.log(error+"\n\nAn error ocurred with the remote API, using local fallback data from march 2017");
        data = fallback_data;
    }

    xAxis.domain([data.from_date, data.to_date]);
    yAxis.domain([]);
});
        
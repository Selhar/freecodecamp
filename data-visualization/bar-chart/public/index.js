let width = 700;
let height = 500;

let x = d3.scaleBand().range([0, width]).padding(0.1);
let y = d3.scaleBand().range([height, 0]);

let svg = d3.select('graph')
                .append('svg')
                    .attr('width', width)
                    .attr('height', height)
                .append('g');
d3.csv('data.csv', (error, data) => {
    if(error)
        throw error;
    
    data.forEach((d) => {
        d.sales += d.sales;
    });
    
    x.domain(data.map((d) => {return d.salesperson}))

});


                    
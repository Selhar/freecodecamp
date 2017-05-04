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

    x.domain(data.map((d) => {return d.salesperson; }));
    y.domain([0, d3.max(data, (d) => {return d.sales; })]);

    svg.selectAll('.bar')
            .data(data)
        .enter().append('rect')
            .attr('class','bar')
            .attr('x',(d) => {return x(d.salesperson);})
            .attr('width', x.bandwidth)
            .attr('y',(d) => {return y(d.sales);})
            .attr('height', (d) => { return height - y(d.sales); });
    
    svg.append('g')
        .attr('transform', 'translate(0,'+height+')')
        .call(d3.axisBottom(x));
    
    svg.append('g')
        .call(d3.axisLeft(y));

});


                    
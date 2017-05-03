let data = [5,11,18];

let canvas = d3.select('body').append('svg')
                              .attr('height','100%')
                              .attr('width','100%');

svg.selectAll('rect').data(data).enter().append('rect');
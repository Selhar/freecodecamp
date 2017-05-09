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
//i need an early reference to container so i can redraw the screen
let container;
let data_storage = {
    kickstarter : '',
    movie: '',
    video: ''
}

let fader = (color) => d3.interpolateRgb(color, "#fff")(0.2);
let color = d3.scaleOrdinal(d3.schemeCategory20.map(fader));

let tooltip_block = d3.select("body")
                    .append("div")
                    .attr("class", "tooltip")
                    .style("opacity", 0);

/* data fetching and formatting */
d3.queue()
    .defer(d3.json, 'https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/kickstarter-funding-data.json')
    .defer(d3.json, 'https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/movie-data.json')
    .defer(d3.json, 'https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/video-game-sales-data.json')
    .await(render_data);

function render_data (error, kickstarter, movie, video, user_input) {
    if(error){
        console.log(error);
        return alert('An error ocurred with the remote API, using local fallback data from march 2017');
    }
    if(data_storage.kickstarter === ''){
        data_storage.kickstarter = kickstarter;
        data_storage.movie = movie;
        data_storage.video = video;
        render(data_storage.kickstarter)
    }else{
        container.remove();
        render(data_storage[user_input]);
    }
    
}
/* Data rendering */
function render (data) {    
    container = d3.select('.graph').append('svg')
                    .attr('width', svg.width)
                    .attr('height', svg.height );
    
    let root = d3.hierarchy(data)
                .sum((d) => d.value)
                .sort(function(a, b) { return b.height - a.height 
                                            || b.value - a.value; });

    let treemap = d3.treemap()
                .size([svg.width, svg.height])
                .paddingInner(1);

    treemap(root);

    let cell = container.selectAll('g')
                .data(root.leaves())
                .enter().append('g')
                .attr("transform", (d) => { 
                    return "translate(" + d.x0 + "," + d.y0 + ")"; 
                });

     let tile = cell.append("rect")
                .attr("width", (d) => d.x1 - d.x0)
                .attr("height", (d) => d.y1 - d.y0)
                .attr('fill', (d) => color(d.data.category))
                .on("mousemove", (d) => {  
                    tooltip_block.style("opacity", 0.9); 
                    tooltip_block.html(
                        'Name: ' + d.data.name + 
                        '</br>Category: ' + d.data.category + 
                        '</br>Value: ' + d.data.value
                    )
                    .style("left", (d3.event.pageX) + "px")		
                    .style("top", (d3.event.pageY - 28) + "px")
                })    
                .on("mouseout", function(d) { 
                    tooltip_block.transition()
                        .duration(150).style('opacity', 0);
                });
        
const body_selector = document.querySelector("body");
const body_styles = window.getComputedStyle(body_selector);
const font_size = body_styles.getPropertyValue("font-size").slice(0,-2);
const font_padding = 5;

cell.append("text")
    .selectAll("tspan")
    .data((d) => d.data.name.split(/(?=[A-Z][^A-Z])/g))
    .enter().append("tspan")
    .attr("x", font_padding)
    .attr("y", (d, i) => font_size * i + 10)
    .text(function(d) { return d; });
    
}
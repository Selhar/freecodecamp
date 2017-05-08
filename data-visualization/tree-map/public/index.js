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

d3.queue()
    .defer(d3.json, 'https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/kickstarter-funding-data.json')
    .defer(d3.json, 'https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/movie-data.json')
    .defer(d3.json, 'https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/video-game-sales-data.json')
    .await(ready);
    
function ready (error, kickstarter, movie, video) {
    if(error){
        console.log(error);
        alert('An error ocurred with the remote API, using local fallback data from march 2017');
    }        
    /* Data formatting */
    let current_datasource = kickstarter;

    /* Data scaling */

    let container = d3.select('.graph').append('svg')
                        .attr('width', svg.width)
                        .attr('height', svg.height );
    




var treemap = d3.treemap()
    .size([svg.width, svg.height])
    .paddingInner(1);

   var root = d3.hierarchy(current_datasource)
      .eachBefore(function(d) {
        d.data.id = (d.parent ? d.parent.data.id + "." : "") + d.data.name; 
      })
      .sum((d) => d.value)
      .sort(function(a, b) { return b.height - a.height || b.value - a.value; });

  treemap(root);

  var cell = container.selectAll("g")
    .data(root.leaves())
    .enter().append("g")
      .attr("class", "group")
      .attr("transform", function(d) { return "translate(" + d.x0 + "," + d.y0 + ")"; });

  var tile = cell.append("rect")
      .attr("id", function(d) { return d.data.id; })
      .attr("class", "tile")
      .attr("width", function(d) { return d.x1 - d.x0; })
      .attr("height", function(d) { return d.y1 - d.y0; })
      .attr("data-name", function(d){
        return d.data.name;
      })
      .attr("data-category", function(d){
        return d.data.category;
      })
      .attr("data-value", function(d){
        return d.data.value;
      })
      .attr("fill", function(d) { 
        return color(d.data.category); 
      })
      .on("mousemove", function(d) {  
        console.log("mouseover");    
        tooltip.style("opacity", .9); 
        tooltip.html(
          'Name: ' + d.data.name + 
          '<br>Category: ' + d.data.category + 
          '<br>Value: ' + d.data.value
        )
        .attr("data-value", d.data.value)
        .style("left", (d3.event.pageX + 10) + "px") 
        .style("top", (d3.event.pageY - 28) + "px"); 
      })    
      .on("mouseout", function(d) { 
        tooltip.style("opacity", 0); 
      })




    /* Rendering */
}
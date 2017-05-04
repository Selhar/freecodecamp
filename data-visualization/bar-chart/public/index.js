/* 
    Configuration variables
*/

//Fetch current CSS dimensions of container div
const container_div = document.querySelector(".container");
const container_styles = window.getComputedStyle(container_div);

//Fetch and format values (from '960px' to '960', for example)
const container_dimensions = {
    width: container_styles.getPropertyValue("width").slice(0,-2),
    height: container_styles.getPropertyValue("height").slice(0,-2)
}

const svg_dimensions = {
    width: container_dimensions.width-100,
    height: container_dimensions.height-100
}

let fallback_data = {};

d3.json('./data_fallback.json', (error, data) => {
    if(error){
        console.log(error);
    }
    fallback_data = data;
});
/* 
    Configuration variables
*/


d3.json('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json', (error, data) => {
    if(error){
        console.log(error+"\n\nAn error ocurred with the remote API, using local fallback data from march 2017");
        data = fallback_data;
    }
    
    let container = d3.select('.graph')
    .append('svg')
        .attr('height', svg_dimensions.height)
        .attr('width', svg_dimensions.width);
    
    container.append('text')
                .attr('transform', 'rotate(-90)')
                .attr('x', -250)
                .attr('y', 80)
                .text('Gross domestic product');
    
    let tooltip = {
        years: data.data.map((item) => {
            let output = item[0].substring(0, 4);
            let month = item[0].substring(5,7);
            switch(month){
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
            return output;
        })
    }
    console.log(tooltip.years);
});
        
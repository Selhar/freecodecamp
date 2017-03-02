ready(() => {
    const FRONT_END = ["react.js", "gsap", "bulma", "sass", "javascript"];
    const DATA_VISUALIZATION = ["D3.js"];
    const BACK_END = ["node.js", "express", "mongoDB", "mongoose", "postgres"];
    const SECURITY = ["safe code", "helmet.js", "Chai", "pentesting"];
    const data = {
        "frontEnd-techs": FRONT_END,
        "dataVisualization-techs": DATA_VISUALIZATION,
        "backEnd-techs": BACK_END,
        "security-techs": SECURITY
    }

    inject_menu_data(data);

    let skill_columns = document.getElementsByClassName("skill-title");

    for (let column of skill_columns) {
        let title = column.children[0];
        title.addEventListener("mouseover", () => {

        });
    }
});

function get_css_property(element, property) {
    let sheet = window.getComputedStyle(element);
    return sheet.getPropertyValue(property);
}

function inject_menu_data(data) {
    for (let id of Object.keys(data)) {
        let item = document.getElementById(id);

        item.innerHTML = data[id].map((value) => {
            return '<li class="technology-item">' + value + '</li>';
        }).toString().replace(/,/g, "");
    }
}

function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
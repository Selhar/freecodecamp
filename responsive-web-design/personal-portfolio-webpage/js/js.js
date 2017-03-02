ready(() => {
    const FRONT_END = ["html5", "css3", "react", "redux", "gsap", "bulma", "sass", "javascript"];
    const DATA_VISUALIZATION = ["D3.js"];
    const BACK_END = ["node.js", "express", "mongoDB", "mongoose", "postgres"];
    const SECURITY = ["helmet.js", "Chai"];
    const data = {
        "frontEnd-techs": FRONT_END,
        "dataVisualization-techs": DATA_VISUALIZATION,
        "backEnd-techs": BACK_END,
        "security-techs": SECURITY
    }

    let title_lines = document.getElementsByClassName("title-line");

    for (let line of title_lines) {
        TweenLite.to(line, 4, { width: "100%" });
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
            return '<span class="technologies">' + value + '</span>';
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
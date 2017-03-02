ready(() => {
    const FRONT_END = ["react.js", "gsap", "bulma", "sass", "javascript"];
    const DATA_VISUALIZATION = ["D3.js"];
    const BACK_END = ["node.js", "express", "mongoDB", "mongoose", "postgres"];
    const SECURITY = ["safe code", "helmet.js", "Chai", "pentesting"];
    const data = {
        "frontEnd": FRONT_END,
        "dataVisualization": DATA_VISUALIZATION,
        "backEnd": BACK_END,
        "security": SECURITY
    }

    inject_menu_data(data);
});

function inject_menu_data(data) {
    for (let id of Object.keys(data)) {
        let item = document.getElementById(id);

        item.innerHTML = data[id].map((value) => {
            return "<li>" + value + "</li>";
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
ready(() => {

    animate_arrow();
    animate_title();

});

function animate_title() {
    let title_lines = document.getElementsByClassName("title-lines");
    for (let line of title_lines) {
        TweenLite.to(line, 5, { width: "100%" });
    }
}

function animate_arrow() {
    let timeline = new TimelineMax({ repeat: -1 });
    let arrow = document.getElementById("arrow-button");

    timeline.add(TweenLite.to(arrow, 0.5, { bottom: "1rem" }));
    timeline.add(TweenLite.to(arrow, 0.5, { bottom: "2rem" }));
}

function get_css_property(element, property) {
    let sheet = window.getComputedStyle(element);
    return sheet.getPropertyValue(property);
}

function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
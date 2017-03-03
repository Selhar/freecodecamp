ready(() => {

    let title_lines = document.getElementsByClassName("title-line");

    for (let line of title_lines) {
        TweenLite.to(line, 4, { width: "100%" });
    }
});

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
ready(() => {

    animate_title();
    animate_arrow();
    animate_gallery_layer();

});

function animate_gallery_layer() {
    let gallery = document.getElementsByClassName("image-node")[0].children;

    for (let figure of gallery) {

        let hover_layer = figure.children[0];
        let tags = hover_layer.children[0];
        let from = {backgroundColor: "rgba(0,0,0,0.5)"};
        let to = { backgroundColor: "rgba(0,0,0,0.0)"};
        let clickCount = 0;

        figure.addEventListener("click", () => {
            TweenLite.to(hover_layer, 0.3, from);
        });

        figure.addEventListener("mouseover", () => {
            TweenLite.to(hover_layer, 0.3, from);
            TweenLite.to(tags, 0.3, { opacity: 1 });
        });
        figure.addEventListener("mouseout", () => {
            TweenLite.to(hover_layer, 0.3, to);
            TweenLite.to(tags, 0.3, { opacity: 0 });
        });
    }

}

function animate_title() {
    let title_lines = document.getElementsByClassName("title-lines");
    for (let line of title_lines) {
        TweenLite.to(line, 5, { width: "100%" });
    }
}

function animate_arrow() {
    let timeline = new TimelineMax({ repeat: -1 });
    let arrow = document.getElementById("arrow-button");

    timeline.add(TweenLite.to(arrow, 0.5, { bottom: "1rem", ease: Power0.easeNone }));
    timeline.add(TweenLite.to(arrow, 0.5, { bottom: "2rem", ease: Power0.easeNone }));
    scroll_arrow();
}

function scroll_arrow() {
    let arrow = document.getElementById("arrow-button");
    arrow.addEventListener("click", () => {
        TweenLite.to(window, 1.5, { scrollTo: "#gallery" });
    })

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
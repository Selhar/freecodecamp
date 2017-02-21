ready(() => {
    mouseover_gallery();
});

function mouseover_gallery() {
    let gallery = document.getElementById("gallery");
    let gallery_items = gallery.children[0].children[0].children;

    gallery.addEventListener("mouseover", (event) => {
        let selected_thumbnail = event.target;

        if (selected_thumbnail instanceof HTMLImageElement) {
            for (let i = 0; i < gallery_items.length; i++) {
                if (gallery_items[i] === selected_thumbnail) {
                    selected_thumbnail.className += " img-selected";
                    let new_background = retrieve_style(selected_thumbnail, "background-image");
                    change_background(new_background);
                } else {
                    gallery_items[i].className = "img-selection";
                }
            }
        }
    });
}

function change_background(new_background) {
    current_background = document.getElementById("parallax");
    current_background.style.backgroundImage = new_background;
}

function retrieve_style(element, property) {
    style = window.getComputedStyle(element);
    return style.getPropertyValue(property);
}

//Function from http://youmightnotneedjquery.com/, brety gud
function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
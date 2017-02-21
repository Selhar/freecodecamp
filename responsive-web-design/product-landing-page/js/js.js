let gallery = document.getElementById("gallery");
let gallery_items = gallery.children[0].children[0].children;

gallery.addEventListener("mouseover", (event) => {

    if (event.target instanceof HTMLImageElement) {
        for (let i = 0; i < gallery_items.length; i++) {
            if (gallery_items[i] === event.target) {
                event.target.className += " img-selected";
            } else {
                gallery_items[i].className = "img-selection";
            }
        }
    }
});
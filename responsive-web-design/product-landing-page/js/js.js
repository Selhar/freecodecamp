ready(() => {
    mouseover_gallery();
});
let images_enum = {
    /* This enum links a thumbnail to the full-sized image and vice-versa.
        This is only hard-coded because i'm not uploading locally
        this project will be uploaded to codepen, thus i have to upload these images somewhere
        and since i can't predict how the links will be, i must hardcode the relation between thumb e fullscreen image.
        In a server, this should be done in a more dynamic way, using local system's filepath instead of hardcoded enum*/
    'url("http://res.cloudinary.com/selhar/image/upload/v1487721126/cupcake1-thumb_cofbn6.jpg")': 'url("http://res.cloudinary.com/selhar/image/upload/v1487721137/cupcake1_bv8sxl.jpg")',
    'url("http://res.cloudinary.com/selhar/image/upload/v1487721125/cupcake2-thumb_x0xee4.jpg")': 'url("http://res.cloudinary.com/selhar/image/upload/v1487721156/cupcake2_nlanvv.jpg")',
    'url("http://res.cloudinary.com/selhar/image/upload/v1487721126/cupcake3-thumb_qdnfs3.jpg")': 'url("http://res.cloudinary.com/selhar/image/upload/v1487721168/cupcake3_uhwgyz.jpg")',
    'url("http://res.cloudinary.com/selhar/image/upload/v1487721127/cupcake4-thumb_bjf5xq.jpg")': 'url("http://res.cloudinary.com/selhar/image/upload/v1487721153/cupcake4_gwkhrq.jpg")',
    'url("http://res.cloudinary.com/selhar/image/upload/v1487721130/cupcake5-thumb_adtsiq.jpg")': 'url("http://res.cloudinary.com/selhar/image/upload/v1487721137/cupcake5_i78odb.jpg")',
    'url("http://res.cloudinary.com/selhar/image/upload/v1487721142/cupcake6-thumb_t2uow1.jpg")': 'url("http://res.cloudinary.com/selhar/image/upload/v1487721168/cupcake6_rebcw5.jpg")',
}

function mouseover_gallery() {


    let gallery = document.getElementById("gallery");
    let gallery_items = gallery.children[1].children[0].children;

    gallery.addEventListener("mouseover", (event) => {
        let selected_thumbnail = event.target;

        if (selected_thumbnail instanceof HTMLImageElement) {
            for (let i = 0; i < gallery_items.length; i++) {
                if (gallery_items[i] === selected_thumbnail) {
                    selected_thumbnail.className += " img-selected";
                    let new_background = retrieve_style(selected_thumbnail, "background-image");
                    console.log(new_background);
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
    style = window.getComputedStyle(element).getPropertyValue(property);
    return images_enum[style];
}

//Function from http://youmightnotneedjquery.com/, brety gud
function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
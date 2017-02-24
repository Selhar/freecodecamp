ready(() => {
    browse_gallery();
});
let images_enum = {
    /*  This enum solution is only necessary because i'll upload this project to codepen
        each image has to be uploaded to a third party server and since i can't predict 
        how each URL is going to be like, i had to hardcode it in after uploading each image.
        For the gallery to work i need a relation between the button thumbnail and the fullscreen image
        so i used enums. In a server the filepath should be used, instead of hardcoded path-to-file.
        .*/
    'url("http://res.cloudinary.com/selhar/image/upload/v1487737607/cupcake1-thumb_hfwyi0.jpg")': 'url("https://res.cloudinary.com/selhar/image/upload/v1487737627/cupcake1_k0bvig.jpg")',
    'url("http://res.cloudinary.com/selhar/image/upload/v1487737608/cupcake2-thumb_vlza22.jpg")': 'url("https://res.cloudinary.com/selhar/image/upload/v1487737639/cupcake2_eu8jv5.jpg")',
    'url("http://res.cloudinary.com/selhar/image/upload/v1487910173/cupcake3-thumb_ctqzwy.jpg")': 'url("http://res.cloudinary.com/selhar/image/upload/v1487910173/cupcake3_fd11r6.jpg")',
    'url("http://res.cloudinary.com/selhar/image/upload/v1487737621/cupcake4-thumb_gmnqr9.jpg")': 'url("https://res.cloudinary.com/selhar/image/upload/v1487737648/cupcake4_bpz3zr.jpg")',
    'url("http://res.cloudinary.com/selhar/image/upload/v1487737628/cupcake5-thumb_gqkyz8.jpg")': 'url("https://res.cloudinary.com/selhar/image/upload/v1487737641/cupcake5_tt6f13.jpg")',
    'url("http://res.cloudinary.com/selhar/image/upload/v1487737640/cupcake6-thumb_k9luuk.jpg")': 'url("https://res.cloudinary.com/selhar/image/upload/v1487737644/cupcake6_wynbnx.jpg")',
}

function browse_gallery() {

    let gallery = document.getElementById("gallery-menu");
    let gallery_items = gallery.children;

    gallery.addEventListener("mouseover", (event) => {
        let selected_thumbnail = event.target;
        change_image(selected_thumbnail, gallery, gallery_items);
    });

    //Click event for mobile users
    gallery.addEventListener("click", (event) => {
        let selected_thumbnail = event.target;
        change_image(selected_thumbnail, gallery, gallery_items);
    });
}

function change_image(selected_thumbnail, gallery, gallery_items) {
    if (selected_thumbnail instanceof HTMLImageElement) {
        for (let i = 0; i < gallery_items.length; i++) {
            if (gallery_items[i] === selected_thumbnail) {
                selected_thumbnail.className += " img-selected animated headShake";
                let new_background = retrieve_style(selected_thumbnail, "background-image");
                change_background(new_background);
            } else {
                gallery_items[i].className = "img-selection";
            }
        }
    }
}

function change_background(new_background) {
    current_background = document.getElementById("splash");
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
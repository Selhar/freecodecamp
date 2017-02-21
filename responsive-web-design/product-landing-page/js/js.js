ready(() => {
    mouseover_gallery();
});

function mouseover_gallery() {
    let images_enum = {
        /* This enum links a thumbnail to the full-sized image and vice-versa.
            This is only hard-coded because i'm not uploading locally
            this project will be uploaded to codepen, thus i have to upload these images somewhere
            and since i can't predict how the links will be, i must hardcode the relation between thumb e fullscreen image.
            In a server, this should be done in a more dynamic way, using local system's filepath instead of hardcoded enum*/
        "url('http://res.cloudinary.com/selhar/image/upload/v1487718770/cupcake6-thumb_r9very.jpg')": "url('http://res.cloudinary.com/selhar/image/upload/v1487718821/cupcake6_eetqx2.jpg')",
        "url('http://res.cloudinary.com/selhar/image/upload/v1487718775/cupcake5-thumb_abke1a.jpg')": "url('http://res.cloudinary.com/selhar/image/upload/v1487718851/cupcake5_qk8voq.jpg')",
        "url('http://res.cloudinary.com/selhar/image/upload/v1487718767/cupcake4-thumb_y0x509.jpg')": "url('http://res.cloudinary.com/selhar/image/upload/v1487718838/cupcake4_crn1hn.jpg')",
        "url('http://res.cloudinary.com/selhar/image/upload/v1487718767/cupcake3-thumb_x6wh3p.jpg')": "url('http://res.cloudinary.com/selhar/image/upload/v1487718823/cupcake3_uzzxo9.jpg')",
        "url('http://res.cloudinary.com/selhar/image/upload/v1487718776/cupcake2-thumb_xnbtho.jpg')": "url('http://res.cloudinary.com/selhar/image/upload/v1487718856/cupcake2_ndnzzd.jpg')",
        "url('http://res.cloudinary.com/selhar/image/upload/v1487718762/cupcake1-thumb_lae7pl.jpg')": "url('http://res.cloudinary.com/selhar/image/upload/v1487718846/cupcake1_nfy97a.jpg')"
    }

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
    console.log(style.getPropertyValue(property));
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
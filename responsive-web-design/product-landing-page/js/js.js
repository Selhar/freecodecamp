let gallery = document.getElementById("gallery");

gallery.addEventListener("mouseover", (event) => {

    if (event.target instanceof HTMLImageElement) {
        clearClasses(event.target);
        event.target.className += " img-selected";
    }
});

function clearClasses(target) {

    console.log(target);
}
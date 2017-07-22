ready(() => {
});

//Function from http://youmightnotneedjquery.com/
function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
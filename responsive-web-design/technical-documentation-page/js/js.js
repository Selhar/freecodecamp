ready(main);
const chapters = {
    "introduction": `        <section class="content column is-6 is-offset-2" id="introduction">
            <h1>Introduction</h1>
            <p>Welcome to “The Rust Programming Language,” an introductory book about Rust. Rust is a programming language that’s focused on safety, speed, and concurrency. Its design lets you create programs that have the performance and control of a low-level
                language, but with the powerful abstractions of a high-level language. These properties make Rust suitable for programmers who have experience in languages like C and are looking for a safer alternative, as well as those from languages
                like Python who are looking for ways to write code that performs better without sacrificing expressiveness.</p>

            <p>Rust performs the majority of its safety checks and memory management decisions at compile time, so that your program's runtime performance isn't impacted. This makes it useful in a number of use cases that other languages aren’t good at:
                programs with predictable space and time requirements, embedding in other languages, and writing low-level code, like device drivers and operating systems. It's also great for web applications: it powers the Rust package registry site,
                crates.io! We're excited to see what you create with Rust.</p>
        </section>`
}


function main() {

}

function display_text(id) {
    document.getElementById("main").innerHTML = chapters[id];
}



function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
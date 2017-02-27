ready(() => {
    display_text("introduction");
    menu_items = document.getElementById("menu");

    menu_items.addEventListener("click", (event) => {
        change_selected_menu(event);
    });

});

function change_selected_menu(event) {
    let selected_item = event.target;
    if (selected_item.classList[0] === undefined) {
        let previous_item = document.getElementsByClassName("is-active")[0];
        previous_item.classList.remove("is-active");
        selected_item.className = "is-active";
        display_text(selected_item.id);
    }
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

//The purpose of this page is just a proof of concept, so the data has little meaning
//and will not be managed/updated in the future. Using objects to maintain data like this would be hellish in real life.
//The purpose of this data is just simple visualization of the css/js code, nothing more. It could be a lorem ipsum easily.
const chapters = {
    "introduction": `<section class="content column is-6 is-offset-2">
            <h1>Introduction</h1>
            <p>Welcome to “The Rust Programming Language,” an introductory book about Rust. Rust is a programming language that’s focused on safety, speed, and concurrency. Its design lets you create programs that have the performance and control of a low-level
                language, but with the powerful abstractions of a high-level language. These properties make Rust suitable for programmers who have experience in languages like C and are looking for a safer alternative, as well as those from languages
                like Python who are looking for ways to write code that performs better without sacrificing expressiveness.</p>
            <p>Rust performs the majority of its safety checks and memory management decisions at compile time, so that your program's runtime performance isn't impacted. This makes it useful in a number of use cases that other languages aren’t good at:
                programs with predictable space and time requirements, embedding in other languages, and writing low-level code, like device drivers and operating systems. It's also great for web applications: it powers the Rust package registry site,
                <a href="https://crates.io/">crates.io</a>! We're excited to see what <em>you</em> create with Rust.</p>
            <p>This book is written for a reader who already knows how to program in at least one programming language. After reading this book, you should be comfortable writing Rust programs. We’ll be learning Rust through small, focused examples that
                build on each other to demonstrate how to use various features of Rust as well as how they work behind the scenes.</p>
                <h2>Contributing to the book</h2>
            <p>This book is open source. If you find an error, please don’t hesitate to file an issue or send a pull request <a href="https://github.com/rust-lang/book">on GitHub</a>.</p>

        </section>`,
    "installation": ` <section class="content column is-6 is-offset-2">
            <h2>Installation</h2>
            <p>The first step to using Rust is to install it. You’ll need an internet connection to run the commands in this chapter, as we’ll be downloading Rust from the internet.</p>
            <p>We’ll be showing off a number of commands using a terminal, and those lines all start with <code>$</code>. You don't need to type in the <code>$</code> character; they are there to indicate the start of each command. You’ll see many tutorials
                and examples around the web that follow this convention: <code>$</code> for commands run as a regular user, and <code>#</code> for commands you should be running as an administrator. Lines that don't start with <code>$</code> are typically
                showing the output of the previous command.</p>
            <h3>Installing on Linux or Mac</h3>
            <p>If you're on Linux or a Mac, all you need to do is open a terminal and type this:
            </p>
            <pre><code>$ curl https://sh.rustup.rs -sSf | sh
</code></pre>
            <p>This will download a script and start the installation. You may be prompted for your password. If it all goes well, you’ll see this appear:</p>
            <pre><code>Rust is installed now. Great!
</code></pre>
            <p>Of course, if you disapprove of the <code>curl | sh</code> pattern, you can download, inspect and run the script however you like.</p>
            <h3>Installing on Windows</h3>
            <p>On Windows, go to <a href="https://rustup.rs/">https://rustup.rs</a>
                <!-- ignore -->and follow the instructions to download rustup-init.exe. Run that and follow the rest of the instructions it gives you.</p>
            <p>The rest of the Windows-specific commands in the book will assume that you are using <code>cmd</code> as your shell. If you use a different shell, you may be able to run the same commands that Linux and Mac users do. If neither work, consult
                the documentation for the shell you are using.</p>
            <h3>Custom installations</h3>
            <p>If you have reasons for preferring not to use rustup.rs, please see <a href="https://www.rust-lang.org/install.html">the Rust
installation page</a> for other options.</p>
            <h3>Uninstalling</h3>
            <p>Uninstalling Rust is as easy as installing it. From your shell, run the uninstall script:</p>
            <pre><code>$ rustup self uninstall
</code></pre>
            <h3>Troubleshooting</h3>
            <p>If you've got Rust installed, you can open up a shell, and type this:</p>
            <pre><code>$ rustc --version
</code></pre>
            <p>You should see the version number, commit hash, and commit date in a format similar to this for the latest stable version at the time you install:</p>
            <pre><code>rustc x.y.z (abcabcabc yyyy-mm-dd)
</code></pre>
            <p>If you see this, Rust has been installed successfully! Congrats!
            </p>
            <p>If you don't and you're on Windows, check that Rust is in your <code>%PATH%</code> system variable.
            </p>
            <p>If it still isn't working, there are a number of places where you can get help. The easiest is <a href="irc://irc.mozilla.org/#rust">the #rust IRC channel on irc.mozilla.org</a>
                <!-- ignore -->, which you can access through <a href="http://chat.mibbit.com/?server=irc.mozilla.org&amp;channel=%23rust">Mibbit</a>. Go to that address, and you'll be chatting with other Rustaceans (a silly nickname we call ourselves) who can help
                you out. Other great resources include <a href="https://users.rust-lang.org/">the user’s forum</a> and
                <a href="http://stackoverflow.com/questions/tagged/rust">Stack Overflow</a>.</p>
            <h3>Local documentation</h3>
            <p>The installer also includes a copy of the documentation locally, so you can read it offline. Run <code>rustup doc</code> to open the local documentation in your browser.
            </p>
            <p>Any time there's a type or function provided by the standard library and you're not sure what it does, use the API documentation to find out!</p>

        </section>`,
    "helloworld": `<section class="content column is-6 is-offset-2">
            <h2>Hello, World!</h2>
            <p>Now that you have Rust installed, let’s write your first Rust program. It's traditional when learning a new language to write a little program to print the text “Hello, world!” to the screen, and in this section, we'll follow that tradition.
            </p>
            <blockquote>
                <p>Note: This book assumes basic familiarity with the command line. Rust itself makes no specific demands about your editing, tooling, or where your code lives, so if you prefer an IDE to the command line, feel free to use your favorite IDE.
                </p>
            </blockquote>
            <h3>Creating a Project Directory</h3>
            <p>First, make a directory to put your Rust code in. Rust doesn't care where your code lives, but for this book, we'd suggest making a <em>projects</em> directory in your home directory and keeping all your projects there. Open a terminal and
                enter the following commands to make a directory for this particular project:</p>
            <p>Linux and Mac:</p>
            <pre><code>$ mkdir ~/projects
$ cd ~/projects
$ mkdir hello_world
$ cd hello_world
</code></pre>
            <p>Windows:</p>
            <pre><code>&gt; mkdir %USERPROFILE%\projects
&gt; cd %USERPROFILE%\projects
&gt; mkdir hello_world
&gt; cd hello_world
</code></pre>

            <h3>Writing and Running a Rust Program</h3>
            <p>Next, make a new source file and call it <em>main.rs</em>. Rust files always end with the <em>.rs</em> extension. If you’re using more than one word in your filename, use an underscore to separate them. For example, you'd use <em>hello_world.rs</em>                rather than <em>helloworld.rs</em>.</p>
            <p>Now open the <em>main.rs</em> file you just created, and type the following code:</p>
            <p><span>Filename: main.rs</span></p>
            <pre><code><span><span>fn</span> <span>main</span></span>() {
    <span>println!</span>(<span>"Hello, world!"</span>);
}
</code></pre>
            <p>Save the file, and go back to your terminal window. On Linux or OSX, enter the following commands:</p>
            <pre><code>$ rustc main.rs
$ ./main
Hello, world!
</code></pre>
            <p>On Windows, run <code>.\main.exe</code> instead of <code>./main</code>. Regardless of your operating system, you should see the string <code>Hello, world!</code> print to the terminal. If you did, then congratulations! You've officially written
                a Rust program. That makes you a Rust programmer! Welcome.</p>
            <h3>Anatomy of a Rust Program</h3>
            <p>Now, let’s go over what just happened in your "Hello, world!" program in detail. Here's the first piece of the puzzle:</p>
            <pre><code><span><span>fn</span> <span>main</span></span>() {

}
</code></pre>
            <p>These lines define a <em>function</em> in Rust. The <code>main</code> function is special: it's the first thing that is run for every executable Rust program. The first line says, “I’m declaring a function named <code>main</code> that has
                no parameters and returns nothing.” If there were parameters, their names would go inside the parentheses, <code>(</code> and <code>)</code>.</p>
            <p>Also note that the function body is wrapped in curly braces, <code>{</code> and <code>}</code>. Rust requires these around all function bodies. It's considered good style to put the opening curly brace on the same line as the function declaration,
                with one space in between.</p>
            <p>Inside the <code>main</code> function:</p>
            <pre><code>    <span>println!</span>(<span>"Hello, world!"</span>);
</code></pre>
            <p>This line does all of the work in this little program: it prints text to the screen. There are a number of details to notice here. The first is that Rust style is to indent with four spaces, not a tab.</p>
            <p>The second important part is <code>println!</code>. This is calling a Rust <em>macro</em>, which is how metaprogramming is done in Rust. If it were calling a function instead, it would look like this: <code>println</code> (without the <code>!</code>).
                We'll discuss Rust macros in more detail in Chapter 24, but for now you just need to know that when you see a <code>!</code> that means that you’re calling a macro instead of a normal function.
            </p>
            <p>Next is <code>"Hello, world!"</code> which is a <em>string</em>. We pass this string as an argument to <code>println!</code>, which prints the string to the screen. Easy enough!</p>
            <p>The line ends with a semicolon (<code>;</code>). The <code>;</code> indicates that this expression is over, and the next one is ready to begin. Most lines of Rust code end with a
                <code>;</code>.</p>
            <h3>Compiling and Running Are Separate Steps</h3>
            <p>In "Writing and Running a Rust Program", we showed you how to run a newly created program. We'll break that process down and examine each step now.</p>
            <p>Before running a Rust program, you have to compile it. You can use the Rust compiler by entering the <code>rustc</code> command and passing it the name of your source file, like this:</p>
            <pre><code>$ rustc main.rs
</code></pre>
            <p>If you come from a C or C++ background, you'll notice that this is similar to
                <code>gcc</code> or <code>clang</code>. After compiling successfully, Rust should output a binary executable, which you can see on Linux or OSX by entering the <code>ls</code> command in your shell as follows:</p>
            <pre><code>$ ls
main  main.rs
</code></pre>
            <p>On Windows, you'd enter:</p>
            <pre><code>&gt; dir /B %= the /B option says to only show the file names =%
main.exe
main.rs
</code></pre>
            <p>This shows we have two files: the source code, with the <em>.rs</em> extension, and the executable (<em>main.exe</em> on Windows, <em>main</em> everywhere else). All that's left to do from here is run the <em>main</em> or <em>main.exe</em>                file, like this:</p>
            <pre><code>$ ./main  # or .\main.exe on Windows
</code></pre>
            <p>If <em>main.rs</em> were your "Hello, world!" program, this would print <code>Hello, world!</code> to your terminal.</p>
            <p>If you come from a dynamic language like Ruby, Python, or JavaScript, you may not be used to compiling and running a program being separate steps. Rust is an
                <em>ahead-of-time compiled</em> language, which means that you can compile a program, give it to someone else, and they can run it even without having Rust installed. If you give someone a <code>.rb</code>, <code>.py</code>, or <code>.js</code>                file, on the other hand, they need to have a Ruby, Python, or JavaScript implementation installed (respectively), but you only need one command to both compile and run your program. Everything is a tradeoff in language design.</p>
            <p>Just compiling with <code>rustc</code> is fine for simple programs, but as your project grows, you'll want to be able to manage all of the options your project has and make it easy to share your code with other people and projects. Next, we'll
                introduce you to a tool called Cargo, which will help you write real-world Rust programs.
            </p>
            <h2>Hello, Cargo!</h2>
            <p>Cargo is Rust’s build system and package manager, and Rustaceans use Cargo to manage their Rust projects because it makes a lot of tasks easier. For example, Cargo takes care of building your code, downloading the libraries your code depends
                on, and building those libraries. We call libraries your code needs
                <em>dependencies</em>.</p>
            <p>The simplest Rust programs, like the one we've written so far, don’t have any dependencies, so right now, you'd only be using the part of Cargo that can take care of building your code. As you write more complex Rust programs, you’ll want
                to add dependencies, and if you start off using Cargo, that will be a lot easier to do.</p>
            <p>As the vast, vast majority of Rust projects use Cargo, we will assume that you’re using it for the rest of the book. Cargo comes installed with Rust itself, if you used the official installers as covered in the Installation chapter. If you
                installed Rust through some other means, you can check if you have Cargo installed by typing the following into your terminal:</p>
            <pre><code>$ cargo --version
</code></pre>
            <p>If you see a version number, great! If you see an error like <code>command not found</code>, then you should look at the documentation for your method of installation to determine how to install Cargo separately.</p>
            <h3>Creating a Project with Cargo</h3>
            <p>Let's create a new project using Cargo and look at how it differs from our project in <code>hello_world</code>. Go back to your projects directory (or wherever you decided to put your code):</p>
            <p>Linux and Mac:</p>
            <pre><code>$ cd ~/projects
</code></pre>
            <p>Windows:</p>
            <pre><code>&gt; cd %USERPROFILE%\projects
</code></pre>
            <p>And then on any operating system run:</p>
            <pre><code>$ cargo new hello_cargo --bin
$ cd hello_cargo
</code></pre>
            <p>We passed the <code>--bin</code> argument to <code>cargo new</code> because our goal is to make an executable application, as opposed to a library. Executables are binary executable files often called just <em>binaries</em>. We've given <code>hello_cargo</code>                as the name for our project, and Cargo creates its files in a directory of the same name that we can then go into.</p>
            <p>If we list the files in the <em>hello_cargo</em> directory, we can see that Cargo has generated two files and one directory for us: a <em>Cargo.toml</em> and a <em>src</em> directory with a <em>main.rs</em> file inside. It has also initialized
                a new git repository in the <em>hello_cargo</em> directory for us, along with a <em>.gitignore</em> file; you can change this to use a different version control system, or no version control system, by using the <code>--vcs</code> flag.</p>
            <p>Open up <em>Cargo.toml</em> in your text editor of choice. It should look something like this:</p>
            <p><span>Filename: Cargo.toml</span></p>
            <pre><code><span>[package]</span>
<span>name</span> = <span>"hello_cargo"</span>
<span>version</span> = <span>"0.1.0"</span>
<span>authors</span> = [<span>"Your Name &lt;you@example.com&gt;"</span>]
<span>
[dependencies]</span>
</code></pre>
            <p>This file is in the <a href="https://github.com/toml-lang/toml"><em>TOML</em></a>
                <!-- ignore -->(Tom's Obvious, Minimal Language) format. TOML is similar to INI but has some extra goodies and is used as Cargo’s configuration format.</p>
            <p>The first line, <code>[package]</code>, is a section heading that indicates that the following statements are configuring a package. As we add more information to this file, we’ll add other sections.</p>
            <p>The next three lines set the three bits of configuration that Cargo needs to see in order to know that it should compile your program: its name, what version it is, and who wrote it. Cargo gets your name and email information from your environment.
                If it’s not correct, go ahead and fix that and save the file.
            </p>
            <p>The last line, <code>[dependencies]</code>, is the start of a section for you to list any
                <em>crates</em> (which is what we call packages of Rust code) that your project will depend on so that Cargo knows to download and compile those too. We won't need any other crates for this project, but we will in the guessing game tutorial
                in the next chapter.</p>
            <p>Now let's look at <em>src/main.rs</em>:</p>
            <p><span>Filename: src/main.rs</span></p>
            <pre><code><span><span>fn</span> <span>main</span></span>() {
    <span>println!</span>(<span>"Hello, world!"</span>);
}
</code></pre>
            <p>Cargo has generated a "Hello World!" for you, just like the one we wrote earlier! So that part is the same. The differences between our previous project and the project generated by Cargo that we've seen so far are:</p>
            <ul>
                <li>Our code goes in the <em>src</em> directory</li>
                <li>The top level contains a <em>Cargo.toml</em> configuration file</li>
            </ul>
            <p>Cargo expects your source files to live inside the <em>src</em> directory so that the top-level project directory is just for READMEs, license information, configuration files, and anything else not related to your code. In this way, using
                Cargo helps you keep your projects nice and tidy. There's a place for everything, and everything is in its place.</p>
            <p>If you started a project that doesn't use Cargo, as we did with our project in the <em>hello_world</em> directory, you can convert it to a project that does use Cargo by moving your code into the <em>src</em> directory and creating an appropriate
                <em>Cargo.toml</em>.</p>
            <h3>Building and Running a Cargo Project</h3>
            <p>Now let's look at what's different about building and running your Hello World program through Cargo! To do so, enter the following commands:</p>
            <pre><code>$ cargo build
   Compiling hello_cargo v0.1.0 (file:///projects/hello_cargo)
</code></pre>
            <p>This should have created an executable file in <em>target/debug/hello_cargo</em> (or
                <em>target\debug\hello_cargo.exe</em> on Windows), which you can run with this command:</p>
            <pre><code>$ ./target/debug/hello_cargo # or .\target\debug\hello_cargo.exe on Windows
Hello, world!
</code></pre>
            <p>Bam! If all goes well, <code>Hello, world!</code> should print to the terminal once more.</p>
            <p>Running <code>cargo build</code> for the first time also causes Cargo to create a new file at the top level called <em>Cargo.lock</em>, which looks like this:</p>
            <p><span>Filename: Cargo.lock</span></p>
            <pre><code><span>[root]</span>
<span>name</span> = <span>"hello_cargo"</span>
<span>version</span> = <span>"0.1.0"</span>
</code></pre>
            <p>Cargo uses the <em>Cargo.lock</em> to keep track of dependencies in your application. This project doesn't have dependencies, so the file is a bit sparse. Realistically, you won't ever need to touch this file yourself; just let Cargo handle
                it.
            </p>
            <p>We just built a project with <code>cargo build</code> and ran it with
                <code>./target/debug/hello_cargo</code>, but we can also use <code>cargo run</code> to compile and then run:</p>
            <pre><code>$ cargo run
     Running \`target/debug/hello_cargo\`
Hello, world!
</code></pre>
            <p>Notice that this time, we didn't see the output telling us that Cargo was compiling <code>hello_cargo</code>. Cargo figured out that the files haven’t changed, so it just ran the binary. If you had modified your source code, Cargo would have
                rebuilt the project before running it, and you would have seen something like this:
            </p>
            <pre><code>$ cargo run
   Compiling hello_cargo v0.1.0 (file:///projects/hello_cargo)
     Running \`target/debug/hello_cargo\`
Hello, world!
</code></pre>
            <p>So a few more differences we've now seen:</p>
            <ul>
                <li>Instead of using <code>rustc</code>, build a project using <code>cargo build</code> (or build and run it in one step with <code>cargo run</code>)</li>
                <li>Instead of the result of the build being put in the same directory as our code, Cargo will put it in the <em>target/debug</em> directory.</li>
            </ul>
            <p>The other advantage of using Cargo is that the commands are the same no matter what operating system you're on, so at this point we will no longer be providing specific instructions for Linux and Mac versus Windows.</p>
            <h3>Building for Release</h3>
            <p>When your project is finally ready for release, you can use <code>cargo build --release</code> to compile your project with optimizations. This will create an executable in <em>target/release</em> instead of <em>target/debug</em>. These optimizations
                make your Rust code run faster, but turning them on makes your program take longer to compile. This is why there are two different profiles: one for development when you want to be able to rebuild quickly and often, and one for building
                the final program you’ll give to a user that won't be rebuilt and that we want to run as fast as possible. If you're benchmarking the running time of your code, be sure to run <code>cargo build --release</code> and benchmark with the executable
                in <em>target/release</em>.</p>
            <h3>Cargo as Convention</h3>
            <p>With simple projects, Cargo doesn't provide a whole lot of value over just using <code>rustc</code>, but it will prove its worth as you continue. With complex projects composed of multiple crates, it’s much easier to let Cargo coordinate the
                build. With Cargo, you can just run <code>cargo build</code>, and it should work the right way. Even though this project is simple, it now uses much of the real tooling you’ll use for the rest of your Rust career. In fact, you can get
                started with virtually all Rust projects you want to work on with the following commands:</p>
            <pre><code>$ git clone someurl.com/someproject
$ cd someproject
$ cargo build
</code></pre>
            <blockquote>
                <p>Note: If you want to look at Cargo in more detail, check out the official
                    <a href="http://doc.crates.io/guide.html">Cargo guide</a>, which covers all of its features.</p>
            </blockquote>
        </section>`
}
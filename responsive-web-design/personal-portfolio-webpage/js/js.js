ready(() => {
    display_text("introduction");
    let menu_items = document.getElementById("menu");
    const menu_control = document.getElementById("menu-control");

    const menu_styles = window.getComputedStyle(menu_items);

    menu_control.addEventListener("click", () => {
        let current_right = menu_styles.getPropertyValue("right").slice(0, -2);
        if (current_right === "0") {
            menu_items.style.right = "800px";
            menu_control.style.right = "80%";
            menu_control.style.left = "10%";
        } else {
            menu_items.style.right = "0";
            menu_control.style.right = "10%";
            menu_control.style.left = "80%";
        }
    });

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
    let result = " ";
    if (id !== '') {
        result = chapters[id];
    }
    document.getElementById("main-content").innerHTML = result;
}
//set ofervlow hidden then width 0px
function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

//Copied the DOM from the rust book website directly
//Some useless classess will show up tho, but it's irrelevant.
//The idea is to use this data as a glorified lorem ipsum, nothing else.
const chapters = {
    "introduction": `
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

        `,
    "installation": ` 
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

        `,
    "helloworld": `
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
        `,
    "game": `
        
            <h1>Guessing Game</h1>
            <p>Let’s jump into Rust by working through a hands-on project together! This chapter introduces you to a few common Rust concepts by showing you how to use them in a real program. You’ll learn about <code>let</code>, <code>match</code>, methods,
                associated functions, using external crates, and more! The following chapters will explore these ideas in more detail. In this chapter, you’ll practice the fundamentals.</p>
            <p>We’ll implement a classic beginner programming problem: a guessing game. Here’s how it works: the program will generate a random integer between 1 and 100. It will then prompt the player to enter a guess. After entering a guess, it will indicate
                whether the guess is too low or too high. If the guess is correct, the game will print congratulations and exit.</p>
            <h2>Setting Up a New Project</h2>
            <p>To set up a new project, go to the <em>projects</em> directory that you created in Chapter 1, and make a new project using Cargo, like so:</p>
            <pre><code>$ cargo new guessing_game --bin
$ cd guessing_game
</code></pre>
            <p>The first command, <code>cargo new</code>, takes the name of the project (<code>guessing_game</code>) as the first argument. The <code>--bin</code> flag tells Cargo to make a binary project, similar to the one in Chapter 1. The second command
                changes to the new project’s directory.</p>
            <p>Look at the generated <em>Cargo.toml</em> file:</p>
            <p><span>Filename: Cargo.toml</span></p>
            <pre><code><span>[package]</span>
<span>name</span> = <span>"guessing_game"</span>
<span>version</span> = <span>"0.1.0"</span>
<span>authors</span> = [<span>"Your Name &lt;you@example.com&gt;"</span>]
<span>
[dependencies]</span>
</code></pre>
            <p>If the author information that Cargo obtained from your environment is not correct, fix that in the file and save it again.</p>
            <p>As you saw in Chapter 1, <code>cargo new</code> generates a “Hello, world!” program for you. Check out the <em>src/main.rs</em> file:</p>
            <p><span>Filename: src/main.rs</span></p>
            <pre><code><span><span>fn</span> <span>main</span></span>() {
    <span>println!</span>(<span>"Hello, world!"</span>);
}
</code></pre>
            <p>Now let’s compile this “Hello, world!” program and run it in the same step using the <code>cargo run</code> command:</p>
            <pre><code>$ cargo run
   Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
     Running \`target/debug/guessing_game\`
Hello, world!
</code></pre>
            <p>The <code>run</code> command comes in handy when you need to rapidly iterate on a project, and this game is such a project: we want to quickly test each iteration before moving on to the next one.</p>
            <p>Reopen the <em>src/main.rs</em> file. You’ll be writing all the code in this file.</p>
            <h2>Processing a Guess</h2>
            <p>The first part of the program will ask for user input, process that input, and check that the input is in the expected form. To start, we’ll allow the player to input a guess. Enter the code in Listing 2-1 into <em>src/main.rs</em>.</p>
            <figure>
                <span>Filename: src/main.rs</span>
                <pre><code><span>use</span> std::io;

<span><span>fn</span> <span>main</span></span>() {
    <span>println!</span>(<span>"Guess the number!"</span>);

    <span>println!</span>(<span>"Please input your guess."</span>);

    <span>let</span> <span>mut</span> guess = <span>String</span>::new();

    io::stdin().read_line(&amp;<span>mut</span> guess)
        .expect(<span>"Failed to read line"</span>);

    <span>println!</span>(<span>"You guessed: {}"</span>, guess);
}
</code></pre>
                <figcaption>
                    <p>Listing 2-1: Code to get a guess from the user and print it out</p>
                </figcaption>
            </figure>
            <p>This code contains a lot of information, so let’s go over it bit by bit. To obtain user input and then print the result as output, we need to bring the
                <code>io</code> (input/output) library into scope. The <code>io</code> library comes from the standard library (which is known as <code>std</code>):</p>
            <pre><code><span>use</span> std::io;
</code></pre>
            <p>By default, Rust brings only a few types into the scope of every program in
                <a href="https://doc.rust-lang.org/std/prelude/">the <em>prelude</em></a>
                <!-- ignore -->. If a type you want to use isn’t in the prelude, you have to bring that type into scope explicitly with a <code>use</code> statement. Using the <code>std::io</code> library provides you with a number of useful
                <code>io</code>-related features, including the functionality to accept user input.</p>
            <p>As you saw in Chapter 1, the <code>main</code> function is the entry point into the program:
            </p>
            <pre><code><span><span>fn</span> <span>main</span></span>() {
</code></pre>
            <p>The <code>fn</code> syntax declares a new function, the <code>()</code> indicate there are no parameters, and <code>{</code> starts the body of the function.</p>
            <p>As you also learned in Chapter 1, <code>println!</code> is a macro that prints a string to the screen:</p>
            <pre><code><span>println!</span>(<span>"Guess the number!"</span>);

<span>println!</span>(<span>"Please input your guess."</span>);
</code></pre>
            <p>This code is just printing a prompt stating what the game is and requesting input from the user.</p>
            <h3>Storing Values with Variables</h3>
            <p>Next, we’ll create a place to store the user input, like this:</p>
            <pre><code><span>let</span> <span>mut</span> guess = <span>String</span>::new();
</code></pre>
            <p>Now the program is getting interesting! There’s a lot going on in this little line. Notice that this is a <code>let</code> statement, which is used to create
                <em>variables</em>. Here’s another example:</p>
            <pre><code><span>let</span> foo = bar;
</code></pre>
            <p>This line will create a new variable named <code>foo</code> and bind it to the value
                <code>bar</code>. In Rust, variables are immutable by default. The following example shows how to use <code>mut</code> before the variable name to make a variable mutable:</p>
            <pre><code><span>let</span> foo = <span>5</span>; <span>// immutable</span>
<span>let</span> <span>mut</span> bar = <span>5</span>; <span>// mutable</span>
</code></pre>
            <blockquote>
                <p>Note: The <code>//</code> syntax starts a comment that continues until the end of the line. Rust ignores everything in comments.</p>
            </blockquote>
            <p>Now you know that <code>let mut guess</code> will introduce a mutable variable named
                <code>guess</code>. On the other side of the equal sign (<code>=</code>) is the value that <code>guess</code> is bound to, which is the result of calling <code>String::new</code>, a function that returns a new instance of a <code>String</code>.
                <a href="../std/string/struct.String.html"><code>String</code></a>
                <!-- ignore -->is a string type provided by the standard library that is a growable, UTF-8 encoded bit of text.
            </p>
            <p>The <code>::</code> syntax in the <code>::new</code> line indicates that <code>new</code> is an <em>associated
function</em> of the <code>String</code> type. An associated function is implemented on a type, in this case <code>String</code>, rather than on a particular instance of a <code>String</code>. Some languages call this a <em>static method</em>.</p>
            <p>This <code>new</code> function creates a new, empty <code>String</code>. You’ll find a <code>new</code> function on many types, because it’s a common name for a function that makes a new value of some kind.
            </p>
            <p>To summarize, the <code>let mut guess = String::new();</code> line has created a mutable variable that is currently bound to a new, empty instance of a <code>String</code>. Whew!</p>
            <p>Recall that we included the input/output functionality from the standard library with <code>use std::io;</code> on the first line of the program. Now we’ll call an associated function, <code>stdin</code>, on
                <code>io</code>:</p>
            <pre><code>io::stdin().read_line(&amp;<span>mut</span> guess)
    .expect(<span>"Failed to read line"</span>);
</code></pre>
            <p>If we didn’t have the <code>use std::io</code> line at the beginning of the program, we could have written this function call as <code>std::io::stdin</code>. The <code>stdin</code> function returns an instance of <a href="../std/io/struct.Stdin.html"><code>std::io::Stdin</code></a>
                <!-- ignore -->, which is a type that represents a handle to the standard input for your terminal.</p>
            <p>The next part of the code, <code>.read_line(&amp;mut guess)</code>, calls the
                <a href="../std/io/struct.Stdin.html#method.read_line"><code>read_line</code></a>
                <!-- ignore -->method on the standard input handle to get input from the user. We’re also passing one argument to <code>read_line</code>: <code>&amp;mut guess</code>.</p>
            <p>The job of <code>read_line</code> is to take whatever the user types into standard input and place that into a string, so it takes that string as an argument. The string argument needs to be mutable so the method can change the string’s content
                by adding the user input.</p>
            <p>The <code>&amp;</code> indicates that this argument is a <em>reference</em>, which gives you a way to let multiple parts of your code access one piece of data without needing to copy that data into memory multiple times. References are a complex
                feature, and one of Rust’s major advantages is how safe and easy it is to use references. You don’t need to know a lot of those details to finish this program: Chapter 4 will explain references more thoroughly. For now, all you need to
                know is that like variables, references are immutable by default. Hence, we need to write <code>&amp;mut guess</code> rather than <code>&amp;guess</code> to make it mutable.</p>
            <p>We’re not quite done with this line of code. Although it’s a single line of text, it’s only the first part of the single logical line of code. The second part is this method:</p>
            <pre><code>.expect(<span>"Failed to read line"</span>);
</code></pre>
            <p>When you call a method with the <code>.foo()</code> syntax, it’s often wise to introduce a newline and other whitespace to help break up long lines. We could have written this code as:</p>
            <pre><code>io::stdin().read_line(&amp;<span>mut</span> guess).expect(<span>"Failed to read line"</span>);
</code></pre>
            <p>However, one long line is difficult to read, so it’s best to divide it, two lines for two method calls. Now let’s discuss what this line does.</p>
            <a class="header" href="#handling-potential-failure-with-the-result-type" name="handling-potential-failure-with-the-result-type">
                <h3>Handling Potential Failure with the <code>Result</code> Type</h3>
            </a>
            <p>As mentioned earlier, <code>read_line</code> puts what the user types into the string we’re passing it, but it also returns a value—in this case, an
                <a href="../std/io/type.Result.html"><code>io::Result</code></a>
                <!-- ignore -->. Rust has a number of types named
                <code>Result</code> in its standard library: a generic <a href="../std/result/enum.Result.html"><code>Result</code></a>
                <!-- ignore -->as well as specific versions for submodules, such as <code>io::Result</code>.</p>
            <p>The <code>Result</code> types are <a href="ch06-00-enums.html"><em>enumerations</em></a>
                <!-- ignore -->, often referred to as <em>enums</em>. An enumeration is a type that can have a fixed set of values, and those values are called the enum’s <em>variants</em>. Chapter 6 will cover enums in more detail.</p>
            <p>For <code>Result</code>, the variants are <code>Ok</code> or <code>Err</code>. <code>Ok</code> indicates the operation was successful, and inside the <code>Ok</code> variant is the successfully generated value.
                <code>Err</code> means the operation failed, and <code>Err</code> contains information about how or why the operation failed.</p>
            <p>The purpose of these <code>Result</code> types is to encode error handling information. Values of the <code>Result</code> type, like any type, have methods defined on them. An instance of <code>io::Result</code> has an <a href="../std/result/enum.Result.html#method.expect"><code>expect</code> method</a>
                <!-- ignore -->that you can call. If this instance of <code>io::Result</code> is an <code>Err</code> value, <code>expect</code> will cause the program to crash and display the message that you passed as an argument to <code>expect</code>. If the <code>read_line</code>                method returns an <code>Err</code>, it would likely be the result of an error coming from the underlying operating system. If this instance of
                <code>io::Result</code> is an <code>Ok</code> value, <code>expect</code> will take the return value that <code>Ok</code> is holding and return just that value to you so you could use it. In this case, that value is the number of characters
                the user entered into standard input.</p>
            <p>If we don’t call <code>expect</code>, the program will compile, but we’ll get a warning:</p>
            <pre><code>$ cargo build
   Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
src/main.rs:10:5: 10:39 warning: unused result which must be used,
#[warn(unused_must_use)] on by default
src/main.rs:10     io::stdin().read_line(&amp;mut guess);
                   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
</code></pre>
            <p>Rust warns that we haven’t used the <code>Result</code> value returned from <code>read_line</code>, indicating that the program hasn’t handled a possible error. The right way to suppress the warning is to actually write error handling, but
                since we just want to crash this program when a problem occurs, we can use <code>expect</code>. You’ll learn about recovering from errors in Chapter 9.</p>
            <h3>Printing Values with <code>println!</code> Placeholders</h3>
            <p>Aside from the closing curly brace, there’s only one more line to discuss in the code added so far, which is the following:</p>
            <pre><code><span>println!</span>(<span>"You guessed: {}"</span>, guess);
</code></pre>
            <p>This line prints out the string we saved the user’s input in. The set of <code>{}</code> is a placeholder that holds a value in place. You can print more than one value using <code>{}</code>: the first set of
                <code>{}</code> holds the first value listed after the format string, the second set holds the second value, and so on. Printing out multiple values in one call to <code>println!</code> would look like this:</p>
            <pre><code><span>let</span> x = <span>5</span>;
<span>let</span> y = <span>10</span>;

<span>println!</span>(<span>"x = {} and y = {}"</span>, x, y);
</code></pre>
            <p>This code would print out <code>x = 5 and y = 10</code>.</p>
            <h3>Testing the First Part</h3>
            <p>Let’s test the first part of the guessing game. You can run it using <code>cargo run</code>:</p>
            <pre><code>$ cargo run
   Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
     Running \`target/debug/guessing_game\`
Guess the number!
Please input your guess.
6
You guessed: 6
</code></pre>
            <p>At this point, the first part of the game is done: we’re getting input from the keyboard and then printing it.</p>
            <h2>Generating a Secret Number</h2>
            <p>Next, we need to generate a secret number that the user will try to guess. The secret number should be different every time so the game is fun to play more than once. Let’s use a random number between 1 and 100 so the game isn’t too difficult.
                Rust doesn’t yet include random number functionality in its standard library. However, the Rust team does provide a <a href="https://crates.io/crates/rand"><code>rand</code> crate</a>.</p>
            <h3>Using a Crate to Get More Functionality</h3>
            <p>Remember that a <em>crate</em> is a package of Rust code. The project we’ve been building is a <em>binary crate</em>, which is an executable. The <code>rand</code> crate is a
                <em>library crate</em>, which contains code intended to be used in other programs.</p>
            <p>Cargo’s use of external crates is where it really shines. Before we can write code that uses <code>rand</code>, we need to modify the <em>Cargo.toml</em> file to include the
                <code>rand</code> crate as a dependency. Open that file now and add the following line to the bottom beneath the <code>[dependencies]</code> section header that Cargo created for you:
            </p>
            <p><span>Filename: Cargo.toml</span></p>
            <pre><code><span>[dependencies]</span>

<span>rand</span> = <span>"0.3.14"</span>
</code></pre>
            <p>In the <em>Cargo.toml</em> file, everything that follows a header is part of a section that continues until another section starts. The <code>[dependencies]</code> section is where you tell Cargo which external crates your project depends
                on and which versions of those crates you require. In this case, we’ll specify the <code>rand</code> crate with the semantic version specifier <code>0.3.14</code>. Cargo understands <a href="http://semver.org">Semantic
Versioning</a>
                <!-- ignore -->(sometimes called <em>SemVer</em>), which is a standard for writing version numbers. The number <code>0.3.14</code> is actually shorthand for <code>^0.3.14</code>, which means “any version that has a public API compatible with version
                0.3.14.”
            </p>
            <p>Now, without changing any of the code, let’s build the project, as shown in Listing 2-2:</p>
            <figure>
                <pre><code>$ cargo build
    Updating registry \`https://github.com/rust-lang/crates.io-index\`
 Downloading rand v0.3.14
 Downloading libc v0.2.14
   Compiling libc v0.2.14
   Compiling rand v0.3.14
   Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
</code></pre>
                <figcaption>
                    <p>Listing 2-2: The output from running <code>cargo build</code> after adding the rand crate as a dependency</p>
                </figcaption>
            </figure>
            <p>You may see different version numbers (but they will all be compatible with the code, thanks to SemVer!), and the lines may be in a different order.</p>
            <p>Now that we have an external dependency, Cargo fetches the latest versions of everything from the <em>registry</em>, which is a copy of data from
                <a href="https://crates.io">Crates.io</a>. Crates.io is where people in the Rust ecosystem post their open source Rust projects for others to use.</p>
            <p>After updating the registry, Cargo checks the <code>[dependencies]</code> section and downloads any you don’t have yet. In this case, although we only listed <code>rand</code> as a dependency, Cargo also grabbed a copy of <code>libc</code>,
                because <code>rand</code> depends on
                <code>libc</code> to work. After downloading them, Rust compiles them and then compiles the project with the dependencies available.</p>
            <p>If you immediately run <code>cargo build</code> again without making any changes, you won’t get any output. Cargo knows it has already downloaded and compiled the dependencies, and you haven't changed anything about them in your
                <em>Cargo.toml</em> file. Cargo also knows that you haven't changed anything about your code, so it doesn't recompile that either. With nothing to do, it simply exits. If you open up the <em>src/main.rs</em> file, make a trivial change,
                then save it and build again, you’ll only see one line of output:</p>
            <pre><code>$ cargo build
   Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
</code></pre>
            <p>This line shows Cargo only updates the build with your tiny change to the
                <em>src/main.rs</em> file. Your dependencies haven't changed, so Cargo knows it can reuse what it has already downloaded and compiled for those. It just rebuilds your part of the code.</p>
            <h4>The <em>Cargo.lock</em> File Ensures Reproducible Builds</h4>
            <p>Cargo has a mechanism that ensures you can rebuild the same artifact every time you or anyone else builds your code: Cargo will use only the versions of the dependencies you specified until you indicate otherwise. For example, what happens
                if next week version <code>v0.3.15</code> of the <code>rand</code> crate comes out and contains an important bug fix but also contains a regression that will break your code?</p>
            <p>The answer to this problem is the <em>Cargo.lock</em> file, which was created the first time you ran <code>cargo build</code> and is now in your <em>guessing_game</em> directory. When you build a project for the first time, Cargo figures out
                all the versions of the dependencies that fit the criteria and then writes them to the <em>Cargo.lock</em> file. When you build your project in the future, Cargo will see that the <em>Cargo.lock</em> file exists and use the versions specified
                there rather than doing all the work of figuring out versions again. This lets you have a reproducible build automatically. In other words, your project will remain at <code>0.3.14</code> until you explicitly upgrade, thanks to the <em>Cargo.lock</em>                file.
            </p>
            <h4>Updating a Crate to Get a New Version</h4>
            <p>When you <em>do</em> want to update a crate, Cargo provides another command, <code>update</code>, which will:</p>
            <ol>
                <li>Ignore the <em>Cargo.lock</em> file and figure out all the latest versions that fit your specifications in <em>Cargo.toml</em>.</li>
                <li>If that works, Cargo will write those versions to the <em>Cargo.lock</em> file.</li>
            </ol>
            <p>But by default, Cargo will only look for versions larger than <code>0.3.0</code> and smaller than <code>0.4.0</code>. If the <code>rand</code> crate has released two new versions,
                <code>0.3.15</code> and <code>0.4.0</code>, you would see the following if you ran <code>cargo update</code>:</p>
            <pre><code>$ cargo update
    Updating registry \`https://github.com/rust-lang/crates.io-index\`
    Updating rand v0.3.14 -&gt; v0.3.15
</code></pre>
            <p>At this point, you would also notice a change in your <em>Cargo.lock</em> file noting that the version of the <code>rand</code> crate you are now using is <code>0.3.15</code>.</p>
            <p>If you wanted to use <code>rand</code> version <code>0.4.0</code> or any version in the <code>0.4.x</code> series, you’d have to update the <em>Cargo.toml</em> file to look like this instead:</p>
            <pre><code><span>[dependencies]</span>

<span>rand</span> = <span>"0.4.0"</span>
</code></pre>
            <p>The next time you run <code>cargo build</code>, Cargo will update the registry of crates available and reevaluate your <code>rand</code> requirements according to the new version you specified.</p>
            <p>There’s a lot more to say about <a href="http://doc.crates.io">Cargo</a>
                <!-- ignore -->and <a href="http://doc.crates.io/crates-io.html">its
ecosystem</a>
                <!-- ignore -->that Chapter 14 will discuss, but for now, that’s all you need to know. Cargo makes it very easy to reuse libraries, so Rustaceans are able to write smaller projects that are assembled from a number of packages.</p>
            <h3>Generating a Random Number</h3>
            <p>Let’s start <em>using</em> <code>rand</code>. The next step is to update <em>src/main.rs</em>, as shown in Listing 2-3:</p>
            <figure>
                <span>Filename: src/main.rs</span>
                <pre><code><span>extern</span> <span>crate</span> rand;

<span>use</span> std::io;
<span>use</span> rand::Rng;

<span><span>fn</span> <span>main</span></span>() {
    <span>println!</span>(<span>"Guess the number!"</span>);

    <span>let</span> secret_number = rand::thread_rng().gen_range(<span>1</span>, <span>101</span>);

    <span>println!</span>(<span>"The secret number is: {}"</span>, secret_number);

    <span>println!</span>(<span>"Please input your guess."</span>);

    <span>let</span> <span>mut</span> guess = <span>String</span>::new();

    io::stdin().read_line(&amp;<span>mut</span> guess)
        .expect(<span>"Failed to read line"</span>);

    <span>println!</span>(<span>"You guessed: {}"</span>, guess);
}
</code></pre>
                <figcaption>
                    <p>Listing 2-3: Code changes needed in order to generate a random number</p>
                </figcaption>
            </figure>
            <p>We’re adding a <code>extern crate rand;</code> line to the top that lets Rust know we’ll be using that external dependency. This also does the equivalent of calling <code>use rand</code>, so now we can call anything in the <code>rand</code>                crate by prefixing it with
                <code>rand::</code>.</p>
            <p>Next, we’re adding another <code>use</code> line: <code>use rand::Rng</code>. <code>Rng</code> is a trait that defines methods that random number generators implement, and this trait must be in scope for us to use those methods. Chapter 10
                will cover traits in detail.</p>
            <p>Also, we’re adding two more lines in the middle. The <code>rand::thread_rng</code> function will give us the particular random number generator that we’re going to use: one that is local to the current thread of execution and seeded by the
                operating system. Next, we call the <code>gen_range</code> method on the random number generator. This method is defined by the <code>Rng</code> trait that we brought into scope with the
                <code>use rand::Rng</code> statement. The <code>gen_range</code> method takes two numbers as arguments and generates a random number between them. It’s inclusive on the lower bound but exclusive on the upper bound, so we need to specify
                <code>1</code> and <code>101</code> to request a number between 1 and 100.</p>
            <p>Knowing which traits to use and which functions and methods to call from a crate isn’t something that you’ll just <em>know</em>. Instructions for using a crate are in each crate’s documentation. Another neat feature of Cargo is that you can
                run the <code>cargo doc --open</code> command that will build documentation provided by all of your dependencies locally and open it in your browser. If you’re interested in other functionality in the <code>rand</code> crate, for example,
                run <code>cargo doc --open</code> and click <code>rand</code> in the sidebar on the left.</p>
            <p>The second line that we added to the code prints the secret number. This is useful while we’re developing the program to be able to test it, but we’ll delete it from the final version. It’s not much of a game if the program prints the answer
                as soon as it starts!</p>
            <p>Try running the program a few times:</p>
            <pre><code>$ cargo run
   Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
     Running \`target/debug/guessing_game\`
Guess the number!
The secret number is: 7
Please input your guess.
4
You guessed: 4
$ cargo run
     Running \`target/debug/guessing_game\`
Guess the number!
The secret number is: 83
Please input your guess.
5
You guessed: 5
</code></pre>
            <p>You should get different random numbers, and they should all be numbers between 1 and 100. Great job!</p>
            <h2>Comparing the Guess to the Secret Number</h2>
            <p>Now that we have user input and a random number, we can compare them. That step is shown in Listing 2-4:</p>
            <figure>
                <span>Filename: src/main.rs</span>
                <pre><code><span>extern</span> <span>crate</span> rand;

<span>use</span> std::io;
<span>use</span> std::cmp::Ordering;
<span>use</span> rand::Rng;

<span><span>fn</span> <span>main</span></span>() {
    <span>println!</span>(<span>"Guess the number!"</span>);

    <span>let</span> secret_number = rand::thread_rng().gen_range(<span>1</span>, <span>101</span>);

    <span>println!</span>(<span>"The secret number is: {}"</span>, secret_number);

    <span>println!</span>(<span>"Please input your guess."</span>);

    <span>let</span> <span>mut</span> guess = <span>String</span>::new();

    io::stdin().read_line(&amp;<span>mut</span> guess)
        .expect(<span>"Failed to read line"</span>);

    <span>println!</span>(<span>"You guessed: {}"</span>, guess);

    <span>match</span> guess.cmp(&amp;secret_number) {
        Ordering::Less    =&gt; <span>println!</span>(<span>"Too small!"</span>),
        Ordering::Greater =&gt; <span>println!</span>(<span>"Too big!"</span>),
        Ordering::Equal   =&gt; <span>println!</span>(<span>"You win!"</span>),
    }
}
</code></pre>
                <figcaption>
                    <p>Listing 2-4: Handling the possible return values of comparing two numbers</p>
                </figcaption>
            </figure>
            <p>The first new bit here is another <code>use</code>, bringing a type called
                <code>std::cmp::Ordering</code> into scope from the standard library. <code>Ordering</code> is another enum, like <code>Result</code>, but the variants for <code>Ordering</code> are
                <code>Less</code>,
                <code>Greater</code>, and <code>Equal</code>. These are the three outcomes that are possible when you compare two values.</p>
            <p>Then we add five new lines at the bottom that use the <code>Ordering</code> type:</p>
            <pre><code><span>match</span> guess.cmp(&amp;secret_number) {
    Ordering::Less    =&gt; <span>println!</span>(<span>"Too small!"</span>),
    Ordering::Greater =&gt; <span>println!</span>(<span>"Too big!"</span>),
    Ordering::Equal   =&gt; <span>println!</span>(<span>"You win!"</span>),
}
</code></pre>
            <p>The <code>cmp</code> method compares two values and can be called on anything that can be compared. It takes a reference to whatever you want to compare with: here it’s comparing the <code>guess</code> to the
                <code>secret_number</code>. <code>cmp</code> returns a variant of the
                <code>Ordering</code> enum we brought into scope with the <code>use</code> statement. We use a
                <a href="ch06-02-match.html"><code>match</code></a>
                <!-- ignore -->expression to decide what to do next based on which variant of <code>Ordering</code> was returned from the call to <code>cmp</code> with the values in <code>guess</code> and <code>secret_number</code>.</p>
            <p>A <code>match</code> expression is made up of <em>arms</em>. An arm consists of a <em>pattern</em> and the code that should be run if the value given to the beginning of the <code>match</code> expression fits that arm’s pattern. Rust takes
                the value given to <code>match</code> and looks through each arm’s pattern in turn. The <code>match</code> construct and patterns are powerful features in Rust that let you express a variety of situations your code might encounter and
                helps ensure that you handle them all. These features will be covered in detail in Chapter 6 and Chapter 19, respectively.</p>
            <p>Let’s walk through an example of what would happen with the <code>match</code> expression used here. Say that the user has guessed 50, and the randomly generated secret number this time is 38. When the code compares 50 to 38, the <code>cmp</code>                method will return <code>Ordering::Greater</code>, because 50 is greater than 38. <code>Ordering::Greater</code> is the value that the <code>match</code> expression gets. It looks at the first arm’s pattern, <code>Ordering::Less</code>,
                but the value <code>Ordering::Greater</code> does not match
                <code>Ordering::Less</code>. So it ignores the code in that arm and moves to the next arm. The next arm’s pattern, <code>Ordering::Greater</code>, <em>does</em> match
                <code>Ordering::Greater</code>! The associated code in that arm will execute and print
                <code>Too big!</code> to the screen. The <code>match</code> expression ends because it has no need to look at the last arm in this particular scenario.</p>
            <p>However, the code in Listing 2-4 won’t compile yet. Let’s try it:</p>
            <pre><code>$ cargo build
   Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
error[E0308]: mismatched types
  --&gt; src/main.rs:23:21
   |
23 |     match guess.cmp(&amp;secret_number) {
   |                     ^^^^^^^^^^^^^^ expected struct \`std::string::String\`, found integral variable
   |
   = note: expected type \`&amp;std::string::String\`
   = note:    found type \`&amp;{integer}\`

error: aborting due to previous error
Could not compile \`guessing_game\`.
</code></pre>
            <p>The core of the error states that there are <em>mismatched types</em>. Rust has a strong, static type system. However, it also has type inference. When we wrote
                <code>let guess = String::new()</code>, Rust was able to infer that <code>guess</code> should be a
                <code>String</code> and didn’t make us write the type. The <code>secret_number</code>, on the other hand, is a number type. A few number types can have a value between 1 and 100:
                <code>i32</code>, a 32-bit number; <code>u32</code>, an unsigned 32-bit number; <code>i64</code>, a 64-bit number; as well as others. Rust defaults to an <code>i32</code>, which is the type of
                <code>secret_number</code> unless we add type information elsewhere that would cause Rust to infer a different numerical type. The reason for the error is that Rust will not compare a string and a number type.</p>
            <p>Ultimately, we want to convert the <code>String</code> the program reads as input into a real number type so we can compare it to the guess numerically. We can do that by adding the following two lines to the <code>main</code> function body:</p>
            <p><span>Filename: src/main.rs</span></p>
            <pre><code><span>extern</span> <span>crate</span> rand;

<span>use</span> std::io;
<span>use</span> std::cmp::Ordering;
<span>use</span> rand::Rng;

<span><span>fn</span> <span>main</span></span>() {
    <span>println!</span>(<span>"Guess the number!"</span>);

    <span>let</span> secret_number = rand::thread_rng().gen_range(<span>1</span>, <span>101</span>);

    <span>println!</span>(<span>"The secret number is: {}"</span>, secret_number);

    <span>println!</span>(<span>"Please input your guess."</span>);

    <span>let</span> <span>mut</span> guess = <span>String</span>::new();

    io::stdin().read_line(&amp;<span>mut</span> guess)
        .expect(<span>"Failed to read line"</span>);

    <span>let</span> guess: <span>u32</span> = guess.trim().parse()
        .expect(<span>"Please type a number!"</span>);

    <span>println!</span>(<span>"You guessed: {}"</span>, guess);

    <span>match</span> guess.cmp(&amp;secret_number) {
        Ordering::Less    =&gt; <span>println!</span>(<span>"Too small!"</span>),
        Ordering::Greater =&gt; <span>println!</span>(<span>"Too big!"</span>),
        Ordering::Equal   =&gt; <span>println!</span>(<span>"You win!"</span>),
    }
}
</code></pre>
            <p>The two new lines are:</p>
            <pre><code><span>let</span> guess: <span>u32</span> = guess.trim().parse()
    .expect(<span>"Please type a number!"</span>);
</code></pre>
            <p>We create a variable named <code>guess</code>. But wait, doesn’t the program already have a variable named <code>guess</code>? It does, but Rust allows us to
                <em>shadow</em> the previous value of <code>guess</code> with a new one. This feature is often used in similar situations in which you want to convert a value from one type to another type. Shadowing lets us reuse the
                <code>guess</code> variable name rather than forcing us to create two unique variables, like <code>guess_str</code> and <code>guess</code> for example. (Chapter 3 covers shadowing in more detail.)</p>
            <p>We bind <code>guess</code> to the expression <code>guess.trim().parse()</code>. The <code>guess</code> in the expression refers to the original <code>guess</code> that was a <code>String</code> with the input in it. The <code>trim</code> method
                on a <code>String</code> instance will eliminate any whitespace at the beginning and end. <code>u32</code> can only contain numerical characters, but the user must press the Return key to satisfy <code>read_line</code>. When the user presses
                Return, a newline character is added to the string. For example, if the user types 5 and presses return, <code>guess</code> looks like this: <code>5\n</code>. The <code>\n</code> represents “newline,” the return key. The <code>trim</code>                method eliminates <code>\n</code>, resulting in just
                <code>5</code>.</p>
            <p>The <a href="../std/primitive.str.html#method.parse"><code>parse</code> method on strings</a>
                <!-- ignore -->parses a string into some kind of number. Because this method can parse a variety of number types, we need to tell Rust the exact number type we want by using <code>let guess: u32</code>. The colon (<code>:</code>) after <code>guess</code>                tells Rust we’ll annotate the variable’s type. Rust has a few built-in number types; the <code>u32</code> seen here is an unsigned, 32-bit integer. It’s a good default choice for a small positive number. You’ll learn about other number
                types in Chapter 3. Additionally, the <code>u32</code> annotation in this example program and the comparison with <code>secret_number</code> means that Rust will infer that <code>secret_number</code> should be a <code>u32</code> as well.
                So now the comparison will be between two values of the same type!</p>
            <p>The call to <code>parse</code> could easily cause an error. If, for example, the string contained <code>A👍%</code>, there would be no way to convert that to a number. Because it might fail, the <code>parse</code> method returns a <code>Result</code>                type, much like the
                <code>read_line</code> method does as discussed earlier in “Handling Potential Failure with the Result Type” on page XX. We’ll treat this <code>Result</code> the same way by using the <code>expect</code> method again. If <code>parse</code>                returns an <code>Err</code> <code>Result</code> variant because it couldn’t create a number from the string, the <code>expect</code> call will crash the game and print the message we give it. If <code>parse</code> can successfully convert
                the string to a number, it will return the <code>Ok</code> variant of <code>Result</code>, and
                <code>expect</code> will return the number that we want from the <code>Ok</code> value.</p>
            <p>Let’s run the program now!</p>
            <pre><code>$ cargo run
   Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
     Running \`target/guessing_game\`
Guess the number!
The secret number is: 58
Please input your guess.
  76
You guessed: 76
Too big!
</code></pre>
            <p>Nice! Even though spaces were added before the guess, the program still figured out that the user guessed 76. Run the program a few times to verify the different behavior with different kinds of input: guess the number correctly, guess a number
                that is too high, and guess a number that is too low.</p>
            <p>We have most of the game working now, but the user can make only one guess. Let’s change that by adding a loop!</p>
            <a class="header" href="#allowing-multiple-guesses-with-looping" name="allowing-multiple-guesses-with-looping">
                <h2>Allowing Multiple Guesses with Looping</h2>
            </a>
            <p>The <code>loop</code> keyword gives us an infinite loop. Add that now to give users more chances at guessing the number:</p>
            <p><span>Filename: src/main.rs</span></p>
            <pre><code><span>extern</span> <span>crate</span> rand;

<span>use</span> std::io;
<span>use</span> std::cmp::Ordering;
<span>use</span> rand::Rng;

<span><span>fn</span> <span>main</span></span>() {
    <span>println!</span>(<span>"Guess the number!"</span>);

    <span>let</span> secret_number = rand::thread_rng().gen_range(<span>1</span>, <span>101</span>);

    <span>println!</span>(<span>"The secret number is: {}"</span>, secret_number);

    <span>loop</span> {
        <span>println!</span>(<span>"Please input your guess."</span>);

        <span>let</span> <span>mut</span> guess = <span>String</span>::new();

        io::stdin().read_line(&amp;<span>mut</span> guess)
            .expect(<span>"Failed to read line"</span>);

        <span>let</span> guess: <span>u32</span> = guess.trim().parse()
            .expect(<span>"Please type a number!"</span>);

        <span>println!</span>(<span>"You guessed: {}"</span>, guess);

        <span>match</span> guess.cmp(&amp;secret_number) {
            Ordering::Less    =&gt; <span>println!</span>(<span>"Too small!"</span>),
            Ordering::Greater =&gt; <span>println!</span>(<span>"Too big!"</span>),
            Ordering::Equal   =&gt; <span>println!</span>(<span>"You win!"</span>),
        }
    }
}
</code></pre>
            <p>As you can see, we’ve moved everything into a loop from the guess input prompt onward. Be sure to indent those lines another four spaces each, and run the program again. Notice that there is a new problem because the program is doing exactly
                what we told it to do: ask for another guess forever! It doesn’t seem like the user can quit!</p>
            <p>The user could always halt the program by using the keyboard shortcut <code>Ctrl-C</code>. But there’s another way to escape this insatiable monster that we mentioned in the <code>parse</code> discussion in “Comparing the Guesses” on page
                XX: if the user enters a non-number answer, the program will crash. The user can take advantage of that in order to quit, as shown here:</p>
            <pre><code>$ cargo run
   Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
     Running \`target/guessing_game\`
Guess the number!
The secret number is: 59
Please input your guess.
45
You guessed: 45
Too small!
Please input your guess.
60
You guessed: 60
Too big!
Please input your guess.
59
You guessed: 59
You win!
Please input your guess.
quit
thread 'main' panicked at 'Please type a number!: ParseIntError { kind: InvalidDigit }', src/libcore/result.rs:785
note: Run with \`RUST_BACKTRACE=1\` for a backtrace.
error: Process didn't exit successfully: \`target/debug/guess\` (exit code: 101)
</code></pre>
            <p>Typing <code>quit</code> actually quits the game, but so will any other non-number input. However, this is suboptimal to say the least. We want the game to automatically stop when the correct number is guessed.</p>
            <h3>Quitting After a Correct Guess</h3>
            <p>Let’s program the game to quit when the user wins by adding a <code>break</code>:</p>
            <p><span>Filename: src/main.rs</span></p>
            <pre><code><span>extern</span> <span>crate</span> rand;

<span>use</span> std::io;
<span>use</span> std::cmp::Ordering;
<span>use</span> rand::Rng;

<span><span>fn</span> <span>main</span></span>() {
    <span>println!</span>(<span>"Guess the number!"</span>);

    <span>let</span> secret_number = rand::thread_rng().gen_range(<span>1</span>, <span>101</span>);

    <span>println!</span>(<span>"The secret number is: {}"</span>, secret_number);

    <span>loop</span> {
        <span>println!</span>(<span>"Please input your guess."</span>);

        <span>let</span> <span>mut</span> guess = <span>String</span>::new();

        io::stdin().read_line(&amp;<span>mut</span> guess)
            .expect(<span>"Failed to read line"</span>);

        <span>let</span> guess: <span>u32</span> = guess.trim().parse()
            .expect(<span>"Please type a number!"</span>);

        <span>println!</span>(<span>"You guessed: {}"</span>, guess);

        <span>match</span> guess.cmp(&amp;secret_number) {
            Ordering::Less    =&gt; <span>println!</span>(<span>"Too small!"</span>),
            Ordering::Greater =&gt; <span>println!</span>(<span>"Too big!"</span>),
            Ordering::Equal   =&gt; {
                <span>println!</span>(<span>"You win!"</span>);
                <span>break</span>;
            }
        }
    }
}
</code></pre>
            <p>By adding the <code>break</code> line after <code>You win!</code>, the program will exit the loop when the user guesses the secret number correctly. Exiting the loop also means exiting the program, because the loop is the last part of <code>main</code>.</p>
            <a class="header" href="#handling-invalid-input" name="handling-invalid-input">
                <h3>Handling Invalid Input</h3>
            </a>
            <p>To further refine the game’s behavior, rather than crashing the program when the user inputs a non-number, let’s make the game ignore a non-number so the user can continue guessing. We can do that by altering the line where <code>guess</code>                is converted from a <code>String</code> to a <code>u32</code>:</p>
            <pre><code><span>let</span> guess: <span>u32</span> = <span>match</span> guess.trim().parse() {
    <span class="hljs-literal">Ok</span>(num) =&gt; num,
    <span class="hljs-literal">Err</span>(_) =&gt; <span>continue</span>,
};
</code></pre>
            <p>Switching from an <code>expect</code> call to a <code>match</code> expression is how you generally move from crash on error to actually handling the error. Remember that <code>parse</code> returns a
                <code>Result</code> type, and <code>Result</code> is an enum that has the variants <code>Ok</code> or
                <code>Err</code>. We’re using a <code>match</code> expression here, like we did with the <code>Ordering</code> result of the <code>cmp</code> method.</p>
            <p>If <code>parse</code> is able to successfully turn the string into a number, it will return an <code>Ok</code> value that contains the resulting number. That <code>Ok</code> value will match the first arm’s pattern, and the <code>match</code>                expression will just return the <code>num</code> value that <code>parse</code> produced and put inside the <code>Ok</code> value. That number will end up right where we want it in the new <code>guess</code> variable we’re creating.</p>
            <p>If <code>parse</code> is <em>not</em> able to turn the string into a number, it will return an
                <code>Err</code> value that contains more information about the error. The <code>Err</code> value does not match the <code>Ok(num)</code> pattern in the first <code>match</code> arm, but it does match the <code>Err(_)</code> pattern in
                the second arm. The <code>_</code> is a catchall value; in this example, we’re saying we want to match all <code>Err</code> values, no matter what information they have inside them. So the program will execute the second arm’s code, <code>continue</code>,
                which means to go to the next iteration of the <code>loop</code> and ask for another guess. So effectively, the program ignores all errors that <code>parse</code> might encounter!</p>
            <p>Now everything in the program should work as expected. Let’s try it by running
                <code>cargo run</code>:</p>
            <pre><code>$ cargo run
   Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
     Running \`target/guessing_game\`
Guess the number!
The secret number is: 61
Please input your guess.
10
You guessed: 10
Too small!
Please input your guess.
99
You guessed: 99
Too big!
Please input your guess.
foo
Please input your guess.
61
You guessed: 61
You win!
</code></pre>
            <p>Awesome! With one tiny final tweak, we will finish the guessing game: recall that the program is still printing out the secret number. That worked well for testing, but it ruins the game. Let’s delete the <code>println!</code> that outputs
                the secret number. Listing 2-5 shows the final code:</p>
            <figure>
                <span>Filename: src/main.rs</span>
                <pre><code><span>extern</span> <span>crate</span> rand;

<span>use</span> std::io;
<span>use</span> std::cmp::Ordering;
<span>use</span> rand::Rng;

<span><span>fn</span> <span>main</span></span>() {
    <span>println!</span>(<span>"Guess the number!"</span>);

    <span>let</span> secret_number = rand::thread_rng().gen_range(<span>1</span>, <span>101</span>);

    <span>loop</span> {
        <span>println!</span>(<span>"Please input your guess."</span>);

        <span>let</span> <span>mut</span> guess = <span>String</span>::new();

        io::stdin().read_line(&amp;<span>mut</span> guess)
            .expect(<span>"Failed to read line"</span>);

        <span>let</span> guess: <span>u32</span> = <span>match</span> guess.trim().parse() {
            <span class="hljs-literal">Ok</span>(num) =&gt; num,
            <span class="hljs-literal">Err</span>(_) =&gt; <span>continue</span>,
        };

        <span>println!</span>(<span>"You guessed: {}"</span>, guess);

        <span>match</span> guess.cmp(&amp;secret_number) {
            Ordering::Less    =&gt; <span>println!</span>(<span>"Too small!"</span>),
            Ordering::Greater =&gt; <span>println!</span>(<span>"Too big!"</span>),
            Ordering::Equal   =&gt; {
                <span>println!</span>(<span>"You win!"</span>);
                <span>break</span>;
            }
        }
    }
}
</code></pre>
                <figcaption>
                    <p>Listing 2-5: Complete code of the guessing game</p>
                </figcaption>
            </figure>
            <a class="header" href="#summary" name="summary">
                <h2>Summary</h2>
            </a>
            <p>At this point, you’ve successfully built the guessing game! Congratulations!</p>
            <p>This project was a hands-on way to introduce you to many new Rust concepts:
                <code>let</code>, <code>match</code>, methods, associated functions, using external crates, and more. In the next few chapters, you’ll learn about these concepts in more detail. Chapter 3 covers concepts that most programming languages
                have, such as variables, data types, and functions, and shows how to use them in Rust. Chapter 4 explores ownership, which is a Rust feature that is most different from other languages. Chapter 5 discusses structs and method syntax, and
                Chapter 6 endeavors to explain enums.</p>
        `,
    "concepts": `
                    <a class="header" href="#common-programming-concepts" name="common-programming-concepts"><h1>Common Programming Concepts</h1></a>
<p>This chapter covers concepts that appear in almost every programming language
and how they work in Rust. Many programming languages have much in common at
their core. None of the concepts presented in this chapter are unique to Rust,
but we’ll discuss them in the context of Rust and explain their conventions.</p>
<p>Specifically, you’ll learn about variables, basic types, functions, comments,
and control flow. These foundations will be in every Rust program, and learning
them early will give you a strong core to start from.</p>
<!-- PROD: START BOX -->
<blockquote>
<a class="header" href="#keywords" name="keywords"><h3>Keywords</h3></a>
<p>The Rust language has a set of <em>keywords</em> that have been reserved for use by
the language only, much like other languages do. Keep in mind that you cannot
use these words as names of variables or functions. Most of the keywords have
special meanings, and you’ll be using them to do various tasks in your Rust
programs; a few have no current functionality associated with them but have
been reserved for functionality that might be added to Rust in the future. You
can find a list of the keywords in Appendix A.</p>
</blockquote>
<!-- PROD: END BOX -->

                `,
    "variables": `
        <a class="header" href="#variables-and-mutability" name="variables-and-mutability"><h2>Variables and Mutability</h2></a>
<p>As mentioned in Chapter 2, by default variables are <em>immutable</em>. This is one of
many nudges in Rust that encourages you to write your code in a way that takes
advantage of the safety and easy concurrency that Rust offers. However, you
still have the option to make your variables mutable. Let’s explore how and why
Rust encourages you to favor immutability, and why you might want to opt out.</p>
<p>When a variable is immutable, that means once a value is bound to a name, you
can’t change that value. To illustrate, let’s generate a new project called
<em>variables</em> in your <em>projects</em> directory by using <code class="hljs">cargo new --bin variables</code>.</p>
<p>Then, in your new <em>variables</em> directory, open <em>src/main.rs</em> and replace its
code with the following:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust,ignore hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> x = <span class="hljs-number">5</span>;
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">"The value of x is: {}"</span>, x);
    x = <span class="hljs-number">6</span>;
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">"The value of x is: {}"</span>, x);
}
</code></pre>
<p>Save and run the program using <code class="hljs">cargo run</code>. You should receive an error
message, as shown in this output:</p>
<pre><code class="language-text hljs">$ cargo run
   Compiling variables v0.0.1 (file:///projects/variables)
error[E0384]: re-assignment of immutable variable \`x\`
 --&gt; src/main.rs:4:5
  |
2 |     let x = 5;
  |         - first assignment to \`x\`
3 |     println!("The value of x is: {}", x);
4 |     x = 6;
  |     ^^^^^ re-assignment of immutable variable
</code></pre>
<p>This example shows how the compiler helps you find errors in your programs.
Even though compiler errors can be frustrating, they only mean your program
isn’t safely doing what you want it to do yet; they do <em>not</em> mean that you’re
not a good programmer! Experienced Rustaceans still get compiler errors. The
error indicates that the cause of the error is <code class="hljs">re-assignment of immutable variable</code>, because we tried to assign a second value to the immutable <code class="hljs">x</code>
variable.</p>
<p>It’s important that we get compile-time errors when we attempt to change a
value that we previously designated as immutable because this very situation
can lead to bugs. If one part of our code operates on the assumption that a
value will never change and another part of our code changes that value, it’s
possible that the first part of the code won’t do what it was designed to do.
This cause of bugs can be difficult to track down after the fact, especially
when the second piece of code changes the value only <em>sometimes</em>.</p>
<p>In Rust the compiler guarantees that when we state that a value won’t change,
it really won’t change. That means that when you’re reading and writing code,
you don’t have to keep track of how and where a value might change, which can
make code easier to reason about.</p>
<p>But mutability can be very useful. Variables are immutable only by default; we
can make them mutable by adding <code class="hljs">mut</code> in front of the variable name. In
addition to allowing this value to change, it conveys intent to future readers
of the code by indicating that other parts of the code will be changing this
variable value.</p>
<p>For example, change <em>src/main.rs</em> to the following:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut</span> x = <span class="hljs-number">5</span>;
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">"The value of x is: {}"</span>, x);
    x = <span class="hljs-number">6</span>;
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">"The value of x is: {}"</span>, x);
}
</code></pre>
<p>When we run this program, we get the following:</p>
<pre><code class="language-text hljs">$ cargo run
   Compiling variables v0.1.0 (file:///projects/variables)
     Running \`target/debug/variables\`
The value of x is: 5
The value of x is: 6
</code></pre>
<p>Using <code class="hljs">mut</code>, we’re allowed to change the value that <code class="hljs">x</code> binds to from <code class="hljs">5</code> to
<code class="hljs">6</code>. In some cases, you’ll want to make a variable mutable because it makes the
code more convenient to write than an implementation that only uses immutable
variables.</p>
<p>There are multiple trade-offs to consider, in addition to the prevention of
bugs. For example, in cases where you’re using large data structures, mutating
an instance in place may be faster than copying and returning newly allocated
instances. With smaller data structures, always creating new instances and
writing in a more functional programming style may be easier to reason about,
so the lower performance penalty might be worth it to gain that clarity.</p>
<a class="header" href="#differences-between-variables-and-constants" name="differences-between-variables-and-constants"><h3>Differences Between Variables and Constants</h3></a>
<p>Not being able to change the value of a variable might have reminded you of
another programming concept that most languages have: <em>constants</em>. Constants
are also values bound to a name that are not allowed to change, but there are a
few differences between constants and variables. First, using <code class="hljs">mut</code> with
constants is not allowed: constants aren't only immutable by default, they're
always immutable. Constants are declared using the <code class="hljs">const</code> keyword instead of
the <code class="hljs">let</code> keyword, and the type of the value <em>must</em> be annotated. We're about
to cover types and type annotations in the next section, “Data Types,” so don't
worry about the details right now. Constants can be declared in any scope,
including the global scope, which makes them useful for a value that many parts
of your code need to know about. The last difference is that constants may only
be set to a constant expression, not the result of a function call or any other
value that could only be used at runtime.</p>
<p>Here's an example of a constant declaration where the constant's name is
<code class="hljs">MAX_POINTS</code> and its value is set to 100,000. Rust constant naming convention
is to use all upper case with underscores between words:</p>
<pre><code class="hljs">const MAX_POINTS: u32 = 100_000;
</code></pre>
<p>Constants are valid for the entire lifetime of a program, within the scope they
were declared in. That makes constants useful for values in your application
domain that multiple part of the program might need to know about, such as the
maximum number of points any player of a game is allowed to earn or the number
of seconds in a year.</p>
<p>Documenting hardcoded values used throughout your program by naming them as
constants is useful to convey the meaning of that value to future maintainers
of the code. It also helps to have only one place in your code that you would
need to change if the hardcoded value needed to be updated in the future.</p>
<a class="header" href="#shadowing" name="shadowing"><h3>Shadowing</h3></a>
<p>As we saw in the guessing game tutorial in Chapter 2, we can declare new
variables with the same name as a previous variables, and the new variable
<em>shadows</em> the previous variable. Rustaceans say that the first variable is
<em>shadowed</em> by the second, which means that the second variable’s value is what
we’ll see when we use the variable. We can shadow a variable by using the same
variable’s name and repeating the use of the <code class="hljs">let</code> keyword as follows:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> x = <span class="hljs-number">5</span>;

    <span class="hljs-keyword">let</span> x = x + <span class="hljs-number">1</span>;

    <span class="hljs-keyword">let</span> x = x * <span class="hljs-number">2</span>;

    <span class="hljs-built_in">println!</span>(<span class="hljs-string">"The value of x is: {}"</span>, x);
}
</code></pre>
<p>This program first binds <code class="hljs">x</code> to a value of <code class="hljs">5</code>. Then it shadows <code class="hljs">x</code> by
repeating <code class="hljs">let x =</code>, taking the original value and adding <code class="hljs">1</code> so the value of
<code class="hljs">x</code> is then <code class="hljs">6</code>. The third <code class="hljs">let</code> statement also shadows <code class="hljs">x</code>, taking the
previous value and multiplying it by <code class="hljs">2</code> to give <code class="hljs">x</code> a final value of <code class="hljs">12</code>.
When you run this program, it will output the following:</p>
<pre><code class="language-text hljs">$ cargo run
   Compiling variables v0.1.0 (file:///projects/variables)
     Running \`target/debug/variables\`
The value of x is: 12
</code></pre>
<p>This is different than marking a variable as <code class="hljs">mut</code>, because unless we use the
<code class="hljs">let</code> keyword again, we’ll get a compile-time error if we accidentally try to
reassign to this variable. We can perform a few transformations on a value but
have the variable be immutable after those transformations have been completed.</p>
<p>The other difference between <code class="hljs">mut</code> and shadowing is that because we’re
effectively creating a new variable when we use the <code class="hljs">let</code> keyword again, we can
change the type of the value, but reuse the same name. For example, say our
program asks a user to show how many spaces they want between some text by
inputting space characters, but we really want to store that input as a number:</p>
<pre><code class="language-rust hljs"><span class="hljs-keyword">let</span> spaces = <span class="hljs-string">"   "</span>;
<span class="hljs-keyword">let</span> spaces = spaces.len();
</code></pre>
<p>This construct is allowed because the first <code class="hljs">spaces</code> variable is a string type,
and the second <code class="hljs">spaces</code> variable, which is a brand-new variable that happens to
have the same name as the first one, is a number type. Shadowing thus spares us
from having to come up with different names, like <code class="hljs">spaces_str</code> and
<code class="hljs">spaces_num</code>; instead, we can reuse the simpler <code class="hljs">spaces</code> name. However, if we
try to use <code class="hljs">mut</code> for this, as shown here:</p>
<pre><code class="language-rust,ignore hljs"><span class="hljs-keyword">let</span> <span class="hljs-keyword">mut</span> spaces = <span class="hljs-string">"   "</span>;
spaces = spaces.len();
</code></pre>
<p>we’ll get a compile-time error because we’re not allowed to mutate a variable’s
type:</p>
<pre><code class="language-text hljs">error[E0308]: mismatched types
 --&gt; src/main.rs:3:14
  |
3 |     spaces = spaces.len();
  |              ^^^^^^^^^^^^ expected &amp;str, found usize
  |
  = note: expected type \`&amp;str\`
  = note:    found type \`usize\`
</code></pre>
<p>Now that we’ve explored how variables work, let’s look at more data types they
can have.</p>

                `,
    "datatypes": `
                    <a class="header" href="#data-types" name="data-types"><h2>Data Types</h2></a>
<p>Every value in Rust is of a certain <em>type</em>, which tells Rust what kind of data
is being specified so it knows how to work with that data. In this section,
we’ll look at a number of types that are built into the language. We split the
types into two subsets: scalar and compound.</p>
<p>Throughout this section, keep in mind that Rust is a <em>statically typed</em>
language, which means that it must know the types of all variables at compile
time. The compiler can usually infer what type we want to use based on the
value and how we use it. In cases when many types are possible, such as when we
converted a <code class="hljs">String</code> to a numeric type using <code class="hljs">parse</code> in Chapter 2, we must add
a type annotation, like this:</p>
<pre><code class="language-rust hljs"><span class="hljs-keyword">let</span> guess: <span class="hljs-keyword">u32</span> = <span class="hljs-string">"42"</span>.parse().expect(<span class="hljs-string">"Not a number!"</span>);
</code></pre>
<p>If we don’t add the type annotation here, Rust will display the following
error, which means the compiler needs more information from us to know which
possible type we want to use:</p>
<pre><code class="language-text hljs">error[E0282]: unable to infer enough type information about \`_\`
 --&gt; src/main.rs:2:5
  |
2 | let guess = "42".parse().expect("Not a number!");
  |     ^^^^^ cannot infer type for \`_\`
  |
  = note: type annotations or generic parameter binding required
</code></pre>
<p>You’ll see different type annotations as we discuss the various data types.</p>
<a class="header" href="#scalar-types" name="scalar-types"><h3>Scalar Types</h3></a>
<p>A <em>scalar</em> type represents a single value. Rust has four primary scalar types:
integers, floating-point numbers, booleans, and characters. You’ll likely
recognize these from other programming languages, but let’s jump into how they
work in Rust.</p>
<a class="header" href="#integer-types" name="integer-types"><h4>Integer Types</h4></a>
<p>An <em>integer</em> is a number without a fractional component. We used one integer
type earlier in this chapter, the <code class="hljs">i32</code> type. This type declaration indicates
that the value it’s associated with should be a signed integer (hence the <code class="hljs">i</code>,
as opposed to a <code class="hljs">u</code> for unsigned) for a 32-bit system. Table 3-1 shows the
built-in integer types in Rust. Each variant in the Signed and Unsigned columns
(for example, <em>i32</em>) can be used to declare the type of an integer value.</p>
<figure>
<figcaption>
<p>Table 3-1: Integer Types in Rust</p>
</figcaption>
<table><thead><tr><td> Length </td><td> Signed </td><td> Unsigned </td></tr></thead>
<tbody><tr><td> 8-bit  </td><td> i8     </td><td> u8       </td></tr>
<tr><td> 16-bit </td><td> i16    </td><td> u16      </td></tr>
<tr><td> 32-bit </td><td> i32    </td><td> u32      </td></tr>
<tr><td> 64-bit </td><td> i64    </td><td> u64      </td></tr>
<tr><td> arch   </td><td> isize  </td><td> usize    </td></tr>
</tbody></table>
</figure>
<p>Each variant can be either signed or unsigned and has an explicit size.
Signed and unsigned refers to whether it’s possible for the number to be
negative or positive; in other words, whether the number needs to have a sign
with it (signed) or whether it will only ever be positive and can therefore be
represented without a sign (unsigned). It’s like writing numbers on paper: when
the sign matters, a number is shown with a plus sign or a minus sign; however,
when it’s safe to assume the number is positive, it’s shown with no sign.
Signed numbers are stored using two’s complement representation (if you’re
unsure what this is, you can search for it online; an explanation is outside
the scope of this book).</p>
<p>Each signed variant can store numbers from -(2<sup>n - 1</sup>) to 2<sup>n -
1</sup> - 1 inclusive, where <code class="hljs">n</code> is the number of bits that variant uses. So an
<code class="hljs">i8</code> can store numbers from -(2<sup>7</sup>) to 2<sup>7</sup> - 1, which equals
-128 to 127. Unsigned variants can store numbers from 0 to 2<sup>n</sup> - 1,
so a <code class="hljs">u8</code> can store numbers from 0 to 2<sup>8</sup> - 1, which equals 0 to 255.</p>
<p>Additionally, the <code class="hljs">isize</code> and <code class="hljs">usize</code> types depend on the kind of computer your
program is running on: 64-bits if you’re on a 64-bit architecture and 32-bits
if you’re on a 32-bit architecture.</p>
<p>You can write integer literals in any of the forms shown in Table 3-2. Note
that all number literals except the byte literal allow a type suffix, such as
<code class="hljs">57u8</code>, and <code class="hljs">_</code> as a visual separator, such as <code class="hljs">1_000</code>.</p>
<figure>
<figcaption>
<p>Table 3-2: Integer Literals in Rust</p>
</figcaption>
<table><thead><tr><td> Number literals  </td><td> Example       </td></tr></thead>
<tbody><tr><td> Decimal          </td><td> <code class="hljs">98_222</code>      </td></tr>
<tr><td> Hex              </td><td> <code class="hljs">0xff</code>        </td></tr>
<tr><td> Octal            </td><td> <code class="hljs">0o77</code>        </td></tr>
<tr><td> Binary           </td><td> <code class="hljs">0b1111_0000</code> </td></tr>
<tr><td> Byte (<code class="hljs">u8</code> only) </td><td> <code class="hljs">b'A'</code>        </td></tr>
</tbody></table>
</figure>
<p>So how do you know which type of integer to use? If you’re unsure, Rust’s
defaults are generally good choices, and integer types default to <code class="hljs">i32</code>: it’s
generally the fastest, even on 64-bit systems. The primary situation in which
you’d use <code class="hljs">isize</code> or <code class="hljs">usize</code> is when indexing some sort of collection.</p>
<a class="header" href="#floating-point-types" name="floating-point-types"><h4>Floating-Point Types</h4></a>
<p>Rust also has two primitive types for <em>floating-point numbers</em>, which are
numbers with decimal points. Rust’s floating-point types are <code class="hljs">f32</code> and <code class="hljs">f64</code>,
which are 32 bits and 64 bits in size, respectively. The default type is <code class="hljs">f64</code>
because it’s roughly the same speed as <code class="hljs">f32</code> but is capable of more precision.
It’s possible to use an <code class="hljs">f64</code> type on 32-bit systems, but it will be slower
than using an <code class="hljs">f32</code> type on those systems. Most of the time, trading potential
worse performance for better precision is a reasonable initial choice, and you
should benchmark your code if you suspect floating-point size is a problem in
your situation.</p>
<p>Here’s an example that shows floating-point numbers in action:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> x = <span class="hljs-number">2.0</span>; <span class="hljs-comment">// f64</span>

    <span class="hljs-keyword">let</span> y: <span class="hljs-keyword">f32</span> = <span class="hljs-number">3.0</span>; <span class="hljs-comment">// f32</span>
}
</code></pre>
<p>Floating-point numbers are represented according to the IEEE-754 standard. The
<code class="hljs">f32</code> type is a single-precision float, and <code class="hljs">f64</code> has double precision.</p>
<a class="header" href="#numeric-operations" name="numeric-operations"><h4>Numeric Operations</h4></a>
<p>Rust supports the usual basic mathematic operations you’d expect for all of the
number types: addition, subtraction, multiplication, division, and remainder.
The following code shows how you’d use each one in a <code class="hljs">let</code> statement:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-comment">// addition</span>
    <span class="hljs-keyword">let</span> sum = <span class="hljs-number">5</span> + <span class="hljs-number">10</span>;

    <span class="hljs-comment">// subtraction</span>
    <span class="hljs-keyword">let</span> difference = <span class="hljs-number">95.5</span> - <span class="hljs-number">4.3</span>;

    <span class="hljs-comment">// multiplication</span>
    <span class="hljs-keyword">let</span> product = <span class="hljs-number">4</span> * <span class="hljs-number">30</span>;

    <span class="hljs-comment">// division</span>
    <span class="hljs-keyword">let</span> quotient = <span class="hljs-number">56.7</span> / <span class="hljs-number">32.2</span>;

    <span class="hljs-comment">// remainder</span>
    <span class="hljs-keyword">let</span> remainder = <span class="hljs-number">43</span> % <span class="hljs-number">5</span>;
}
</code></pre>
<p>Each expression in these statements uses a mathematical operator and evaluates
to a single value, which is then bound to a variable. Appendix B contains a
list of all operators that Rust provides.</p>
<a class="header" href="#the-boolean-type" name="the-boolean-type"><h4>The Boolean Type</h4></a>
<p>As in most other programming languages, a boolean type in Rust has two possible
values: <code class="hljs">true</code> and <code class="hljs">false</code>. The boolean type in Rust is specified using <code class="hljs">bool</code>.
For example:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> t = <span class="hljs-literal">true</span>;

    <span class="hljs-keyword">let</span> f: <span class="hljs-keyword">bool</span> = <span class="hljs-literal">false</span>; <span class="hljs-comment">// with explicit type annotation</span>
}
</code></pre>
<p>The main way to consume boolean values is through conditionals, such as an <code class="hljs">if</code>
statement. We’ll cover how <code class="hljs">if</code> statements work in Rust in the “Control Flow”
section.</p>
<a class="header" href="#the-character-type" name="the-character-type"><h4>The Character Type</h4></a>
<p>So far we’ve only worked with numbers, but Rust supports letters too. Rust’s
<code class="hljs">char</code> type is the language’s most primitive alphabetic type, and the following
code shows one way to use it:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
   <span class="hljs-keyword">let</span> c = <span class="hljs-string">'z'</span>;
   <span class="hljs-keyword">let</span> z = <span class="hljs-string">'ℤ'</span>;
   <span class="hljs-keyword">let</span> heart_eyed_cat = '😻';
}
</code></pre>
<p>Rust’s <code class="hljs">char</code> type represents a Unicode Scalar Value, which means it can
represent a lot more than just ASCII. Accented letters, Chinese/Japanese/Korean
ideographs, emoji, and zero width spaces are all valid <code class="hljs">char</code> types in Rust.
Unicode Scalar Values range from <code class="hljs">U+0000</code> to <code class="hljs">U+D7FF</code> and <code class="hljs">U+E000</code> to
<code class="hljs">U+10FFFF</code> inclusive. However, a “character” isn’t really a concept in Unicode,
so your human intuition for what a “character” is may not match up with what a
<code class="hljs">char</code> is in Rust. We’ll discuss this topic in detail in the “Strings” section
in Chapter 8.</p>
<a class="header" href="#compound-types" name="compound-types"><h3>Compound Types</h3></a>
<p><em>Compound types</em> can group multiple values of other types into one type. Rust
has two primitive compound types: tuples and arrays.</p>
<a class="header" href="#grouping-values-into-tuples" name="grouping-values-into-tuples"><h4>Grouping Values into Tuples</h4></a>
<p>A tuple is a general way of grouping together some number of other values with
a variety of types into one compound type.</p>
<p>We create a tuple by writing a comma-separated list of values inside
parentheses. Each position in the tuple has a type, and the types of the
different values in the tuple don’t have to be the same. We’ve added optional
type annotations in this example:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> tup: (<span class="hljs-keyword">i32</span>, <span class="hljs-keyword">f64</span>, <span class="hljs-keyword">u8</span>) = (<span class="hljs-number">500</span>, <span class="hljs-number">6.4</span>, <span class="hljs-number">1</span>);
}
</code></pre>
<p>The variable <code class="hljs">tup</code> binds to the entire tuple, since a tuple is considered a
single compound element. To get the individual values out of a tuple, we can
use pattern matching to destructure a tuple value, like this:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> tup = (<span class="hljs-number">500</span>, <span class="hljs-number">6.4</span>, <span class="hljs-number">1</span>);

    <span class="hljs-keyword">let</span> (x, y, z) = tup;

    <span class="hljs-built_in">println!</span>(<span class="hljs-string">"The value of y is: {}"</span>, y);
}
</code></pre>
<p>This program first creates a tuple and binds it to the variable <code class="hljs">tup</code>. It then
uses a pattern with <code class="hljs">let</code> to take <code class="hljs">tup</code> and turn it into three separate
variables, <code class="hljs">x</code>, <code class="hljs">y</code>, and <code class="hljs">z</code>. This is called <em>destructuring</em>, because it breaks
the single tuple into three parts. Finally, the program prints the value of
<code class="hljs">y</code>, which is <code class="hljs">6.4</code>.</p>
<p>In addition to destructuring through pattern matching, we can also access a
tuple element directly by using a period (<code class="hljs">.</code>) followed by the index of the
value we want to access. For example:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> x: (<span class="hljs-keyword">i32</span>, <span class="hljs-keyword">f64</span>, <span class="hljs-keyword">u8</span>) = (<span class="hljs-number">500</span>, <span class="hljs-number">6.4</span>, <span class="hljs-number">1</span>);

    <span class="hljs-keyword">let</span> five_hundred = x.<span class="hljs-number">0</span>;

    <span class="hljs-keyword">let</span> six_point_four = x.<span class="hljs-number">1</span>;

    <span class="hljs-keyword">let</span> one = x.<span class="hljs-number">2</span>;
}
</code></pre>
<p>This program creates a tuple, <code class="hljs">x</code>, and then makes new variables for each
element by using their index. As with most programming languages, the first
index in a tuple is 0.</p>
<a class="header" href="#arrays" name="arrays"><h4>Arrays</h4></a>
<p>Another way to have a collection of multiple values is with an <em>array</em>. Unlike
a tuple, every element of an array must have the same type. Arrays in Rust are
different than arrays in some other languages because arrays in Rust have a
fixed length: once declared, they cannot grow or shrink in size.</p>
<p>In Rust, the values going into an array are written as a comma-separated list
inside square brackets:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> a = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>];
}
</code></pre>
<p>Arrays are useful when you want your data allocated on the stack rather than
the heap (we will discuss the stack and the heap more in Chapter 4), or when
you want to ensure you always have a fixed number of elements. They aren’t as
flexible as the vector type, though. The vector type is a similar collection
type provided by the standard library that <em>is</em> allowed to grow or shrink in
size. If you’re unsure whether to use an array or a vector, you should probably
use a vector: Chapter 8 discusses vectors in more detail.</p>
<p>An example of when you might want to use an array rather than a vector is in a
program that needs to know the names of the months of the year. It’s very
unlikely that such a program will need to add or remove months, so you can use
an array because you know it will always contain 12 items:</p>
<pre><code class="language-rust hljs"><span class="hljs-keyword">let</span> months = [<span class="hljs-string">"January"</span>, <span class="hljs-string">"February"</span>, <span class="hljs-string">"March"</span>, <span class="hljs-string">"April"</span>, <span class="hljs-string">"May"</span>, <span class="hljs-string">"June"</span>, <span class="hljs-string">"July"</span>,
              <span class="hljs-string">"August"</span>, <span class="hljs-string">"September"</span>, <span class="hljs-string">"October"</span>, <span class="hljs-string">"November"</span>, <span class="hljs-string">"December"</span>];
</code></pre>
<a class="header" href="#accessing-array-elements" name="accessing-array-elements"><h5>Accessing Array Elements</h5></a>
<p>An array is a single chunk of memory allocated on the stack. We can access
elements of an array using indexing, like this:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> a = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>];

    <span class="hljs-keyword">let</span> first = a[<span class="hljs-number">0</span>];
    <span class="hljs-keyword">let</span> second = a[<span class="hljs-number">1</span>];
}
</code></pre>
<p>In this example, the variable named <code class="hljs">first</code> will get the value <code class="hljs">1</code>, because
that is the value at index <code class="hljs">[0]</code> in the array. The variable named <code class="hljs">second</code> will
get the value <code class="hljs">2</code> from index <code class="hljs">[1]</code> in the array.</p>
<a class="header" href="#invalid-array-element-access" name="invalid-array-element-access"><h5>Invalid Array Element Access</h5></a>
<p>What happens if we try to access an element of an array that is past the end of
the array? Say we change the example to the following:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust,ignore hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> a = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>];

    <span class="hljs-keyword">let</span> element = a[<span class="hljs-number">10</span>];

    <span class="hljs-built_in">println!</span>(<span class="hljs-string">"The value of element is: {}"</span>, element);
}
</code></pre>
<p>Running this code using <code class="hljs">cargo run</code> produces the following result:</p>
<pre><code class="language-text hljs">$ cargo run
   Compiling arrays v0.1.0 (file:///projects/arrays)
     Running \`target/debug/arrays\`
thread '&lt;main&gt;' panicked at 'index out of bounds: the len is 5 but the index is
 10', src/main.rs:4
note: Run with \`RUST_BACKTRACE=1\` for a backtrace.
error: Process didn't exit successfully: \`target/debug/arrays\` (exit code: 101)
</code></pre>
<p>The compilation didn’t produce any errors, but the program results in a
<em>runtime</em> error and didn’t exit successfully. When you attempt to access an
element using indexing, Rust will check that the index you’ve specified is less
than the array length. If the index is greater than the length, Rust will
<em>panic</em>, which is the term Rust uses when a program exits with an error.</p>
<p>This is the first example of Rust’s safety principles in action. In many
low-level languages, this kind of check is not done, and when you provide an
incorrect index, invalid memory can be accessed. Rust protects you against this
kind of error by immediately exiting instead of allowing the memory access and
continuing. Chapter 9 discusses more of Rust’s error handling.</p>

                `,
    "functions": `
                    <a class="header" href="#how-functions-work" name="how-functions-work"><h2>How Functions Work</h2></a>
<p>Functions are pervasive in Rust code. You’ve already seen one of the most
important functions in the language: the <code class="hljs">main</code> function, which is the entry
point of many programs. You’ve also seen the <code class="hljs">fn</code> keyword, which allows you to
declare new functions.</p>
<p>Rust code uses <em>snake case</em> as the conventional style for function and variable
names. In snake case, all letters are lowercase and underscores separate words.
Here’s a program that contains an example function definition:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">"Hello, world!"</span>);

    another_function();
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">another_function</span></span>() {
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">"Another function."</span>);
}
</code></pre>
<p>Function definitions in Rust start with <code class="hljs">fn</code> and have a set of parentheses
after the function name. The curly braces tell the compiler where the function
body begins and ends.</p>
<p>We can call any function we’ve defined by entering its name followed by a set
of parentheses. Because <code class="hljs">another_function</code> is defined in the program, it can be
called from inside the <code class="hljs">main</code> function. Note that we defined <code class="hljs">another_function</code>
<em>after</em> the <code class="hljs">main</code> function in the source code; we could have defined it before
as well. Rust doesn’t care where you define your functions, only that they’re
defined somewhere.</p>
<p>Let’s start a new binary project named <em>functions</em> to explore functions
further. Place the <code class="hljs">another_function</code> example in <em>src/main.rs</em> and run it. You
should see the following output:</p>
<pre><code class="language-text hljs">$ cargo run
   Compiling functions v0.1.0 (file:///projects/functions)
     Running \`target/debug/functions\`
Hello, world!
Another function.
</code></pre>
<p>The lines execute in the order in which they appear in the <code class="hljs">main</code> function.
First, the “Hello, world!” message prints, and then <code class="hljs">another_function</code> is
called and its message is printed.</p>
<a class="header" href="#function-parameters" name="function-parameters"><h3>Function Parameters</h3></a>
<p>Functions can also be defined to have <em>parameters</em>, which are special variables
that are part of a function's signature. When a function has parameters, we can
provide it with concrete values for those parameters. Technically, the concrete
values are called <em>arguments</em>, but in casual conversation people tend to use
the words "parameter" and "argument" interchangeably for either the variables in
a function's definition or the concrete values passed in when you call a
function.</p>
<p>The following rewritten version of <code class="hljs">another_function</code> shows what parameters
look like in Rust:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    another_function(<span class="hljs-number">5</span>);
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">another_function</span></span>(x: <span class="hljs-keyword">i32</span>) {
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">"The value of x is: {}"</span>, x);
}
</code></pre>
<p>Try running this program; you should get the following output:</p>
<pre><code class="language-text hljs">$ cargo run
   Compiling functions v0.1.0 (file:///projects/functions)
     Running \`target/debug/functions\`
The value of x is: 5
</code></pre>
<p>The declaration of <code class="hljs">another_function</code> has one parameter named <code class="hljs">x</code>. The type of
<code class="hljs">x</code> is specified as <code class="hljs">i32</code>. When <code class="hljs">5</code> is passed to <code class="hljs">another_function</code>, the
<code class="hljs">println!</code> macro puts <code class="hljs">5</code> where the pair of curly braces were in the format
string.</p>
<p>In function signatures, you <em>must</em> declare the type of each parameter. This is
a deliberate decision in Rust’s design: requiring type annotations in function
definitions means the compiler almost never needs you to use them elsewhere in
the code to figure out what you mean.</p>
<p>When you want a function to have multiple parameters, separate the parameter
declarations with commas, like this:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    another_function(<span class="hljs-number">5</span>, <span class="hljs-number">6</span>);
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">another_function</span></span>(x: <span class="hljs-keyword">i32</span>, y: <span class="hljs-keyword">i32</span>) {
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">"The value of x is: {}"</span>, x);
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">"The value of y is: {}"</span>, y);
}
</code></pre>
<p>This example creates a function with two parameters, both of which are <code class="hljs">i32</code>
types. The function then prints out the values in both of its parameters. Note
that function parameters don't all need to be the same type - they just happen
to be in this example.</p>
<p>Let’s try running this code. Replace the program currently in your <em>function</em>
project’s <em>src/main.rs</em> file with the preceding example, and run it using
<code class="hljs">cargo run</code>:</p>
<pre><code class="language-text hljs">$ cargo run
   Compiling functions v0.1.0 (file:///projects/functions)
     Running \`target/debug/functions\`
The value of x is: 5
The value of y is: 6
</code></pre>
<p>Because we called the function with <code class="hljs">5</code> as the value for <code class="hljs">x</code> and <code class="hljs">6</code> as the
value for <code class="hljs">y</code>, the two strings are printed using those values.</p>
<a class="header" href="#function-bodies" name="function-bodies"><h3>Function Bodies</h3></a>
<p>Function bodies are made up of a series of statements optionally ending in an
expression. So far, we’ve only covered functions without an ending expression,
but we have seen expressions as parts of statements. Because Rust is an
expression-based language, this is an important distinction to understand.
Other languages don’t have the same distinctions, so let’s look at what
statements and expressions are and how their differences affect the bodies of
functions.</p>
<a class="header" href="#statements-and-expressions" name="statements-and-expressions"><h3>Statements and Expressions</h3></a>
<p>We’ve actually already used statements and expressions. <em>Statements</em> are
instructions that perform some action and do not return a value. <em>Expressions</em>
evaluate to a resulting value. Let’s look at some examples.</p>
<p>Creating a variable and assigning a value to it with the <code class="hljs">let</code> keyword is a
statement. In Listing 3-3, <code class="hljs">let y = 6;</code> is a statement:</p>
<figure>
<span class="filename">Filename: src/main.rs</span>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> y = <span class="hljs-number">6</span>;
}
</code></pre>
<figcaption>
<p>Listing 3-3: A <code class="hljs">main</code> function declaration containing one statement.</p>
</figcaption>
</figure>
<p>Function definitions are also statements; the entire preceding example is a
statement in itself.</p>
<p>Statements do not return values. Therefore, you can’t assign a <code class="hljs">let</code> statement
to another variable, as the following code tries to do:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust,ignore hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> x = (<span class="hljs-keyword">let</span> y = <span class="hljs-number">6</span>);
}
</code></pre>
<p>When you run this program, you’ll get an error like this:</p>
<pre><code class="language-text hljs">$ cargo run
   Compiling functions v0.1.0 (file:///projects/functions)
error: expected expression, found statement (\`let\`)
 --&gt; src/main.rs:2:14
  |
2 |     let x = (let y = 6);
  |              ^^^
  |
  = note: variable declaration using \`let\` is a statement
</code></pre>
<p>The <code class="hljs">let y = 6</code> statement does not return a value, so there isn’t anything for
<code class="hljs">x</code> to bind to. This is different than in other languages, such as C and Ruby,
where the assignment returns the value of the assignment. In those languages,
you can write <code class="hljs">x = y = 6</code> and have both <code class="hljs">x</code> and <code class="hljs">y</code> have the value <code class="hljs">6</code>; that is
not the case in Rust.</p>
<p>Expressions evaluate to something and make up most of the rest of the code that
you’ll write in Rust. Consider a simple math operation, such as <code class="hljs">5 + 6</code>, which
is an expression that evaluates to the value <code class="hljs">11</code>. Expressions can be part of
statements: in Listing 3-3 that had the statement <code class="hljs">let y = 6;</code>, <code class="hljs">6</code> is an
expression that evaluates to the value <code class="hljs">6</code>. Calling a function is an
expression. Calling a macro is an expression. The block that we use to create
new scopes, <code class="hljs">{}</code>, is an expression, for example:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> x = <span class="hljs-number">5</span>;

    <span class="hljs-keyword">let</span> y = {
        <span class="hljs-keyword">let</span> x = <span class="hljs-number">3</span>;
        x + <span class="hljs-number">1</span>
    };

    <span class="hljs-built_in">println!</span>(<span class="hljs-string">"The value of y is: {}"</span>, y);
}
</code></pre>
<p>This expression:</p>
<pre><code class="language-rust,ignore hljs">{
    <span class="hljs-keyword">let</span> x = <span class="hljs-number">3</span>;
    x + <span class="hljs-number">1</span>
}
</code></pre>
<p>is a block that, in this case, evaluates to <code class="hljs">4</code>. That value gets bound to <code class="hljs">y</code>
as part of the <code class="hljs">let</code> statement. Note the line without a semicolon at the end,
unlike most of the lines you’ve seen so far. Expressions do not include ending
semicolons. If you add a semicolon to the end of an expression, you turn it
into a statement, which will then not return a value. Keep this in mind as you
explore function return values and expressions next.</p>
<a class="header" href="#functions-with-return-values" name="functions-with-return-values"><h3>Functions with Return Values</h3></a>
<p>Functions can return values to the code that calls them. We don’t name return
values, but we do declare their type after an arrow (<code class="hljs">-&gt;</code>). In Rust, the return
value of the function is synonymous with the value of the final expression in
the block of the body of a function. Here’s an example of a function that
returns a value:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">five</span></span>() -&gt; <span class="hljs-keyword">i32</span> {
    <span class="hljs-number">5</span>
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> x = five();

    <span class="hljs-built_in">println!</span>(<span class="hljs-string">"The value of x is: {}"</span>, x);
}
</code></pre>
<p>There are no function calls, macros, or even <code class="hljs">let</code> statements in the <code class="hljs">five</code>
function—just the number <code class="hljs">5</code> by itself. That’s a perfectly valid function in
Rust. Note that the function’s return type is specified, too, as <code class="hljs">-&gt; i32</code>. Try
running this code; the output should look like this:</p>
<pre><code class="language-text hljs">$ cargo run
   Compiling functions v0.1.0 (file:///projects/functions)
     Running \`target/debug/functions\`
The value of x is: 5
</code></pre>
<p>The <code class="hljs">5</code> in <code class="hljs">five</code> is the function’s return value, which is why the return type
is <code class="hljs">i32</code>. Let’s examine this in more detail. There are two important bits:
first, the line <code class="hljs">let x = five();</code> shows that we’re using the return value of a
function to initialize a variable. Because the function <code class="hljs">five</code> returns a <code class="hljs">5</code>,
that line is the same as the following:</p>
<pre><code class="language-rust hljs"><span class="hljs-keyword">let</span> x = <span class="hljs-number">5</span>;
</code></pre>
<p>Second, the <code class="hljs">five</code> function has no parameters and defines the type of the
return value, but the body of the function is a lonely <code class="hljs">5</code> with no semicolon
because it’s an expression whose value we want to return. Let’s look at another
example:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> x = plus_one(<span class="hljs-number">5</span>);

    <span class="hljs-built_in">println!</span>(<span class="hljs-string">"The value of x is: {}"</span>, x);
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">plus_one</span></span>(x: <span class="hljs-keyword">i32</span>) -&gt; <span class="hljs-keyword">i32</span> {
    x + <span class="hljs-number">1</span>
}
</code></pre>
<p>Running this code will print <code class="hljs">The value of x is: 6</code>. What happens if we place a
semicolon at the end of the line containing <code class="hljs">x + 1</code>, changing it from an
expression to a statement?</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust,ignore hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> x = plus_one(<span class="hljs-number">5</span>);

    <span class="hljs-built_in">println!</span>(<span class="hljs-string">"The value of x is: {}"</span>, x);
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">plus_one</span></span>(x: <span class="hljs-keyword">i32</span>) -&gt; <span class="hljs-keyword">i32</span> {
    x + <span class="hljs-number">1</span>;
}
</code></pre>
<p>Running this code produces an error, as follows:</p>
<pre><code class="language-text hljs">error[E0269]: not all control paths return a value
 --&gt; src/main.rs:7:1
  |
7 | fn plus_one(x: i32) -&gt; i32 {
  | ^
  |
help: consider removing this semicolon:
 --&gt; src/main.rs:8:10
  |
8 |     x + 1;
  |          ^
</code></pre>
<p>The main error message, “not all control paths return a value,” reveals the
core issue with this code. The definition of the function <code class="hljs">plus_one</code> says that
it will return an <code class="hljs">i32</code>, but statements don’t evaluate to a value. Therefore,
nothing is returned, which contradicts the function definition and results in
an error. In this output, Rust provides a message to possibly help rectify this
issue: it suggests removing the semicolon, which would fix the error.</p>

                `,
    "comments": `
                    <a class="header" href="#comments" name="comments"><h2>Comments</h2></a>
<p>All programmers strive to make their code easy to understand, but sometimes
extra explanation is warranted. In these cases, programmers leave notes, or
<em>comments</em>, in their source code that the compiler will ignore but people
reading the source code may find useful.</p>
<p>Here’s a simple comment:</p>
<pre><code class="language-rust hljs"><span class="hljs-comment">// Hello, world.</span>
</code></pre>
<p>In Rust, comments must start with two slashes and continue until the end of the
line. For comments that extend beyond a single line, you’ll need to include
<code class="hljs">//</code> on each line, like this:</p>
<pre><code class="language-rust hljs"><span class="hljs-comment">// So we’re doing something complicated here, long enough that we need</span>
<span class="hljs-comment">// multiple lines of comments to do it! Whew! Hopefully, this comment will</span>
<span class="hljs-comment">// explain what’s going on.</span>
</code></pre>
<p>Comments can also be placed at the end of lines containing code:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> lucky_number = <span class="hljs-number">7</span>; <span class="hljs-comment">// I’m feeling lucky today.</span>
}
</code></pre>
<p>But you’ll more often see them used in this format, with the comment on a
separate line above the code it's annotating:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-comment">// I’m feeling lucky today.</span>
    <span class="hljs-keyword">let</span> lucky_number = <span class="hljs-number">7</span>;
}
</code></pre>
<p>That’s all there is to comments. They’re not particularly complicated.</p>

                `,
    "flow": `
                    <a class="header" href="#control-flow" name="control-flow"><h2>Control Flow</h2></a>
<p>Deciding whether or not to run some code depending on if a condition is true or
deciding to run some code repeatedly while a condition is true are basic
building blocks in most programming languages. The most common constructs that
let you control the flow of execution of Rust code are <code class="hljs">if</code> expressions and
loops.</p>
<a class="header" href="#if-expressions" name="if-expressions"><h3><code class="hljs">if</code> Expressions</h3></a>
<p>An <code class="hljs">if</code> expression allows us to branch our code depending on conditions. We
provide a condition and then state, “If this condition is met, run this block
of code. If the condition is not met, do not run this block of code.”</p>
<p>Create a new project called <em>branches</em> in your <em>projects</em> directory to explore
the <code class="hljs">if</code> expression. In the <em>src/main.rs</em> file, input the following:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> number = <span class="hljs-number">3</span>;

    <span class="hljs-keyword">if</span> number &lt; <span class="hljs-number">5</span> {
        <span class="hljs-built_in">println!</span>(<span class="hljs-string">"condition was true"</span>);
    } <span class="hljs-keyword">else</span> {
        <span class="hljs-built_in">println!</span>(<span class="hljs-string">"condition was false"</span>);
    }
}
</code></pre>
<p>All <code class="hljs">if</code> expressions start with the keyword <code class="hljs">if</code>, which is followed by a
condition. In this case, the condition checks whether or not the variable
<code class="hljs">number</code> has a value less than 5. The block of code we want to execute if the
condition is true is placed immediately after the condition inside curly
braces. Blocks of code associated with the conditions in <code class="hljs">if</code> expressions are
sometimes called <em>arms</em>, just like the arms in <code class="hljs">match</code> expressions that we
discussed in the “Comparing the Guess to the Secret Number” section of
Chapter 2. Optionally, we can also include an <code class="hljs">else</code> expression, which we chose
to do here, to give the program an alternative block of code to execute should
the condition evaluate to false. If you don’t provide an <code class="hljs">else</code> expression and
the condition is false, the program will just skip the <code class="hljs">if</code> block and move on
to the next bit of code.</p>
<p>Try running this code; you should see the following output:</p>
<pre><code class="language-text hljs">$ cargo run
   Compiling branches v0.1.0 (file:///projects/branches)
     Running \`target/debug/branches\`
condition was true
</code></pre>
<p>Let’s try changing the value of <code class="hljs">number</code> to a value that makes the condition
<code class="hljs">false</code> to see what happens:</p>
<pre><code class="language-rust,ignore hljs"><span class="hljs-keyword">let</span> number = <span class="hljs-number">7</span>;
</code></pre>
<p>Run the program again, and look at the output:</p>
<pre><code class="language-text hljs">$ cargo run
   Compiling branches v0.1.0 (file:///projects/branches)
     Running \`target/debug/branches\`
condition was false
</code></pre>
<p>It’s also worth noting that the condition in this code <em>must</em> be a <code class="hljs">bool</code>. To
see what happens if the condition isn’t a <code class="hljs">bool</code>, try running the following
code:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust,ignore hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> number = <span class="hljs-number">3</span>;

    <span class="hljs-keyword">if</span> number {
        <span class="hljs-built_in">println!</span>(<span class="hljs-string">"number was three"</span>);
    }
}
</code></pre>
<p>The <code class="hljs">if</code> condition evaluates to a value of <code class="hljs">3</code> this time, and Rust throws an
error:</p>
<pre><code class="language-text hljs">   Compiling branches v0.1.0 (file:///projects/branches)
error[E0308]: mismatched types
 --&gt; src/main.rs:4:8
  |
4 |     if number {
  |        ^^^^^^ expected bool, found integral variable
  |
  = note: expected type \`bool\`
  = note:    found type \`{integer}\`

error: aborting due to previous error
Could not compile \`branches\`.
</code></pre>
<p>The error indicates that Rust expected a <code class="hljs">bool</code> but got an integer. Rust will
not automatically try to convert non-boolean types to a boolean, unlike
languages such as Ruby and JavaScript. You must be explicit and always provide
<code class="hljs">if</code> with a <code class="hljs">boolean</code> as its condition. If we want the <code class="hljs">if</code> code block to run
only when a number is not equal to <code class="hljs">0</code>, for example, we can change the <code class="hljs">if</code>
expression to the following:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> number = <span class="hljs-number">3</span>;

    <span class="hljs-keyword">if</span> number != <span class="hljs-number">0</span> {
        <span class="hljs-built_in">println!</span>(<span class="hljs-string">"number was something other than zero"</span>);
    }
}
</code></pre>
<p>Running this code will print <code class="hljs">number was something other than zero</code>.</p>
<a class="header" href="#multiple-conditions-with-else-if" name="multiple-conditions-with-else-if"><h4>Multiple Conditions with <code class="hljs">else if</code></h4></a>
<p>We can have multiple conditions by combining <code class="hljs">if</code> and <code class="hljs">else</code> in an <code class="hljs">else if</code>
expression. For example:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> number = <span class="hljs-number">6</span>;

    <span class="hljs-keyword">if</span> number % <span class="hljs-number">4</span> == <span class="hljs-number">0</span> {
        <span class="hljs-built_in">println!</span>(<span class="hljs-string">"number is divisible by 4"</span>);
    } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> number % <span class="hljs-number">3</span> == <span class="hljs-number">0</span> {
        <span class="hljs-built_in">println!</span>(<span class="hljs-string">"number is divisible by 3"</span>);
    } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> number % <span class="hljs-number">2</span> == <span class="hljs-number">0</span> {
        <span class="hljs-built_in">println!</span>(<span class="hljs-string">"number is divisible by 2"</span>);
    } <span class="hljs-keyword">else</span> {
        <span class="hljs-built_in">println!</span>(<span class="hljs-string">"number is not divisible by 4, 3, or 2"</span>);
    }
}
</code></pre>
<p>This program has four possible paths it can take. After running it, you should
see the following output:</p>
<pre><code class="language-text hljs">$ cargo run
   Compiling branches v0.1.0 (file:///projects/branches)
     Running \`target/debug/branches\`
number is divisible by 3
</code></pre>
<p>When this program executes, it checks each <code class="hljs">if</code> expression in turn and executes
the first body for which the condition holds true. Note that even though 6 is
divisible by 2, we don’t see the output <code class="hljs">number is divisible by 2</code>, nor do we
see the <code class="hljs">number is not divisible by 4, 3, or 2</code> text from the <code class="hljs">else</code> block. The
reason is that Rust will only execute the block for the first true condition,
and once it finds one, it won’t even check the rest.</p>
<p>Using too many <code class="hljs">else if</code> expressions can clutter your code, so if you have more
than one, you might want to refactor your code. Chapter 6 describes a powerful
Rust branching construct called <code class="hljs">match</code> for these cases.</p>
<a class="header" href="#using-if-in-a-let-statement" name="using-if-in-a-let-statement"><h4>Using <code class="hljs">if</code> in a <code class="hljs">let</code> statement</h4></a>
<p>Because <code class="hljs">if</code> is an expression, we can use it on the right side of a <code class="hljs">let</code>
statement, for instance in Listing 3-4:</p>
<figure>
<span class="filename">Filename: src/main.rs</span>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> condition = <span class="hljs-literal">true</span>;
    <span class="hljs-keyword">let</span> number = <span class="hljs-keyword">if</span> condition {
        <span class="hljs-number">5</span>
    } <span class="hljs-keyword">else</span> {
        <span class="hljs-number">6</span>
    };

    <span class="hljs-built_in">println!</span>(<span class="hljs-string">"The value of number is: {}"</span>, number);
}
</code></pre>
<figcaption>
<p>Listing 3-4: Assigning the result of an <code class="hljs">if</code> expression to a variable</p>
</figcaption>
</figure>
<p>The <code class="hljs">number</code> variable will be bound to a value based on the outcome of the <code class="hljs">if</code>
expression. Run this code to see what happens:</p>
<pre><code class="language-text hljs">$ cargo run
   Compiling branches v0.1.0 (file:///projects/branches)
     Running \`target/debug/branches\`
The value of number is: 5
</code></pre>
<p>Remember that blocks of code evaluate to the last expression in them, and
numbers by themselves are also expressions. In this case, the value of the
whole <code class="hljs">if</code> expression depends on which block of code executes. This means the
values that have the potential to be results from each arm of the <code class="hljs">if</code> must be
the same type; in Listing 3-4, the results of both the <code class="hljs">if</code> arm and the <code class="hljs">else</code>
arm were <code class="hljs">i32</code> integers. But what happens if the types are mismatched, as in
the following example?</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust,ignore hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> condition = <span class="hljs-literal">true</span>;

    <span class="hljs-keyword">let</span> number = <span class="hljs-keyword">if</span> condition {
        <span class="hljs-number">5</span>
    } <span class="hljs-keyword">else</span> {
        <span class="hljs-string">"six"</span>
    };

    <span class="hljs-built_in">println!</span>(<span class="hljs-string">"The value of number is: {}"</span>, number);
}
</code></pre>
<p>When we run this code, we’ll get an error. The <code class="hljs">if</code> and <code class="hljs">else</code> arms have value
types that are incompatible, and Rust indicates exactly where to find the
problem in the program:</p>
<pre><code class="language-text hljs">   Compiling branches v0.1.0 (file:///projects/branches)
error[E0308]: if and else have incompatible types
 --&gt; src/main.rs:4:18
  |
4 |     let number = if condition {
  |                  ^ expected integral variable, found reference
  |
  = note: expected type \`{integer}\`
  = note:    found type \`&amp;’static str\`
</code></pre>
<p>The expression in the <code class="hljs">if</code> block evaluates to an integer, and the expression in
the <code class="hljs">else</code> block evaluates to a string. This won’t work because variables must
have a single type. Rust needs to know at compile time what type the <code class="hljs">number</code>
variable is, definitively, so it can verify at compile time that its type is
valid everywhere we use <code class="hljs">number</code>. Rust wouldn’t be able to do that if the type
of <code class="hljs">number</code> was only determined at runtime; the compiler would be more complex
and would make fewer guarantees about the code if it had to keep track of
multiple hypothetical types for any variable.</p>
<a class="header" href="#repetition-with-loops" name="repetition-with-loops"><h3>Repetition with Loops</h3></a>
<p>It’s often useful to execute a block of code more than once. For this task,
Rust provides several <em>loops</em>. A loop runs through the code inside the loop
body to the end and then starts immediately back at the beginning. To
experiment with loops, let’s make a new project called <em>loops</em>.</p>
<p>Rust has three kinds of loops: <code class="hljs">loop</code>, <code class="hljs">while</code>, and <code class="hljs">for</code>. Let’s try each one.</p>
<a class="header" href="#repeating-code-with-loop" name="repeating-code-with-loop"><h4>Repeating Code with <code class="hljs">loop</code></h4></a>
<p>The <code class="hljs">loop</code> keyword tells Rust to execute a block of code over and over again
forever or until you explicitly tell it to stop.</p>
<p>As an example, change the <em>src/main.rs</em> file in your <em>loops</em> directory to look
like this:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust,ignore hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">loop</span> {
        <span class="hljs-built_in">println!</span>(<span class="hljs-string">"again!"</span>);
    }
}
</code></pre>
<p>When we run this program, we’ll see <code class="hljs">again!</code> printed over and over continuously
until we stop the program manually. Most terminals support a keyboard shortcut,
ctrl-C, to halt a program that is stuck in a continual loop. Give it a try:</p>
<pre><code class="language-text hljs">$ cargo run
   Compiling loops v0.1.0 (file:///projects/loops)
     Running \`target/debug/loops\`
again!
again!
again!
again!
^Cagain!
</code></pre>
<p>The symbol <code class="hljs">^C</code> represents where you pressed ctrl-C. You may or may not see the
word <code class="hljs">again!</code> printed after the <code class="hljs">^C</code>, depending on where the code was in the
loop when it received the halt signal.</p>
<p>Fortunately, Rust provides another, more reliable way to break out of a loop.
You can place the <code class="hljs">break</code> keyword within the loop to tell the program when to
stop executing the loop. Recall that we did this in the guessing game in the
“Quitting After a Correct Guess” section of Chapter 2 to exit the
program when the user won the game by guessing the correct number.</p>
<a class="header" href="#conditional-loops-with-while" name="conditional-loops-with-while"><h4>Conditional Loops with <code class="hljs">while</code></h4></a>
<p>It’s often useful for a program to evaluate a condition within a loop. While
the condition is true, the loop runs. When the condition ceases to be true, you
call <code class="hljs">break</code>, stopping the loop. This loop type could be implemented using a
combination of <code class="hljs">loop</code>, <code class="hljs">if</code>, <code class="hljs">else</code>, and <code class="hljs">break</code>; you could try that now in a
program, if you’d like.</p>
<p>However, this pattern is so common that Rust has a built-in language construct
for it, and it’s called a <code class="hljs">while</code> loop. The following example uses <code class="hljs">while</code>: the
program loops three times, counting down each time. Then, after the loop, it
prints another message and exits:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut</span> number = <span class="hljs-number">3</span>;

    <span class="hljs-keyword">while</span> number != <span class="hljs-number">0</span>  {
        <span class="hljs-built_in">println!</span>(<span class="hljs-string">"{}!"</span>, number);

        number = number - <span class="hljs-number">1</span>;
    }

    <span class="hljs-built_in">println!</span>(<span class="hljs-string">"LIFTOFF!!!"</span>);
}
</code></pre>
<p>This construct eliminates a lot of nesting that would be necessary if you used
<code class="hljs">loop</code>, <code class="hljs">if</code>, <code class="hljs">else</code>, and <code class="hljs">break</code>, and it’s clearer. While a condition holds
true, the code runs; otherwise, it exits the loop.</p>
<a class="header" href="#looping-through-a-collection-with-for" name="looping-through-a-collection-with-for"><h4>Looping Through a Collection with <code class="hljs">for</code></h4></a>
<p>You could use the <code class="hljs">while</code> construct to loop over the elements of a collection,
such as an array. For example:</p>
<figure>
<span class="filename">Filename: src/main.rs</span>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> a = [<span class="hljs-number">10</span>, <span class="hljs-number">20</span>, <span class="hljs-number">30</span>, <span class="hljs-number">40</span>, <span class="hljs-number">50</span>];
    <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut</span> index = <span class="hljs-number">0</span>;

    <span class="hljs-keyword">while</span> index &lt; <span class="hljs-number">5</span> {
        <span class="hljs-built_in">println!</span>(<span class="hljs-string">"the value is: {}"</span>, a[index]);

        index = index + <span class="hljs-number">1</span>;
    }
}
</code></pre>
<figcaption>
<p>Listing 3-5: Looping through each element of a collection using a <code class="hljs">while</code> loop</p>
</figcaption>
</figure>
<p>Here, the code counts up through the elements in the array. It starts at index
<code class="hljs">0</code>, and then loops until it reaches the final index in the array (that is,
when <code class="hljs">index &lt; 5</code> is no longer true). Running this code will print out every
element in the array:</p>
<pre><code class="language-text hljs">$ cargo run
   Compiling loops v0.1.0 (file:///projects/loops)
     Running \`target/debug/loops\`
the value is: 10
the value is: 20
the value is: 30
the value is: 40
the value is: 50
</code></pre>
<p>All five array values appear in the terminal, as expected. Even though <code class="hljs">index</code>
will reach a value of <code class="hljs">5</code> at some point, the loop stops executing before trying
to fetch a sixth value from the array.</p>
<p>But this approach is error prone; we could cause the program to panic if the
index length is incorrect. It’s also slow, because the compiler adds
runtime code to perform the conditional check on every element on every
iteration through the loop.</p>
<p>As a more efficient alternative, you can use a <code class="hljs">for</code> loop and execute some code
for each item in a collection. A <code class="hljs">for</code> loop looks like this:</p>
<figure>
<span class="filename">Filename: src/main.rs</span>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> a = [<span class="hljs-number">10</span>, <span class="hljs-number">20</span>, <span class="hljs-number">30</span>, <span class="hljs-number">40</span>, <span class="hljs-number">50</span>];

    <span class="hljs-keyword">for</span> element <span class="hljs-keyword">in</span> a.iter() {
        <span class="hljs-built_in">println!</span>(<span class="hljs-string">"the value is: {}"</span>, element);
    }
}
</code></pre>
<figcaption>
<p>Listing 3-6: Looping through each element of a collection using a <code class="hljs">for</code> loop</p>
</figcaption>
</figure>
<p>When we run this code, we’ll see the same output as in Listing 3-5. More
importantly, we’ve now increased the safety of the code and eliminated the
chance of bugs that might result from going beyond the end of the array or not
going far enough and missing some items.</p>
<p>For example, in the code in Listing 3-5, if you removed an item from the <code class="hljs">a</code>
array but forgot to update the condition to <code class="hljs">while index &lt; 4</code>, the code would
panic. Using the <code class="hljs">for</code> loop, you don’t need to remember to change any other
code if you changed the number of values in the array.</p>
<p>The safety and conciseness of <code class="hljs">for</code> loops make them the most commonly used loop
construct in Rust. Even in situations in which you want to run some code a
certain number of times, as in the countdown example that used a <code class="hljs">while</code> loop
in Listing 3-5, most Rustaceans would use a <code class="hljs">for</code> loop. The way to do that
would be to use a <code class="hljs">Range</code>, which is a type provided by the standard library
that generates all numbers in sequence starting from one number and ending
before another number.</p>
<p>Here’s what the countdown would look like using a <code class="hljs">for</code> loop and another method
we’ve not yet talked about, <code class="hljs">rev</code>, to reverse the range:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">for</span> number <span class="hljs-keyword">in</span> (<span class="hljs-number">1</span>..<span class="hljs-number">4</span>).rev() {
        <span class="hljs-built_in">println!</span>(<span class="hljs-string">"{}!"</span>, number);
    }
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">"LIFTOFF!!!"</span>);
}
</code></pre>
<p>This code is a bit nicer, isn’t it?</p>
<a class="header" href="#summary" name="summary"><h2>Summary</h2></a>
<p>You made it! That was a sizable chapter: you learned about variables, scalar
and<code class="hljs">if</code> expressions, and loops! If you want to practice with the concepts
discussed in this chapter, try building programs to do the following:</p>
<ul>
<li>Convert temperatures between Fahrenheit and Celsius.</li>
<li>Generate the nth Fibonacci number.</li>
<li>Print the lyrics to the Christmas carol “The Twelve Days of Christmas,”
taking advantage of the repetition in the song.</li>
</ul>
<p>When you’re ready to move on, we’ll talk about a concept in Rust that <em>doesn’t</em>
commonly exist in other programming languages: ownership.</p>

                `,
    "ownership": `
                    <a class="header" href="#understanding-ownership" name="understanding-ownership"><h1>Understanding Ownership</h1></a>
<p>Ownership is Rust’s most unique feature, and it enables Rust to make memory
safety guarantees without needing a garbage collector. Therefore, it’s
important to understand how ownership works in Rust. In this chapter we’ll talk
about ownership as well as several related features: borrowing, slices, and how
Rust lays data out in memory.</p>

    `,
    "whatisownership": `
                    <a class="header" href="#what-is-ownership" name="what-is-ownership"><h2>What Is Ownership?</h2></a>
<p>Rust’s central feature is <em>ownership</em>. Although the feature is straightforward
to explain, it has deep implications for the rest of the language.</p>
<p>All programs have to manage the way they use a computer’s memory while running.
Some languages have garbage collection that constantly looks for no longer used
memory as the program runs; in other languages, the programmer must explicitly
allocate and free the memory. Rust uses a third approach: memory is managed
through a system of ownership with a set of rules that the compiler checks at
compile time. No run-time costs are incurred for any of the ownership features.</p>
<p>Because ownership is a new concept for many programmers, it does take some time
to get used to. The good news is that the more experienced you become with Rust
and the rules of the ownership system, the more you’ll be able to naturally
develop code that is safe and efficient. Keep at it!</p>
<p>When you understand ownership, you’ll have a solid foundation for understanding
the features that make Rust unique. In this chapter, you’ll learn ownership by
working through some examples that focus on a very common data structure:
strings.</p>
<!-- PROD: START BOX -->
<blockquote>
<a class="header" href="#the-stack-and-the-heap" name="the-stack-and-the-heap"><h3>The Stack and the Heap</h3></a>
<p>In many programming languages, we don’t have to think about the stack and the
heap very often. But in a systems programming language like Rust, whether a
value is on the stack or the heap has more of an effect on how the language
behaves and why we have to make certain decisions. We’ll describe parts of
ownership in relation to the stack and the heap later in this chapter, so here
is a brief explanation in preparation.</p>
<p>Both the stack and the heap are parts of memory that is available to your code
to use at runtime, but they are structured in different ways. The stack stores
values in the order it gets them and removes the values in the opposite order.
This is referred to as <em>last in, first out</em>. Think of a stack of plates: when
you add more plates, you put them on top of the pile, and when you need a
plate, you take one off the top. Adding or removing plates from the middle or
bottom wouldn’t work as well! Adding data is called <em>pushing onto the stack</em>,
and removing data is called <em>popping off the stack</em>.</p>
<p>The stack is fast because of the way it accesses the data: it never has to
search for a place to put new data or a place to get data from because that
place is always the top. Another property that makes the stack fast is that all
data on the stack must take up a known, fixed size.</p>
<p>For data with a size unknown to us at compile time or a size that might change,
we can store data on the heap instead. The heap is less organized: when we put
data on the heap, we ask for some amount of space. The operating system finds
an empty spot somewhere in the heap that is big enough, marks it as being in
use, and returns to us a pointer to that location. This process is called
<em>allocating on the heap</em>, and sometimes we abbreviate the phrase as just
“allocating.” Pushing values onto the stack is not considered allocating.
Because the pointer is a known, fixed size, we can store the pointer on the
stack, but when we want the actual data, we have to follow the pointer.</p>
<p>Think of being seated at a restaurant. When you enter, you state the number of
people in your group, and the staff finds an empty table that fits everyone and
leads you there. If someone in your group comes late, they can ask where you’ve
been seated to find you.</p>
<p>Accessing data in the heap is slower than accessing data on the stack because
we have to follow a pointer to get there. Contemporary processors are faster if
they jump around less in memory. Continuing the analogy, consider a server at a
restaurant taking orders from many tables. It’s most efficient to get all the
orders at one table before moving on to the next table. Taking an order from
table A, then an order from table B, then one from A again, and then one from B
again would be a much slower process. By the same token, a processor can do its
job better if it works on data that’s close to other data (as it is on the
stack) rather than farther away (as it can be on the heap). Allocating a large
amount of space on the heap can also take time.</p>
<p>When our code calls a function, the values passed into the function (including,
potentially, pointers to data on the heap) and the function’s local variables
get pushed onto the stack. When the function is over, those values get popped
off the stack.</p>
<p>Keeping track of what parts of code are using what data on the heap, minimizing
the amount of duplicate data on the heap, and cleaning up unused data on the
heap so we don’t run out of space are all problems that ownership addresses.
Once you understand ownership, you won’t need to think about the stack and the
heap very often, but knowing that managing heap data is why ownership exists
can help explain why it works the way it does.</p>
</blockquote>
<!-- PROD: END BOX -->
<a class="header" href="#ownership-rules" name="ownership-rules"><h3>Ownership Rules</h3></a>
<p>First, let’s take a look at the ownership rules. Keep these rules in mind as we
work through the examples that illustrate the rules:</p>
<blockquote>
<ol>
<li>Each value in Rust has a variable that’s called its <em>owner</em>.</li>
<li>There can only be one owner at a time.</li>
<li>When the owner goes out of scope, the value will be dropped.</li>
</ol>
</blockquote>
<a class="header" href="#variable-scope" name="variable-scope"><h3>Variable Scope</h3></a>
<p>We’ve walked through an example of a Rust program already in Chapter 2. Now
that we’re past basic syntax, we won’t include all the <code class="hljs">fn main() {</code> code in
examples, so if you’re following along, you’ll have to put the following
examples inside a <code class="hljs">main</code> function manually. As a result, our examples will be a
bit more concise, letting us focus on the actual details rather than
boilerplate code.</p>
<p>As a first example of ownership, we’ll look at the <em>scope</em> of some variables. A
scope is the range within a program for which an item is valid. Let’s say we
have a variable that looks like this:</p>
<pre><code class="language-rust hljs"><span class="hljs-keyword">let</span> s = <span class="hljs-string">"hello"</span>;
</code></pre>
<p>The variable <code class="hljs">s</code> refers to a string literal, where the value of the string is
hardcoded into the text of our program. The variable is valid from the point at
which it’s declared until the end of the current <em>scope</em>. Listing 4-1 has
comments annotating where the variable <code class="hljs">s</code> is valid:</p>
<figure>
<pre><code class="language-rust hljs">{                      <span class="hljs-comment">// s is not valid here, it’s not yet declared</span>
    <span class="hljs-keyword">let</span> s = <span class="hljs-string">"hello"</span>;   <span class="hljs-comment">// s is valid from this point forward</span>

    <span class="hljs-comment">// do stuff with s</span>
}                      <span class="hljs-comment">// this scope is now over, and s is no longer valid</span>
</code></pre>
<figcaption>
<p>Listing 4-1: A variable and the scope in which it is valid</p>
</figcaption>
</figure>
<p>In other words, there are two important points in time here:</p>
<ol>
<li>When <code class="hljs">s</code> comes <em>into scope</em>, it is valid.</li>
<li>It remains so until it goes <em>out of scope</em>.</li>
</ol>
<p>At this point, the relationship between scopes and when variables are valid is
similar to other programming languages. Now we’ll build on top of this
understanding by introducing the <code class="hljs">String</code> type.</p>
<a class="header" href="#the-string-type" name="the-string-type"><h3>The <code class="hljs">String</code> Type</h3></a>
<p>To illustrate the rules of ownership, we need a data type that is more complex
than the ones we covered in Chapter 3. All the data types we’ve looked at
previously are stored on the stack and popped off the stack when their scope is
over, but we want to look at data that is stored on the heap and explore how
Rust knows when to clean up that data.</p>
<p>We’ll use <code class="hljs">String</code> as the example here and concentrate on the parts of <code class="hljs">String</code>
that relate to ownership. These aspects also apply to other complex data types
provided by the standard library and that you create. We’ll discuss <code class="hljs">String</code> in
more depth in Chapter 8.</p>
<p>We’ve already seen string literals, where a string value is hardcoded into our
program. String literals are convenient, but they aren’t always suitable for
every situation in which you want to use text. One reason is that they’re
immutable. Another is that not every string value can be known when we write
our code: for example, what if we want to take user input and store it? For
these situations, Rust has a second string type, <code class="hljs">String</code>. This type is
allocated on the heap and as such is able to store an amount of text that is
unknown to us at compile time. You can create a <code class="hljs">String</code> from a string literal
using the <code class="hljs">from</code> function, like so:</p>
<pre><code class="language-rust hljs"><span class="hljs-keyword">let</span> s = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">"hello"</span>);
</code></pre>
<p>The double colon (<code class="hljs">::</code>) is an operator that allows us to namespace this
particular <code class="hljs">from</code> function under the <code class="hljs">String</code> type rather than using some sort
of name like <code class="hljs">string_from</code>. We’ll discuss this syntax more in the “Method
Syntax” section of Chapter 5 and when we talk about namespacing with modules in
Chapter 7.</p>
<p>This kind of string <em>can</em> be mutated:</p>
<pre><code class="language-rust hljs"><span class="hljs-keyword">let</span> <span class="hljs-keyword">mut</span> s = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">"hello"</span>);

s.push_str(<span class="hljs-string">", world!"</span>); <span class="hljs-comment">// push_str() appends a literal to a String</span>

<span class="hljs-built_in">println!</span>(<span class="hljs-string">"{}"</span>, s); <span class="hljs-comment">// This will print \`hello, world!\`</span>
</code></pre>
<p>So, what’s the difference here? Why can <code class="hljs">String</code> be mutated but literals
cannot? The difference is how these two types deal with memory.</p>
<a class="header" href="#memory-and-allocation" name="memory-and-allocation"><h3>Memory and Allocation</h3></a>
<p>In the case of a string literal, we know the contents at compile time so the
text is hardcoded directly into the final executable, making string literals
fast and efficient. But these properties only come from its immutability.
Unfortunately, we can’t put a blob of memory into the binary for each piece of
text whose size is unknown at compile time and whose size might change while
running the program.</p>
<p>With the <code class="hljs">String</code> type, in order to support a mutable, growable piece of text,
we need to allocate an amount of memory on the heap, unknown at compile time,
to hold the contents. This means:</p>
<ol>
<li>The memory must be requested from the operating system at runtime.</li>
<li>We need a way of returning this memory to the operating system when we’re
done with our <code class="hljs">String</code>.</li>
</ol>
<p>That first part is done by us: when we call <code class="hljs">String::from</code>, its implementation
requests the memory it needs. This is pretty much universal in programming
languages.</p>
<p>However, the second part is different. In languages with a <em>garbage collector
(GC)</em>, the GC keeps track and cleans up memory that isn’t being used anymore,
and we, as the programmer, don’t need to think about it. Without a GC, it’s the
programmer’s responsibility to identify when memory is no longer being used and
call code to explicitly return it, just as we did to request it. Doing this
correctly has historically been a difficult programming problem. If we forget,
we’ll waste memory. If we do it too early, we’ll have an invalid variable. If
we do it twice, that’s a bug too. We need to pair exactly one <code class="hljs">allocate</code> with
exactly one <code class="hljs">free</code>.</p>
<p>Rust takes a different path: the memory is automatically returned once the
variable that owns it goes out of scope. Here’s a version of our scope example
from Listing 4-1 using a <code class="hljs">String</code> instead of a string literal:</p>
<pre><code class="language-rust hljs">{
    <span class="hljs-keyword">let</span> s = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">"hello"</span>); <span class="hljs-comment">// s is valid from this point forward</span>

    <span class="hljs-comment">// do stuff with s</span>
}                                  <span class="hljs-comment">// this scope is now over, and s is no</span>
                                   <span class="hljs-comment">// longer valid</span>
</code></pre>
<p>There is a natural point at which we can return the memory our <code class="hljs">String</code> needs
to the operating system: when <code class="hljs">s</code> goes out of scope. When a variable goes out
of scope, Rust calls a special function for us. This function is called <code class="hljs">drop</code>,
and it’s where the author of <code class="hljs">String</code> can put the code to return the memory.
Rust calls <code class="hljs">drop</code> automatically at the closing <code class="hljs">}</code>.</p>
<blockquote>
<p>Note: In C++, this pattern of deallocating resources at the end of an item's
lifetime is sometimes called <em>Resource Acquisition Is Initialization (RAII)</em>.
The <code class="hljs">drop</code> function in Rust will be familiar to you if you’ve used RAII
patterns.</p>
</blockquote>
<p>This pattern has a profound impact on the way Rust code is written. It may seem
simple right now, but the behavior of code can be unexpected in more
complicated situations when we want to have multiple variables use the data
we’ve allocated on the heap. Let’s explore some of those situations now.</p>
<a class="header" href="#ways-variables-and-data-interact-move" name="ways-variables-and-data-interact-move"><h4>Ways Variables and Data Interact: Move</h4></a>
<p>Multiple variables can interact with the same data in different ways in Rust.
Let’s look at an example using an integer in Listing 4-2:</p>
<figure>
<pre><code class="language-rust hljs"><span class="hljs-keyword">let</span> x = <span class="hljs-number">5</span>;
<span class="hljs-keyword">let</span> y = x;
</code></pre>
<figcaption>
<p>Listing 4-2: Assigning the integer value of variable <code class="hljs">x</code> to <code class="hljs">y</code></p>
</figcaption>
</figure>
<p>We can probably guess what this is doing based on our experience with other
languages: “Bind the value <code class="hljs">5</code> to <code class="hljs">x</code>; then make a copy of the value in <code class="hljs">x</code> and
bind it to <code class="hljs">y</code>.” We now have two variables, <code class="hljs">x</code> and <code class="hljs">y</code>, and both equal <code class="hljs">5</code>.
This is indeed what is happening because integers are simple values with a
known, fixed size, and these two <code class="hljs">5</code> values are pushed onto the stack.</p>
<p>Now let’s look at the <code class="hljs">String</code> version:</p>
<pre><code class="language-rust hljs"><span class="hljs-keyword">let</span> s1 = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">"hello"</span>);
<span class="hljs-keyword">let</span> s2 = s1;
</code></pre>
<p>This looks very similar to the previous code, so we might assume that the way
it works would be the same: that is, the second line would make a copy of the
value in <code class="hljs">s1</code> and bind it to <code class="hljs">s2</code>. But this isn’t quite what happens.</p>
<p>To explain this more thoroughly, let’s look at what <code class="hljs">String</code> looks like under
the covers in Figure 4-3. A <code class="hljs">String</code> is made up of three parts, shown on the
left: a pointer to the memory that holds the contents of the string, a length,
and a capacity. This group of data is stored on the stack. On the right is the
memory on the heap that holds the contents.</p>
<figure>
<img alt="String in memory" src="img/trpl04-01.svg" class="center" style="width: 50%;">
<figcaption>
<p>Figure 4-3: Representation in memory of a <code class="hljs">String</code> holding the value <code class="hljs">"hello"</code>
bound to <code class="hljs">s1</code></p>
</figcaption>
</figure>
<p>The length is how much memory, in bytes, the contents of the <code class="hljs">String</code> is
currently using. The capacity is the total amount of memory, in bytes, that the
<code class="hljs">String</code> has received from the operating system. The difference between length
and capacity matters, but not in this context, so for now, it’s fine to ignore
the capacity.</p>
<p>When we assign <code class="hljs">s1</code> to <code class="hljs">s2</code>, the <code class="hljs">String</code> data is copied, meaning we copy the
pointer, the length, and the capacity that are on the stack. We do not copy the
data on the heap that the pointer refers to. In other words, the data
representation in memory looks like Figure 4-4.</p>
<figure>
<img alt="s1 and s2 pointing to the same value" src="img/trpl04-02.svg" class="center" style="width: 50%;">
<figcaption>
<p>Figure 4-4: Representation in memory of the variable <code class="hljs">s2</code> that has a copy of
the pointer, length, and capacity of <code class="hljs">s1</code></p>
</figcaption>
</figure>
<p>The representation does <em>not</em> look like Figure 4-5, which is what memory would
look like if Rust instead copied the heap data as well. If Rust did this, the
operation <code class="hljs">s2 = s1</code> could potentially be very expensive in terms of runtime
performance if the data on the heap was large.</p>
<figure>
<img alt="s1 and s2 to two places" src="img/trpl04-03.svg" class="center" style="width: 50%;">
<figcaption>
<p>Figure 4-5: Another possibility of what <code class="hljs">s2 = s1</code> might do if Rust copied the
heap data as well</p>
</figcaption>
</figure>
<p>Earlier, we said that when a variable goes out of scope, Rust automatically
calls the <code class="hljs">drop</code> function and cleans up the heap memory for that variable. But
Figure 4-4 shows both data pointers pointing to the same location. This is a
problem: when <code class="hljs">s2</code> and <code class="hljs">s1</code> go out of scope, they will both try to free the
same memory. This is known as a <em>double free</em> error and is one of the memory
safety bugs we mentioned previously. Freeing memory twice can lead to memory
corruption, which can potentially lead to security vulnerabilities.</p>
<p>To ensure memory safety, there’s one more detail to what happens in this
situation in Rust. Instead of trying to copy the allocated memory, Rust
considers <code class="hljs">s1</code> to no longer be valid and therefore, Rust doesn’t need to free
anything when <code class="hljs">s1</code> goes out of scope. Check out what happens when you try to
use <code class="hljs">s1</code> after <code class="hljs">s2</code> is created:</p>
<pre><code class="language-rust,ignore hljs"><span class="hljs-keyword">let</span> s1 = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">"hello"</span>);
<span class="hljs-keyword">let</span> s2 = s1;

<span class="hljs-built_in">println!</span>(<span class="hljs-string">"{}"</span>, s1);
</code></pre>
<p>You’ll get an error like this because Rust prevents you from using the
invalidated reference:</p>
<pre><code class="language-text hljs">error[E0382]: use of moved value: \`s1\`
 --&gt; src/main.rs:4:27
  |
3 |     let s2 = s1;
  |         -- value moved here
4 |     println!("{}, world!",s1);
  |                           ^^ value used here after move
  |
  = note: move occurs because \`s1\` has type \`std::string::String\`,
which does not implement the \`Copy\` trait
</code></pre>
<p>If you’ve heard the terms “shallow copy” and “deep copy” while working with
other languages, the concept of copying the pointer, length, and capacity
without copying the data probably sounds like a shallow copy. But because Rust
also invalidates the first variable, instead of calling this a shallow copy,
it’s known as a <em>move</em>. Here we would read this by saying that <code class="hljs">s1</code> was <em>moved</em>
into <code class="hljs">s2</code>. So what actually happens is shown in Figure 4-6.</p>
<figure>
<img alt="s1 moved to s2" src="img/trpl04-04.svg" class="center" style="width: 50%;">
<figcaption>
<p>Figure 4-6: Representation in memory after <code class="hljs">s1</code> has been invalidated</p>
</figcaption>
</figure>
<p>That solves our problem! With only <code class="hljs">s2</code> valid, when it goes out of scope, it
alone will free the memory, and we’re done.</p>
<p>In addition, there’s a design choice that’s implied by this: Rust will never
automatically create “deep” copies of your data. Therefore, any <em>automatic</em>
copying can be assumed to be inexpensive in terms of runtime performance.</p>
<a class="header" href="#ways-variables-and-data-interact-clone" name="ways-variables-and-data-interact-clone"><h4>Ways Variables and Data Interact: Clone</h4></a>
<p>If we <em>do</em> want to deeply copy the heap data of the <code class="hljs">String</code>, not just the
stack data, we can use a common method called <code class="hljs">clone</code>. We’ll discuss method
syntax in Chapter 5, but because methods are a common feature in many
programming languages, you’ve probably seen them before.</p>
<p>Here’s an example of the <code class="hljs">clone</code> method in action:</p>
<pre><code class="language-rust hljs"><span class="hljs-keyword">let</span> s1 = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">"hello"</span>);
<span class="hljs-keyword">let</span> s2 = s1.clone();

<span class="hljs-built_in">println!</span>(<span class="hljs-string">"s1 = {}, s2 = {}"</span>, s1, s2);
</code></pre>
<p>This works just fine and is how you can explicitly produce the behavior shown
in Figure 4-5, where the heap data <em>does</em> get copied.</p>
<p>When you see a call to <code class="hljs">clone</code>, you know that some arbitrary code is being
executed and that code may be expensive. It’s a visual indicator that something
different is going on.</p>
<a class="header" href="#stack-only-data-copy" name="stack-only-data-copy"><h4>Stack-Only Data: Copy</h4></a>
<p>There’s another wrinkle we haven’t talked about yet. This code using integers,
part of which was shown earlier in Listing 4-2, works and is valid:</p>
<pre><code class="language-rust hljs"><span class="hljs-keyword">let</span> x = <span class="hljs-number">5</span>;
<span class="hljs-keyword">let</span> y = x;

<span class="hljs-built_in">println!</span>(<span class="hljs-string">"x = {}, y = {}"</span>, x, y);
</code></pre>
<p>But this code seems to contradict what we just learned: we don’t have a call to
<code class="hljs">clone</code>, but <code class="hljs">x</code> is still valid and wasn’t moved into <code class="hljs">y</code>.</p>
<p>The reason is that types like integers that have a known size at compile time
are stored entirely on the stack, so copies of the actual values are quick to
make. That means there’s no reason we would want to prevent <code class="hljs">x</code> from being
valid after we create the variable <code class="hljs">y</code>. In other words, there’s no difference
between deep and shallow copying here, so calling <code class="hljs">clone</code> wouldn’t do anything
differently from the usual shallow copying and we can leave it out.</p>
<p>Rust has a special annotation called the <code class="hljs">Copy</code> trait that we can place on
types like integers that are stored on the stack (we’ll talk more about traits
in Chapter 10). If a type has the <code class="hljs">Copy</code> trait, an older variable is still
usable after assignment. Rust won’t let us annotate a type with the <code class="hljs">Copy</code>
trait if the type, or any of its parts, has implemented the <code class="hljs">Drop</code> trait. If
the type needs something special to happen when the value goes out of scope and
we add the <code class="hljs">Copy</code> annotation to that type, we’ll get a compile time error.</p>
<p>So what types are <code class="hljs">Copy</code>? You can check the documentation for the given type to
be sure, but as a general rule, any group of simple scalar values can be
<code class="hljs">Copy</code>, and nothing that requires allocation or is some form of resource is
<code class="hljs">Copy</code>. Here are some of the types that are <code class="hljs">Copy</code>:</p>
<ul>
<li>All the integer types, like <code class="hljs">u32</code>.</li>
<li>The boolean type, <code class="hljs">bool</code>, with values <code class="hljs">true</code> and <code class="hljs">false</code>.</li>
<li>All the floating point types, like <code class="hljs">f64</code>.</li>
<li>Tuples, but only if they contain types that are also <code class="hljs">Copy</code>. <code class="hljs">(i32, i32)</code> is
<code class="hljs">Copy</code>, but <code class="hljs">(i32, String)</code> is not.</li>
</ul>
<a class="header" href="#ownership-and-functions" name="ownership-and-functions"><h3>Ownership and Functions</h3></a>
<p>The semantics for passing a value to a function are similar to assigning a
value to a variable. Passing a variable to a function will move or copy, just
like assignment. Listing 4-7 has an example with some annotations showing where
variables go into and out of scope:</p>
<figure>
<span class="filename">Filename: src/main.rs</span>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> s = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">"hello"</span>);  <span class="hljs-comment">// s comes into scope.</span>

    takes_ownership(s);             <span class="hljs-comment">// s's value moves into the function...</span>
                                    <span class="hljs-comment">// ... and so is no longer valid here.</span>
    <span class="hljs-keyword">let</span> x = <span class="hljs-number">5</span>;                      <span class="hljs-comment">// x comes into scope.</span>

    makes_copy(x);                  <span class="hljs-comment">// x would move into the function,</span>
                                    <span class="hljs-comment">// but i32 is Copy, so it’s okay to still</span>
                                    <span class="hljs-comment">// use x afterward.</span>

} <span class="hljs-comment">// Here, x goes out of scope, then s. But since s's value was moved, nothing</span>
  <span class="hljs-comment">// special happens.</span>

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">takes_ownership</span></span>(some_string: <span class="hljs-built_in">String</span>) { <span class="hljs-comment">// some_string comes into scope.</span>
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">"{}"</span>, some_string);
} <span class="hljs-comment">// Here, some_string goes out of scope and \`drop\` is called. The backing</span>
  <span class="hljs-comment">// memory is freed.</span>

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">makes_copy</span></span>(some_integer: <span class="hljs-keyword">i32</span>) { <span class="hljs-comment">// some_integer comes into scope.</span>
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">"{}"</span>, some_integer);
} <span class="hljs-comment">// Here, some_integer goes out of scope. Nothing special happens.</span>
</code></pre>
<figcaption>
<p>Listing 4-7: Functions with ownership and scope annotated</p>
</figcaption>
</figure>
<p>If we tried to use <code class="hljs">s</code> after the call to <code class="hljs">takes_ownership</code>, Rust would throw a
compile time error. These static checks protect us from mistakes. Try adding
code to <code class="hljs">main</code> that uses <code class="hljs">s</code> and <code class="hljs">x</code> to see where you can use them and where
the ownership rules prevent you from doing so.</p>
<a class="header" href="#return-values-and-scope" name="return-values-and-scope"><h3>Return Values and Scope</h3></a>
<p>Returning values can also transfer ownership. Here’s an example with similar
annotations to those in Listing 4-7:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> s1 = gives_ownership();         <span class="hljs-comment">// gives_ownership moves its return</span>
                                        <span class="hljs-comment">// value into s1.</span>

    <span class="hljs-keyword">let</span> s2 = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">"hello"</span>);     <span class="hljs-comment">// s2 comes into scope.</span>

    <span class="hljs-keyword">let</span> s3 = takes_and_gives_back(s2);  <span class="hljs-comment">// s2 is moved into</span>
                                        <span class="hljs-comment">// takes_and_gives_back, which also</span>
                                        <span class="hljs-comment">// moves its return value into s3.</span>
} <span class="hljs-comment">// Here, s3 goes out of scope and is dropped. s2 goes out of scope but was</span>
  <span class="hljs-comment">// moved, so nothing happens. s1 goes out of scope and is dropped.</span>

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">gives_ownership</span></span>() -&gt; <span class="hljs-built_in">String</span> {             <span class="hljs-comment">// gives_ownership will move its</span>
                                             <span class="hljs-comment">// return value into the function</span>
                                             <span class="hljs-comment">// that calls it.</span>

    <span class="hljs-keyword">let</span> some_string = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">"hello"</span>); <span class="hljs-comment">// some_string comes into scope.</span>

    some_string                              <span class="hljs-comment">// some_string is returned and</span>
                                             <span class="hljs-comment">// moves out to the calling</span>
                                             <span class="hljs-comment">// function.</span>
}

<span class="hljs-comment">// takes_and_gives_back will take a String and return one.</span>
<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">takes_and_gives_back</span></span>(a_string: <span class="hljs-built_in">String</span>) -&gt; <span class="hljs-built_in">String</span> { <span class="hljs-comment">// a_string comes into</span>
                                                      <span class="hljs-comment">// scope.</span>

    a_string  <span class="hljs-comment">// a_string is returned and moves out to the calling function.</span>
}
</code></pre>
<p>The ownership of variables follows the same pattern every time: assigning a
value to another variable moves it, and when heap data values’ variables go out
of scope, if the data hasn’t been moved to be owned by another variable, the
value will be cleaned up by <code class="hljs">drop</code>.</p>
<p>Taking ownership and then returning ownership with every function is a bit
tedious. What if we want to let a function use a value but not take ownership?
It’s quite annoying that anything we pass in also needs to be passed back if we
want to use it again, in addition to any data resulting from the body of the
function that we might want to return as well.</p>
<p>It’s possible to return multiple values using a tuple, like this:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> s1 = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">"hello"</span>);

    <span class="hljs-keyword">let</span> (s2, len) = calculate_length(s1);

    <span class="hljs-built_in">println!</span>(<span class="hljs-string">"The length of '{}' is {}."</span>, s2, len);
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">calculate_length</span></span>(s: <span class="hljs-built_in">String</span>) -&gt; (<span class="hljs-built_in">String</span>, <span class="hljs-keyword">usize</span>) {
    <span class="hljs-keyword">let</span> length = s.len(); <span class="hljs-comment">// len() returns the length of a String.</span>

    (s, length)
}
</code></pre>
<p>But this is too much ceremony and a lot of work for a concept that should be
common. Luckily for us, Rust has a feature for this concept, and it’s called
<em>references</em>.</p>

    `,
    "borrowing": `
                    <a class="header" href="#references-and-borrowing" name="references-and-borrowing"><h2>References and Borrowing</h2></a>
<p>The issue with the tuple code at the end of the preceding section is that we
have to return the <code class="hljs">String</code> to the calling function so we can still use the
<code class="hljs">String</code> after the call to <code class="hljs">calculate_length</code>, because the <code class="hljs">String</code> was moved
into <code class="hljs">calculate_length</code>.</p>
<p>Here is how you would define and use a <code class="hljs">calculate_length</code> function that has a
<em>reference</em> to an object as a parameter instead of taking ownership of the
value:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> s1 = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">"hello"</span>);

    <span class="hljs-keyword">let</span> len = calculate_length(&amp;s1);

    <span class="hljs-built_in">println!</span>(<span class="hljs-string">"The length of '{}' is {}."</span>, s1, len);
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">calculate_length</span></span>(s: &amp;<span class="hljs-built_in">String</span>) -&gt; <span class="hljs-keyword">usize</span> {
    s.len()
}
</code></pre>
<p>First, notice that all the tuple code in the variable declaration and the
function return value is gone. Second, note that we pass <code class="hljs">&amp;s1</code> into
<code class="hljs">calculate_length</code>, and in its definition, we take <code class="hljs">&amp;String</code> rather than
<code class="hljs">String</code>.</p>
<p>These ampersands are <em>references</em>, and they allow you to refer to some value
without taking ownership of it. Figure 4-8 shows a diagram.</p>
<figure>
<img alt="&amp;String s pointing at String s1" src="img/trpl04-05.svg" class="center">
<figcaption>
<p>Figure 4-8: <code class="hljs">&amp;String s</code> pointing at <code class="hljs">String s1</code></p>
</figcaption>
</figure>
<p>Let’s take a closer look at the function call here:</p>
<pre><div class="buttons"><i class="fa fa-expand"></i></div><code class="language-rust hljs"><span class="hidden"> <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">calculate_length</span></span>(s: &amp;<span class="hljs-built_in">String</span>) -&gt; <span class="hljs-keyword">usize</span> {
</span><span class="hidden">     s.len()
</span><span class="hidden"> }
</span><span class="hljs-keyword">let</span> s1 = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">"hello"</span>);

<span class="hljs-keyword">let</span> len = calculate_length(&amp;s1);
</code></pre>
<p>The <code class="hljs">&amp;s1</code> syntax lets us create a reference that <em>refers</em> to the value of <code class="hljs">s1</code>
but does not own it. Because it does not own it, the value it points to will
not be dropped when the reference goes out of scope.</p>
<p>Likewise, the signature of the function uses <code class="hljs">&amp;</code> to indicate that the type of
the parameter <code class="hljs">s</code> is a reference. Let’s add some explanatory annotations:</p>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">calculate_length</span></span>(s: &amp;<span class="hljs-built_in">String</span>) -&gt; <span class="hljs-keyword">usize</span> { <span class="hljs-comment">// s is a reference to a String</span>
    s.len()
} <span class="hljs-comment">// Here, s goes out of scope. But because it does not have ownership of what</span>
  <span class="hljs-comment">// it refers to, nothing happens.</span>
</code></pre>
<p>The scope in which the variable <code class="hljs">s</code> is valid is the same as any function
parameter's scope, but we don’t drop what the reference points to when it goes
out of scope because we don’t have ownership. Functions that have references as
parameters instead of the actual values mean we won’t need to return the values
in order to give back ownership, since we never had ownership.</p>
<p>We call having references as function parameters <em>borrowing</em>. As in real life,
if a person owns something, you can borrow it from them. When you’re done, you
have to give it back.</p>
<p>So what happens if we try to modify something we’re borrowing? Try the code in
Listing 4-9. Spoiler alert: it doesn’t work!</p>
<figure>
<span class="filename">Filename: src/main.rs</span>
<pre><code class="language-rust,ignore hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> s = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">"hello"</span>);

    change(&amp;s);
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">change</span></span>(some_string: &amp;<span class="hljs-built_in">String</span>) {
    some_string.push_str(<span class="hljs-string">", world"</span>);
}
</code></pre>
<figcaption>
<p>Listing 4-9: Attempting to modify a borrowed value</p>
</figcaption>
</figure>
<p>Here’s the error:</p>
<pre><code class="language-text hljs">error: cannot borrow immutable borrowed content \`*some_string\` as mutable
 --&gt; error.rs:8:5
  |
8 |     some_string.push_str(", world");
  |     ^^^^^^^^^^^
</code></pre>
<p>Just as variables are immutable by default, so are references. We’re not
allowed to modify something we have a reference to.</p>
<a class="header" href="#mutable-references" name="mutable-references"><h3>Mutable References</h3></a>
<p>We can fix the error in the code from Listing 4-9 with just a small tweak:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut</span> s = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">"hello"</span>);

    change(&amp;<span class="hljs-keyword">mut</span> s);
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">change</span></span>(some_string: &amp;<span class="hljs-keyword">mut</span> <span class="hljs-built_in">String</span>) {
    some_string.push_str(<span class="hljs-string">", world"</span>);
}
</code></pre>
<p>First, we had to change <code class="hljs">s</code> to be <code class="hljs">mut</code>. Then we had to create a mutable
reference with <code class="hljs">&amp;mut s</code> and accept a mutable reference with <code class="hljs">some_string: &amp;mut String</code>.</p>
<p>But mutable references have one big restriction: you can only have one mutable
reference to a particular piece of data in a particular scope. This code will
fail:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust,ignore hljs"><span class="hljs-keyword">let</span> <span class="hljs-keyword">mut</span> s = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">"hello"</span>);

<span class="hljs-keyword">let</span> r1 = &amp;<span class="hljs-keyword">mut</span> s;
<span class="hljs-keyword">let</span> r2 = &amp;<span class="hljs-keyword">mut</span> s;
</code></pre>
<p>Here’s the error:</p>
<pre><code class="language-text hljs">error[E0499]: cannot borrow \`s\` as mutable more than once at a time
 --&gt; borrow_twice.rs:5:19
  |
4 |     let r1 = &amp;mut s;
  |                   - first mutable borrow occurs here
5 |     let r2 = &amp;mut s;
  |                   ^ second mutable borrow occurs here
6 | }
  | - first borrow ends here
</code></pre>
<p>This restriction allows for mutation but in a very controlled fashion. It’s
something that new Rustaceans struggle with, because most languages let you
mutate whenever you’d like. The benefit of having this restriction is that Rust
can prevent data races at compile time.</p>
<p>A <em>data race</em> is a particular type of race condition in which these three
behaviors occur:</p>
<ol>
<li>Two or more pointers access the same data at the same time.</li>
<li>At least one of the pointers is being used to write to the data.</li>
<li>There’s no mechanism being used to synchronize access to the data.</li>
</ol>
<p>Data races cause undefined behavior and can be difficult to diagnose and fix
when you’re trying to track them down at runtime; Rust prevents this problem
from happening because it won’t even compile code with data races!</p>
<p>As always, we can use curly brackets to create a new scope, allowing for
multiple mutable references, just not <em>simultaneous</em> ones:</p>
<pre><code class="language-rust hljs"><span class="hljs-keyword">let</span> <span class="hljs-keyword">mut</span> s = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">"hello"</span>);

{
    <span class="hljs-keyword">let</span> r1 = &amp;<span class="hljs-keyword">mut</span> s;

} <span class="hljs-comment">// r1 goes out of scope here, so we can make a new reference with no problems.</span>

<span class="hljs-keyword">let</span> r2 = &amp;<span class="hljs-keyword">mut</span> s;
</code></pre>
<p>A similar rule exists for combining mutable and immutable references. This code
results in an error:</p>
<pre><code class="language-rust,ignore hljs"><span class="hljs-keyword">let</span> <span class="hljs-keyword">mut</span> s = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">"hello"</span>);

<span class="hljs-keyword">let</span> r1 = &amp;s; <span class="hljs-comment">// no problem</span>
<span class="hljs-keyword">let</span> r2 = &amp;s; <span class="hljs-comment">// no problem</span>
<span class="hljs-keyword">let</span> r3 = &amp;<span class="hljs-keyword">mut</span> s; <span class="hljs-comment">// BIG PROBLEM</span>
</code></pre>
<p>Here’s the error:</p>
<pre><code class="language-text hljs">error[E0502]: cannot borrow \`s\` as mutable because it is also borrowed as
immutable
 --&gt; borrow_thrice.rs:6:19
  |
4 |     let r1 = &amp;s; // no problem
  |               - immutable borrow occurs here
5 |     let r2 = &amp;s; // no problem
6 |     let r3 = &amp;mut s; // BIG PROBLEM
  |                   ^ mutable borrow occurs here
7 | }
  | - immutable borrow ends here
</code></pre>
<p>Whew! We <em>also</em> cannot have a mutable reference while we have an immutable one.
Users of an immutable reference don’t expect the values to suddenly change out
from under them! However, multiple immutable references are okay because no one
who is just reading the data has the ability to affect anyone else’s reading of
the data.</p>
<p>Even though these errors may be frustrating at times, remember that it’s the
Rust compiler pointing out a potential bug early (at compile time rather than
at runtime) and showing you exactly where the problem is instead of you having
to track down why sometimes your data isn’t what you thought it should be.</p>
<a class="header" href="#dangling-references" name="dangling-references"><h3>Dangling References</h3></a>
<p>In languages with pointers, it’s easy to erroneously create a <em>dangling
pointer</em>, a pointer that references a location in memory that may have been
given to someone else, by freeing some memory while preserving a pointer to
that memory. In Rust, by contrast, the compiler guarantees that references will
never be dangling references: if we have a reference to some data, the compiler
will ensure that the data will not go out of scope before the reference to the
data does.</p>
<p>Let’s try to create a dangling reference:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust,ignore hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> reference_to_nothing = dangle();
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">dangle</span></span>() -&gt; &amp;<span class="hljs-built_in">String</span> {
    <span class="hljs-keyword">let</span> s = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">"hello"</span>);

    &amp;s
}
</code></pre>
<p>Here’s the error:</p>
<pre><code class="language-text hljs">error[E0106]: missing lifetime specifier
 --&gt; dangle.rs:5:16
  |
5 | fn dangle() -&gt; &amp;String {
  |                ^^^^^^^
  |
  = help: this function's return type contains a borrowed value, but there is no
    value for it to be borrowed from
  = help: consider giving it a 'static lifetime

error: aborting due to previous error
</code></pre>
<p>This error message refers to a feature we haven’t covered yet: <em>lifetimes</em>.
We’ll discuss lifetimes in detail in Chapter 10. But, if you disregard the
parts about lifetimes, the message does contain the key to why this code is a
problem:</p>
<pre><code class="language-text hljs">this function's return type contains a borrowed value, but there is no value
for it to be borrowed from.
</code></pre>
<p>Let’s take a closer look at exactly what’s happening at each stage of our
<code class="hljs">dangle</code> code:</p>
<pre><code class="language-rust,ignore hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">dangle</span></span>() -&gt; &amp;<span class="hljs-built_in">String</span> { <span class="hljs-comment">// dangle returns a reference to a String</span>

    <span class="hljs-keyword">let</span> s = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">"hello"</span>); <span class="hljs-comment">// s is a new String</span>

    &amp;s <span class="hljs-comment">// we return a reference to the String, s</span>
} <span class="hljs-comment">// Here, s goes out of scope, and is dropped. Its memory goes away.</span>
  <span class="hljs-comment">// Danger!</span>
</code></pre>
<p>Because <code class="hljs">s</code> is created inside <code class="hljs">dangle</code>, when the code of <code class="hljs">dangle</code> is finished,
<code class="hljs">s</code> will be deallocated. But we tried to return a reference to it. That means
this reference would be pointing to an invalid <code class="hljs">String</code>! That’s no good. Rust
won’t let us do this.</p>
<p>The correct code here is to return the <code class="hljs">String</code> directly:</p>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">no_dangle</span></span>() -&gt; <span class="hljs-built_in">String</span> {
    <span class="hljs-keyword">let</span> s = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">"hello"</span>);

    s
}
</code></pre>
<p>This works without any problems. Ownership is moved out, and nothing is
deallocated.</p>
<a class="header" href="#the-rules-of-references" name="the-rules-of-references"><h3>The Rules of References</h3></a>
<p>Let’s recap what we’ve discussed about references:</p>
<ol>
<li>At any given time, you can have <em>either</em> but not both of:</li>
</ol>
<ul>
<li>One mutable reference.</li>
<li>Any number of immutable references.</li>
</ul>
<ol start="2">
<li>References must always be valid.</li>
</ol>
<p>Next, we’ll look at a different kind of reference: slices.</p>

    `,
    "slices": `              <a class="header" href="#slices" name="slices"><h2>Slices</h2></a>
<p>Another data type that does not have ownership is the <em>slice</em>. Slices let you
reference a contiguous sequence of elements in a collection rather than the
whole collection.</p>
<p>Here’s a small programming problem: write a function that takes a string and
returns the first word it finds in that string. If the function doesn’t find a
space in the string, it means the whole string is one word, so the entire
string should be returned.</p>
<p>Let’s think about the signature of this function:</p>
<pre><code class="language-rust,ignore hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">first_word</span></span>(s: &amp;<span class="hljs-built_in">String</span>) -&gt; ?
</code></pre>
<p>This function, <code class="hljs">first_word</code>, has a <code class="hljs">&amp;String</code> as a parameter. We don’t want
ownership, so this is fine. But what should we return? We don’t really have a
way to talk about <em>part</em> of a string. However, we could return the index of the
end of the word. Let’s try that as shown in Listing 4-10:</p>
<figure>
<span class="filename">Filename: src/main.rs</span>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">first_word</span></span>(s: &amp;<span class="hljs-built_in">String</span>) -&gt; <span class="hljs-keyword">usize</span> {
    <span class="hljs-keyword">let</span> bytes = s.as_bytes();

    <span class="hljs-keyword">for</span> (i, &amp;item) <span class="hljs-keyword">in</span> bytes.iter().enumerate() {
        <span class="hljs-keyword">if</span> item == <span class="hljs-string">b' '</span> {
            <span class="hljs-keyword">return</span> i;
        }
    }

    s.len()
}
</code></pre>
<figcaption>
<p>Listing 4-10: The <code class="hljs">first_word</code> function that returns a byte index value into
the <code class="hljs">String</code> parameter</p>
</figcaption>
</figure>
<p>Let’s break down this code a bit. Because we need to go through the <code class="hljs">String</code>
element by element and check whether a value is a space, we’ll convert our
<code class="hljs">String</code> to an array of bytes using the <code class="hljs">as_bytes</code> method:</p>
<pre><code class="language-rust,ignore hljs"><span class="hljs-keyword">let</span> bytes = s.as_bytes();
</code></pre>
<p>Next, we create an iterator over the array of bytes using the <code class="hljs">iter</code> method :</p>
<pre><code class="language-rust,ignore hljs"><span class="hljs-keyword">for</span> (i, &amp;item) <span class="hljs-keyword">in</span> bytes.iter().enumerate() {
</code></pre>
<p>We’ll discuss iterators in more detail in Chapter 16. For now, know that <code class="hljs">iter</code>
is a method that returns each element in a collection, and <code class="hljs">enumerate</code> wraps
the result of <code class="hljs">iter</code> and returns each element as part of a tuple instead. The
first element of the returned tuple is the index, and the second element is a
reference to the element. This is a bit more convenient than calculating the
index ourselves.</p>
<p>Because the <code class="hljs">enumerate</code> method returns a tuple, we can use patterns to
destructure that tuple, just like everywhere else in Rust. So in the <code class="hljs">for</code>
loop, we specify a pattern that has <code class="hljs">i</code> for the index in the tuple and <code class="hljs">&amp;item</code>
for the single byte in the tuple. Because we get a reference to the element
from <code class="hljs">.iter().enumerate()</code>, we use <code class="hljs">&amp;</code> in the pattern.</p>
<p>We search for the byte that represents the space by using the byte literal
syntax. If we find a space, we return the position. Otherwise, we return the
length of the string by using <code class="hljs">s.len()</code>:</p>
<pre><code class="language-rust,ignore hljs">    <span class="hljs-keyword">if</span> item == <span class="hljs-string">b' '</span> {
        <span class="hljs-keyword">return</span> i;
    }
}
s.len()
</code></pre>
<p>We now have a way to find out the index of the end of the first word in the
string, but there’s a problem. We’re returning a <code class="hljs">usize</code> on its own, but it’s
only a meaningful number in the context of the <code class="hljs">&amp;String</code>. In other words,
because it’s a separate value from the <code class="hljs">String</code>, there’s no guarantee that it
will still be valid in the future. Consider the program in Listing 4-11 that
uses the <code class="hljs">first_word</code> function from Listing 4-10:</p>
<figure>
<span class="filename">Filename: src/main.rs</span>
<pre><div class="buttons"><i class="fa fa-expand"></i></div><code class="language-rust hljs"><span class="hidden"> <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">first_word</span></span>(s: &amp;<span class="hljs-built_in">String</span>) -&gt; <span class="hljs-keyword">usize</span> {
</span><span class="hidden">     <span class="hljs-keyword">let</span> bytes = s.as_bytes();
</span><span class="hidden">
</span><span class="hidden">     <span class="hljs-keyword">for</span> (i, &amp;item) <span class="hljs-keyword">in</span> bytes.iter().enumerate() {
</span><span class="hidden">         <span class="hljs-keyword">if</span> item == <span class="hljs-string">b' '</span> {
</span><span class="hidden">             <span class="hljs-keyword">return</span> i;
</span><span class="hidden">         }
</span><span class="hidden">     }
</span><span class="hidden">
</span><span class="hidden">     s.len()
</span><span class="hidden"> }
</span><span class="hidden">
</span><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut</span> s = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">"hello world"</span>);

    <span class="hljs-keyword">let</span> word = first_word(&amp;s); <span class="hljs-comment">// word will get the value 5.</span>

    s.clear(); <span class="hljs-comment">// This empties the String, making it equal to "".</span>

    <span class="hljs-comment">// word still has the value 5 here, but there's no more string that</span>
    <span class="hljs-comment">// we could meaningfully use the value 5 with. word is now totally invalid!</span>
}
</code></pre>
<figcaption>
<p>Listing 4-11: Storing the result from calling the <code class="hljs">first_word</code> function then
changing the <code class="hljs">String</code> contents</p>
</figcaption>
</figure>
<p>This program compiles without any errors and also would if we used <code class="hljs">word</code> after
calling <code class="hljs">s.clear()</code>. <code class="hljs">word</code> isn’t connected to the state of <code class="hljs">s</code> at all, so
<code class="hljs">word</code> still contains the value <code class="hljs">5</code>. We could use that value <code class="hljs">5</code> with the
variable <code class="hljs">s</code> to try to extract the first word out, but this would be a bug
because the contents of <code class="hljs">s</code> have changed since we saved <code class="hljs">5</code> in <code class="hljs">word</code>.</p>
<p>Having to worry about the index in <code class="hljs">word</code> getting out of sync with the data in
<code class="hljs">s</code> is tedious and error prone! Managing these indices is even more brittle if
we write a <code class="hljs">second_word</code> function. Its signature would have to look like this:</p>
<pre><code class="language-rust,ignore hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">second_word</span></span>(s: &amp;<span class="hljs-built_in">String</span>) -&gt; (<span class="hljs-keyword">usize</span>, <span class="hljs-keyword">usize</span>) {
</code></pre>
<p>Now we’re tracking a start <em>and</em> an ending index, and we have even more values
that were calculated from data in a particular state but aren’t tied to that
state at all. We now have three unrelated variables floating around that need
to be kept in sync.</p>
<p>Luckily, Rust has a solution to this problem: string slices.</p>
<a class="header" href="#string-slices" name="string-slices"><h3>String Slices</h3></a>
<p>A <em>string slice</em> is a reference to part of a <code class="hljs">String</code>, and looks like this:</p>
<pre><code class="language-rust hljs"><span class="hljs-keyword">let</span> s = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">"hello world"</span>);

<span class="hljs-keyword">let</span> hello = &amp;s[<span class="hljs-number">0</span>..<span class="hljs-number">5</span>];
<span class="hljs-keyword">let</span> world = &amp;s[<span class="hljs-number">6</span>..<span class="hljs-number">11</span>];
</code></pre>
<p>This is similar to taking a reference to the whole <code class="hljs">String</code> but with the extra
<code class="hljs">[0..5]</code> bit. Rather than a reference to the entire <code class="hljs">String</code>, it’s a reference
to an internal position in the <code class="hljs">String</code> and the number of elements that it
refers to.</p>
<p>We create slices with a range of <code class="hljs">[starting_index..ending_index]</code>, but the
slice data structure actually stores the starting position and the length of
the slice. So in the case of <code class="hljs">let world = &amp;s[6..11];</code>, <code class="hljs">world</code> would be a slice
that contains a pointer to the 6th byte of <code class="hljs">s</code> and a length value of 5.</p>
<p>Figure 4-12 shows this in a diagram.</p>
<figure>
<img alt="world containing a pointer to the 6th byte of String s and a length 5" src="img/trpl04-06.svg" class="center" style="width: 50%;">
<figcaption>
<p>Figure 4-12: String slice referring to part of a <code class="hljs">String</code></p>
</figcaption>
</figure>
<p>With Rust’s <code class="hljs">..</code> range syntax, if you want to start at the first index (zero),
you can drop the value before the two periods. In other words, these are equal:</p>
<pre><code class="language-rust hljs"><span class="hljs-keyword">let</span> s = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">"hello"</span>);

<span class="hljs-keyword">let</span> slice = &amp;s[<span class="hljs-number">0</span>..<span class="hljs-number">2</span>];
<span class="hljs-keyword">let</span> slice = &amp;s[..<span class="hljs-number">2</span>];
</code></pre>
<p>By the same token, if your slice includes the last byte of the <code class="hljs">String</code>, you
can drop the trailing number. That means these are equal:</p>
<pre><code class="language-rust hljs"><span class="hljs-keyword">let</span> s = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">"hello"</span>);

<span class="hljs-keyword">let</span> len = s.len();

<span class="hljs-keyword">let</span> slice = &amp;s[<span class="hljs-number">3</span>..len];
<span class="hljs-keyword">let</span> slice = &amp;s[<span class="hljs-number">3</span>..];
</code></pre>
<p>You can also drop both values to take a slice of the entire string. So these
are equal:</p>
<pre><code class="language-rust hljs"><span class="hljs-keyword">let</span> s = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">"hello"</span>);

<span class="hljs-keyword">let</span> len = s.len();

<span class="hljs-keyword">let</span> slice = &amp;s[<span class="hljs-number">0</span>..len];
<span class="hljs-keyword">let</span> slice = &amp;s[..];
</code></pre>
<p>With all this information in mind, let’s rewrite <code class="hljs">first_word</code> to return a
slice. The type that signifies “string slice” is written as <code class="hljs">&amp;str</code>:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">first_word</span></span>(s: &amp;<span class="hljs-built_in">String</span>) -&gt; &amp;<span class="hljs-keyword">str</span> {
    <span class="hljs-keyword">let</span> bytes = s.as_bytes();

    <span class="hljs-keyword">for</span> (i, &amp;item) <span class="hljs-keyword">in</span> bytes.iter().enumerate() {
        <span class="hljs-keyword">if</span> item == <span class="hljs-string">b' '</span> {
            <span class="hljs-keyword">return</span> &amp;s[<span class="hljs-number">0</span>..i];
        }
    }

    &amp;s[..]
}
</code></pre>
<p>We get the index for the end of the word in the same way as we did in Listing
4-10, by looking for the first occurrence of a space. When we find a space, we
return a string slice using the start of the string and the index of the space
as the starting and ending indices.</p>
<p>Now when we call <code class="hljs">first_word</code>, we get back a single value that is tied to the
underlying data. The value is made up of a reference to the starting point of
the slice and the number of elements in the slice.</p>
<p>Returning a slice would also work for a <code class="hljs">second_word</code> function:</p>
<pre><code class="language-rust,ignore hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">second_word</span></span>(s: &amp;<span class="hljs-built_in">String</span>) -&gt; &amp;<span class="hljs-keyword">str</span> {
</code></pre>
<p>We now have a straightforward API that’s much harder to mess up, since the
compiler will ensure the references into the <code class="hljs">String</code> remain valid. Remember
the bug in the program in Listing 4-11, when we got the index to the end of the
first word but then cleared the string so our index was invalid? That code was
logically incorrect but didn’t show any immediate errors. The problems would
show up later if we kept trying to use the first word index with an emptied
string. Slices make this bug impossible and let us know we have a problem with
our code much sooner. Using the slice version of <code class="hljs">first_word</code> will throw a
compile time error:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust,ignore hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut</span> s = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">"hello world"</span>);

    <span class="hljs-keyword">let</span> word = first_word(&amp;s);

    s.clear(); <span class="hljs-comment">// Error!</span>
}
</code></pre>
<p>Here’s the compiler error:</p>
<pre><code class="language-text hljs">17:6 error: cannot borrow \`s\` as mutable because it is also borrowed as
            immutable [E0502]
    s.clear(); // Error!
    ^
15:29 note: previous borrow of \`s\` occurs here; the immutable borrow prevents
            subsequent moves or mutable borrows of \`s\` until the borrow ends
    let word = first_word(&amp;s);
                           ^
18:2 note: previous borrow ends here
fn main() {

}
^
</code></pre>
<p>Recall from the borrowing rules that if we have an immutable reference to
something, we cannot also take a mutable reference. Because <code class="hljs">clear</code> needs to
truncate the <code class="hljs">String</code>, it tries to take a mutable reference, which fails. Not
only has Rust made our API easier to use, but it has also eliminated an entire
class of errors at compile time!</p>
<a class="header" href="#string-literals-are-slices" name="string-literals-are-slices"><h4>String Literals Are Slices</h4></a>
<p>Recall that we talked about string literals being stored inside the binary. Now
that we know about slices, we can properly understand string literals:</p>
<pre><code class="language-rust hljs"><span class="hljs-keyword">let</span> s = <span class="hljs-string">"Hello, world!"</span>;
</code></pre>
<p>The type of <code class="hljs">s</code> here is <code class="hljs">&amp;str</code>: it’s a slice pointing to that specific point of
the binary. This is also why string literals are immutable; <code class="hljs">&amp;str</code> is an
immutable reference.</p>
<a class="header" href="#string-slices-as-parameters" name="string-slices-as-parameters"><h4>String Slices as Parameters</h4></a>
<p>Knowing that you can take slices of literals and <code class="hljs">String</code>s leads us to one more
improvement on <code class="hljs">first_word</code>, and that’s its signature:</p>
<pre><code class="language-rust,ignore hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">first_word</span></span>(s: &amp;<span class="hljs-built_in">String</span>) -&gt; &amp;<span class="hljs-keyword">str</span> {
</code></pre>
<p>A more experienced Rustacean would write the following line instead because it
allows us to use the same function on both <code class="hljs">String</code>s and <code class="hljs">&amp;str</code>s:</p>
<pre><code class="language-rust,ignore hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">first_word</span></span>(s: &amp;<span class="hljs-keyword">str</span>) -&gt; &amp;<span class="hljs-keyword">str</span> {
</code></pre>
<p>If we have a string slice, we can pass that directly. If we have a <code class="hljs">String</code>, we
can pass a slice of the entire <code class="hljs">String</code>. Defining a function to take a string
slice instead of a reference to a String makes our API more general and useful
without losing any functionality:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><div class="buttons"><i class="fa fa-expand"></i></div><code class="language-rust hljs"><span class="hidden"> <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">first_word</span></span>(s: &amp;<span class="hljs-keyword">str</span>) -&gt; &amp;<span class="hljs-keyword">str</span> {
</span><span class="hidden">     <span class="hljs-keyword">let</span> bytes = s.as_bytes();
</span><span class="hidden">
</span><span class="hidden">     <span class="hljs-keyword">for</span> (i, &amp;item) <span class="hljs-keyword">in</span> bytes.iter().enumerate() {
</span><span class="hidden">         <span class="hljs-keyword">if</span> item == <span class="hljs-string">b' '</span> {
</span><span class="hidden">             <span class="hljs-keyword">return</span> &amp;s[<span class="hljs-number">0</span>..i];
</span><span class="hidden">         }
</span><span class="hidden">     }
</span><span class="hidden">
</span><span class="hidden">     &amp;s[..]
</span><span class="hidden"> }
</span><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> my_string = <span class="hljs-built_in">String</span>::from(<span class="hljs-string">"hello world"</span>);

    <span class="hljs-comment">// first_word works on slices of \`String\`s</span>
    <span class="hljs-keyword">let</span> word = first_word(&amp;my_string[..]);

    <span class="hljs-keyword">let</span> my_string_literal = <span class="hljs-string">"hello world"</span>;

    <span class="hljs-comment">// first_word works on slices of string literals</span>
    <span class="hljs-keyword">let</span> word = first_word(&amp;my_string_literal[..]);

    <span class="hljs-comment">// since string literals *are* string slices already,</span>
    <span class="hljs-comment">// this works too, without the slice syntax!</span>
    <span class="hljs-keyword">let</span> word = first_word(my_string_literal);
}
</code></pre>
<a class="header" href="#other-slices" name="other-slices"><h3>Other Slices</h3></a>
<p>String slices, as you might imagine, are specific to strings. But there’s a
more general slice type, too. Consider this array:</p>
<pre><code class="language-rust hljs"><span class="hljs-keyword">let</span> a = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>];
</code></pre>
<p>Just like we might want to refer to a part of a string, we might want to refer
to part of an array and would do so like this:</p>
<pre><code class="language-rust hljs"><span class="hljs-keyword">let</span> a = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>];

<span class="hljs-keyword">let</span> slice = &amp;a[<span class="hljs-number">1</span>..<span class="hljs-number">3</span>];
</code></pre>
<p>This slice has the type <code class="hljs">&amp;[i32]</code>. It works the same way as string slices do, by
storing a reference to the first element and a length. You’ll use this kind of
slice for all sorts of other collections. We’ll discuss these collections in
detail when we talk about vectors in Chapter 8.</p>
<a class="header" href="#summary" name="summary"><h2>Summary</h2></a>
<p>The concepts of ownership, borrowing, and slices are what ensure memory safety
in Rust programs at compile time. The Rust language gives you control over your
memory usage like other systems programming languages, but having the owner of
data automatically clean up that data when the owner goes out of scope means
you don’t have to write and debug extra code to get this control.</p>
<p>Ownership affects how lots of other parts of Rust work, so we’ll talk about
these concepts further throughout the rest of the book. Let’s move on to the
next chapter and look at grouping pieces of data together in a <code class="hljs">struct</code>.</p>

    `,
    "structs": `
    <a class="header" href="#structs" name="structs"><h1>Structs</h1></a>
<p>A <code class="hljs">struct</code>, short for <em>structure</em>, is a custom data type that lets us name and
package together multiple related values that make up a meaningful group. If
you come from an object-oriented language, a <code class="hljs">struct</code> is like an object’s data
attributes. In the next section of this chapter, we’ll talk about how to define
methods on our structs; methods are how you specify the <em>behavior</em> that goes
along with a struct’s data. The <code class="hljs">struct</code> and <code class="hljs">enum</code> (that we will talk about in
Chapter 6) concepts are the building blocks for creating new types in your
program’s domain in order to take full advantage of Rust’s compile-time type
checking.</p>
<p>One way of thinking about structs is that they are similar to tuples, which we
talked about in Chapter 3. Like tuples, the pieces of a struct can be different
types. Unlike tuples, we name each piece of data so that it’s clearer what the
values mean. Structs are more flexible as a result of these names: we don’t
have to rely on the order of the data to specify or access the values of an
instance.</p>
<p>To define a struct, we enter the keyword <code class="hljs">struct</code> and give the whole struct a
name. A struct’s name should describe what the significance is of these pieces
of data being grouped together. Then, inside curly braces, we define the names
of the pieces of data, which we call <em>fields</em>, and specify each field’s type.
For example, Listing 5-1 shows a struct to store information about a user
account:</p>
<figure>
<pre><code class="language-rust hljs"><span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">User</span></span> {
    username: <span class="hljs-built_in">String</span>,
    email: <span class="hljs-built_in">String</span>,
    sign_in_count: <span class="hljs-keyword">u64</span>,
    active: <span class="hljs-keyword">bool</span>,
}
</code></pre>
<figcaption>
<p>Listing 5-1: A <code class="hljs">User</code> struct definition</p>
</figcaption>
</figure>
<p>To use a struct once we've defined it, we create an <em>instance</em> of that struct
by specifying concrete values for each of the fields. Creating an instance is
done by stating the name of the struct, then curly braces with <code class="hljs">key: value</code>
pairs inside it where the keys are the names of the fields and the values are
the data we want to store in those fields. The fields don’t have to be
specified in the same order in which the struct declared them. In other words,
the struct definition is like a general template for the type, and instances
fill in that template with particular data to create values of the type. For
example, we can declare a particular user like this:</p>
<pre><div class="buttons"><i class="fa fa-expand"></i></div><code class="language-rust hljs"><span class="hidden"> <span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">User</span></span> {
</span><span class="hidden">     username: <span class="hljs-built_in">String</span>,
</span><span class="hidden">     email: <span class="hljs-built_in">String</span>,
</span><span class="hidden">     sign_in_count: <span class="hljs-keyword">u64</span>,
</span><span class="hidden">     active: <span class="hljs-keyword">bool</span>,
</span><span class="hidden"> }
</span><span class="hidden">
</span><span class="hljs-keyword">let</span> user1 = User {
    email: <span class="hljs-built_in">String</span>::from(<span class="hljs-string">"someone@example.com"</span>),
    username: <span class="hljs-built_in">String</span>::from(<span class="hljs-string">"someusername123"</span>),
    active: <span class="hljs-literal">true</span>,
    sign_in_count: <span class="hljs-number">1</span>,
};
</code></pre>
<p>To get a particular value out of a struct, we can use dot notation. If we
wanted just this user’s email address, we can say <code class="hljs">user1.email</code>.</p>
<a class="header" href="#ownership-of-struct-data" name="ownership-of-struct-data"><h2>Ownership of Struct Data</h2></a>
<p>In the <code class="hljs">User</code> struct definition in Listing 5-1, we used the owned <code class="hljs">String</code> type
rather than the <code class="hljs">&amp;str</code> string slice type. This is a deliberate choice because
we want instances of this struct to own all of its data, and for that data to
be valid for as long as the entire struct is valid.</p>
<p>It is possible for structs to store references to data owned by something else,
but to do so requires the use of <em>lifetimes</em>, a feature of Rust that we'll
discuss in Chapter 10. Lifetimes ensure that the data a struct references is
valid for as long as the struct is. If you try to store a reference in a struct
without specifying lifetimes, like this:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><code class="language-rust,ignore hljs"><span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">User</span></span> {
    username: &amp;<span class="hljs-keyword">str</span>,
    email: &amp;<span class="hljs-keyword">str</span>,
    sign_in_count: <span class="hljs-keyword">u64</span>,
    active: <span class="hljs-keyword">bool</span>,
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> user1 = User {
        email: <span class="hljs-string">"someone@example.com"</span>,
        username: <span class="hljs-string">"someusername123"</span>,
        active: <span class="hljs-literal">true</span>,
        sign_in_count: <span class="hljs-number">1</span>,
    };
}
</code></pre>
<p>The compiler will complain that it needs lifetime specifiers:</p>
<pre><code class="language-text hljs">error[E0106]: missing lifetime specifier
 --&gt;
  |
2 |     username: &amp;str,
  |               ^ expected lifetime parameter

error[E0106]: missing lifetime specifier
 --&gt;
  |
3 |     email: &amp;str,
  |            ^ expected lifetime parameter
</code></pre>
<p>We will talk about how to fix these errors in order to store references in
structs in Chapter 10, but for now, fix errors like these by switching to owned
types like <code class="hljs">String</code> instead of references like <code class="hljs">&amp;str</code>.</p>
<a class="header" href="#an-example-program" name="an-example-program"><h2>An Example Program</h2></a>
<p>To understand when we might want to use structs, let’s write a program that
calculates the area of a rectangle. We’ll start off with single variables, then
refactor our program until we’re using structs instead.</p>
<p>Let’s make a new binary project with Cargo called <em>rectangles</em> that will take
the length and width of a rectangle specified in pixels and will calculate the
area of the rectangle. Listing 5-2 has a short program with one way of doing
just that in our project’s <em>src/main.rs</em>:</p>
<figure>
<span class="filename">Filename: src/main.rs</span>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> length1 = <span class="hljs-number">50</span>;
    <span class="hljs-keyword">let</span> width1 = <span class="hljs-number">30</span>;

    <span class="hljs-built_in">println!</span>(
        <span class="hljs-string">"The area of the rectangle is {} square pixels."</span>,
        area(length1, width1)
    );
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">area</span></span>(length: <span class="hljs-keyword">u32</span>, width: <span class="hljs-keyword">u32</span>) -&gt; <span class="hljs-keyword">u32</span> {
    length * width
}
</code></pre>
<figcaption>
<p>Listing 5-2: Calculating the area of a rectangle specified by its length and
width in separate variables</p>
</figcaption>
</figure>
<p>Let’s try running this program with <code class="hljs">cargo run</code>:</p>
<pre><code class="language-text hljs">The area of the rectangle is 1500 square pixels.
</code></pre>
<a class="header" href="#refactoring-with-tuples" name="refactoring-with-tuples"><h3>Refactoring with Tuples</h3></a>
<p>Our little program works okay; it figures out the area of the rectangle by
calling the <code class="hljs">area</code> function with each dimension. But we can do better. The
length and the width are related to each other since together they describe one
rectangle.</p>
<p>The issue with this method is evident in the signature of <code class="hljs">area</code>:</p>
<pre><code class="language-rust,ignore hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">area</span></span>(length: <span class="hljs-keyword">u32</span>, width: <span class="hljs-keyword">u32</span>) -&gt; <span class="hljs-keyword">u32</span> {
</code></pre>
<p>The <code class="hljs">area</code> function is supposed to calculate the area of one rectangle, but our
function has two parameters. The parameters are related, but that’s not
expressed anywhere in our program itself. It would be more readable and more
manageable to group length and width together.</p>
<p>We’ve already discussed one way we might do that in Chapter 3: tuples. Listing
5-3 has a version of our program which uses tuples:</p>
<figure>
<span class="filename">Filename: src/main.rs</span>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> rect1 = (<span class="hljs-number">50</span>, <span class="hljs-number">30</span>);

    <span class="hljs-built_in">println!</span>(
        <span class="hljs-string">"The area of the rectangle is {} square pixels."</span>,
        area(rect1)
    );
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">area</span></span>(dimensions: (<span class="hljs-keyword">u32</span>, <span class="hljs-keyword">u32</span>)) -&gt; <span class="hljs-keyword">u32</span> {
    dimensions.<span class="hljs-number">0</span> * dimensions.<span class="hljs-number">1</span>
}
</code></pre>
<figcaption>
<p>Listing 5-3: Specifying the length and width of the rectangle with a tuple</p>
</figcaption>
</figure>
<!-- I will add ghosting & wingdings once we're in libreoffice /Carol -->
<p>In one way, this is a little better. Tuples let us add a bit of structure, and
we’re now passing just one argument when we call <code class="hljs">area</code>. But in another way
this method is less clear: tuples don’t give names to their elements, so our
calculation has gotten more confusing because we have to index into the parts
of the tuple:</p>
<!-- I will change this to use wingdings instead of repeating this code once
we're in libreoffice /Carol -->
<pre><code class="language-rust,ignore hljs">dimensions.<span class="hljs-number">0</span> * dimensions.<span class="hljs-number">1</span>
</code></pre>
<p>It doesn’t matter if we mix up length and width for the area calculation, but
if we were to draw the rectangle on the screen it would matter! We would have
to remember that <code class="hljs">length</code> was the tuple index <code class="hljs">0</code> and <code class="hljs">width</code> was the tuple
index <code class="hljs">1</code>. If someone else was to work on this code, they would have to figure
this out and remember it as well. It would be easy to forget or mix these
values up and cause errors, since we haven’t conveyed the meaning of our data
in our code.</p>
<a class="header" href="#refactoring-with-structs-adding-more-meaning" name="refactoring-with-structs-adding-more-meaning"><h3>Refactoring with Structs: Adding More Meaning</h3></a>
<p>Here is where we bring in structs. We can transform our tuple into a data type
with a name for the whole as well as names for the parts, as shown in Listing
5-4:</p>
<figure>
<span class="filename">Filename: src/main.rs</span>
<pre><code class="language-rust hljs"><span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">Rectangle</span></span> {
    length: <span class="hljs-keyword">u32</span>,
    width: <span class="hljs-keyword">u32</span>,
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> rect1 = Rectangle { length: <span class="hljs-number">50</span>, width: <span class="hljs-number">30</span> };

    <span class="hljs-built_in">println!</span>(
        <span class="hljs-string">"The area of the rectangle is {} square pixels."</span>,
        area(&amp;rect1)
    );
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">area</span></span>(rectangle: &amp;Rectangle) -&gt; <span class="hljs-keyword">u32</span> {
    rectangle.length * rectangle.width
}
</code></pre>
<figcaption>
<p>Listing 5-4: Defining a <code class="hljs">Rectangle</code> struct</p>
</figcaption>
</figure>
<!-- Will add ghosting & wingdings once we're in libreoffice /Carol -->
<p>Here we’ve defined a struct and given it the name <code class="hljs">Rectangle</code>. Inside the <code class="hljs">{}</code>
we defined the fields to be <code class="hljs">length</code> and <code class="hljs">width</code>, both of which have type
<code class="hljs">u32</code>. Then in <code class="hljs">main</code>, we create a particular instance of a <code class="hljs">Rectangle</code> that
has a length of 50 and a width of 30.</p>
<p>Our <code class="hljs">area</code> function is now defined with one parameter that we’ve named
<code class="hljs">rectangle</code> whose type is an immutable borrow of a struct <code class="hljs">Rectangle</code> instance.
As we covered in Chapter 4, we want to borrow the struct rather than take
ownership of it so that <code class="hljs">main</code> keeps its ownership and can continue using
<code class="hljs">rect1</code>, so that’s why we have the <code class="hljs">&amp;</code> in the function signature and at the
call site.</p>
<p>The <code class="hljs">area</code> function accesses the <code class="hljs">length</code> and <code class="hljs">width</code> fields of the
<code class="hljs">Rectangle</code>. Our function signature for <code class="hljs">area</code> now says exactly what we mean:
calculate the area of a <code class="hljs">Rectangle</code>, using its <code class="hljs">length</code> and <code class="hljs">width</code> fields.
This conveys that the length and width are related to each other, and gives
descriptive names to the values rather than using the tuple index values of <code class="hljs">0</code>
and <code class="hljs">1</code>. This is a win for clarity.</p>
<a class="header" href="#adding-useful-functionality-with-derived-traits" name="adding-useful-functionality-with-derived-traits"><h3>Adding Useful Functionality with Derived Traits</h3></a>
<p>It’d be nice to be able to print out an instance of our <code class="hljs">Rectangle</code> while we’re
debugging our program and see the values for all its fields. Listing 5-5 tries
using the <code class="hljs">println!</code> macro as we have been:</p>
<figure>
<span class="filename">Filename: src/main.rs</span>
<pre><code class="language-rust,ignore hljs"><span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">Rectangle</span></span> {
    length: <span class="hljs-keyword">u32</span>,
    width: <span class="hljs-keyword">u32</span>,
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> rect1 = Rectangle { length: <span class="hljs-number">50</span>, width: <span class="hljs-number">30</span> };

    <span class="hljs-built_in">println!</span>(<span class="hljs-string">"rect1 is {}"</span>, rect1);
}
</code></pre>
<figcaption>
<p>Listing 5-5: Attempting to print a <code class="hljs">Rectangle</code> instance</p>
</figcaption>
</figure>
<p>If we run this, we get an error with this core message:</p>
<pre><code class="language-text hljs">error[E0277]: the trait bound \`Rectangle: std::fmt::Display\` is not satisfied
</code></pre>
<p>The <code class="hljs">println!</code> macro can do many kinds of formatting, and by default, <code class="hljs">{}</code>
tells <code class="hljs">println!</code> to use formatting known as <code class="hljs">Display</code>: output intended for
direct end-user consumption. The primitive types we’ve seen so far implement
<code class="hljs">Display</code> by default, as there’s only one way you’d want to show a <code class="hljs">1</code> or any
other primitive type to a user. But with structs, the way <code class="hljs">println!</code> should
format the output is less clear as there are more display possibilities: Do you
want commas or not? Do you want to print the struct <code class="hljs">{}</code>s? Should all the
fields be shown? Because of this ambiguity, Rust doesn’t try to guess what we
want and structs do not have a provided implementation of <code class="hljs">Display</code>.</p>
<p>If we keep reading the errors, though, we’ll find this helpful note:</p>
<pre><code class="language-text hljs">note: \`Rectangle\` cannot be formatted with the default formatter; try using
\`:?\` instead if you are using a format string
</code></pre>
<p>Let’s try it! The <code class="hljs">println!</code> will now look like
<code class="hljs">println!("rect1 is {:?}", rect1);</code>. Putting the specifier <code class="hljs">:?</code> inside
the <code class="hljs">{}</code> tells <code class="hljs">println!</code> we want to use an output format called <code class="hljs">Debug</code>.
<code class="hljs">Debug</code> is a trait that enables us to print out our struct in a way that is
useful for developers so that we can see its value while we are debugging our
code.</p>
<p>Let’s try running with this change and… drat. We still get an error:</p>
<pre><code class="language-text hljs">error: the trait bound \`Rectangle: std::fmt::Debug\` is not satisfied
</code></pre>
<p>Again, though, the compiler has given us a helpful note!</p>
<pre><code class="language-text hljs">note: \`Rectangle\` cannot be formatted using \`:?\`; if it is defined in your
crate, add \`#[derive(Debug)]\` or manually implement it
</code></pre>
<p>Rust <em>does</em> include functionality to print out debugging information, but we
have to explicitly opt-in to having that functionality be available for our
struct. To do that, we add the annotation <code class="hljs">#[derive(Debug)]</code> just before our
struct definition, as shown in Listing 5-6:</p>
<figure>
<pre><code class="language-rust hljs"><span class="hljs-meta">#[derive(Debug)]</span>
<span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">Rectangle</span></span> {
    length: <span class="hljs-keyword">u32</span>,
    width: <span class="hljs-keyword">u32</span>,
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> rect1 = Rectangle { length: <span class="hljs-number">50</span>, width: <span class="hljs-number">30</span> };

    <span class="hljs-built_in">println!</span>(<span class="hljs-string">"rect1 is {:?}"</span>, rect1);
}
</code></pre>
<figcaption>
<p>Listing 5-6: Adding the annotation to derive the <code class="hljs">Debug</code> trait and printing the
<code class="hljs">Rectangle</code> instance using debug formatting</p>
</figcaption>
</figure>
<p>At this point, if we run this program, we won’t get any errors and we’ll see
the following output:</p>
<pre><code class="language-text hljs">rect1 is Rectangle { length: 50, width: 30 }
</code></pre>
<p>Nice! It’s not the prettiest output, but it shows the values of all the fields
for this instance, which would definitely help during debugging. If we want
output that is a bit prettier and easier to read, which can be helpful with
larger structs, we can use <code class="hljs">{:#?}</code> in place of <code class="hljs">{:?}</code> in the <code class="hljs">println!</code> string.
If we use the pretty debug style in this example, the output will look like:</p>
<pre><code class="language-text hljs">rect1 is Rectangle {
    length: 50,
    width: 30
}
</code></pre>
<p>There are a number of traits Rust has provided for us to use with the <code class="hljs">derive</code>
annotation that can add useful behavior to our custom types. Those traits and
their behaviors are listed in Appendix C. We’ll be covering how to implement
these traits with custom behavior, as well as creating your own traits, in
Chapter 10.</p>
<p>Our <code class="hljs">area</code> function is pretty specific—it only computes the area of rectangles.
It would be nice to tie this behavior together more closely with our
<code class="hljs">Rectangle</code> struct, since it’s behavior that our <code class="hljs">Rectangle</code> type has
specifically. Let’s now look at how we can continue to refactor this code by
turning the <code class="hljs">area</code> function into an <code class="hljs">area</code> <em>method</em> defined on our <code class="hljs">Rectangle</code>
type.</p>
    `,
    "syntax": `            <a class="header" href="#method-syntax" name="method-syntax"><h2>Method Syntax</h2></a>
<p><em>Methods</em> are similar to functions: they’re declared with the <code class="hljs">fn</code> keyword and
their name, they can have parameters and return values, and they contain some
code that gets run when they’re called from somewhere else. Methods are
different from functions, however, because they’re defined within the context
of a struct (or an enum or a trait object, which we will cover in Chapters 6
and 13, respectively), and their first parameter is always <code class="hljs">self</code>, which
represents the instance of the struct that the method is being called on.</p>
<a class="header" href="#defining-methods" name="defining-methods"><h3>Defining Methods</h3></a>
<p>Let’s change our <code class="hljs">area</code> function that has a <code class="hljs">Rectangle</code> instance as a parameter
and instead make an <code class="hljs">area</code> method defined on the <code class="hljs">Rectangle</code> struct, as shown
in Listing 5-7:</p>
<figure>
<span class="filename">Filename: src/main.rs</span>
<pre><code class="language-rust hljs"><span class="hljs-meta">#[derive(Debug)]</span>
<span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">Rectangle</span></span> {
    length: <span class="hljs-keyword">u32</span>,
    width: <span class="hljs-keyword">u32</span>,
}

<span class="hljs-keyword">impl</span> Rectangle {
    <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">area</span></span>(&amp;<span class="hljs-keyword">self</span>) -&gt; <span class="hljs-keyword">u32</span> {
        <span class="hljs-keyword">self</span>.length * <span class="hljs-keyword">self</span>.width
    }
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> rect1 = Rectangle { length: <span class="hljs-number">50</span>, width: <span class="hljs-number">30</span> };

    <span class="hljs-built_in">println!</span>(
        <span class="hljs-string">"The area of the rectangle is {} square pixels."</span>,
        rect1.area()
    );
}
</code></pre>
<figcaption>
<p>Listing 5-7: Defining an <code class="hljs">area</code> method on the <code class="hljs">Rectangle</code> struct</p>
</figcaption>
</figure>
<!-- Will add ghosting and wingdings here in libreoffice /Carol -->
<p>In order to make the function be defined within the context of <code class="hljs">Rectangle</code>, we
start an <code class="hljs">impl</code> block (<code class="hljs">impl</code> is short for <em>implementation</em>). Then we move the
function within the <code class="hljs">impl</code> curly braces, and change the first (and in this
case, only) parameter to be <code class="hljs">self</code> in the signature and everywhere within the
body. Then in <code class="hljs">main</code> where we called the <code class="hljs">area</code> function and passed <code class="hljs">rect1</code> as
an argument, we can instead use <em>method syntax</em> to call the <code class="hljs">area</code> method on
our <code class="hljs">Rectangle</code> instance. Method syntax is taking an instance and adding a dot
followed by the method name, parentheses, and any arguments.</p>
<p>In the signature for <code class="hljs">area</code>, we get to use <code class="hljs">&amp;self</code> instead of <code class="hljs">rectangle: &amp;Rectangle</code> because Rust knows the type of <code class="hljs">self</code> is <code class="hljs">Rectangle</code> due to this
method being inside the <code class="hljs">impl Rectangle</code> context. Note we still need to have
the <code class="hljs">&amp;</code> before <code class="hljs">self</code>, just like we had <code class="hljs">&amp;Rectangle</code>. Methods can choose to
take ownership of <code class="hljs">self</code>, borrow <code class="hljs">self</code> immutably as we’ve done here, or borrow
<code class="hljs">self</code> mutably, just like any other parameter.</p>
<p>We’ve chosen <code class="hljs">&amp;self</code> here for the same reason we used <code class="hljs">&amp;Rectangle</code> in the
function version: we don’t want to take ownership, and we just want to be able
to read the data in the struct, not write to it. If we wanted to be able to
change the instance that we’ve called the method on as part of what the method
does, we’d put <code class="hljs">&amp;mut self</code> as the first parameter instead. Having a method that
takes ownership of the instance by having just <code class="hljs">self</code> as the first parameter is
rarer; this is usually used when the method transforms <code class="hljs">self</code> into something
else and we want to prevent the caller from using the original instance after
the transformation.</p>
<p>The main benefit of using methods over functions, in addition to getting to use
method syntax and not having to repeat the type of <code class="hljs">self</code> in every method’s
signature, is for organization. We’ve put all the things we can do with an
instance of a type together in one <code class="hljs">impl</code> block, rather than make future users
of our code search for capabilities of <code class="hljs">Rectangle</code> all over the place.</p>
<!-- PROD: START BOX -->
<blockquote>
<a class="header" href="#wheres-the---operator" name="wheres-the---operator"><h3>Where’s the <code class="hljs">-&gt;</code> operator?</h3></a>
<p>In languages like C++, there are two different operators for calling methods:
<code class="hljs">.</code> if you’re calling a method on the object directly, and <code class="hljs">-&gt;</code> if you’re
calling the method on a pointer to the object and thus need to dereference the
pointer first. In other words, if <code class="hljs">object</code> is a pointer, <code class="hljs">object-&gt;something()</code>
is like <code class="hljs">(*object).something()</code>.</p>
<p>Rust doesn’t have an equivalent to the <code class="hljs">-&gt;</code> operator; instead, Rust has a
feature called <em>automatic referencing and dereferencing</em>. Calling methods is
one of the few places in Rust that has behavior like this.</p>
<p>Here’s how it works: when you call a method with <code class="hljs">object.something()</code>, Rust
will automatically add in <code class="hljs">&amp;</code>, <code class="hljs">&amp;mut</code>, or <code class="hljs">*</code> so that <code class="hljs">object</code> matches the
signature of the method. In other words, these are the same:</p>
<pre><div class="buttons"><i class="fa fa-expand"></i></div><code class="language-rust hljs"><span class="hidden"> <span class="hljs-meta">#[derive(Debug,Copy,Clone)]</span>
</span><span class="hidden"> <span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">Point</span></span> {
</span><span class="hidden">     x: <span class="hljs-keyword">f64</span>,
</span><span class="hidden">     y: <span class="hljs-keyword">f64</span>,
</span><span class="hidden"> }
</span><span class="hidden">
</span><span class="hidden"> <span class="hljs-keyword">impl</span> Point {
</span><span class="hidden">    <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">distance</span></span>(&amp;<span class="hljs-keyword">self</span>, other: &amp;Point) -&gt; <span class="hljs-keyword">f64</span> {
</span><span class="hidden">        <span class="hljs-keyword">let</span> x_squared = f64::powi(other.x - <span class="hljs-keyword">self</span>.x, <span class="hljs-number">2</span>);
</span><span class="hidden">        <span class="hljs-keyword">let</span> y_squared = f64::powi(other.y - <span class="hljs-keyword">self</span>.y, <span class="hljs-number">2</span>);
</span><span class="hidden">
</span><span class="hidden">        f64::sqrt(x_squared + y_squared)
</span><span class="hidden">    }
</span><span class="hidden"> }
</span><span class="hidden"> <span class="hljs-keyword">let</span> p1 = Point { x: <span class="hljs-number">0.0</span>, y: <span class="hljs-number">0.0</span> };
</span><span class="hidden"> <span class="hljs-keyword">let</span> p2 = Point { x: <span class="hljs-number">5.0</span>, y: <span class="hljs-number">6.5</span> };
</span>p1.distance(&amp;p2);
(&amp;p1).distance(&amp;p2);
</code></pre>
<p>The first one looks much, much cleaner. This automatic referencing behavior
works because methods have a clear receiver — the type of <code class="hljs">self</code>. Given the
receiver and name of a method, Rust can figure out definitively whether the
method is just reading (so needs <code class="hljs">&amp;self</code>), mutating (so <code class="hljs">&amp;mut self</code>), or
consuming (so <code class="hljs">self</code>). The fact that Rust makes borrowing implicit for method
receivers is a big part of making ownership ergonomic in practice.</p>
</blockquote>
<!-- PROD: END BOX -->
<a class="header" href="#methods-with-more-parameters" name="methods-with-more-parameters"><h3>Methods with More Parameters</h3></a>
<p>Let’s practice some more with methods by implementing a second method on our
<code class="hljs">Rectangle</code> struct. This time, we’d like for an instance of <code class="hljs">Rectangle</code> to take
another instance of <code class="hljs">Rectangle</code> and return <code class="hljs">true</code> if the second rectangle could
fit completely within <code class="hljs">self</code> and <code class="hljs">false</code> if it would not. That is, if we run
the code in Listing 5-8, once we've defined the <code class="hljs">can_hold</code> method:</p>
<figure>
<span class="filename">Filename: src/main.rs</span>
<pre><code class="language-rust,ignore hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">main</span></span>() {
    <span class="hljs-keyword">let</span> rect1 = Rectangle { length: <span class="hljs-number">50</span>, width: <span class="hljs-number">30</span> };
    <span class="hljs-keyword">let</span> rect2 = Rectangle { length: <span class="hljs-number">40</span>, width: <span class="hljs-number">10</span> };
    <span class="hljs-keyword">let</span> rect3 = Rectangle { length: <span class="hljs-number">45</span>, width: <span class="hljs-number">60</span> };

    <span class="hljs-built_in">println!</span>(<span class="hljs-string">"Can rect1 hold rect2? {}"</span>, rect1.can_hold(&amp;rect2));
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">"Can rect1 hold rect3? {}"</span>, rect1.can_hold(&amp;rect3));
}
</code></pre>
<figcaption>
<p>Listing 5-8: Demonstration of using the as-yet-unwritten <code class="hljs">can_hold</code> method</p>
</figcaption>
</figure>
<p>We want to see this output, since both of <code class="hljs">rect2</code>’s dimensions are smaller than
<code class="hljs">rect1</code>’s, but <code class="hljs">rect3</code> is wider than <code class="hljs">rect1</code>:</p>
<pre><code class="language-text hljs">Can rect1 hold rect2? true
Can rect1 hold rect3? false
</code></pre>
<p>We know we want to define a method, so it will be within the <code class="hljs">impl Rectangle</code>
block. The method name will be <code class="hljs">can_hold</code>, and it will take an immutable borrow
of another <code class="hljs">Rectangle</code> as a parameter. We can tell what the type of the
parameter will be by looking at a call site: <code class="hljs">rect1.can_hold(&amp;rect2)</code> passes in
<code class="hljs">&amp;rect2</code>, which is an immutable borrow to <code class="hljs">rect2</code>, an instance of <code class="hljs">Rectangle</code>.
This makes sense, since we only need to read <code class="hljs">rect2</code> (rather than write, which
would mean we’d need a mutable borrow) and we want <code class="hljs">main</code> to keep ownership of
<code class="hljs">rect2</code> so that we could use it again after calling this method. The return
value of <code class="hljs">can_hold</code> will be a boolean, and the implementation will check to see
if <code class="hljs">self</code>’s length and width are both greater than the length and width of the
other <code class="hljs">Rectangle</code>, respectively. Let’s add this new method to the <code class="hljs">impl</code> block
from Listing 5-7:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><div class="buttons"><i class="fa fa-expand"></i></div><code class="language-rust hljs"><span class="hidden"> <span class="hljs-meta">#[derive(Debug)]</span>
</span><span class="hidden"> <span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">Rectangle</span></span> {
</span><span class="hidden">     length: <span class="hljs-keyword">u32</span>,
</span><span class="hidden">     width: <span class="hljs-keyword">u32</span>,
</span><span class="hidden"> }
</span><span class="hidden">
</span><span class="hljs-keyword">impl</span> Rectangle {
    <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">area</span></span>(&amp;<span class="hljs-keyword">self</span>) -&gt; <span class="hljs-keyword">u32</span> {
        <span class="hljs-keyword">self</span>.length * <span class="hljs-keyword">self</span>.width
    }

    <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">can_hold</span></span>(&amp;<span class="hljs-keyword">self</span>, other: &amp;Rectangle) -&gt; <span class="hljs-keyword">bool</span> {
        <span class="hljs-keyword">self</span>.length &gt; other.length &amp;&amp; <span class="hljs-keyword">self</span>.width &gt; other.width
    }
}
</code></pre>
<!-- Will add ghosting here in libreoffice /Carol -->
<p>If we run this with the <code class="hljs">main</code> from Listing 5-8, we will get our desired output!
Methods can have multiple parameters that we add to the signature after the
<code class="hljs">self</code> parameter, and those parameters work just like parameters in functions
do.</p>
<a class="header" href="#associated-functions" name="associated-functions"><h3>Associated Functions</h3></a>
<p>One more useful feature of <code class="hljs">impl</code> blocks: we’re allowed to define functions
within <code class="hljs">impl</code> blocks that <em>don’t</em> take <code class="hljs">self</code> as a parameter. These are called
<em>associated functions</em>, since they’re associated with the struct. They’re still
functions though, not methods, since they don’t have an instance of the struct
to work with. You’ve already used an associated function: <code class="hljs">String::from</code>.</p>
<p>Associated functions are often used for constructors that will return a new
instance of the struct. For example, we could provide an associated function
that would have one dimension parameter and use that as both length and width,
thus making it easier to create a square <code class="hljs">Rectangle</code> rather than having to
specify the same value twice:</p>
<p><span class="filename">Filename: src/main.rs</span></p>
<pre><div class="buttons"><i class="fa fa-expand"></i></div><code class="language-rust hljs"><span class="hidden"> <span class="hljs-meta">#[derive(Debug)]</span>
</span><span class="hidden"> <span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">Rectangle</span></span> {
</span><span class="hidden">     length: <span class="hljs-keyword">u32</span>,
</span><span class="hidden">     width: <span class="hljs-keyword">u32</span>,
</span><span class="hidden"> }
</span><span class="hidden">
</span><span class="hljs-keyword">impl</span> Rectangle {
    <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">square</span></span>(size: <span class="hljs-keyword">u32</span>) -&gt; Rectangle {
        Rectangle { length: size, width: size }
    }
}
</code></pre>
<p>To call this associated function, we use the <code class="hljs">::</code> syntax with the struct name:
<code class="hljs">let sq = Rectangle::square(3);</code>, for example. This function is namespaced by
the struct: the <code class="hljs">::</code> syntax is used for both associated functions and
namespaces created by modules, which we’ll learn about in Chapter 7.</p>
<a class="header" href="#summary" name="summary"><h2>Summary</h2></a>
<p>Structs let us create custom types that are meaningful for our domain. By using
structs, we can keep associated pieces of data connected to each other and name
each piece to make our code clear. Methods let us specify the behavior that
instances of our structs have, and associated functions let us namespace
functionality that is particular to our struct without having an instance
available.</p>
<p>Structs aren’t the only way we can create custom types, though; let’s turn to
the <code class="hljs">enum</code> feature of Rust and add another tool to our toolbox.</p>

    `,
    "enums": `                   <a class="header" href="#enums-and-pattern-matching" name="enums-and-pattern-matching"><h1>Enums and Pattern Matching</h1></a>
<p>In this chapter we’ll look at <em>enumerations</em>, also referred to as <em>enums</em>.
Enums allow you to define a type by enumerating its possible values. First,
we’ll define and use an enum to show how an enum can encode meaning along with
data. Next, we’ll explore a particularly useful enum, called <code class="hljs">Option</code>, which
expresses that a value can be either something or nothing. Then we’ll look at
how pattern matching in the <code class="hljs">match</code> expression makes it easy to run different
code for different values of an enum. Finally, we’ll cover how the <code class="hljs">if let</code>
construct is another convenient and concise idiom available to you to handle
enums in your code.</p>
<p>Enums are a feature in many languages, but their capabilities differ in each
language. Rust’s enums are most similar to <em>algebraic data types</em> in functional
languages like F#, OCaml, and Haskell.</p>

    `,
    "defineenum": `       <a class="header" href="#defining-an-enum" name="defining-an-enum"><h2>Defining an Enum</h2></a>
<p>Let’s look at a situation we might want to express in code and see why enums
are useful and more appropriate than structs in this case. Say we need to work
with IP addresses. Currently, two major standards are used for IP addresses:
version four and version six. These are the only possibilities for an IP
address that our program will come across: we can <em>enumerate</em> all possible
values, which is where enumeration gets its name.</p>
<p>Any IP address can be either a version four or a version six address but not
both at the same time. That property of IP addresses makes the enum data
structure appropriate for this case, because enum values can only be one of the
variants. Both version four and version six addresses are still fundamentally
IP addresses, so they should be treated as the same type when the code is
handling situations that apply to any kind of IP address.</p>
<p>We can express this concept in code by defining an <code class="hljs">IpAddrKind</code> enumeration and
listing the possible kinds an IP address can be, <code class="hljs">V4</code> and <code class="hljs">V6</code>. These are known
as the <em>variants</em> of the enum:</p>
<pre><code class="language-rust hljs"><span class="hljs-class"><span class="hljs-keyword">enum</span> <span class="hljs-title">IpAddrKind</span></span> {
    V4,
    V6,
}
</code></pre>
<p><code class="hljs">IpAddrKind</code> is now a custom data type that we can use elsewhere in our code.</p>
<a class="header" href="#enum-values" name="enum-values"><h3>Enum Values</h3></a>
<p>We can create instances of each of the two variants of <code class="hljs">IpAddrKind</code> like this:</p>
<pre><div class="buttons"><i class="fa fa-expand"></i></div><code class="language-rust hljs"><span class="hidden"> <span class="hljs-class"><span class="hljs-keyword">enum</span> <span class="hljs-title">IpAddrKind</span></span> {
</span><span class="hidden">     V4,
</span><span class="hidden">     V6,
</span><span class="hidden"> }
</span><span class="hidden">
</span><span class="hljs-keyword">let</span> four = IpAddrKind::V4;
<span class="hljs-keyword">let</span> six = IpAddrKind::V6;
</code></pre>
<p>Note that the variants of the enum are namespaced under its identifier, and we
use a double colon to separate the two. The reason this is useful is that now
both values <code class="hljs">IpAddrKind::V4</code> and <code class="hljs">IpAddrKind::V6</code> are of the same type:
<code class="hljs">IpAddrKind</code>. We can then, for instance, define a function that takes any
<code class="hljs">IpAddrKind</code>:</p>
<pre><div class="buttons"><i class="fa fa-expand"></i></div><code class="language-rust hljs"><span class="hidden"> <span class="hljs-class"><span class="hljs-keyword">enum</span> <span class="hljs-title">IpAddrKind</span></span> {
</span><span class="hidden">     V4,
</span><span class="hidden">     V6,
</span><span class="hidden"> }
</span><span class="hidden">
</span><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">route</span></span>(ip_type: IpAddrKind) { }
</code></pre>
<p>And we can call this function with either variant:</p>
<pre><div class="buttons"><i class="fa fa-expand"></i></div><code class="language-rust hljs"><span class="hidden"> <span class="hljs-class"><span class="hljs-keyword">enum</span> <span class="hljs-title">IpAddrKind</span></span> {
</span><span class="hidden">     V4,
</span><span class="hidden">     V6,
</span><span class="hidden"> }
</span><span class="hidden">
</span><span class="hidden"> <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">route</span></span>(ip_type: IpAddrKind) { }
</span><span class="hidden">
</span>route(IpAddrKind::V4);
route(IpAddrKind::V6);
</code></pre>
<p>Using enums has even more advantages. Thinking more about our IP address type,
at the moment we don’t have a way to store the actual IP address <em>data</em>; we
only know what <em>kind</em> it is. Given that you just learned about structs in
Chapter 5, you might tackle this problem as shown in Listing 6-1:</p>
<figure>
<pre><code class="language-rust hljs"><span class="hljs-class"><span class="hljs-keyword">enum</span> <span class="hljs-title">IpAddrKind</span></span> {
    V4,
    V6,
}

<span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">IpAddr</span></span> {
    kind: IpAddrKind,
    address: <span class="hljs-built_in">String</span>,
}

<span class="hljs-keyword">let</span> home = IpAddr {
    kind: IpAddrKind::V4,
    address: <span class="hljs-built_in">String</span>::from(<span class="hljs-string">"127.0.0.1"</span>),
};

<span class="hljs-keyword">let</span> loopback = IpAddr {
    kind: IpAddrKind::V6,
    address: <span class="hljs-built_in">String</span>::from(<span class="hljs-string">"::1"</span>),
};
</code></pre>
<figcaption>
<p>Listing 6-1: Storing the data and <code class="hljs">IpAddrKind</code> variant of an IP address using a
<code class="hljs">struct</code></p>
</figcaption>
</figure>
<p>Here, we’ve defined a struct <code class="hljs">IpAddr</code> that has two fields: a <code class="hljs">kind</code> field that
is of type <code class="hljs">IpAddrKind</code> (the enum we defined previously) and an <code class="hljs">address</code> field
of type <code class="hljs">String</code>. We have two instances of this struct. The first, <code class="hljs">home</code>, has
the value <code class="hljs">IpAddrKind::V4</code> as its <code class="hljs">kind</code> with associated address data of
<code class="hljs">127.0.0.1</code>. The second instance, <code class="hljs">loopback</code>, has the other variant of
<code class="hljs">IpAddrKind</code> as its <code class="hljs">kind</code> value, <code class="hljs">V6</code>, and has address <code class="hljs">::1</code> associated with
it. We’ve used a struct to bundle the <code class="hljs">kind</code> and <code class="hljs">address</code> values together, so
now the variant is associated with the value.</p>
<p>We can represent the same concept in a more concise way using just an enum
rather than an enum as part of a struct by putting data directly into each enum
variant. This new definition of the <code class="hljs">IpAddr</code> enum says that both <code class="hljs">V4</code> and <code class="hljs">V6</code>
variants will have associated <code class="hljs">String</code> values:</p>
<pre><code class="language-rust hljs"><span class="hljs-class"><span class="hljs-keyword">enum</span> <span class="hljs-title">IpAddr</span></span> {
    V4(<span class="hljs-built_in">String</span>),
    V6(<span class="hljs-built_in">String</span>),
}

<span class="hljs-keyword">let</span> home = IpAddr::V4(<span class="hljs-built_in">String</span>::from(<span class="hljs-string">"127.0.0.1"</span>));

<span class="hljs-keyword">let</span> loopback = IpAddr::V6(<span class="hljs-built_in">String</span>::from(<span class="hljs-string">"::1"</span>));
</code></pre>
<p>We attach data to each variant of the enum directly, so there is no need for an
extra struct.</p>
<p>There’s another advantage to using an enum rather than a struct: each variant
can have different types and amounts of associated data. Version four type IP
addresses will always have four numeric components that will have values
between 0 and 255. If we wanted to store <code class="hljs">V4</code> addresses as four <code class="hljs">u8</code> values but
still express <code class="hljs">V6</code> addresses as one <code class="hljs">String</code> value, we wouldn’t be able to with
a struct. Enums handle this case with ease:</p>
<pre><code class="language-rust hljs"><span class="hljs-class"><span class="hljs-keyword">enum</span> <span class="hljs-title">IpAddr</span></span> {
    V4(<span class="hljs-keyword">u8</span>, <span class="hljs-keyword">u8</span>, <span class="hljs-keyword">u8</span>, <span class="hljs-keyword">u8</span>),
    V6(<span class="hljs-built_in">String</span>),
}

<span class="hljs-keyword">let</span> home = IpAddr::V4(<span class="hljs-number">127</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>);

<span class="hljs-keyword">let</span> loopback = IpAddr::V6(<span class="hljs-built_in">String</span>::from(<span class="hljs-string">"::1"</span>));
</code></pre>
<p>We’ve shown several different possibilities that we could define in our code
for storing IP addresses of the two different varieties using an enum. However,
as it turns out, wanting to store IP addresses and encode which kind they are
is so common that <a href="../std/net/enum.IpAddr.html">the standard library has a definition we can
use!</a><!-- ignore --> Let’s look at how the standard library defines
<code class="hljs">IpAddr</code>: it has the exact enum and variants that we’ve defined and used, but
it embeds the address data inside the variants in the form of two different
structs, which are defined differently for each variant:</p>
<pre><code class="language-rust hljs"><span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">Ipv4Addr</span></span> {
    <span class="hljs-comment">// details elided</span>
}

<span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">Ipv6Addr</span></span> {
    <span class="hljs-comment">// details elided</span>
}

<span class="hljs-class"><span class="hljs-keyword">enum</span> <span class="hljs-title">IpAddr</span></span> {
    V4(Ipv4Addr),
    V6(Ipv6Addr),
}
</code></pre>
<p>This code illustrates that you can put any kind of data inside an enum variant:
strings, numeric types, or structs, for example. You can even include another
enum! Also, standard library types are often not much more complicated than
what you might come up with.</p>
<p>Note that even though the standard library contains a definition for <code class="hljs">IpAddr</code>,
we can still create and use our own definition without conflict because we
haven’t brought the standard library’s definition into our scope. We’ll talk
more about importing types in Chapter 7.</p>
<p>Let’s look at another example of an enum in Listing 6-2: this one has a wide
variety of types embedded in its variants:</p>
<figure>
<pre><code class="language-rust hljs"><span class="hljs-class"><span class="hljs-keyword">enum</span> <span class="hljs-title">Message</span></span> {
    Quit,
    Move { x: <span class="hljs-keyword">i32</span>, y: <span class="hljs-keyword">i32</span> },
    Write(<span class="hljs-built_in">String</span>),
    ChangeColor(<span class="hljs-keyword">i32</span>, <span class="hljs-keyword">i32</span>, <span class="hljs-keyword">i32</span>),
}
</code></pre>
<figcaption>
<p>Listing 6-2: A <code class="hljs">Message</code> enum whose variants each store different amounts and
types of values</p>
</figcaption>
</figure>
<p>This enum has four variants with different types:</p>
<ul>
<li><code class="hljs">Quit</code> has no data associated with it at all.</li>
<li><code class="hljs">Move</code> includes an anonymous struct inside it.</li>
<li><code class="hljs">Write</code> includes a single <code class="hljs">String</code>.</li>
<li><code class="hljs">ChangeColor</code> includes three <code class="hljs">i32</code>s.</li>
</ul>
<p>Defining an enum with variants like the ones in Listing 6-2 is similar to
defining different kinds of struct definitions except the enum doesn’t use the
<code class="hljs">struct</code> keyword and all the variants are grouped together under the <code class="hljs">Message</code>
type. The following structs could hold the same data that the preceding enum
variants hold:</p>
<pre><code class="language-rust hljs"><span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">QuitMessage</span></span>; <span class="hljs-comment">// unit struct</span>
<span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">MoveMessage</span></span> {
    x: <span class="hljs-keyword">i32</span>,
    y: <span class="hljs-keyword">i32</span>,
}
<span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">WriteMessage</span></span>(<span class="hljs-built_in">String</span>); <span class="hljs-comment">// tuple struct</span>
<span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">ChangeColorMessage</span></span>(<span class="hljs-keyword">i32</span>, <span class="hljs-keyword">i32</span>, <span class="hljs-keyword">i32</span>); <span class="hljs-comment">// tuple struct</span>
</code></pre>
<p>But if we used the different structs, which each have their own type, we
wouldn’t be able to as easily define a function that could take any of these
kinds of messages as we could with the <code class="hljs">Message</code> enum defined in Listing 6-2,
which is a single type.</p>
<p>There is one more similarity between enums and structs: just as we’re able to
define methods on structs using <code class="hljs">impl</code>, we’re also able to define methods on
enums. Here’s a method named <code class="hljs">call</code> that we could define on our <code class="hljs">Message</code> enum:</p>
<pre><div class="buttons"><i class="fa fa-expand"></i></div><code class="language-rust hljs"><span class="hidden"> <span class="hljs-class"><span class="hljs-keyword">enum</span> <span class="hljs-title">Message</span></span> {
</span><span class="hidden">     Quit,
</span><span class="hidden">     Move { x: <span class="hljs-keyword">i32</span>, y: <span class="hljs-keyword">i32</span> },
</span><span class="hidden">     Write(<span class="hljs-built_in">String</span>),
</span><span class="hidden">     ChangeColor(<span class="hljs-keyword">i32</span>, <span class="hljs-keyword">i32</span>, <span class="hljs-keyword">i32</span>),
</span><span class="hidden"> }
</span><span class="hidden">
</span><span class="hljs-keyword">impl</span> Message {
    <span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">call</span></span>(&amp;<span class="hljs-keyword">self</span>) {
        <span class="hljs-comment">// method body would be defined here</span>
    }
}

<span class="hljs-keyword">let</span> m = Message::Write(<span class="hljs-built_in">String</span>::from(<span class="hljs-string">"hello"</span>));
m.call();
</code></pre>
<p>The body of the method would use <code class="hljs">self</code> to get the value that we called the
method on. In this example, we’ve created a variable <code class="hljs">m</code> that has the value
<code class="hljs">Message::Write("hello")</code>, and that is what <code class="hljs">self</code> will be in the body of the
<code class="hljs">call</code> method when <code class="hljs">m.call()</code> runs.</p>
<p>Let’s look at another enum in the standard library that is very common and
useful: <code class="hljs">Option</code>.</p>
<a class="header" href="#the-option-enum-and-its-advantages-over-null-values" name="the-option-enum-and-its-advantages-over-null-values"><h3>The <code class="hljs">Option</code> Enum and Its Advantages Over Null Values</h3></a>
<p>In the previous section, we looked at how the <code class="hljs">IpAddr</code> enum let us use Rust’s
type system to encode more information than just the data into our program.
This section explores a case study of <code class="hljs">Option</code>, which is another enum defined
by the standard library. The <code class="hljs">Option</code> type is used in many places because it
encodes the very common scenario in which a value could be something or it
could be nothing. Expressing this concept in terms of the type system means the
compiler can check that you’ve handled all the cases you should be handling,
which can prevent bugs that are extremely common in other programming languages.</p>
<p>Programming language design is often thought of in terms of which features you
include, but the features you exclude are important too. Rust doesn’t have the
null feature that many other languages have. <em>Null</em> is a value that means there
is no value there. In languages with null, variables can always be in one of
two states: null or not-null.</p>
<p>In “Null References: The Billion Dollar Mistake,” Tony Hoare, the inventor of
null, has this to say:</p>
<blockquote>
<p>I call it my billion-dollar mistake. At that time, I was designing the first
comprehensive type system for references in an object-oriented language. My
goal was to ensure that all use of references should be absolutely safe, with
checking performed automatically by the compiler. But I couldn't resist the
temptation to put in a null reference, simply because it was so easy to
implement. This has led to innumerable errors, vulnerabilities, and system
crashes, which have probably caused a billion dollars of pain and damage in
the last forty years.</p>
</blockquote>
<p>The problem with null values is that if you try to actually use a value that’s
null as if it is a not-null value, you’ll get an error of some kind. Because
this null or not-null property is pervasive, it’s extremely easy to make this
kind of error.</p>
<p>However, the concept that null is trying to express is still a useful one: a
null is a value that is currently invalid or absent for some reason.</p>
<p>The problem isn’t with the actual concept but with the particular
implementation. As such, Rust does not have nulls, but it does have an enum
that can encode the concept of a value being present or absent. This enum is
<code class="hljs">Option&lt;T&gt;</code>, and it is <a href="../std/option/enum.Option.html">defined by the standard library</a><!-- ignore -->
as follows:</p>
<pre><code class="language-rust hljs"><span class="hljs-class"><span class="hljs-keyword">enum</span> <span class="hljs-title">Option</span></span>&lt;T&gt; {
    <span class="hljs-literal">Some</span>(T),
    <span class="hljs-literal">None</span>,
}
</code></pre>
<p>The <code class="hljs">Option&lt;T&gt;</code> enum is so useful that it’s even included in the prelude; you
don’t need to import it explicitly.  In addition, so are its variants: you can
use <code class="hljs">Some</code> and <code class="hljs">None</code> directly without prefixing them with <code class="hljs">Option::</code>.
<code class="hljs">Option&lt;T&gt;</code> is still just a regular enum, and <code class="hljs">Some(T)</code> and <code class="hljs">None</code> are still
variants of type <code class="hljs">Option&lt;T&gt;</code>.</p>
<p>The <code class="hljs">&lt;T&gt;</code> syntax is a feature of Rust we haven’t talked about yet. It’s a
generic type parameter, and we’ll cover generics in more detail in Chapter 10.
For now, all you need to know is that <code class="hljs">&lt;T&gt;</code> means the <code class="hljs">Some</code> variant of the
<code class="hljs">Option</code> enum can hold one piece of data of any type. Here are some examples of
using <code class="hljs">Option</code> values to hold number types and string types:</p>
<pre><code class="language-rust hljs"><span class="hljs-keyword">let</span> some_number = <span class="hljs-literal">Some</span>(<span class="hljs-number">5</span>);
<span class="hljs-keyword">let</span> some_string = <span class="hljs-literal">Some</span>(<span class="hljs-string">"a string"</span>);

<span class="hljs-keyword">let</span> absent_number: <span class="hljs-built_in">Option</span>&lt;<span class="hljs-keyword">i32</span>&gt; = <span class="hljs-literal">None</span>;
</code></pre>
<p>If we use <code class="hljs">None</code> rather than <code class="hljs">Some</code>, we need to tell Rust what type of
<code class="hljs">Option&lt;T&gt;</code> we have, because the compiler can't infer the type that the <code class="hljs">Some</code>
variant will hold by looking only at a <code class="hljs">None</code> value.</p>
<p>When we have a <code class="hljs">Some</code> value, we know that a value is present, and the value is
held within the <code class="hljs">Some</code>. When we have a <code class="hljs">None</code> value, in some sense, it means
the same thing as null: we don’t have a valid value. So why is having
<code class="hljs">Option&lt;T&gt;</code> any better than having null?</p>
<p>In short, because <code class="hljs">Option&lt;T&gt;</code> and <code class="hljs">T</code> (where <code class="hljs">T</code> can be any type) are different
types, the compiler won’t let us use an <code class="hljs">Option&lt;T&gt;</code> value as if it was
definitely a valid value. For example, this code won’t compile because it’s
trying to compare an <code class="hljs">Option&lt;i8&gt;</code> to an <code class="hljs">i8</code>:</p>
<pre><code class="language-rust,ignore hljs"><span class="hljs-keyword">let</span> x: <span class="hljs-keyword">i8</span> = <span class="hljs-number">5</span>;
<span class="hljs-keyword">let</span> y: <span class="hljs-built_in">Option</span>&lt;<span class="hljs-keyword">i8</span>&gt; = <span class="hljs-literal">Some</span>(<span class="hljs-number">5</span>);

<span class="hljs-keyword">let</span> sum = x + y;
</code></pre>
<p>If we run this code, we get an error message like this:</p>
<pre><code class="language-text hljs">error[E0277]: the trait bound \`i8: std::ops::Add&lt;std::option::Option&lt;i8&gt;&gt;\` is
not satisfied
 --&gt;
  |
7 | let sum = x + y;
  |           ^^^^^
  |
</code></pre>
<p>Intense! In effect, this error message means that Rust doesn’t understand how
to add an <code class="hljs">Option&lt;i8&gt;</code> and an <code class="hljs">i8</code>, because they’re different types. When we
have a value of a type like <code class="hljs">i8</code> in Rust, the compiler will ensure that we
always have a valid value. We can proceed confidently without having to check
for null before using that value. Only when we have an <code class="hljs">Option&lt;i8&gt;</code> (or
whatever type of value we’re working with) do we have to worry about possibly
not having a value, and the compiler will make sure we handle that case before
using the value.</p>
<p>In other words, you have to convert an <code class="hljs">Option&lt;T&gt;</code> to a <code class="hljs">T</code> before you can
perform <code class="hljs">T</code> operations with it. Generally, this helps catch one of the most
common issues with null: assuming that something isn’t null when it actually
is.</p>
<p>Not having to worry about missing an assumption of having a not-null value
helps you to be more confident in your code. In order to have a value that can
possibly be null, you must explicitly opt in by making the type of that value
<code class="hljs">Option&lt;T&gt;</code>. Then, when you use that value, you are required to explicitly
handle the case when the value is null. Everywhere that a value has a type that
isn’t an <code class="hljs">Option&lt;T&gt;</code>, you <em>can</em> safely assume that the value isn’t null. This
was a deliberate design decision for Rust to limit null’s pervasiveness and
increase the safety of Rust code.</p>
<p>So, how do you get the <code class="hljs">T</code> value out of a <code class="hljs">Some</code> variant when you have a value
of type <code class="hljs">Option&lt;T&gt;</code> so you can use that value? The <code class="hljs">Option&lt;T&gt;</code> enum has a large
number of methods that are useful in a variety of situations; you can check
them out in <a href="../std/option/enum.Option.html">its documentation</a><!-- ignore -->. Becoming familiar with
the methods on <code class="hljs">Option&lt;T&gt;</code> will be extremely useful in your journey with Rust.</p>
<p>In general, in order to use an <code class="hljs">Option&lt;T&gt;</code> value, we want to have code that
will handle each variant. We want some code that will run only when we have a
<code class="hljs">Some(T)</code> value, and this code is allowed to use the inner <code class="hljs">T</code>. We want some
other code to run if we have a <code class="hljs">None</code> value, and that code doesn’t have a <code class="hljs">T</code>
value available. The <code class="hljs">match</code> expression is a control flow construct that does
just this when used with enums: it will run different code depending on which
variant of the enum it has, and that code can use the data inside the matching
value.</p>

    `,
    "flowoperator": `<a class="header" href="#the-match-control-flow-operator" name="the-match-control-flow-operator"><h2>The <code class="hljs">match</code> Control Flow Operator</h2></a>
<p>Rust has an extremely powerful control-flow operator called <code class="hljs">match</code> that allows
us to compare a value against a series of patterns and then execute code based
on which pattern matches. Patterns can be made up of literal values, variable
names, wildcards, and many other things; Chapter 18 will be about all the
different kinds of patterns and what they do. The power of <code class="hljs">match</code> comes from
the expressiveness of the patterns and the compiler checks that make sure all
possible cases are handled.</p>
<p>Think of a <code class="hljs">match</code> expression kind of like a coin sorting machine: coins slide
down a track with variously sized holes along it, and each coin falls through
the first hole it encounters that it fits into. In the same way, values go
through each pattern in a <code class="hljs">match</code>, and at the first pattern the value “fits,”
the value will fall into the associated code block to be used during execution.</p>
<p>Because we just mentioned coins, let’s use them as an example using <code class="hljs">match</code>! We
can write a function that can take an unknown United States coin and, in a
similar way as the counting machine, determine which coin it is and return its
value in cents, as shown here in Listing 6-3:</p>
<figure>
<pre><code class="language-rust hljs"><span class="hljs-class"><span class="hljs-keyword">enum</span> <span class="hljs-title">Coin</span></span> {
    Penny,
    Nickel,
    Dime,
    Quarter,
}

<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">value_in_cents</span></span>(coin: Coin) -&gt; <span class="hljs-keyword">i32</span> {
    <span class="hljs-keyword">match</span> coin {
        Coin::Penny =&gt; <span class="hljs-number">1</span>,
        Coin::Nickel =&gt; <span class="hljs-number">5</span>,
        Coin::Dime =&gt; <span class="hljs-number">10</span>,
        Coin::Quarter =&gt; <span class="hljs-number">25</span>,
    }
}
</code></pre>
<figcaption>
<p>Listing 6-3: An enum and a <code class="hljs">match</code> expression that has the variants of the enum
as its patterns.</p>
</figcaption>
</figure>
<p>Let’s break down the <code class="hljs">match</code> in the <code class="hljs">value_in_cents</code> function. First, we list
the <code class="hljs">match</code> keyword followed by an expression, which in this case is the value
<code class="hljs">coin</code>. This seems very similar to an expression used with <code class="hljs">if</code>, but there’s a
big difference: with <code class="hljs">if</code>, the expression needs to return a boolean value.
Here, it can be any type. The type of <code class="hljs">coin</code> in this example is the <code class="hljs">Coin</code> enum
that we defined in Listing 6-3.</p>
<p>Next are the <code class="hljs">match</code> arms. An arm has two parts: a pattern and some code. The
first arm here has a pattern that is the value <code class="hljs">Coin::Penny</code> and then the <code class="hljs">=&gt;</code>
operator that separates the pattern and the code to run. The code in this case
is just the value <code class="hljs">1</code>. Each arm is separated from the next with a comma.</p>
<p>When the <code class="hljs">match</code> expression executes, it compares the resulting value against
the pattern of each arm, in order. If a pattern matches the value, the code
associated with that pattern is executed. If that pattern doesn’t match the
value, execution continues to the next arm, much like a coin sorting machine.
We can have as many arms as we need: in Listing 6-3, our <code class="hljs">match</code> has four arms.</p>
<p>The code associated with each arm is an expression, and the resulting value of
the expression in the matching arm is the value that gets returned for the
entire <code class="hljs">match</code> expression.</p>
<p>Curly braces typically aren’t used if the match arm code is short, as it is in
Listing 6-3 where each arm just returns a value. If you want to run multiple
lines of code in a match arm, you can use curly braces. For example, the
following code would print out “Lucky penny!” every time the method was called
with a <code class="hljs">Coin::Penny</code> but would still return the last value of the block, <code class="hljs">1</code>:</p>
<pre><div class="buttons"><i class="fa fa-expand"></i></div><code class="language-rust hljs"><span class="hidden"> <span class="hljs-class"><span class="hljs-keyword">enum</span> <span class="hljs-title">Coin</span></span> {
</span><span class="hidden">    Penny,
</span><span class="hidden">    Nickel,
</span><span class="hidden">    Dime,
</span><span class="hidden">    Quarter,
</span><span class="hidden"> }
</span><span class="hidden">
</span><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">value_in_cents</span></span>(coin: Coin) -&gt; <span class="hljs-keyword">i32</span> {
    <span class="hljs-keyword">match</span> coin {
        Coin::Penny =&gt; {
            <span class="hljs-built_in">println!</span>(<span class="hljs-string">"Lucky penny!"</span>);
            <span class="hljs-number">1</span>
        },
        Coin::Nickel =&gt; <span class="hljs-number">5</span>,
        Coin::Dime =&gt; <span class="hljs-number">10</span>,
        Coin::Quarter =&gt; <span class="hljs-number">25</span>,
    }
}
</code></pre>
<a class="header" href="#patterns-that-bind-to-values" name="patterns-that-bind-to-values"><h3>Patterns that Bind to Values</h3></a>
<p>Another useful feature of match arms is that they can bind to parts of the
values that match the pattern. This is how we can extract values out of enum
variants.</p>
<p>As an example, let’s change one of our enum variants to hold data inside it.
From 1999 through 2008, the United States printed quarters with different
designs for each of the 50 states on one side. No other coins got state
designs, so only quarters have this extra value. We can add this information to
our <code class="hljs">enum</code> by changing the <code class="hljs">Quarter</code> variant to include a <code class="hljs">State</code> value stored
inside it, which we've done here in Listing 6-4:</p>
<figure>
<pre><code class="language-rust hljs"><span class="hljs-meta">#[derive(Debug)]</span> <span class="hljs-comment">// So we can inspect the state in a minute</span>
<span class="hljs-class"><span class="hljs-keyword">enum</span> <span class="hljs-title">UsState</span></span> {
    Alabama,
    Alaska,
    <span class="hljs-comment">// ... etc</span>
}

<span class="hljs-class"><span class="hljs-keyword">enum</span> <span class="hljs-title">Coin</span></span> {
    Penny,
    Nickel,
    Dime,
    Quarter(UsState),
}
</code></pre>
<figcaption>
<p>Listing 6-4: A <code class="hljs">Coin</code> enum where the <code class="hljs">Quarter</code> variant also holds a <code class="hljs">UsState</code>
value</p>
</figcaption>
</figure>
<p>Let’s imagine that a friend of ours is trying to collect all 50 state quarters.
While we sort our loose change by coin type, we’ll also call out the name of
the state associated with each quarter so if it’s one our friend doesn’t have,
they can add it to their collection.</p>
<p>In the match expression for this code, we add a variable called <code class="hljs">state</code> to the
pattern that matches values of the variant <code class="hljs">Coin::Quarter</code>. When a
<code class="hljs">Coin::Quarter</code> matches, the <code class="hljs">state</code> variable will bind to the value of that
quarter’s state. Then we can use <code class="hljs">state</code> in the code for that arm, like so:</p>
<pre><div class="buttons"><i class="fa fa-expand"></i></div><code class="language-rust hljs"><span class="hidden"> <span class="hljs-meta">#[derive(Debug)]</span>
</span><span class="hidden"> <span class="hljs-class"><span class="hljs-keyword">enum</span> <span class="hljs-title">UsState</span></span> {
</span><span class="hidden">    Alabama,
</span><span class="hidden">    Alaska,
</span><span class="hidden"> }
</span><span class="hidden">
</span><span class="hidden"> <span class="hljs-class"><span class="hljs-keyword">enum</span> <span class="hljs-title">Coin</span></span> {
</span><span class="hidden">    Penny,
</span><span class="hidden">    Nickel,
</span><span class="hidden">    Dime,
</span><span class="hidden">    Quarter(UsState),
</span><span class="hidden"> }
</span><span class="hidden">
</span><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">value_in_cents</span></span>(coin: Coin) -&gt; <span class="hljs-keyword">i32</span> {
    <span class="hljs-keyword">match</span> coin {
        Coin::Penny =&gt; <span class="hljs-number">1</span>,
        Coin::Nickel =&gt; <span class="hljs-number">5</span>,
        Coin::Dime =&gt; <span class="hljs-number">10</span>,
        Coin::Quarter(state) =&gt; {
            <span class="hljs-built_in">println!</span>(<span class="hljs-string">"State quarter from {:?}!"</span>, state);
            <span class="hljs-number">25</span>
        },
    }
}
</code></pre>
<p>If we were to call <code class="hljs">value_in_cents(Coin::Quarter(UsState::Alaska))</code>, <code class="hljs">coin</code>
would be <code class="hljs">Coin::Quarter(UsState::Alaska)</code>. When we compare that value with each
of the match arms, none of them match until we reach <code class="hljs">Coin::Quarter(state)</code>. At
that point, the binding for <code class="hljs">state</code> will be the value <code class="hljs">UsState::Alaska</code>. We can
then use that binding in the <code class="hljs">println!</code> expression, thus getting the inner
state value out of the <code class="hljs">Coin</code> enum variant for <code class="hljs">Quarter</code>.</p>
<a class="header" href="#matching-with-optiont" name="matching-with-optiont"><h3>Matching with <code class="hljs">Option&lt;T&gt;</code></h3></a>
<p>In the previous section we wanted to get the inner <code class="hljs">T</code> value out of the <code class="hljs">Some</code>
case when using <code class="hljs">Option&lt;T&gt;</code>; we can also handle <code class="hljs">Option&lt;T&gt;</code> using <code class="hljs">match</code> as we
did with the <code class="hljs">Coin</code> enum! Instead of comparing coins, we’ll compare the
variants of <code class="hljs">Option&lt;T&gt;</code>, but the way that the <code class="hljs">match</code> expression works remains
the same.</p>
<p>Let’s say we want to write a function that takes an <code class="hljs">Option&lt;i32&gt;</code>, and if
there’s a value inside, adds one to that value. If there isn’t a value inside,
the function should return the <code class="hljs">None</code> value and not attempt to perform any
operations.</p>
<p>This function is very easy to write, thanks to <code class="hljs">match</code>, and will look like
Listing 6-5:</p>
<figure>
<pre><code class="language-rust hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">plus_one</span></span>(x: <span class="hljs-built_in">Option</span>&lt;<span class="hljs-keyword">i32</span>&gt;) -&gt; <span class="hljs-built_in">Option</span>&lt;<span class="hljs-keyword">i32</span>&gt; {
    <span class="hljs-keyword">match</span> x {
        <span class="hljs-literal">None</span> =&gt; <span class="hljs-literal">None</span>,
        <span class="hljs-literal">Some</span>(i) =&gt; <span class="hljs-literal">Some</span>(i + <span class="hljs-number">1</span>),
    }
}

<span class="hljs-keyword">let</span> five = <span class="hljs-literal">Some</span>(<span class="hljs-number">5</span>);
<span class="hljs-keyword">let</span> six = plus_one(five);
<span class="hljs-keyword">let</span> none = plus_one(<span class="hljs-literal">None</span>);
</code></pre>
<figcaption>
<p>Listing 6-5: A function that uses a <code class="hljs">match</code> expression on an <code class="hljs">Option&lt;i32&gt;</code></p>
</figcaption>
</figure>
<a class="header" href="#matching-somet" name="matching-somet"><h4>Matching <code class="hljs">Some(T)</code></h4></a>
<p>Let’s examine the first execution of <code class="hljs">plus_one</code> in more detail. When we call
<code class="hljs">plus_one(five)</code>, the variable <code class="hljs">x</code> in the body of <code class="hljs">plus_one</code> will have the
value <code class="hljs">Some(5)</code>. We then compare that against each match arm.</p>
<pre><code class="language-rust,ignore hljs"><span class="hljs-literal">None</span> =&gt; <span class="hljs-literal">None</span>,
</code></pre>
<p>The <code class="hljs">Some(5)</code> value doesn’t match the pattern <code class="hljs">None</code>, so we continue to the
next arm.</p>
<pre><code class="language-rust,ignore hljs"><span class="hljs-literal">Some</span>(i) =&gt; <span class="hljs-literal">Some</span>(i + <span class="hljs-number">1</span>),
</code></pre>
<p>Does <code class="hljs">Some(5)</code> match <code class="hljs">Some(i)</code>? Why yes it does! We have the same variant.
The <code class="hljs">i</code> binds to the value contained in <code class="hljs">Some</code>, so <code class="hljs">i</code> takes the value <code class="hljs">5</code>. The
code in the match arm is then executed, so we add one to the value of <code class="hljs">i</code> and
create a new <code class="hljs">Some</code> value with our total <code class="hljs">6</code> inside.</p>
<a class="header" href="#matching-none" name="matching-none"><h4>Matching <code class="hljs">None</code></h4></a>
<p>Now let’s consider the second call of <code class="hljs">plus_one</code> in Listing 6-5 where <code class="hljs">x</code> is
<code class="hljs">None</code>. We enter the <code class="hljs">match</code> and compare to the first arm.</p>
<pre><code class="language-rust,ignore hljs"><span class="hljs-literal">None</span> =&gt; <span class="hljs-literal">None</span>,
</code></pre>
<p>It matches! There’s no value to add to, so the program stops and returns the
<code class="hljs">None</code> value on the right side of <code class="hljs">=&gt;</code>. Because the first arm matched, no other
arms are compared.</p>
<p>Combining <code class="hljs">match</code> and enums is useful in many situations. You’ll see this
pattern a lot in Rust code: <code class="hljs">match</code> against an enum, bind a variable to the
data inside, and then execute code based on it. It’s a bit tricky at first, but
once you get used to it, you’ll wish you had it in all languages. It’s
consistently a user favorite.</p>
<a class="header" href="#matches-are-exhaustive" name="matches-are-exhaustive"><h3>Matches Are Exhaustive</h3></a>
<p>There’s one other aspect of <code class="hljs">match</code> we need to discuss. Consider this version
of our <code class="hljs">plus_one</code> function:</p>
<pre><code class="language-rust,ignore hljs"><span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">plus_one</span></span>(x: <span class="hljs-built_in">Option</span>&lt;<span class="hljs-keyword">i32</span>&gt;) -&gt; <span class="hljs-built_in">Option</span>&lt;<span class="hljs-keyword">i32</span>&gt; {
    <span class="hljs-keyword">match</span> x {
        <span class="hljs-literal">Some</span>(i) =&gt; <span class="hljs-literal">Some</span>(i + <span class="hljs-number">1</span>),
    }
}
</code></pre>
<p>We didn’t handle the <code class="hljs">None</code> case, so this code will cause a bug. Luckily, it’s
a bug Rust knows how to catch. If we try to compile this code, we’ll get this
error:</p>
<pre><code class="language-text hljs">error[E0004]: non-exhaustive patterns: \`None\` not covered
 --&gt;
  |
6 |         match x {
  |               ^ pattern \`None\` not covered
</code></pre>
<p>Rust knows that we didn’t cover every possible case and even knows which
pattern we forgot! Matches in Rust are <em>exhaustive</em>: we must exhaust every last
possibility in order for the code to be valid. Especially in the case of
<code class="hljs">Option&lt;T&gt;</code>, when Rust prevents us from forgetting to explicitly handle the
<code class="hljs">None</code> case, it protects us from assuming that we have a value when we might
have null, thus making the billion dollar mistake discussed earlier.</p>
<a class="header" href="#the-_-placeholder" name="the-_-placeholder"><h3>The <code class="hljs">_</code> Placeholder</h3></a>
<p>Rust also has a pattern we can use in situations when we don’t want to list all
possible values. For example, a <code class="hljs">u8</code> can have valid values of 0 through 255. If
we only care about the values 1, 3, 5, and 7, we don’t want to have to list out
0, 2, 4, 6, 8, 9 all the way up to 255. Fortunately, we don’t have to: we can
use the special pattern <code class="hljs">_</code> instead:</p>
<pre><code class="language-rust hljs"><span class="hljs-keyword">let</span> some_u8_value = <span class="hljs-number">0u8</span>;
<span class="hljs-keyword">match</span> some_u8_value {
    <span class="hljs-number">1</span> =&gt; <span class="hljs-built_in">println!</span>(<span class="hljs-string">"one"</span>),
    <span class="hljs-number">3</span> =&gt; <span class="hljs-built_in">println!</span>(<span class="hljs-string">"three"</span>),
    <span class="hljs-number">5</span> =&gt; <span class="hljs-built_in">println!</span>(<span class="hljs-string">"five"</span>),
    <span class="hljs-number">7</span> =&gt; <span class="hljs-built_in">println!</span>(<span class="hljs-string">"seven"</span>),
    _ =&gt; (),
}
</code></pre>
<p>The <code class="hljs">_</code> pattern will match any value. By putting it after our other arms, the
<code class="hljs">_</code> will match all the possible cases that aren’t specified before it. The <code class="hljs">()</code>
is just the unit value, so nothing will happen in the <code class="hljs">_</code> case. As a result, we
can say that we want to do nothing for all the possible values that we don’t
list before the <code class="hljs">_</code> placeholder.</p>
<p>However, the <code class="hljs">match</code> expression can be a bit wordy in a situation in which we
only care about <em>one</em> of the cases. For this situation, Rust provides <code class="hljs">if let</code>.</p>
    `,
    "iflet": `                    <a class="header" href="#concise-control-flow-with-if-let" name="concise-control-flow-with-if-let"><h2>Concise Control Flow with <code class="hljs">if let</code></h2></a>
<p>The <code class="hljs">if let</code> syntax lets you combine <code class="hljs">if</code> and <code class="hljs">let</code> into a less verbose way to
handle values that match one pattern and ignore the rest. Consider the program
in Listing 6-6 that matches on an <code class="hljs">Option&lt;u8&gt;</code> value but only wants to execute
code if the value is three:</p>
<figure>
<pre><code class="language-rust hljs"><span class="hljs-keyword">let</span> some_u8_value = <span class="hljs-literal">Some</span>(<span class="hljs-number">0u8</span>);
<span class="hljs-keyword">match</span> some_u8_value {
    <span class="hljs-literal">Some</span>(<span class="hljs-number">3</span>) =&gt; <span class="hljs-built_in">println!</span>(<span class="hljs-string">"three"</span>),
    _ =&gt; (),
}
</code></pre>
<figcaption>
<p>Listing 6-6: A <code class="hljs">match</code> that only cares about executing code when the value is
<code class="hljs">Some(3)</code></p>
</figcaption>
</figure>
<p>We want to do something with the <code class="hljs">Some(3)</code> match but do nothing with any other
<code class="hljs">Some&lt;u8&gt;</code> value or the <code class="hljs">None</code> value. To satisfy the <code class="hljs">match</code> expression, we
have to add <code class="hljs">_ =&gt; ()</code> after processing just one variant, which is a lot of
boilerplate code to add.</p>
<p>Instead, we could write this in a shorter way using <code class="hljs">if let</code>. The following
code behaves the same as the <code class="hljs">match</code> in Listing 6-6:</p>
<pre><div class="buttons"><i class="fa fa-expand"></i></div><code class="language-rust hljs"><span class="hidden"> <span class="hljs-keyword">let</span> some_u8_value = <span class="hljs-literal">Some</span>(<span class="hljs-number">0u8</span>);
</span><span class="hljs-keyword">if</span> <span class="hljs-keyword">let</span> <span class="hljs-literal">Some</span>(<span class="hljs-number">3</span>) = some_u8_value {
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">"three"</span>);
}
</code></pre>
<p><code class="hljs">if let</code> takes a pattern and an expression separated by an <code class="hljs">=</code>. It works the
same way as a <code class="hljs">match</code>, where the expression is given to the <code class="hljs">match</code> and the
pattern is its first arm.</p>
<p>Using <code class="hljs">if let</code> means you have less to type, less indentation, and less
boilerplate code. However, we’ve lost the exhaustive checking that <code class="hljs">match</code>
enforces. Choosing between <code class="hljs">match</code> and <code class="hljs">if let</code> depends on what you’re doing in
your particular situation and if gaining conciseness is an appropriate
trade-off for losing exhaustive checking.</p>
<p>In other words, you can think of <code class="hljs">if let</code> as syntax sugar for a <code class="hljs">match</code> that
runs code when the value matches one pattern and then ignores all other values.</p>
<p>We can include an <code class="hljs">else</code> with an <code class="hljs">if let</code>. The block of code that goes with the
<code class="hljs">else</code> is the same as the block of code that would go with the <code class="hljs">_</code> case in the
<code class="hljs">match</code> expression that is equivalent to the <code class="hljs">if let</code> and <code class="hljs">else</code>. Recall the
<code class="hljs">Coin</code> enum definition in Listing 6-4, where the <code class="hljs">Quarter</code> variant also held a
<code class="hljs">UsState</code> value. If we wanted to count all non-quarter coins we see while also
announcing the state of the quarters, we could do that with a <code class="hljs">match</code>
expression like this:</p>
<pre><div class="buttons"><i class="fa fa-expand"></i></div><code class="language-rust hljs"><span class="hidden"> <span class="hljs-meta">#[derive(Debug)]</span>
</span><span class="hidden"> <span class="hljs-class"><span class="hljs-keyword">enum</span> <span class="hljs-title">UsState</span></span> {
</span><span class="hidden">    Alabama,
</span><span class="hidden">    Alaska,
</span><span class="hidden"> }
</span><span class="hidden">
</span><span class="hidden"> <span class="hljs-class"><span class="hljs-keyword">enum</span> <span class="hljs-title">Coin</span></span> {
</span><span class="hidden">    Penny,
</span><span class="hidden">    Nickel,
</span><span class="hidden">    Dime,
</span><span class="hidden">    Quarter(UsState),
</span><span class="hidden"> }
</span><span class="hidden"> <span class="hljs-keyword">let</span> coin = Coin::Penny;
</span><span class="hljs-keyword">let</span> <span class="hljs-keyword">mut</span> count = <span class="hljs-number">0</span>;
<span class="hljs-keyword">match</span> coin {
    Coin::Quarter(state) =&gt; <span class="hljs-built_in">println!</span>(<span class="hljs-string">"State quarter from {:?}!"</span>, state),
    _ =&gt; count += <span class="hljs-number">1</span>,
}
</code></pre>
<p>Or we could use an <code class="hljs">if let</code> and <code class="hljs">else</code> expression like this:</p>
<pre><div class="buttons"><i class="fa fa-expand"></i></div><code class="language-rust hljs"><span class="hidden"> <span class="hljs-meta">#[derive(Debug)]</span>
</span><span class="hidden"> <span class="hljs-class"><span class="hljs-keyword">enum</span> <span class="hljs-title">UsState</span></span> {
</span><span class="hidden">    Alabama,
</span><span class="hidden">    Alaska,
</span><span class="hidden"> }
</span><span class="hidden">
</span><span class="hidden"> <span class="hljs-class"><span class="hljs-keyword">enum</span> <span class="hljs-title">Coin</span></span> {
</span><span class="hidden">    Penny,
</span><span class="hidden">    Nickel,
</span><span class="hidden">    Dime,
</span><span class="hidden">    Quarter(UsState),
</span><span class="hidden"> }
</span><span class="hidden"> <span class="hljs-keyword">let</span> coin = Coin::Penny;
</span><span class="hljs-keyword">let</span> <span class="hljs-keyword">mut</span> count = <span class="hljs-number">0</span>;
<span class="hljs-keyword">if</span> <span class="hljs-keyword">let</span> Coin::Quarter(state) = coin {
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">"State quarter from {:?}!"</span>, state);
} <span class="hljs-keyword">else</span> {
    count += <span class="hljs-number">1</span>;
}
</code></pre>
<p>If you have a situation in which your program has logic that is too verbose to
express using a <code class="hljs">match</code>, remember that <code class="hljs">if let</code> is in your Rust toolbox as well.</p>
<a class="header" href="#summary" name="summary"><h2>Summary</h2></a>
<p>We’ve now covered how to use enums to create custom types that can be one of a
set of enumerated values. We’ve shown how the standard library’s <code class="hljs">Option&lt;T&gt;</code>
type helps you use the type system to prevent errors. When enum values have
data inside them, you can use <code class="hljs">match</code> or <code class="hljs">if let</code> to extract and use those
values, depending on how many cases you need to handle.</p>
<p>Your Rust programs can now express concepts in your domain using structs and
enums. Creating custom types to use in your API ensures type safety: the
compiler will make certain your functions only get values of the type each
function expects.</p>
<p>In order to provide a well-organized API to your users that is straightforward
to use and only exposes exactly what your users will need, let’s now turn to
Rust’s modules.</p>

    `,
    "more": `
    <h1>More</h1>
    <p>For more about the Rust language you can visit <a href="https://www.rust-lang.org/en-US/">the official website</a>, you can also check out <a href="http://rust-lang.github.io/book/ch01-00-introduction.html">the rust book</a>. </p>
    <p>For more of my work check the footer of this page.
    </p>

`

}
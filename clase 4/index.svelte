<!DOCTYPE html>
<html lang="es">
    <head>
        <title> Clase 4</title>
        <link rel="stylesheet" href="./style.css" />

        <!-- Proponemos buscar una nueva noticia en inglés o español, pero debemos prestar atención al contenido HTML y también al estilo. La problemática de esta semana consiste en crear un nuevo documento HTML incluyendo el estilo CSS para lograr que al visualizar la página se vea idéntica al diario original.

        Por último deberán crear un documento README al repositorio donde queden explícitas las URLs de las noticias originales para que los tutores puedan comparar.

            Encontrar en algún diario online una noticia actual en inglés o español.
            Dentro del proyecto creado para la semana 2, agregar un nuevo archivo HTML.
            Copiar la noticia respetando los elementos semánticos HTML dentro de la estructura del documento.
            Crear un archivo CSS para darle estilo al HTML creado para la nueva noticia y lograr una apariencia lo más similar posible a la noticia original.
            Guardar los cambios en GIT y subirlos a Github manteniendo el repositorio de la semana 2.
            Crear un documento README.md dentro de la carpeta del proyecto (en caso de ya tener uno, utilizar el existente) y explicitar las URLs de las noticias originales.
            Guardar todos los cambios y subirlos a Github, pegando como respuesta de la problemática semanal, la URL del nuevo HTML creado en Github. -->
    </head>
    <body class="bg-darkish text-white">
        <header class="nav-flex nav-header">
            <a href="." class="inherit-anchor">
                <h4><b>Jon Seager</b></h4>
            </a>
            <nav class="w-80">
                <ul class="nav-flex nav-gap items-none position-end">
                    <li>
                        <a
                            href="https://fedpo2.github.io/Facu-Desarrollo-Web/"
                            class="inherit-anchor"
                            ><b> Index </b>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/fedpo2/Facu-Desarrollo-Web"
                            class="inherit-anchor"
                            ><b> Repo </b>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>

        <main>
            <article>
                <header>
                    <p class="text-light mb-0 mt-1.5">Blog / <h1 class="mt-0 text-title">Carefully But Purposefully Oxidising Ubuntu</h1></p>
                    <div class="flex gap text-light">
                        <p>12 March 2025</p>
                        <p>·</p>
                        <p>1619 words</p>
                        <p>·</p>
                        <p>8 mins</p>
                    </div>
                    <picture class="rounded">

                    <img class="rounded img-wh mt-1 mb-1" src="https://jnsgr.uk/2025/03/carefully-but-purposefully-oxidising-ubuntu/cover_hu5459c0360c2b0cb7a147d2df0eb350ca_557319_1320x0_resize_q75_h2_box.webp"
                        alt="coverimage"
                        height="1401" width="2099"
                    >
                    </picture>
                </header>
                <div class="flex flex-row">
                    <div class="flex flex-col s2_3">

                        <blockquote class="cite">
                            <i>
                                <q>This article was originally posted <a href="https://discourse.ubuntu.com/t/carefully-but-purposefully-oxidising-ubuntu/56995" class="inherit-anchor underline link-highligt">on the Ubuntu Discourse,</a> and is reposted here. I welcome comments and further discussion in that thread.</q>
                            </i>
                        </blockquote>
                        <div>

                            <section id="introduccion"><h2 class="section-title">Introduction</h2></section>
                            <p class="lh-1">
                            Last month I published <a class="inherit-anchor underline link-highligt" >Engineering Ubuntu For The Next 20 Years,</a> which outlines four key themes for how I intend to evolve Ubuntu in the coming years. In this post, I’ll focus on “Modernisation”. There are many areas we could look to modernise in Ubuntu: we could focus on the graphical shell experience, the virtualisation stack, core system utilities, default shell utilities, etc.
                            </p>
                            <p class="lh-1">
                            Over the years, projects like GNU Coreutils have been instrumental in shaping the Unix-like experience that Ubuntu and other Linux distributions ship to millions of users. According to the GNU <a class="inherit-anchor underline link-highligt">website</a>:
                            </p>

                            <blockquote class="cite"><i>
                                <q>The GNU Core Utilities are the basic file, shell and text manipulation utilities of the GNU operating system. These are the core utilities which are expected to exist on every operating system.</q></i>
                            </blockquote>

                            <p class="lh-1">
                            This package provides utilities which have become synonymous with Linux to many - the likes of <q class="blueish">ls</q>, <q class="blueish">cp</q>, and <q class="blueish">mv</q>. In recent years, there has been an effort to reimplement this suite of tools in Rust, with the goal of reaching 100% compatibility with the existing tools. Similar projects, like sudo-rs, aim to replace key security-critical utilities with more modern, memory-safe alternatives.
                            Starting with Ubuntu 25.10, my goal is to adopt some of these modern implementations as the default. My immediate goal is to make uutils’ coreutils implementation the default in Ubuntu 25.10, and subsequently in our next Long Term Support (LTS) release, Ubuntu 26.04 LTS, if the conditions are right.
                            </p>

                            <section id="butwhy"><h2 class="section-title">But… why?</h2></section>

                            <p class="lh-1">
                            Performance is a frequently cited rationale for “Rewrite it in Rust” projects. While performance is high on my list of priorities, it’s not the primary driver behind this change. These utilities are at the heart of the distribution - and it’s the enhanced resilience and safety that is more easily achieved with Rust ports that are most attractive to me.

                            <p class="lh-1">
                            The Rust language, its type system and its borrow checker (and its community!) work together to encourage developers to write safe, sound, resilient software. With added safety comes an increase in security guarantees, and with an increase in security comes an increase in overall resilience of the system - and where better to start than with the foundational tools that build the distribution?
                            </p>

                            <p class="lh-1">
                            I recently read an article about targeting foundational software with Rust in 2025. Among other things, the article asserts that “foundational software needs performance, reliability — and productivity”. If foundational software fails, so do all of the other layers built on top. If foundational packages have performance bottlenecks, they become a floor on the performance achievable by the layers above.
                            </p>

                            <p class="lh-1">
                            Ubuntu powers millions of devices around the world, from servers in your data centre, to safety critical systems in autonomous systems, so it behooves us to be absolutely certain we’re shipping the most resilient and trustworthy software we can.
                            </p>

                            <p class="lh-1">
                            There are lots of ways to achieve this: we can provide long term support for projects like Kubernetes, we can assure the code we write, and we can strive to achieve compliance with safety-centric standards, but another is by shipping software with the values of safety, soundness, correctness and resilience at their core.
                            </p>

                            <p class="lh-1">
                            That’s not to throw shade on the existing implementations, of course. Many of these tools have been stable for many years, quietly improving performance and fixing bugs. A lovely side benefit of working on newer implementations, is that it sometimes facilitates improvements in the original upstream projects, too!
                            </p>

                            <p class="lh-1">
                            I’ve written about my desire to increase the number of Ubuntu contributors, and I think projects like this will help. Rust may present a steeper learning curve than C in some ways, but by providing such a strong framework around the use of memory it also lowers the chances that a contributor accidentally commits potentially unsafe code.
                            </p>

                            <section id="introducing"><h2 class="section-title">
                                Introducing <q>oxidizr</q>
                            </h2>

                            <p class="lh-1">
                            I did my homework before writing this post. I wanted to see how easy it was for me to live with these newer implementations and get a sense of their readiness for prime-time within the distribution. I also wanted a means of toggling between implementations so that I could easily switch back should I run into incompatibilities - and so oxidizr was born!
                            </p>

                            <blockquote class="cite"><i><q>oxidizr is a command-line utility for managing system experiments that replace traditional Unix utilities with modern Rust-based alternatives on Ubuntu systems.</q></i></blockquote>

                            <p class="lh-1">

                            The <q class="blueish">oxidizr</q> utility enables you to quickly swap in and out newer implementations of certain packages with relatively low risk. It has the notion of Experiments, where each experiment is a package that already exists in the archive that can be swapped in as an alternative to the default.
                            </p>

                            <p class="lh-1">
                            Version 1.0.0 supports the following experiments:
                            </p>

                            <ul>
                                <li class="lh-1"><a href="" class="inherit-anchor">uutils coreutils</a></li>
                                <li class="lh-1"><a href="" class="inherit-anchor">uutils findutils</a></li>
                                <li class="lh-1"><a href="" class="inherit-anchor">uutils diffutils</a></li>
                                <li class="lh-1"><a href="" class="inherit-anchor">sudo-rs</a></li>
                            </ul>

                                <section id="HowItWorks"><h2 class="section-title">How does it work?</h2></section>

                                <p class="lh-1">
                                Each experiment is subtly different since the paths of the utilities being replaced vary, but the process for enabling an experiment is generally:
                                </p>
                                <ul>
                                    <li class="lh-1">Install the alternative package (e.g. <q class="blueish">apt install rust-coreutils</q>)</li>
                                    <li class="lh-1">For each binary shipped in the new package:</li>
                                    <ul>
                                        <li class="lh-1">Lookup the default path for that utility (e.g <q class="blueish">which date</q>)</li>
                                        <li class="lh-1">Back up that file (e.g. <q class="blueish">cp /usr/bin/date /usr/bin/.date.oxidizr.bak</q>)</li>
                                        <li class="lh-1">Symlink the new implementation in place (e.g. <q class="blueish"> ln -s /usr/bin/coreutils /usr/bin/date</q>)</li>
                                    </ul>
                                </ul>

                                <p class="lh-1">
                                There is also the facility to “disable” an experiment, which does the reverse of the sequence above:
                                </p>

                                <ul>
                                    <li class="lh-1">For each binary shipped in the new package:</li>
                                    <ul>
                                        <li class="lh-1">Lookup the default path for the utility (e.g <q class="blueish">which date</q>)</li>
                                        <li class="lh-1">Check for and restore any backed up versions (e.g <q class="blueish">cp /usr/bin/.date.oxidizr.bak /usr/bin/date</q>)</li>
                                    </ul>
                                    <li class="lh-1">Uninstall the package (e.g. <q class="blueish">apt remove rust-coreutils</q>)</li>
                                </ul>

                                <p class="lh-1">
                                Thereby returning the system back to its original state! The tool is covered by a suite of integration tests which illustrate this behaviour which you can find on Github
                                </p>

                                <section id="Get-Started"><h2 class="section-title">Get started</h2></section>

                                <blockquote class="cite"><i><q>⚠️ WARNING ⚠️: <q>oxidizr</q> is an experimental tool to play with alternatives to foundational system utilities. It may cause a loss of data, or prevent your system from booting, so use with caution!</q></i></blockquote>

                                <p class="lh-1">
                                There are a couple of ways to get <q class="blueish">oxidizr</q> on your system. If you already use <q class="blueish">cargo</q>, you can do the following:
                                </p>

                                <div>
                                cargo install --git https://github.com/jnsgruk/oxidizr
                                </div>

                                <p class="lh-1">
                                Otherwise, you can download and install binary releases from Github:
                                </p>

                                <div>
                                # Download version 1.0.0 and extract to /usr/bin/oxidizr

                                curl -sL "https://github.com/jnsgruk/oxidizr/releases/download/v1.0.0/oxidizr_Linux_$(uname -m).tar.gz" | sudo tar -xvzf - -C /usr/bin oxidizr
                                </div>

                                <p class="lh-1">
                                Once installed you can invoke <q class="blueish">oxidizr</q> to selectively enable/disable experiments. The default set of experiments in <q class="blueish">v1.0.0 is rust-coreutils</q> and <q class="blueish">sudo-rs</q>:
                                </p>

                                <div>
                                # Enable default experiments

                                sudo oxidizr enable

                                # Disable default experiments

                                sudo oxidizr disable

                                # Enable just coreutils

                                sudo oxidizr enable --experiments coreutils

                                # Enable all experiments without prompting with debug logging enabled

                                sudo oxidizr enable --all --yes -v

                                # Disable all experiments without prompting

                                sudo oxidizr disable --all --yes
                                </div>

                                <p class="lh-1">
                                The tool should work on all versions of Ubuntu after 24.04 LTS - though the <q class="blueish">diffutils</q> experiment is only available from Ubuntu 24.10 onward.
                                </p>

                                <p class="lh-1">
                                The tool itself is stable and well covered with unit and integration tests, but nonetheless I’d urge you to start with a test virtual machine or a machine that isn’t your production workstation or server! I’ve been running the <q class="blueish">coreutils</q> and <q class="blueish">sudo-rs</q> experiments for around 2 weeks now on my Ubuntu 24.10 machines and haven’t had many issues (more on that below…).
                                </p>
                            </section>

                            <section id="How-To-Help"><h2 class="section-title">How to Help</h2></section>
                            <p class="lh-1">

                            If you’re interested in helping out on this mission, then I’d encourage you to play with the packages, either by installing them yourself or using <q class="blueish">oxidizr</q>. Reply to the Discourse post with your experiences, file bugs and perhaps even dedicate some time to the relevant upstream projects to help with resolving bugs, implementing features or improving documentation, depending on your skill set.
                            </p>

                            <p class="lh-1">
                            You can also join us to discuss on our Matrix instance.
                            </p>

                            <section id="Next-Steps"><h2 class="section-title">Next Steps</h2></section>

                            <p class="lh-1">
                            Earlier this week, I met with @sylvestre to discuss my proposal to make uutils coreutils the default in Ubuntu 25.10. I was pleased to hear that he feels the project is ready for that level of exposure, so now we just need to work out the specifics. The Ubuntu Foundations team is already working up a plan for next cycle.
                            </p>

                            <p class="lh-1">
                            There will certainly be a few rough edges we’ll need to work out. In my testing, for example, the only incompatibility I’ve come across is that the update-initramfs script for Ubuntu uses cp -Z to preserve selinux labels when copying files. The cp, mv and ls commands from uutils don’t yet support the -Z flag, but I think we’ve worked out a way to unblock that work going forward, both in the upstream and in the next release of Ubuntu.
                            </p>

                            <p class="lh-1">
                            I’m going to do some more digging on sudo-rs over the coming weeks, with a view to assessing a similar transition.
                            </p>

                            <section id="Summary"><h2 class="section-title">Summary</h2></section>

                            <p class="lh-1">
                            I’m really excited to see so much investment in the foundational utilities behind Linux. The uutils project seems to be picking up speed after their recent appearance at FOSDEM 2025, with efforts ongoing to rework procps, util-linux and more.
                            </p>

                            <p class="lh-1">
                            The sudo-rs project is now maintained by the Trifecta Tech Foundation, who are focused on “open infrastructure software in the public interest” . Their zlib-rs recently released v0.4.2, which appears to now be the fastest API-compatible zlib implementation. They’re also behind the Pendulum Project and ntpd-rs for memory-safe time synchronisation.
                            </p>

                            <p class="lh-1">
                            With Ubuntu, we’re in a position to drive awareness and adoption of these modern equivalents by making them either trivially available, or the default implementation for the world’s most deployed Linux distribution.
                            </p>

                            <p class="lh-1">
                            We will need to do so carefully, and be willing to scale back on the ambition where appropriate to avoid diluting the promise of stability and reliability that the Ubuntu LTS releases have become known for, but I’m confident that we can make progress on these topics over the coming months.
                            </p>

                            <footer></footer>
                        </div>
                    </div>
                    <div class="flex flex-col">

                        <nav style="position: sticky; top:10%" class="items-none border-left ps-0 m-1 color-nav text-nav py-2">
                            <ul class="items-none">

                                <li><a href="#introduccion" class="inherit-anchor m-1 underline link-highligt">Introduction</a></li>
                                <li><a href="#butwhy" class="inherit-anchor m-1 underline link-highligt">But… why?</a></li>
                                <li><a href="#introducing" class="inherit-anchor m-1 underline link-highligt">Introducing <q>oxidizr</q> </a></li>
                                <ul class="items-none">
                                    <li><a href="#HowItWorks" class="inherit-anchor m-1 underline link-highligt">How does it work?</a></li>
                                    <li><a href="#Get-Started" class="inherit-anchor m-1 underline link-highligt">Get started</a></li>
                                </ul>
                                <li><a href="#How-To-Help" class="inherit-anchor m-1 underline link-highligt">How to Help</a></li>
                                <li><a href="#Next-Steps" class="inherit-anchor m-1 underline link-highligt">Next Steps</a></li>
                                <li><a href="#Summary" class="inherit-anchor m-1 underline link-highligt">Summary</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="flex flex-col">
                        <div style="min-height: 60vh;"></div>
                        <nav style="position: sticky; top:90%">
                            <a href="#" style="position: sticky; bottom: 10%; right: 10%; z-index: 99; cursor:pointer;"><img src="./arrowup.svg" alt="Volver al inicio" ></a>
                        </nav>

                    </div>
                </div>
            </article>
        </main>
    </body>
</html>

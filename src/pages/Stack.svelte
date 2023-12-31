<script>
    import Icon from "./../components/Icon.svelte";
    import Tech from "./../components/Tech.svelte";
    // import Vscode from "../assets/icons/vscode.png";
    // import Intellij from "../assets/icons/intellij.png";
    // import Laravel from "../assets/icons/laravel.svg";
    // import PHP from "../assets/icons/php-minimal.svg";
    // import Python from "../assets/icons/python.svg";
    // import Java from "../assets/icons/java.svg";
    // import Tailwind from "../assets/icons/tailwindcss.svg";
    // import Svelte from "../assets/icons/svelte.svg";
    // import Javascript from "../assets/icons/javascript.svg";
    // import Golang from "../assets/icons/golang.svg";
    // import HTML from "../assets/icons/html.svg";
    // import CSS from "../assets/icons/css.svg";
    // import MySQL from "../assets/icons/mysql.png";
    // import Postgres from "../assets/icons/postgre.svg";
    // import MongoDB from "../assets/icons/mongodb.svg";
    // import Firebase from "../assets/icons/firebase.svg";
    // import Docker from "../assets/icons/docker.png";
    // import Midtrans from "../assets/icons/midtrans_logo_negative.png";
</script>

<div class="flex flex-col self-center w-11/12 py-16">
    <h1 class="text-3xl font-normal text-white border-none outline-none">
        Tech Stack
    </h1>
    <span class="text-light-gray pt-1 pb-16 text-2xl font-normal">
        All technologies I use
    </span>
    <div class="md:grid-cols-4 grid-auto-rows: 1fr grid grid-cols-2 gap-5">
        <Tech name="Firebase" subtitle="BaaS" img="/icons/firebase.svg" />
        <Tech
            name="Docker"
            subtitle="Container"
            img="/icons/docker.png"
            width={100}
        />
        <Tech
            name="Midtrans"
            subtitle="Payment Gateway"
            img="/icons/midtrans.png"
            width={150}
        />
        <Tech name="VS Code" subtitle="Text Editor" img="/icons/vscode.png" />
        <Tech name="Intellij IDEA" subtitle="IDE" img="/icons/intellij.png" />
        <Tech
            name="Go"
            subtitle="Language"
            img="/icons/golang.svg"
            width={125}
        />
        <Tech
            name="GoFiber"
            subtitle="Framework"
            img="/icons/gofiber.svg"
            width={150}
        />
        <Tech name="Python" subtitle="Language" img="/icons/python.svg" />
        <Tech name="Laravel" subtitle="Framework" img="/icons/laravel.svg" />
        <Tech name="PHP" subtitle="Language" img="/icons/php.png" width={100} />
        <Tech name="Java" subtitle="Language" img="icons/java.svg" />
        <Tech name="HTML" subtitle="Language" img="icons/html.svg" width={80} />
        <Tech name="CSS" subtitle="Language" img="icons/css.svg" width={60} />
        <Tech
            name="Tailwind CSS"
            subtitle="Framework"
            img="/icons/tailwindcss.svg"
            width={95}
        />
        <Tech
            name="Javascript"
            subtitle="Language"
            img="icons/javascript.svg"
        />
        <Tech
            name="NodeJS"
            subtitle="Runtime"
            img="/icons/nodejs.svg"
            width={100}
        />
        <Tech
            name="ExpressJS"
            subtitle="Framework"
            img="/icons/expressjs.png"
            width={150}
        />
        <Tech name="Svelte" subtitle="Framework" img="/icons/svelte.svg" />
        <Tech name="MySQL" subtitle="DBMS" img="/icons/mysql.png" width={100} />
        <Tech
            name="PostrgeSQL"
            subtitle="DBMS"
            img="/icons/postgre.svg"
            width={100}
        />
        <Tech
            name="MongoDB"
            subtitle="DBMS"
            img="/icons/mongodb.svg"
            width={90}
        />
        <Tech
            name="NGINX"
            subtitle="Web Server"
            img="/icons/nginx.svg"
            width={100}
        />
        <Tech
            name="Apache"
            subtitle="Web Server"
            img="/icons/httpd.svg"
            width={100}
        />
    </div>
</div>

<script>
    import Icon from "./../components/Icon.svelte";
    import Tech from "./../components/Tech.svelte";
</script>

<div class="flex flex-col self-center w-11/12 py-16">
    <h1 class="text-3xl font-normal text-white border-none outline-none">
        Tech Stack
    </h1>
    <span class="text-light-gray pt-1 pb-16 text-2xl font-normal">
        All technologies I use
    </span>
    <div class="auto-rows-fr grid grid-cols-2 gap-5">
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
            name="PostgreSQL"
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

<script>
    import ProfileImg from "../assets/person.png";
    import Linkedin from "../components/Linkedin.svelte";
    import Github from "../components/Github.svelte";
    import Youtube from "../components/Youtube.svelte";
    import Twitter from "../components/Twitter.svelte";
    import Icon from "../components/Icon.svelte";
    import MathITS from "../assets/math23.png";
    import Project from "../components/Project.svelte";
    import ZiruiDev from "../assets/ziruidev.png";
    import SecScanner from "../assets/security-scanner.png";
    import Smansa from "../assets/smansa.png";
    import EkaasV1 from "../assets/ekaasv1.png";
    import Tokopedia from "../assets/tokopedia-clone.png";
    import { onMount } from "svelte";

    let date = new Date();
    $: isCopied = false;

    $: hour = date.getHours().toString().padStart(2, "0");
    $: minute = date.getMinutes().toString().padStart(2, "0");

    $: clock = hour + ":" + minute;

    onMount(() => {
        const interval = setInterval(() => {
            date = new Date();
        }, 1000);
    });

    function copyEmail() {
        const emailText = "yudhasugiharto.enterprise@gmail.com";
        isCopied = true;

        navigator.clipboard.writeText(emailText);
        setTimeout(() => {
            isCopied = false;
        }, 2000);
    }
</script>

<div class="flex flex-col items-center gap-6">
    <span class="text-light-gray text-base font-thin">{clock}</span>
    <img src={ProfileImg} alt="profile" width="100" />
    <h1 class="text-3xl font-normal text-white border-none outline-none">
        Yudha Sugiharto
    </h1>
</div>
<div class="gap-7 flex flex-col items-center">
    <span class="text-light-gray pt-1 text-xl font-normal"
        >Freelance Web Developer</span
    >
    <div class="flex items-center align-middle">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
        >
            <circle cx="6" cy="6" r="6" fill="#2DD293" />
        </svg>
        <span class="text-light-gray pl-2 -mb-1 text-xl font-light"
            >Available for new opportunities</span
        >
    </div>
    <div class="group relative flex gap-8">
        <Icon
            link="https://www.linkedin.com/in/yudha-sugiharto-programmer"
            name="Linkedin"
        >
            <Linkedin size="28" slot="icon"></Linkedin>
        </Icon>
        <Icon link="https://github.com/ziruiproject" name="Github">
            <Github size="28" slot="icon"></Github>
        </Icon>
        <Icon
            link="https://www.youtube.com/channel/UCfwlc3f9iDEIFlzSNQLkReA"
            name="Youtube"
        >
            <Youtube size="28" slot="icon"></Youtube>
        </Icon>
        <Icon link="https://twitter.com/yutprw" name="Twitter">
            <Twitter size="28" slot="icon"></Twitter>
        </Icon>
    </div>
    <div class="flex flex-col w-11/12 gap-5 text-center">
        <a
            href="mailto:yudhasugiharto.enterprise@gmail.com"
            class="text-dark-gray flex justify-center items-center px-12 py-3 bg-white rounded-[10px]"
        >
            <span class="pr-2 -mb-1 text-xl font-medium">Contact Me</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    d="M7 9L12 12.5L17 9"
                    stroke="#201F20"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z"
                    stroke="#201F20"
                    stroke-width="1.5"
                />
            </svg>
        </a>
        <span class="text-light-gray pl-2 text-xl font-normal"> or </span>
        <button
            on:click={copyEmail}
            class="flex items-center px-12 py-3 justify-center text-white-text bg-dark-gray rounded-[10px]"
        >
            {#if isCopied}
                <span class="pr-2 -mb-1 text-xl font-medium">Copied!</span>
                <svg
                    width="24px"
                    height="24px"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#D9D9D9"
                    ><path
                        d="M5 13L9 17L19 7"
                        stroke="#D9D9D9"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path></svg
                >
            {:else}
                <span class="pr-2 -mb-1 text-xl font-medium">Copy Email</span>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M19.4 20H9.6C9.26863 20 9 19.7314 9 19.4V9.6C9 9.26863 9.26863 9 9.6 9H19.4C19.7314 9 20 9.26863 20 9.6V19.4C20 19.7314 19.7314 20 19.4 20Z"
                        stroke="#D9D9D9"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M15 9V4.6C15 4.26863 14.7314 4 14.4 4H4.6C4.26863 4 4 4.26863 4 4.6V14.4C4 14.7314 4.26863 15 4.6 15H9"
                        stroke="#D9D9D9"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            {/if}
        </button>
        <span class="text-light-gray text-base font-thin"
            >Surabaya, Indonesia</span
        >
    </div>
</div>
<div class="flex flex-col self-center w-11/12 h-full py-12">
    <p class="text-white-text text-lg font-normal">
        I’m Yudha Prawira Sugiharto, a Web Developer based on Surabaya,
        Indonesia
        <br /> <br />
        With almost 3 years in the game. I'm all about bringing ideas to life on
        the web. Whether it's crafting sleek front-end interfaces or diving into
        the nitty-gritty of back-end development, I'm up for the challenge.
        <br /> <br />
        I'm the kind of developer who enjoys a good coding challenge and is always
        on the lookout for the next cool thing in tech. If you're after someone who
        can balance a knack for clean code with a laid-back attitude, I'm your person.
        <br /> <br />
        Let's build something awesome together!
    </p>
</div>
<div
    class="text-white-text flex flex-col self-center w-11/12 h-full gap-6 pt-4 pb-24"
>
    <Project img={MathITS} isDone={true} title="Mathematics ITS 2023 Website" />
    <Project img={ZiruiDev} isDone={true} title="Zirui Dev Company Profile" />
    <Project img={SecScanner} isDone={true} title="PJKP SAS Security System" />
    <Project
        img={Smansa}
        isDone={true}
        title="Majenang High School 1 Websites"
    />
    <Project
        img={EkaasV1}
        isDone={true}
        title="Ekaas V1 - Class Finance Manager for Students"
    />
    <a
        href="https://www.linkedin.com/in/yudha-sugiharto-programmer/details/projects"
        class="flex items-center px-12 py-3 justify-center text-white-text bg-dark-gray rounded-[10px]"
    >
        <span class="pr-2 -mb-1 text-xl font-medium">View More</span>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
        >
            <path
                d="M3 12H21M21 12L12.5 3.5M21 12L12.5 20.5"
                stroke="#8F8F8F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    </a>
</div>

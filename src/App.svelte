<script>
  import "./app.css";
  import ProfileImg from "./assets/person.png";
  import Linkedin from "./components/Linkedin.svelte";
  import Github from "./components/Github.svelte";
  import Youtube from "./components/Youtube.svelte";
  import Twitter from "./components/Twitter.svelte";
  import MathITS from "./assets/math23.png";
  import Project from "./components/Project.svelte";
  import ZiruiDev from "./assets/ziruidev.png";
  import SecScanner from "./assets/security-scanner.png";
  import Smansa from "./assets/smansa.png";
  import EkaasV1 from "./assets/ekaasv1.png";
  import Tokopedia from "./assets/tokopedia-clone.png";
</script>

<main class="flex flex-col py-8 w-screen">
  <nav class="bg-primary fixed w-screen bottom-0 p-4 border-t-light-gray">
    <ul class="flex justify-center gap-8">
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M28.3333 35H11.6667C7.98477 35 5 32.0152 5 28.3333V17.846C5 15.5148 6.21768 13.3529 8.21132 12.1446L16.5447 7.09415C18.6685 5.80702 21.3315 5.80702 23.4553 7.09415L31.7887 12.1446C33.7823 13.3529 35 15.5148 35 17.846V28.3333C35 32.0152 32.0152 35 28.3333 35Z"
            stroke="#D9D9D9"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15 28.3333H25"
            stroke="#D9D9D9"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <g clip-path="url(#clip0_13_287)">
            <mask
              id="mask0_13_287"
              style="mask-type:luminance"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="40"
              height="40"
            >
              <path d="M40 0H0V40H40V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_13_287)">
              <path
                d="M16.4208 24.389L6.08586 17.8122C4.02753 16.5023 4.02753 13.4976 6.08586 12.1878L16.4208 5.61098C18.6047 4.22132 21.3953 4.22132 23.5792 5.61098L33.9142 12.1878C35.9725 13.4976 35.9725 16.5024 33.9142 17.8122L23.5792 24.389C21.3953 25.7787 18.6047 25.7787 16.4208 24.389Z"
                stroke="#D9D9D9"
                stroke-width="1.5"
              />
              <path
                d="M30.4762 20L33.9142 22.1878C35.9725 23.4977 35.9725 26.5023 33.9142 27.8122L23.5792 34.389C21.3953 35.7787 18.6047 35.7787 16.4208 34.389L6.08586 27.8122C4.02753 26.5023 4.02753 23.4977 6.08586 22.1878L9.52383 20"
                stroke="#D9D9D9"
                stroke-width="1.5"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_13_287">
              <rect width="40" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M8.33331 33.3333V31.6667C8.33331 25.2233 13.5567 20 20 20C26.4433 20 31.6666 25.2233 31.6666 31.6667V33.3333"
            stroke="#D9D9D9"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 20C23.6818 20 26.6666 17.0152 26.6666 13.3333C26.6666 9.65144 23.6818 6.66667 20 6.66667C16.3181 6.66667 13.3333 9.65144 13.3333 13.3333C13.3333 17.0152 16.3181 20 20 20Z"
            stroke="#D9D9D9"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M11.6667 15L20 20.8333L28.3334 15"
            stroke="#D9D9D9"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.33331 28.3333V11.6667C3.33331 9.82573 4.8257 8.33334 6.66665 8.33334H33.3333C35.1743 8.33334 36.6666 9.82573 36.6666 11.6667V28.3333C36.6666 30.1743 35.1743 31.6667 33.3333 31.6667H6.66665C4.8257 31.6667 3.33331 30.1743 3.33331 28.3333Z"
            stroke="#D9D9D9"
            stroke-width="1.5"
          />
        </svg>
      </li>
    </ul>
  </nav>
  <div class="flex flex-col items-center gap-6">
    <span class="text-light-gray text-base font-thin">16:39</span>
    <img src={ProfileImg} alt="profile" width="100" />
    <h1 class="text-3xl font-normal text-white">Yudha Sugiharto</h1>
  </div>
  <div class="flex flex-col items-center gap-7">
    <span class="text-light-gray text-2xl font-normal pt-1"
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
      <span class="text-light-gray pl-2 text-xl font-light -mb-1"
        >Available for new opportunities</span
      >
    </div>
    <div class="flex gap-8">
      <Linkedin size="28"></Linkedin>
      <Github size="28"></Github>
      <Youtube size="28"></Youtube>
      <Twitter size="28"></Twitter>
    </div>
    <div class="flex flex-col gap-5 w-11/12 text-center">
      <button
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
      </button>
      <span class="text-light-gray pl-2 text-xl font-normal"> or </span>
      <button
        class="flex items-center px-12 py-3 justify-center text-white-text bg-dark-gray rounded-[10px]"
      >
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
      </button>
      <span class="text-light-gray text-base font-thin"
        >Surabaya, Indonesia</span
      >
    </div>
  </div>
  <div class="py-12 flex flex-col w-11/12 self-center h-full">
    <p class="font-normal text-white-text text-xl">
      I’m Yudha Prawira Sugiharto, a Web Developer based on Surabaya, Indonesia
      <br /> <br />
      With almost 3 years in the game. I'm all about bringing ideas to life on the
      web. Whether it's crafting sleek front-end interfaces or diving into the nitty-gritty
      of back-end development, I'm up for the challenge.
      <br /> <br />
      I'm the kind of developer who enjoys a good coding challenge and is always
      on the lookout for the next cool thing in tech. If you're after someone who
      can balance a knack for clean code with a laid-back attitude, I'm your person.
      <br /> <br />
      Let's build something awesome together!
    </p>
  </div>
  <div
    class="pt-4 pb-24 flex flex-col w-11/12 self-center h-full text-white-text gap-6"
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
    <Project
      img={Tokopedia}
      isDone={false}
      title="Tokopedia Clone (e-commerce)"
    />
    <button
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
    </button>
  </div>
</main>

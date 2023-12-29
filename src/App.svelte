<script>
  import "./app.css";
  import profileImg from "./assets/person.png";
  import Linkedin from "./components/Linkedin.svelte";
  import Github from "./components/Github.svelte";
  import Youtube from "./components/Youtube.svelte";
  import Twitter from "./components/Twitter.svelte";
  import Button from "./components/Button.svelte";
</script>

<main class="place-content-center place-items-center grid py-8">
  <div class="place-items-center grid gap-6">
    <span class="text-light-gray text-base font-thin">16:39</span>
    <img src={profileImg} alt="profile" width="125" />
    <h1 class="text-3xl font-semibold text-white">Yudha Sugiharto</h1>
  </div>
  <div class="place-items-center place-content-center grid gap-8">
    <span class="text-light-gray text-xl font-normal"
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
      <span class="text-light-gray pl-2 text-xl font-normal"
        >Available for new opportunities</span
      >
    </div>
    <div class="grid grid-cols-4 gap-6">
      <Linkedin size="32"></Linkedin>
      <Github size="32"></Github>
      <Youtube size="32"></Youtube>
      <Twitter size="32"></Twitter>
    </div>
    <div class=" place-content-center place-items-center grid gap-5">
      <button
        class="text-dark-gray flex items-center px-16 py-4 bg-white rounded-[10px]"
      >
        <span class="pr-2 -mb-1 text-2xl font-medium">Contact Me</span>
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
        class="flex items-center px-16 py-4 text-white-text bg-dark-gray rounded-[10px]"
      >
        <span class="pr-2 -mb-1 text-2xl font-medium">Copy Email</span>
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
</main>

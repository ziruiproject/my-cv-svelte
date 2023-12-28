<script>
  import "./app.css";
  import profileImg from "./assets/person.png";
  import Linkedin from "./components/Linkedin.svelte";
  import Github from "./components/Github.svelte";
  import Youtube from "./components/Youtube.svelte";
  import Twitter from "./components/Twitter.svelte";
</script>

<main class="place-content-center place-items-center grid py-8">
  <div class="place-items-center grid gap-6">
    <span class="text-light-gray text-base font-thin">16:39</span>
    <img src={profileImg} alt="profile" width="125" />
    <h1 class="text-3xl font-semibold text-white">Yudha Sugiharto</h1>
  </div>
  <div class="place-items-center place-content-center grid gap-4">
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
    <div clas>
      <Linkedin size="32"></Linkedin>
      <Github size="32"></Github>
      <Youtube size="32"></Youtube>
      <Twitter size="32"></Twitter>
    </div>
  </div>
</main>

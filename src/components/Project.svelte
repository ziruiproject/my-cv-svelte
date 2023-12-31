<script>
    export let img, title, isDone;
    let color = "#";
</script>

<main>
    <div
        class="rounded-[10px] bg-dark-gray hover:bg-[#302f30] p-4 transition duration-200 hover:scale-[1.02]"
    >
        <div class="flex items-center">
            {#if isDone}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M16.0614 10.4037L14 17H10L7.93865 10.4037C7.35085 8.52271 7.72417 6.47305 8.93738 4.92013L11.5272 1.60518C11.7674 1.2977 12.2326 1.2977 12.4728 1.60518L15.0626 4.92013C16.2758 6.47305 16.6491 8.52271 16.0614 10.4037Z"
                        stroke="#D9D9D9"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M10 20C10 22 12 23 12 23C12 23 14 22 14 20"
                        stroke="#D9D9D9"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M8.5 12.5C5 15 7 19 7 19L10 17"
                        stroke="#D9D9D9"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M15.9312 12.5C19.4312 15 17.4312 19 17.4312 19L14.4312 17"
                        stroke="#D9D9D9"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 10.1046 13.1046 11 12 11Z"
                        stroke="#D9D9D9"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            {:else}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M12 12C15.866 12 19 8.86599 19 5H5C5 8.86599 8.13401 12 12 12ZM12 12C15.866 12 19 15.134 19 19H5C5 15.134 8.13401 12 12 12Z"
                        stroke="#D9D9D9"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M5 2H12H19"
                        stroke="#D9D9D9"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M5 22H12H19"
                        stroke="#D9D9D9"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            {/if}

            <h3 class="font-normal text-white-text text-lg -mb-1 pl-2">
                {title}
            </h3>
        </div>
        <div class="pt-4">
            <img src={img} alt={title} class="rounded-[10px]" />
        </div>
    </div>
</main>

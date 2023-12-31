<script>
    import Icon from "./Icon.svelte";
    export let size;
</script>

<nav class="bg-primary fixed w-screen bottom-0 p-4 border-t-light-gray">
    <ul class="flex justify-center gap-10">
        <li>
            <Icon atBottom={true} link="/" name="Home">
                <svg
                    slot="icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width={size}
                    height={size}
                    viewBox="0 0 40 40"
                    fill="none"
                >
                    <path
                        d="M28.3333 35H11.6667C7.98477 35 5 32.0152 5 28.3333V17.846C5 15.5148 6.21768 13.3529 8.21132 12.1446L16.5447 7.09415C18.6685 5.80702 21.3315 5.80702 23.4553 7.09415L31.7887 12.1446C33.7823 13.3529 35 15.5148 35 17.846V28.3333C35 32.0152 32.0152 35 28.3333 35Z"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M15 28.3333H25"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </Icon>
        </li>
        <li>
            <Icon atBottom={true} link="/stack" name="Tech Stack">
                <svg
                    slot="icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width={size}
                    height={size}
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
                                stroke-width="1.5"
                            />
                            <path
                                d="M30.4762 20L33.9142 22.1878C35.9725 23.4977 35.9725 26.5023 33.9142 27.8122L23.5792 34.389C21.3953 35.7787 18.6047 35.7787 16.4208 34.389L6.08586 27.8122C4.02753 26.5023 4.02753 23.4977 6.08586 22.1878L9.52383 20"
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
            </Icon>
        </li>
        <li>
            <Icon atBottom={true} link="/about" name="About me">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={size}
                    height={size}
                    viewBox="0 0 40 40"
                    fill="none"
                    slot="icon"
                >
                    <path
                        d="M8.33331 33.3333V31.6667C8.33331 25.2233 13.5567 20 20 20C26.4433 20 31.6666 25.2233 31.6666 31.6667V33.3333"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M20 20C23.6818 20 26.6666 17.0152 26.6666 13.3333C26.6666 9.65144 23.6818 6.66667 20 6.66667C16.3181 6.66667 13.3333 9.65144 13.3333 13.3333C13.3333 17.0152 16.3181 20 20 20Z"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </Icon>
        </li>
        <li>
            <Icon atBottom={true} link="/contact" name="Contact">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={size}
                    height={size}
                    viewBox="0 0 40 40"
                    fill="none"
                    slot="icon"
                >
                    <path
                        d="M11.6667 15L20 20.8333L28.3334 15"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M3.33331 28.3333V11.6667C3.33331 9.82573 4.8257 8.33334 6.66665 8.33334H33.3333C35.1743 8.33334 36.6666 9.82573 36.6666 11.6667V28.3333C36.6666 30.1743 35.1743 31.6667 33.3333 31.6667H6.66665C4.8257 31.6667 3.33331 30.1743 3.33331 28.3333Z"
                        stroke-width="1.5"
                    />
                </svg>
            </Icon>
        </li>
    </ul>
</nav>

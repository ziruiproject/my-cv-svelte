<script>
    export let link, name;
    let isHovered = false;

    function handleMouseEnter() {
        isHovered = true;
    }

    function handleMouseLeave() {
        isHovered = false;
    }
</script>

<main>
    <a
        href={link}
        class="relative group"
        on:mouseenter={handleMouseEnter}
        on:mouseleave={handleMouseLeave}
    >
        <slot name="icon" />

        {#if isHovered}
            <span
                class="bg-dark-gray text-lg px-4 rounded-[10px] absolute top-full left-1/2 transform -translate-x-1/2 p-2 bg-gray-800 text-white-text opacity-100 pointer-events-none transition-opacity duration-300"
            >
                {name}
            </span>
        {/if}
    </a>
</main>

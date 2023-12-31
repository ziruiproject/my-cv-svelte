<script>
    export let link,
        name,
        location = "",
        atBottom = false;
    let isHovered = false;

    function handleMouseEnter() {
        isHovered = true;
    }

    function handleMouseLeave() {
        isHovered = false;
    }
</script>

<a
    href={link}
    class="{link === location
        ? 'stroke-white-text'
        : 'stroke-light-gray'} relative stroke-light-gray hover:stroke-white-text duration-300"
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
>
    <slot name="icon" />

    {#if isHovered}
        <span
            class="text-nowrap bg-dark-gray text-lg px-4 rounded-[10px] absolute {atBottom
                ? 'bottom-full mb-2'
                : 'top-full mt-2'} left-1/2 transform -translate-x-1/2 p-1 bg-gray-800 text-white-text opacity-100 pointer-events-none transition-opacity duration-300"
            role="tooltip"
            aria-label={name}
        >
            {name}
        </span>
    {/if}
</a>

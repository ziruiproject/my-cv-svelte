<script>
    export let name,
        img,
        subtitle,
        width = 72;
</script>

<div
    class="rounded-[10px] bg-dark-gray hover:bg-[#302f30] py-4 px-5 transition duration-200 hover:scale-[1.02] grid"
>
    <img
        src={img}
        alt="Visual Studio Code"
        {width}
        class="place-self-center py-10"
    />
    <div class="flex flex-col justify-end">
        <span class="text-light-gray text-lg">
            {subtitle}
        </span>
        <h3 class="text-xl font-normal text-white border-none outline-none">
            {name}
        </h3>
    </div>
</div>

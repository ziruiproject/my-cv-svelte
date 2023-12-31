<script>
    import Tech from "./../components/Tech.svelte";
    import Vscode from "../assets/icons/vscode.png";
</script>

<div class="w-11/12 flex flex-col self-center pt-16">
    <h1 class="text-3xl font-normal text-white border-none outline-none">
        Tech Stack
    </h1>
    <span class="text-light-gray text-2xl font-normal pt-1 pb-16">
        All technologies I use
    </span>
    <div class="grid grid-cols-2 gap-x-5">
        <Tech name="VS Code" subtitle="Text Editor" img={Vscode}></Tech>
        <Tech name="VS Code" subtitle="Text Editor" img={Vscode}></Tech>
    </div>
</div>

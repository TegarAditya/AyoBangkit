<script lang="ts">
    export let data;

    const title = data.title;
    const menu = data.menuData;
</script>

<div class="container">
    <div class="mx-5 my-5">
        <h1 class="font-bold capitalize text-2xl">{title}</h1>
        <div class="flex w-full flex-col space-y-3 my-5">
			{#each menu as { title, path }}
				<div class="flex justify-center">
					<a
						href={path}
						class="w-full rounded-full bg-white px-4 py-2 text-center font-bold tracking-wide text-blue-400 shadow-lg transition-all duration-75 focus:translate-y-1 focus:text-black focus:shadow-sm"
					>
						{title}
					</a>
				</div>
			{/each}
		</div>
    </div>
</div>
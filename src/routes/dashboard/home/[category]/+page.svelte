<script lang="ts">
	export let data;

	const title = data.title;
	const greetings = data.greetings;
	const purpose = data.purpose;
	const menu = data.menuData;
</script>

<div class="container">
	<div class="mx-5 my-5">
		<h1 class="mb-2 text-2xl font-bold">{title}</h1>
		<p>{greetings}</p>

		<div class="my-5">
			<p class="text-xl font-bold">Tujuan:</p>
			<ul class="list-inside list-disc">
				{#each purpose as item}
					<li class="-indent">{item}</li>
				{/each}
			</ul>
		</div>

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

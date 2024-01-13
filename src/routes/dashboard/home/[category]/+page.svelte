<script lang="ts">
	export let data;

	const title = data.title;
	const greetings = data.greetings;
	const purpose = data.purpose;
	const menu = data.menuData;
</script>

<div class="container">
	<div class="mx-5 py-5">
		<h1 class="mb-2 text-2xl text-white font-bold">{title}</h1>
		<p class="text-white">{greetings}</p>

		<div class="my-5">
			<p class="text-xl text-white font-bold">Tujuan:</p>
			<ul class="list-inside list-disc text-white">
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
						class="w-full text-center rounded-full bg-white px-4 py-2 font-bold tracking-wide text-orange-600 shadow-lg transition-all duration-75 focus:translate-y-1 focus:shadow-sm"
					>
						{title}
					</a>
				</div>
			{/each}
		</div>
	</div>
</div>

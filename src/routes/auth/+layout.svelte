<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	export let data;
</script>

<svelte:head>
	<meta name="theme-color" content="#111827" />
	<title>Educasea</title>
</svelte:head>

<div>
	{#key data.url}
		<div class="h-[100vh] bg-gradient-to-t from-sky-400 to-blue-500">
            <div in:fly={{ duration: 300, easing: cubicInOut, x: 200, opacity: 0 }}>
                <slot />
            </div>
		</div>
	{/key}
</div>

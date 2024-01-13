<script>
	import { pwaInfo } from 'virtual:pwa-info'; 
	import '../app.pcss';

	$: webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : '' ;
</script>

<svelte:head>
	{@html webManifestLink} 
</svelte:head>

<div class="font-fredoka">
	<slot>
		<span>No content found</span>
	</slot>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&display=swap');
</style>

<script lang="ts">
	import { VideoPlaceholder } from 'flowbite-svelte';

	const menu = [
		{
			title: 'Latihan di atas ranjang',
			href: '/dashboard/home/latihan-di-atas-ranjang'
		},
		{
			title: 'Latihan posisi duduk',
			href: '/dashboard/home/latihan-posisi-duduk'
		},
		{
			title: 'Latihan posisi berdiri',
			href: '/dashboard/home/latihan-posisi-berdiri'
		},
		{
			title: 'Latihan berjalan',
			href: '/dashboard/home/latihan-berjalan'
		}
	];
</script>

<div class="container">
	<div class="mx-5 pb-20">
		<div class="pt-5">
			<VideoPlaceholder class="aspect-video h-auto"/>
		</div>
		<div class="my-5">
			<h1 class="text-xl font-bold">Saat ini anda membutuhkan latihan yang mana?</h1>
			<p class="my-3">Pastikan Anda memilih jenis latihan sesuai dengan kemampuan Anda saat ini!</p>
			<div class="flex w-full flex-col space-y-3">
				{#each menu as { title, href }}
					<div class="flex justify-center">
						<a
							href={href}
							class="w-full text-center rounded-full bg-white px-4 py-2 font-bold tracking-wide text-blue-400 shadow-lg transition-all duration-75 focus:text-black focus:translate-y-1 focus:shadow-sm"
						>
							{title}
						</a>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

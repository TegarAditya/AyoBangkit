<script lang="ts">
	import { Avatar } from 'flowbite-svelte';
	import {
		ArrowRightFromBracketSolid,
		ChevronRightSolid,
		EnvelopeSolid,
		LockSolid,
		UserSolid
	} from 'flowbite-svelte-icons';

	const name = 'Angel';
    const email = 'angelita';

	const userSettingsMenu = [
		{
			name: 'Ubah Profil',
			icon: UserSolid,
			url: '/dashboard/profile'
		},
		{
			name: 'Ganti Email',
			icon: EnvelopeSolid,
			url: '/dashboard/profile'
		},
		{
			name: 'Ganti Password',
			icon: LockSolid,
			url: '/dashboard/profile'
		},
		{
			name: 'Keluar',
			icon: ArrowRightFromBracketSolid,
			url: '/auth/login'
		}
	];
</script>

<div class="container py-5">
	<div class="mx-5 space-y-2">
		<div
			class="flex h-20 space-x-3 rounded-lg bg-gradient-to-bl from-rose-500 to-indigo-700 p-3 align-middle shadow-lg"
		>
			<Avatar class="my-auto">JL</Avatar>
			<div class="my-auto text-white">
				<p class="text-xl font-semibold">Halo {name}</p>
				<p>{email}@gmail.com</p>
			</div>
		</div>
		<div
			class="min-h-20 text-white rounded-lg bg-gradient-to-bl from-rose-500 to-indigo-700 p-3 shadow-lg"
		>
			{#each userSettingsMenu as item}
				<a
					href={item.url}
					class="mx-3 my-2 flex justify-between rounded-lg px-2 py-2 hover:bg-blue-700 hover:text-white"
				>
					<p class="flex">
						<span class="mr-2 text-sm"><svelte:component this={item.icon} /></span>{item.name}
					</p>
					<div class="text-sm">
						<ChevronRightSolid />
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>

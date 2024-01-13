<script lang="ts">
	import { BottomNav, BottomNavItem, ImagePlaceholder, Skeleton } from 'flowbite-svelte';
	import {
		HomeSolid,
		UserCircleSolid,
		CalendarMonthSolid,
		InfoCircleSolid
	} from 'flowbite-svelte-icons';
	import { scale } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { page } from '$app/stores';

	$: activeUrl = $page.url.pathname;

	export let data;
</script>

<svelte:head>
	<meta name="theme-color" content="#111827" />
	<title>Educasea</title>
</svelte:head>

<div class="sticky top-0 z-20 flex h-16 w-full justify-center bg-yellow-300 align-middle">
	<h1 class="my-auto text-2xl font-black tracking-wider text-white drop-shadow-md">AyoBangkit!</h1>
</div>

<div>
	{#key data.url}
		<div class="h-[100vh]">
			<div in:scale={{ duration: 300, easing: cubicInOut, opacity: 0 }}>
				<slot>
					<Skeleton class="py-4" />
					<ImagePlaceholder class="pb-20" />
				</slot>
			</div>
		</div>
	{/key}
</div>

<BottomNav {activeUrl} position="fixed" classInner="grid-cols-4">
	<BottomNavItem btnName="Beranda" href="/dashboard/home" exact={false}>
		<HomeSolid
			class="mb-1 h-5 w-5 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
		/>
	</BottomNavItem>
	<BottomNavItem btnName="Kalender" href="/dashboard/calendar">
		<CalendarMonthSolid
			class="mb-1 h-5 w-5 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
		/>
	</BottomNavItem>
	<BottomNavItem btnName="Info" href="/dashboard/info">
		<InfoCircleSolid
			class="mb-1 h-5 w-5 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
		/>
	</BottomNavItem>
	<BottomNavItem btnName="Profil" href="/dashboard/profile">
		<UserCircleSolid
			class="mb-1 h-5 w-5 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
		/>
	</BottomNavItem>
</BottomNav>

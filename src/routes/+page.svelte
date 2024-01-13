<script lang="ts">
	import { goto } from "$app/navigation";

	function handleCLick() {
		goto("/auth/login");
	}
</script>

<div class="bg-gradient-to-t from-sky-400 to-blue-500">
	<div class="container h-[100dvh]">
		<div class="mx-5 my-auto flex h-full flex-col justify-center space-y-4">
			<div class="py-32 space-y-2">
				<h1 class="text-center text-4xl font-bold text-white">Ayo Latihan!</h1>
				<p class="text-center text-white">
					Selamat datang di Pos Latihan Pasca Stroke. Anda pasti bisa segera pulih dengan rutin
					melakukan latihan yang sudah disediakan yaa
				</p>
			</div>
			<div>
				<div class="flex justify-center">
					<button
						class="bg-white text-blue-400 tracking-wide font-bold py-2 px-4 rounded-full shadow-lg focus:translate-y-1 focus:shadow-sm transition-all duration-75"
						on:click={handleCLick}
					>
						Mulai Sekarang!
					</button>
				</div>
			</div>
		</div>
		<div class="mx-5"></div>
	</div>
</div>

<div class="container">
	<div class="mx-10 my-auto flex h-[100dvh] flex-col justify-center space-y-4 align-middle">
		<h1 class="text-center text-3xl font-bold tracking-wide text-white">Masuk</h1>
		<form action="">
			<div class="flex flex-col space-y-2">
				<div class="flex flex-col space-y-1">
					<label for="email" class="text-white">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						class="rounded-lg border-2 border-white text-teal-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-400"
						placeholder="Masukkan email anda"
					/>
				</div>
				<div class="flex flex-col space-y-1">
					<label for="password" class="text-white">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						class="rounded-lg border-2 border-white text-teal-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-400"
						placeholder="Masukkan password anda"
					/>
				</div>
			</div>
			<div class="mt-10 flex flex-col space-y-2">
				<button
					type="submit"
					class="rounded-full bg-white px-4 py-2 font-bold tracking-wide text-blue-400 shadow-lg transition-all duration-75 focus:translate-y-1 focus:shadow-sm"
				>
					Masuk
				</button>
				<a
					href="/dashboard/home"
					class="rounded-full text-center bg-blue-400 px-4 py-2 font-bold tracking-wide text-white shadow-lg transition-all duration-75 focus:translate-y-1 focus:shadow-sm"
				>
					Tamu
				</a>
			</div>
			<div class="flex justify-center">
				<a href="/auth/register" class="py-2 text-center text-white">
					Belum punya akun? Daftar sekarang!
				</a>
			</div>
		</form>
	</div>
</div>

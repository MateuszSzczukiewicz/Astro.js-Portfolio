<main class="h-screen w-screen">
	<div class="absolute -z-10 h-screen w-screen bg-zinc-100"></div>
	<section class="pt-20">
		<div class="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
			<h2 class="text-grey-900 mb-4 text-center text-4xl font-extrabold tracking-tight">
				Skantaktuj się ze mną
			</h2>
			<p class="mb-8 text-center font-light text-gray-500 sm:text-xl lg:mb-16">
				Got a technical issue? Want to send feedback about a beta feature? Need details about our
				Business plan? Let us know.
			</p>
			<form action="https://formspree.io/f/xnqkywzy" method="POST" class="space-y-8">
				<div>
					<label for="email" class="mb-2 block text-sm font-medium text-gray-900">Twój e-mail</label
					>
					<input
						type="email"
						name="email"
						id="email"
						class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm"
						placeholder="Wpisz swój e-mail"
						required
					/>
				</div>
				<div>
					<label for="subject" class="mb-2 block text-sm font-medium text-gray-900">Temat</label>
					<input
						type="text"
						name="subject"
						id="subject"
						class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm"
						placeholder="Wpisz temat wiadomości"
						required
					/>
				</div>
				<div class="sm:col-span-2">
					<label for="message" class="mb-2 block text-sm font-medium text-gray-900"
						>Twoja wiadomość</label
					>
					<textarea
						name="message"
						id="message"
						rows="6"
						class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm"
						placeholder="Wpisz wiadomość"
					></textarea>
				</div>
				<button
					type="submit"
					class="rounded-lg bg-gray-800 px-5 py-3 text-center text-sm font-medium text-white hover:scale-110 hover:bg-gray-950 focus:outline-none focus:ring-4 sm:w-fit"
					>Wyślij
				</button>
			</form>
		</div>
	</section>
</main>

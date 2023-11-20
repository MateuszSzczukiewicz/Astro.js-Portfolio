<script>
	import gsap from 'gsap'
	import { onMount } from 'svelte'

	let tl
	let header
	let bg
	let form

	onMount(() => {
		const screenWidth = window.innerWidth
		tl = gsap.timeline()

		if (screenWidth >= 640) {
			tl.fromTo(bg, { x: '-100%' }, { x: 0, duration: 0.7 })
			tl.fromTo(header, { x: '20%', opacity: 0 }, { x: 0, opacity: '100%', duration: 0.5 })
			tl.fromTo(form, { x: '20%', opacity: 0 }, { x: 0, opacity: '100%', duration: 0.5 })
		}
	})
</script>

<main class="h-full w-screen">
	<div bind:this={bg} class="absolute -z-10 h-screen w-screen bg-zinc-100"></div>
	<section class="py-20">
		<div class="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
			<div bind:this={header}>
				<h2 class="mb-4 text-center text-4xl font-extrabold tracking-tight text-zinc-900">
					Skantaktuj się ze mną
				</h2>
				<p class="mb-8 text-center font-light text-gray-500 sm:text-xl lg:mb-16">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem dicta est
					voluptatum? Accusantium animi consequuntur eos est expedita in iusto nesciunt nisi nobis
					perferendis possimus quis quos saepe, voluptatibus?
				</p>
			</div>
			<form
				bind:this={form}
				action={import.meta.env.PUBLIC_FORMSPREE_KEY}
				method="POST"
				class="space-y-8"
			>
				<div>
					<label for="email" class="text-md mb-2 block font-medium text-gray-900">Twój e-mail</label
					>
					<input
						type="email"
						name="email"
						id="email"
						class="text-md block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm"
						placeholder="Wpisz swój e-mail"
						required
					/>
				</div>
				<div>
					<label for="subject" class="text-md mb-2 block font-medium text-gray-900">Temat</label>
					<input
						type="text"
						name="subject"
						id="subject"
						class="text-md block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-gray-900 shadow-sm"
						placeholder="Wpisz temat wiadomości"
						required
					/>
				</div>
				<div class="sm:col-span-2">
					<label for="message" class="text-md mb-2 block font-medium text-gray-900"
						>Twoja wiadomość</label
					>
					<textarea
						name="message"
						id="message"
						rows="6"
						class="text-md block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm"
						placeholder="Wpisz wiadomość"
						required
					></textarea>
				</div>
				<button
					type="submit"
					class="text-md w-full rounded-lg bg-zinc-800 px-5 py-3 text-center font-medium text-white transition hover:scale-105 hover:bg-zinc-950"
					>Wyślij
				</button>
			</form>
		</div>
	</section>
</main>

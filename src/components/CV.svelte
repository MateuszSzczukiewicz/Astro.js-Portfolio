<script lang="ts">
	export let id: string

	import gsap from 'gsap'
	import { onMount } from 'svelte'

	const screenWidth = window.innerWidth

	let tl: gsap.core.Timeline
	let button: GSAPTweenTarget
	let closeButton: GSAPTweenTarget
	let title: GSAPTweenTarget
	let wrapper: GSAPTweenTarget
	let image: GSAPTweenTarget
	let cvButton: GSAPTweenTarget
	let span: GSAPTweenTarget

	const playOpen = () => tl.play()
	const playClose = () => tl.reverse()

	onMount(() => {
		tl = gsap.timeline({ paused: true })

		tl.to(title, { opacity: '0', y: '-=50px', duration: 0.2 })
			.to(cvButton, { opacity: '0', y: '-=50px', duration: 0.2 })
			.to(
				span,
				{
					scale: 25,
					duration: 1
				},
				'+=0.1'
			)
			.set(wrapper, { backgroundColor: 'black' })
			.to(button, { opacity: '0', duration: 0.1 })
			.set(title, { display: 'none' })
			.set(cvButton, { display: 'none' })
			.set(button, { display: 'none' })
			.set(closeButton, { display: 'block' })
			.set(image, { display: 'block' })
			.fromTo([image, closeButton], { opacity: '0', y: '+=50px' }, { opacity: '1', y: '0' })
	})

	const downloadPDF = () => {
		const pdfUrl = '/CV Mateusz Szczukiewicz.pdf'

		const link = document.createElement('a')
		link.href = pdfUrl
		link.target = '_blank'
		link.download = 'CV Mateusz Szczukiewicz.pdf'

		document.body.appendChild(link)
		link.click()

		document.body.removeChild(link)
	}
</script>

<article
	{id}
	bind:this={wrapper}
	class="flex h-screen w-screen flex-col items-center justify-center overflow-hidden"
>
	<h1 bind:this={title} class="mx-4 mt-20 text-center text-6xl font-bold sm:text-[105px]">
		Zobacz i pobierz moje CV
	</h1>
	<button
		bind:this={button}
		on:click={playOpen}
		class="relative mt-20 h-36 w-36 rounded-[100px] border-0 bg-transparent text-5xl font-bold text-white transition hover:scale-110 sm:mt-36"
		>CV
		<span
			bind:this={span}
			class="absolute left-1/2 top-1/2 -z-10 h-36 w-36 origin-center -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-950 transition-transform ease-in-out hover:-translate-x-1/2 hover:-translate-y-1/2 hover:scale-125"
		></span>
	</button>
	<button
		bind:this={cvButton}
		on:click={downloadPDF}
		class="my-20 border-4 border-zinc-950 px-14 py-4 text-2xl font-semibold hover:bg-zinc-950 hover:text-zinc-100"
	>
		Pobierz CV
	</button>
	{#if screenWidth > 1024}
		<img
			bind:this={image}
			class="hidden h-auto w-[55%] rounded shadow-2xl xl:mt-6"
			src="/images/CVImage.webp"
			alt="Moje CV"
			loading="lazy"
			decoding="async"
		/>
	{:else}
		<img
			bind:this={image}
			class="hidden h-auto w-11/12 rounded shadow-2xl xl:mt-6"
			src="/images/CVImage2.webp"
			alt="Moje CV"
			loading="lazy"
			decoding="async"
		/>
	{/if}
	<button
		bind:this={closeButton}
		on:click={playClose}
		class="mt-5 hidden border-0 bg-transparent text-xl font-bold uppercase text-white"
		>Zamknij</button
	>
</article>

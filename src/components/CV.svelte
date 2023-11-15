<script>
	import gsap from 'gsap'
	import { onMount } from 'svelte'
	let tlOpen
	let tlClose
	let button
	let closeButton
	let title
	let wrapper
	let image

	const playOpen = () => tlOpen.play()

	const playClose = () => tlOpen.reverse()

	onMount(() => {
		tlOpen = gsap.timeline({ paused: true })
		tlClose = gsap.timeline({ paused: true })

		if (tlOpen) {
			tlOpen
				.to(title, { opacity: '0', y: '-=50px', duration: 0.2 })
				.to(
					button.children[0],
					{
						scale: 25,
						duration: 1
					},
					'+=0.1'
				)
				.set(wrapper, { backgroundColor: 'black' })
				.to(button, { opacity: '0', duration: 0.1 })
				.set(title, { display: 'none' })
				.set(button, { display: 'none' })
				.set(closeButton, { display: 'block' })
				.set(image, { display: 'block' })
				.fromTo(
					[image, closeButton],
					{ opacity: '0', y: '+=50px' },
					{ opacity: '1', y: '0', stagger: '0.2' }
				)
		}
	})
</script>

<div
	bind:this={wrapper}
	class="flex h-screen w-screen flex-col items-center justify-center overflow-hidden"
>
	<h1 bind:this={title} class="text-[105px] font-bold">Zobacz i pobierz moje CV</h1>
	<button
		bind:this={button}
		on:click={playOpen}
		class="relative mt-16 h-36 w-36 rounded-[100px] border-0 bg-transparent text-5xl font-bold text-white"
		>CV
		<span
			class="absolute left-1/2 top-1/2 -z-10 h-36 w-36 origin-center -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-950 transition-transform ease-in-out hover:-translate-x-1/2 hover:-translate-y-1/2 hover:scale-125"
		></span>
	</button>
	<img
		bind:this={image}
		class="hidden h-auto w-[500px]"
		src="https://a.allegroimg.com/original/113480/f6893bdd4293880393369e070e57/Edytowalny-Szablon-CV-w-MS-Word-1-22-CV"
		alt="Moje CV"
	/>
	<button
		bind:this={closeButton}
		on:click={playClose}
		class="mt-5 hidden border-0 bg-transparent text-xl font-bold text-white"
	></button>
</div>

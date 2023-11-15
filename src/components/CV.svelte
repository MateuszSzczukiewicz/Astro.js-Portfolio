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

	onMount(() => {
		tlOpen.current = gsap.timeline({ paused: true })
		tlClose.current = gsap.timeline({ paused: true })

		if (tlOpen.current) {
			tlOpen.current
				.to(title.current, { opacity: '0', y: '-=50px', duration: 0.2 })
				.to(
					button.current.children[0],
					{
						scale: 25,
						duration: 1
					},
					'+=0.1'
				)
				.set(wrapper.current, { backgroundColor: 'black' })
				.to(button.current, { opacity: '0', duration: 0.1 })
				.set(title.current, { display: 'none' })
				.set(button.current, { display: 'none' })
				.set(closeButton.current, { display: 'block' })
				.set(image.current, { display: 'block' })
				.fromTo(
					[image.current, closeButton.current],
					{ opacity: '0', y: '+=50px' },
					{ opacity: '1', y: '0', stagger: '0.2' }
				)
		}
	})
</script>

<div class="flex h-screen w-screen flex-col items-center justify-center overflow-hidden">
	<h1 class="text-[105px] font-bold">Zobacz i pobierz moje CV</h1>
	<button
		class="relative mt-16 h-36 w-36 rounded-[100px] border-0 bg-transparent text-5xl font-bold text-white"
		>CV
		<span
			class="absolute left-1/2 top-1/2 -z-10 h-36 w-36 origin-center -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-950 transition-transform ease-in-out hover:-translate-x-1/2 hover:-translate-y-1/2 hover:scale-125"
		></span>
	</button>
	<img
		class="hidden h-auto w-[500px]"
		src="https://a.allegroimg.com/original/113480/f6893bdd4293880393369e070e57/Edytowalny-Szablon-CV-w-MS-Word-1-22-CV"
		alt="Moje CV"
	/>
	<button class="mt-5 hidden border-0 bg-transparent text-xl font-bold text-white"></button>
</div>

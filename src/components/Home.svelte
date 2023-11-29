<script lang="ts">
	import gsap from 'gsap'
	import { onMount } from 'svelte'

	let tl: gsap.core.Timeline
	let bg: GSAPTweenTarget
	let image: GSAPTweenTarget
	let title: GSAPTweenTarget
	let subtitle: GSAPTweenTarget
	let button1: GSAPTweenTarget
	let button2: GSAPTweenTarget
	let linkedIn: GSAPTweenTarget
	let GitHub: GSAPTweenTarget
	let YouTube: GSAPTweenTarget
	let Medium: GSAPTweenTarget

	const scrollIntoAbout = () => {
		const aboutSection: HTMLElement | null = document.getElementById('about')
		if (aboutSection) {
			aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}
	}

	const scrollIntoCV = () => {
		const CVSection: HTMLElement | null = document.getElementById('cv')
		if (CVSection) {
			CVSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}
	}

	onMount(() => {
		const screenWidth = window.innerWidth
		tl = gsap.timeline()

		if (screenWidth >= 640) {
			tl.fromTo(bg, { x: '-100%' }, { x: 0, duration: 0.7 })
			tl.fromTo(image, { x: '100%', opacity: 0 }, { x: 0, opacity: '100%', duration: 0.7 })
			tl.fromTo(title, { y: '100%', opacity: 0 }, { y: 0, opacity: '100%', duration: 0.4 })
			tl.fromTo(subtitle, { y: '100%', opacity: 0 }, { y: 0, opacity: '100%', duration: 0.4 })
			tl.fromTo(button1, { y: '100%', opacity: 0 }, { y: 0, opacity: '100%', duration: 0.4 })
			tl.fromTo(button2, { y: '100%', opacity: 0 }, { y: 0, opacity: '100%', duration: 0.4 })

			tl.fromTo(linkedIn, { x: '100%', opacity: 0 }, { x: 0, opacity: '100%', duration: 0.2 })
			tl.fromTo(GitHub, { x: '100%', opacity: 0 }, { x: 0, opacity: '100%', duration: 0.2 })
			tl.fromTo(YouTube, { x: '100%', opacity: 0 }, { x: 0, opacity: '100%', duration: 0.2 })
			tl.fromTo(Medium, { x: '100%', opacity: 0 }, { x: 0, opacity: '100%', duration: 0.2 })
		}
	})
</script>

<article class="flex h-screen w-screen flex-col justify-around xl:flex-row">
	<div bind:this={bg} class="absolute h-screen w-screen bg-zinc-200"></div>
	<section class="z-10 ml-4 flex flex-col md:gap-4 xl:absolute xl:left-52 xl:top-60">
		<h1 bind:this={title} class="text-6xl md:text-7xl xl:text-[130px] xl:text-zinc-800">
			Mateusz <span class="xl:text-zinc-100">Szczukiewicz</span>
		</h1>
		<h2 bind:this={subtitle} class="text-2xl text-zinc-600 md:text-3xl xl:ml-12 xl:text-4xl">
			FULLSTACK DEVELOPER
		</h2>
	</section>
	<div
		class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-around md:flex-col md:items-end"
	>
		<section bind:this={image} class="flex self-end sm:self-start md:self-end xl:ml-[44rem]">
			<img
				src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
				alt="Moje zdjęcie"
				class="z-0 h-56 w-auto bg-zinc-950 object-cover opacity-80 shadow-2xl md:h-96 xl:h-screen xl:w-[60rem]"
			/>
		</section>
		<section
			class="z-10 mr-8 flex flex-col items-end gap-4 lg:flex-row xl:absolute xl:bottom-52 xl:left-48 xl:flex-col"
		>
			<button
				on:click={scrollIntoAbout}
				bind:this={button1}
				class="w-52 cursor-pointer border-4 border-zinc-950 bg-zinc-100 p-4 text-center text-2xl font-semibold hover:bg-zinc-950 hover:text-zinc-100 md:h-20 md:w-64"
				>Więcej o mnie
			</button>
			<button
				on:click={scrollIntoCV}
				bind:this={button2}
				class="w-52 cursor-pointer border-4 border-zinc-950 bg-zinc-100 p-4 text-center text-2xl font-semibold hover:bg-zinc-950 hover:text-zinc-100 md:h-20 md:w-64"
				>Zobacz CV
			</button>
		</section>
	</div>
	<section
		class="z-10 flex scale-90 items-center justify-between sm:scale-75 sm:justify-center md:scale-100 xl:mx-auto xl:my-32 xl:flex-col xl:justify-around 2xl:mx-10"
	>
		<button bind:this={linkedIn}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				width="100"
				height="100"
				viewBox="0 0 64 64"
				class="hover:scale-125"
			>
				<path
					d="M40.227,12C51.145,12,52,12.854,52,23.773v16.453C52,51.145,51.145,52,40.227,52H23.773C12.855,52,12,51.145,12,40.227	V23.773C12,12.854,12.855,12,23.773,12H40.227z M25.029,43V26.728h-5.057V43H25.029z M22.501,24.401	c1.625,0,2.947-1.322,2.947-2.949c0-1.625-1.322-2.947-2.947-2.947c-1.629,0-2.949,1.32-2.949,2.947S20.87,24.401,22.501,24.401z M44,43v-8.925c0-4.382-0.946-7.752-6.067-7.752c-2.46,0-4.109,1.349-4.785,2.628H33.08v-2.223h-4.851V43h5.054v-8.05	c0-2.122,0.405-4.178,3.036-4.178c2.594,0,2.628,2.427,2.628,4.315V43H44z"
				></path>
			</svg>
		</button>
		<button bind:this={GitHub}>
			<svg
				width="80"
				height="80"
				xmlns="http://www.w3.org/2000/svg"
				class="hover:scale-125"
				viewBox="0 0 100 100"
				><path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
					fill="black"
				/></svg
			>
		</button>
		<button bind:this={YouTube}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				width="100"
				height="100"
				viewBox="0 0 64 64"
				class="hover:scale-125"
			>
				<path
					d="M53.527,17.427C55.714,19.677,56,23.252,56,32s-0.286,12.323-2.473,14.573C51.34,48.822,49.062,49,32,49	s-19.34-0.178-21.527-2.427C8.286,44.323,8,40.748,8,32s0.286-12.323,2.473-14.573S14.938,15,32,15S51.34,15.178,53.527,17.427z M27.95,39.417l12.146-7.038L27.95,25.451V39.417z"
				></path>
			</svg>
		</button>
		<button bind:this={Medium}>
			<svg
				width="100"
				height="100"
				viewBox="0 -55 256 256"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="xMidYMid"
				class="hover:scale-125"
			>
				<g>
					<path
						d="M72.2009141,1.42108547e-14 C112.076502,1.42108547e-14 144.399375,32.5485469 144.399375,72.6964154 C144.399375,112.844284 112.074049,145.390378 72.2009141,145.390378 C32.327779,145.390378 0,112.844284 0,72.6964154 C0,32.5485469 32.325326,1.42108547e-14 72.2009141,1.42108547e-14 Z M187.500628,4.25836743 C207.438422,4.25836743 223.601085,34.8960455 223.601085,72.6964154 L223.603538,72.6964154 C223.603538,110.486973 207.440875,141.134463 187.503081,141.134463 C167.565287,141.134463 151.402624,110.486973 151.402624,72.6964154 C151.402624,34.9058574 167.562834,4.25836743 187.500628,4.25836743 Z M243.303393,11.3867175 C250.314,11.3867175 256,38.835526 256,72.6964154 C256,106.547493 250.316453,134.006113 243.303393,134.006113 C236.290333,134.006113 230.609239,106.554852 230.609239,72.6964154 C230.609239,38.837979 236.292786,11.3867175 243.303393,11.3867175 Z"
						fill="#000000"
					>
					</path>
				</g>
			</svg>
		</button>
	</section>
</article>

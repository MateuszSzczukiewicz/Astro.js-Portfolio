<script>
	import gsap from 'gsap'
	import { onMount } from 'svelte'
	import AboutMe from '@components/AboutMe.svelte'
	import CV from '@components/CV.svelte'

	let tl
	let bg
	let image
	let title
	let subtitle
	let button1
	let button2
	let linkedIn
	let YouTube
	let Facebook
	let X

	const scrollIntoAbout = () => {
		const aboutSection = document.getElementById('about')
		aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}

	const scrollIntoCV = () => {
		const CVSection = document.getElementById('cv')
		CVSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
			tl.fromTo(YouTube, { x: '100%', opacity: 0 }, { x: 0, opacity: '100%', duration: 0.2 })
			tl.fromTo(Facebook, { x: '100%', opacity: 0 }, { x: 0, opacity: '100%', duration: 0.2 })
			tl.fromTo(X, { x: '100%', opacity: 0 }, { x: 0, opacity: '100%', duration: 0.2 })
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
		class="z-10 flex items-center justify-between sm:scale-75 sm:justify-center md:scale-100 xl:mx-auto xl:my-32 xl:flex-col xl:justify-around 2xl:mx-10"
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
		<button bind:this={Facebook}>
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
					d="M40.227,12C51.146,12,52,12.854,52,23.773v16.453C52,51.145,51.146,52,40.227,52h-2.089V37.438h5.134l0.807-5.77h-5.941	c0,0-0.009-3.378,0-4.221c0.017-1.649,1.394-2.483,2.577-2.471c1.183,0.012,3.634,0.004,3.634,0.004v-5.317	c0,0-2.123-0.275-4.349-0.298c-1.871-0.019-3.937,0.487-5.604,2.167c-1.696,1.709-1.963,4.254-1.996,7.364	c-0.009,0.9,0,2.772,0,2.772h-5.024v5.77H32.4V52h-8.626C12.854,52,12,51.145,12,40.227V23.773C12,12.854,12.854,12,23.773,12	H40.227z"
				></path>
			</svg>
		</button>
		<button bind:this={X}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				width="80"
				height="80"
				viewBox="0 0 50 50"
				class="hover:scale-125"
			>
				<path
					d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"
				></path>
			</svg>
		</button>
	</section>
</article>

<script lang="ts">
	import gsap from 'gsap'
	import { onMount } from 'svelte'
	import CoachingSVG from '../components/CoachingSVG.svelte'
	import CoachingImg from '../../public/images/coaching.webp'

	let tl: gsap.core.Timeline
	let bg: GSAPTweenTarget
	let header: GSAPTweenTarget
	let img: GSAPTweenTarget
	let p: GSAPTweenTarget

	onMount(() => {
		const screenWidth = window.innerWidth
		tl = gsap.timeline()

		if (screenWidth >= 640) {
			tl.fromTo(bg, { x: '-100%' }, { x: 0, duration: 0.7 })
			tl.fromTo(header, { x: '20%', opacity: 0 }, { x: 0, opacity: '100%', duration: 0.5 })
			tl.fromTo(img, { x: '20%', opacity: 0 }, { x: 0, opacity: '100%', duration: 0.5 })
			tl.fromTo(p, { x: '20%', opacity: 0 }, { x: 0, opacity: '100%', duration: 0.5 })
		}
	})
</script>

<main class="h-full w-screen xl:h-screen">
	<div bind:this={bg} class="absolute -z-10 h-full w-full"></div>
	<section class="flex flex-col items-center justify-center pt-20">
		<h2 bind:this={header} class="my-10 text-center text-5xl font-semibold">Ucz się ze mną!</h2>
		<CoachingSVG />
		<article class="flex flex-col items-center justify-center pt-5 xl:flex-row xl:gap-14">
			<img
				bind:this={img}
				class="my-10 hidden h-80 w-10/12 rounded-2xl object-cover shadow-2xl md:block xl:h-[30rem]"
				src={CoachingImg.src}
				alt="Korepetycje"
			/>
			<p
				bind:this={p}
				class="m-5 h-fit max-w-prose bg-zinc-200 p-4 text-justify text-lg font-semibold"
			>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis consectetur culpa
				cumque cupiditate dolorum ea fuga fugiat harum iusto magni natus nobis nostrum odit, officia
				porro quam sunt vitae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
				animi architecto consequuntur corporis culpa cupiditate error explicabo in, iusto libero
				magni maiores non numquam officiis quam suscipit tempora tempore voluptas! Lorem ipsum dolor
				sit amet, consectetur adipisicing elit. Consequuntur doloribus eligendi impedit laborum
				nihil porro qui recusandae, sunt tempora veniam veritatis, vero voluptatem? Consectetur
				consequuntur.
			</p>
		</article>
	</section>
</main>

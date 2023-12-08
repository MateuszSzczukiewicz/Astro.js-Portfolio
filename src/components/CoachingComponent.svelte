<script lang="ts">
	import gsap from 'gsap'
	import { onMount } from 'svelte'
	import CoachingSVG from '../components/CoachingSVG.svelte'

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

	const text: string = `Chciałbyś/chciałabyś podszkolić się z zakresu podstaw frontendu? Nie czujesz się najlepiej z takimi technologiami, jak HTML, CSS, JavaScript, bądź React? Jeśli <strong>TAK</strong> to <a class='underline underline-offset-4 font-semibold' href='/contact'>skontaktuj się ze mną</a>! Udzielam korepetycji od poniedziałku od piątku w godzinach popołudniowych, jednak godzinę spotkań ustalimy na pierwszych zapoznawczych zajęciach, które są zupełnie darmowe. Podczas zajęć będziemy korzystać z Visual Studio Code z wtyczką, która pozwala na wspólne pisanie kodu. Zaczniemy tworzyć proste strony, rozwiązywać ciekawe zadania i wspólnie kształtować praktyczne umiejętności w pisaniu eleganckiego kodu. Do nauki potrzebny Ci będzie tylko komputer z dostępem do Internetu i godzina czasu tygodniowo. Podczas zajęć nie zabraknie rozwiązywania ciekawych problemów i tworzenia aplikacji, które będziesz mógł dalej rozwijać samodzielnie, bądź z moją pomocą. Gwarantuję przyjemną atmosferę i pomoc w rozpoczęciu swojej przygody z programowaniem.`
</script>

<main class="h-full w-screen bg-zinc-100 xl:h-screen xl:bg-transparent">
	<div bind:this={bg} class="absolute -z-10 h-full w-screen bg-zinc-100"></div>
	<section class="flex flex-col items-center justify-center pt-20">
		<h2 bind:this={header} class="my-10 text-center text-5xl font-semibold">Ucz się ze mną!</h2>
		<CoachingSVG />
		<article class="flex flex-col items-center justify-center pt-5 xl:flex-row xl:gap-14">
			<img
				bind:this={img}
				class="my-10 hidden h-80 w-10/12 rounded-2xl object-cover shadow-2xl md:block xl:h-[30rem]"
				src="/images/coaching.webp"
				alt="Korepetycje"
				height="750"
				width="1123"
				decoding="async"
			/>
			<p
				bind:this={p}
				class="m-5 h-fit max-w-prose bg-zinc-200 p-4 text-justify text-lg font-semibold"
			>
				{@html text}
			</p>
		</article>
	</section>
</main>

<script lang="ts">
	import { onMount } from 'svelte'
	import gsap from 'gsap'

	export let id: string

	let isOpen: boolean = false
	let tl: gsap.core.Timeline
	let title: GSAPTweenTarget
	let span1: GSAPTweenTarget
	let span2: GSAPTweenTarget
	let span3: GSAPTweenTarget
	let img: GSAPTweenTarget
	let isVisible: boolean

	const screenWidth: number = window.innerWidth
	const screenHeight: number = window.innerHeight
	isVisible = screenHeight >= 820 && screenWidth >= 1180

	const handleClick = () => {
		tl?.[isOpen ? 'reverse' : 'play']()
		isOpen = !isOpen
	}

	onMount(() => {
		tl = gsap.timeline({ paused: true })
		tl.addLabel('start').to(
			[img, title, span1, span2, span3],
			{
				x: '-50vw',
				duration: 0.5,
				easing: 'cubic-bezier(.47,.93,0,1.02)',
				stagger: 0.03
			},
			'start'
		)
	})

	const text: string = `Nazywam się <strong>Mateusz Szczukiewicz</strong> i jestem aspirującym <strong>Frontend Developerem</strong>. Swoje pierwsze kroki w programowaniu postawiłem już w czasach szkolnych, kodując proste programy w języku C++. Swoją przyszłość wiążę jednak z Web Developmentem, którym zafascynowałem się, tworząc małe i nieskomplikowane aplikacje wykorzystujące HTML, CSS oraz JavaScript. Dziś jednak realizuję się w projektach wykorzystujących bibliotekę React oraz bazujące na niej frameworki, takie jak Gatsby.js, w którym wykonałem swój pierwszy komercyjny projekt dla <strong><a href='https://la-yachting.com' target='_blank'>L.A. Yachting</a></strong>, oraz Next.js, którego dogłębne zrozumienie i umiejętne zastosowanie są w tej chwili dla mnie ekscytującym wyzwaniem. <br> Jestem osobą ambitną i pracowitą, czego dowodzi mój upór w dogłębnym poznawaniu świata webdevu, którego inspiracją są dla mnie takie postaci, jak: Theo Browne, Josh W. Comeau, czy Kent C. Dodds. Nie zamykam się także na technologie backendowe, takie jak Express, czy NestJS, które wykorzystuję do tworzenia API dla swoich reactowych projektów. Problemów nie sprawia mi także nauka i wykorzystywanie baz danych, między innymi MongoDB oraz MySQL. W programowaniu lubię też wychodzić poza strefę komfortu, wykorzystując wcześniej nieznane mi technologie, o czym świadczy projekt mojej strony, który to wykonałem używając Astro, TailwindCSS oraz Svelte. <br>Swoją działalność programistyczną aktywnie rozszerzam także na sektor edukacyjny. Prowadzę bloga, gdzie w prosty i przyjazny sposób przedstawiam tematykę reactowych Hooków i nie tylko, a także kanał na YouTube <strong><a href='https://www.youtube.com/channel/UCCmh8U7vxeyG1VY485_j4Vw' target='_blank'>Code must be Elegant</a></strong>, na którym przedstawiam mniej lub bardziej popularne technologie ze świata web developmentu.`
</script>

{#if isVisible}
	<article
		{id}
		class="flex h-screen w-screen items-center justify-start overflow-hidden bg-zinc-100"
	>
		<div bind:this={title} class="flex h-full w-[50vw] items-center justify-center">
			<span class="p-10 text-center text-[105px] font-bold"
				>Dowiedz się więcej o mnie <br />
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="ml-auto mr-36 h-36 w-36"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
					/>
				</svg>
			</span>
		</div>
		<button
			on:click={handleClick}
			class="absolute right-0 flex h-full w-[50vw] items-center justify-center"
		>
			<img
				bind:this={img}
				src="/images/MyImage2.webp"
				class="absolute h-screen w-[50vw] object-cover"
				alt="Moje zdjęcie 2"
				height="2996"
				width="2428"
				loading="lazy"
				decoding="async"
			/>
		</button>
		<button
			on:click={handleClick}
			class="absolute -right-1/2 flex h-full w-[50vw] flex-col items-center justify-center text-center"
		>
			<span bind:this={span2} class="max-w-prose text-xl">{@html text}</span>
			<span bind:this={span3} class="mt-4 text-xl">[kliknij, by zamknąć]</span>
		</button>
	</article>
{:else}
	<article {id} class="flex h-full w-screen items-center justify-start overflow-hidden bg-zinc-100">
		<p class="m-5 max-w-prose bg-zinc-200 p-4 text-lg font-semibold">{@html text}</p>
	</article>
{/if}

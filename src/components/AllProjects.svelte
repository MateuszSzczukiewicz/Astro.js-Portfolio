<script lang="ts">
	import FirstProjectSVG from '../components/FirstProjectSVG.svelte'
	import SecondProject from '../components/SecondProjectSVG.svelte'
	import gsap from 'gsap'
	import { onMount } from 'svelte'

	let tl: gsap.core.Timeline
	let bg: GSAPTweenTarget
	let header: GSAPTweenTarget
	let image: GSAPTweenTarget
	let p: GSAPTweenTarget

	onMount(() => {
		const screenWidth = window.innerWidth
		tl = gsap.timeline()

		if (screenWidth >= 640) {
			tl.fromTo(bg, { x: '-100%' }, { x: 0, duration: 0.7 })
			tl.fromTo(header, { x: '-20%', opacity: 0 }, { x: 0, opacity: '100%', duration: 0.5 })
			tl.fromTo(image, { x: '-20%', opacity: 0 }, { x: 0, opacity: '100%', duration: 0.5 })
			tl.fromTo(p, { x: '-20%', opacity: 0 }, { x: 0, opacity: '100%', duration: 0.5 })
		}
	})

	const text1 = `Mój pierwszy komercyjny projekt to strona dla firmy <a href='https://la-yachting.com'><strong>L.A. Yachting</strong></a>. Wykorzystałem TypeScript oraz framework Gatsby.js oparty na bibliotece React. Do obsługi stylów CSS użyłem Styled Components. Aplikacja zawiera system zarządzania treścią oparty na DatoCMS, zaimplementowany w celu usprawnienia codziennych operacji firmy. Do komunikacji z serwerem wykorzystałem GraphQL, który efektywnie pobiera informacje o rejsach i przekazuje je na stronę. Animacje zostały stworzone przy użyciu biblioteki GSAP. Formularze na stronie obsługiwane są przez Formspree, a ich funkcjonalność przetestowałem przy użyciu Jest z React Testing Library. Projekt został wdrożony na serwerze OVH, zapewniając stabilność i wydajność.`
	const text2 = `Mój drugi projekt to <strong>fullstackowa aplikacja</strong>, pełniąca funkcję wirtualnej biblioteki dla książek. Do stworzenia warstwy widoku użyłem TypeScript i Reacta. Wybrałem środowisko uruchomieniowe Vite z kompilatorem SWC oraz skorzystałem z frameworka TailwindCSS do obsługi arkuszy CSS. Formularze zostały obsłużone za pomocą React Hook Form, przy walidacji ze strony Zod. Stan globalny utworzyłem korzystając z Redux Toolkit, a do tworzenia komponentów użyłem Storybook.
W przypadku backendu skorzystałem z Node.js i Frameworka Express, a baza danych została stworzona przy użyciu MongoDB i Mongoose. Do obsługi logowania użyłem Json Web Token. Aplikację przetestowałem przy użyciu Jest z React Testing Library oraz narzędzia Cypress, co przyczyniło się do poprawy stabilności i wykrywania potencjalnych problemów.`
</script>

<section class="h-full w-screen bg-zinc-200">
	<article class="mx-auto flex h-full w-10/12 flex-col py-20">
		<h1
			bind:this={header}
			class="mb-10 text-center text-5xl xl:mb-0 xl:mr-20 xl:self-end xl:text-[100px]"
		>
			L.A. Yachting
		</h1>
		<div class="items-center justify-center xl:flex xl:flex-row">
			<a
				bind:this={image}
				class="mx-auto my-10 mb-10 mr-auto w-[50rem]"
				href="https://la-yachting.com"
			>
				<img
					class="mb-10 rounded-2xl object-cover transition hover:scale-105 xl:mb-0"
					src="/images/yachting.webp"
					alt="Screenshot L.A. Yachting"
					height="927"
					width="1899"
					decoding="async"
				/>
			</a>
			<FirstProjectSVG />
		</div>
		<p bind:this={p} class="mx-auto max-w-prose bg-zinc-300 p-6 text-2xl">{@html text1}</p>
	</article>
</section>
<section class="h-full bg-zinc-100 xl:w-screen">
	<div class="absolute -z-10 hidden h-full w-full bg-zinc-100 xl:block"></div>
	<article class="mx-auto flex h-full w-10/12 flex-col py-20">
		<h1 class="mb-10 text-center text-5xl xl:mb-0 xl:mr-40 xl:self-end xl:text-[100px]">
			BookFreak
		</h1>
		<div class="items-center justify-center xl:flex xl:flex-row">
			<a class="mx-auto my-10 mr-auto w-[50rem] xl:mx-0" href="https://bookfreak.vercel.app">
				<img
					class="mb-10 rounded-2xl object-cover transition hover:scale-105 xl:mb-0"
					src="/images/BookFreak.webp"
					alt="Screenshot BookFreak"
					height="927"
					width="1915"
					loading="lazy"
					decoding="async"
				/>
			</a>
			<SecondProject />
		</div>
		<p class="mx-auto max-w-prose bg-zinc-200 p-6 text-2xl">{@html text2}</p>
	</article>
</section>

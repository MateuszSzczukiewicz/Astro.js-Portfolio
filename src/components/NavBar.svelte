<script lang="ts">
	import NavItem from '../components/NavItem.svelte'
	import gsap from 'gsap'
	import { onMount } from 'svelte'
	import { Hamburger } from 'svelte-hamburgers'

	let open: any
	let isVisible: boolean

	const screenWidth: number = window.innerWidth
	isVisible = screenWidth < 1280

	let tl: gsap.core.Timeline
	let list: GSAPTweenTarget

	onMount(() => {
		tl = gsap.timeline()
		tl.fromTo(list, { x: '-100%', opacity: 0 }, { x: 0, opacity: 1, duration: 1 })
	})

	const navItems = [
		{ url: '/', text: 'O mnie' },
		{ url: '/projects', text: 'Projekty' },
		{ url: '/coaching', text: 'Korepetycje' },
		{ url: '/blog', text: 'Blog' },
		{ url: '/contact', text: 'Kontakt' }
	]
</script>

{#if isVisible}
	<div class="absolute right-2 top-2 z-30">
		<Hamburger bind:open />
	</div>
{/if}

{#if open}
	<nav bind:this={open}>
		<ul bind:this={list} class="mt-8 flex flex-col items-center">
			{#each navItems as { url, text }}
				<NavItem {url} {text} />
			{/each}
		</ul>
	</nav>
{/if}

<nav class="fixed z-50 hidden h-20 w-full items-center bg-opacity-20 backdrop-blur-lg xl:flex">
	<ul class="ml-20 mt-12 flex gap-10">
		{#each navItems as { url, text }}
			<NavItem {url} {text} />
		{/each}
	</ul>
</nav>

<script>
	import NavItem from '@components/NavItem.svelte'
	import gsap from 'gsap'
	import { onMount } from 'svelte'
	import { Hamburger } from 'svelte-hamburgers'

	let open = false
	let isVisible

	const toggleNavigation = () => {
		open = !open
		if (open) {
			document.body.classList.add('noScroll')
		} else {
			document.body.classList.remove('noScroll')
		}
	}

	const screenWidth = window.innerWidth
	isVisible = screenWidth < 1280

	let tl
	let list

	onMount(() => {
		tl = gsap.timeline()
		tl.fromTo(list, { x: '-100%', opacity: 0 }, { x: 0, opacity: '100%', duration: 1 })
	})
</script>

{#if isVisible}
	<div class="absolute right-2 top-2 z-30">
		<Hamburger bind:open onClick={toggleNavigation} />
	</div>
{/if}

{#if open}
	<nav bind:this={open} class="h-screen w-screen">
		<ul bind:this={list} class="flex h-screen flex-col items-center justify-center gap-10">
			<NavItem url="/" text="O mnie" />
			<NavItem url="/projects" text="Projekty" />
			<NavItem url="/contact" text="Kontakt" />
		</ul>
	</nav>
{/if}

<nav class="fixed z-50 hidden h-20 w-full items-center bg-opacity-20 backdrop-blur-lg xl:flex">
	<ul class="ml-32 mt-12 flex gap-10">
		<NavItem url="/" text="O mnie" />
		<NavItem url="/projects" text="Projekty" />
		<NavItem url="/contact" text="Kontakt" />
	</ul>
</nav>

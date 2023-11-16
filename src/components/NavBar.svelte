<script>
	import NavItem from '@components/NavItem.svelte'
	import gsap from 'gsap'
	import { onMount } from 'svelte'

	let tl
	let list

	onMount(() => {
		tl = gsap.timeline()
		tl.fromTo(list, { x: '-100%', opacity: 0 }, { x: 0, opacity: '100%', duration: 1 })
	})
</script>

<nav class="fixed z-50 hidden h-20 w-full items-center justify-start sm:flex">
	<ul bind:this={list} class="ml-32 mt-12 flex gap-10">
		<NavItem url="/" text="O mnie" />
		<NavItem url="/projects" text="Projekty" />
		<NavItem url="/contact" text="Kontakt" />
	</ul>
</nav>

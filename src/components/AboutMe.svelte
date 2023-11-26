<script>
	export let id

	import gsap from 'gsap'
	import { onMount } from 'svelte'
	let isOpen = false
	let tl
	let curtain
	let title
	let content
	let isVisible

	const screenWidth = window.innerWidth
	const screenHeight = window.innerHeight
	isVisible = screenHeight >= 820 && screenWidth >= 1180

	const handleClick = () => {
		tl[isOpen ? 'reverse' : 'play']()
		isOpen = !isOpen
	}

	onMount(() => {
		tl = gsap.timeline({ paused: true })
		tl.addLabel('start').to(
			[curtain.children, title, content.children],
			{
				x: '-50vw',
				duration: 0.5,
				easing: 'cubic-bezier(.47,.93,0,1.02)',
				stagger: 0.03
			},
			'start'
		)
	})
</script>

{#if isVisible}
	<article
		{id}
		class="flex h-screen w-screen items-center justify-start overflow-hidden bg-zinc-100"
	>
		<div bind:this={title} class="flex h-full w-[50vw] items-center justify-center">
			<span class="p-10 text-center text-[105px] font-bold">Dowiedz się więcej</span>
		</div>
		<button
			bind:this={curtain}
			on:click={handleClick}
			class="absolute right-0 flex h-full w-[50vw] items-center justify-center"
		>
			<img
				src="https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340"
				class="absolute h-screen w-[50vw] object-cover"
				alt="Moje zdjęcie"
			/>
			<span class="z-10 text-[105px] font-bold text-white">O mnie</span>
		</button>
		<button
			bind:this={content}
			on:click={handleClick}
			class="absolute -right-1/2 flex h-full w-[50vw] flex-col items-center justify-center text-center"
		>
			<span class="max-w-prose text-xl">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis consectetur culpa
				cumque cupiditate dolorum ea fuga fugiat harum iusto magni natus nobis nostrum odit, officia
				porro quam sunt vitae?
			</span>
			<span class="mt-4 text-xl">[kliknij, by zamknąć]</span>
		</button>
	</article>
{:else}
	<article {id} class="flex h-full w-screen items-center justify-start overflow-hidden bg-zinc-100">
		<p class="m-10 max-w-prose bg-zinc-200 p-4 text-justify text-lg font-semibold">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis consectetur culpa
			cumque cupiditate dolorum ea fuga fugiat harum iusto magni natus nobis nostrum odit, officia
			porro quam sunt vitae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi
			architecto consequuntur corporis culpa cupiditate error explicabo in, iusto libero magni
			maiores non numquam officiis quam suscipit tempora tempore voluptas! Lorem ipsum dolor sit
			amet, consectetur adipisicing elit. Consequuntur doloribus eligendi impedit laborum nihil
			porro qui recusandae, sunt tempora veniam veritatis, vero voluptatem? Consectetur
			consequuntur.
		</p>
	</article>
{/if}

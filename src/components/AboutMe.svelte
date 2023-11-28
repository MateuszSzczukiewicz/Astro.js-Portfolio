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
			on:click={handleClick}
			class="absolute right-0 flex h-full w-[50vw] items-center justify-center"
		>
			<img
				bind:this={img}
				src="https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340"
				class="absolute h-screen w-[50vw] object-cover"
				alt="Moje zdjęcie"
			/>
			<span bind:this={span1} class="z-10 text-[105px] font-bold text-white">O mnie</span>
		</button>
		<button
			on:click={handleClick}
			class="absolute -right-1/2 flex h-full w-[50vw] flex-col items-center justify-center text-center"
		>
			<span bind:this={span2} class="max-w-prose text-xl">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis consectetur culpa
				cumque cupiditate dolorum ea fuga fugiat harum iusto magni natus nobis nostrum odit, officia
				porro quam sunt vitae?
			</span>
			<span bind:this={span3} class="mt-4 text-xl">[kliknij, by zamknąć]</span>
		</button>
	</article>
{:else}
	<article {id} class="flex h-full w-screen items-center justify-start overflow-hidden bg-zinc-100">
		<p class="m-5 max-w-prose bg-zinc-200 p-4 text-justify text-lg font-semibold">
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

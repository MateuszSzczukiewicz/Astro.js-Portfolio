/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module '*.svelte' {
	import { SvelteComponent } from 'svelte'
	const component: SvelteComponent
	export default component
}

declare module 'astro/client' {
	interface ComponentConstructorOptions<P = Record<string, any>> {
		target: Element
		anchor?: Element | null
		props?: P
		hydrate?: boolean
		intro?: boolean
	}

	type ClientAttributes = { [key: string]: any }

	interface SvelteComponentCustomProps {
		client?: ClientAttributes
	}
}

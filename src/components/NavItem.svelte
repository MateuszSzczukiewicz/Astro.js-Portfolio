<script lang="ts">
	export let url: string, text: string
</script>

<li class="my-4 justify-center bg-transparent text-3xl">
	<a
		href={url}
		class="cursor-pointer font-semibold transition after:mt-1 after:block after:h-1 after:w-0 after:bg-zinc-800 hover:after:w-full xl:text-2xl"
		>{text}</a
	>
</li>

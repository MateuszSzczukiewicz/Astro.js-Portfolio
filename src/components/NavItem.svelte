<script>
	export let url, text
</script>

<li
	class="mb-8 justify-center transition after:mt-1 after:block after:h-1 after:w-0 after:bg-zinc-800 after:content-[''] hover:after:w-full"
>
	<a href={url} class="cursor-pointer text-2xl font-semibold">{text}</a>
</li>

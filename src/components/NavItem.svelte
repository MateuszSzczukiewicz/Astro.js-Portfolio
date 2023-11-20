<script>
	export let url, text
</script>

<li
	class="my-4 justify-center bg-transparent text-3xl transition after:mt-1 after:block after:h-1 after:w-0 after:bg-zinc-800 after:content-[''] hover:after:w-full active:after:w-full xl:mb-8"
>
	<a href={url} class="cursor-pointer font-semibold xl:text-2xl">{text}</a>
</li>

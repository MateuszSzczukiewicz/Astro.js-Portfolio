<script>
	import NavItem from '@components/NavItem.svelte'
</script>

<nav class="fixed z-50 hidden h-20 w-full items-center justify-start sm:flex">
	<ul class="ml-32 mt-12 flex gap-10">
		<NavItem url="/" text="O mnie" />
		<NavItem url="/projects" text="Projekty" />
		<NavItem url="/contact" text="Kontakt" />
	</ul>
</nav>

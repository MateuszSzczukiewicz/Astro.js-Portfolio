<script>
	import NavItem from '@components/NavItem.svelte'
</script>

<nav class="fixed flex h-20 w-full items-center justify-end">
	<ul class="mr-32 flex gap-10">
		<NavItem url="/" text="O mnie" />
		<NavItem url="/projects" text="Projekty" />
		<NavItem url="/contact" text="Kontakt" />
	</ul>
</nav>

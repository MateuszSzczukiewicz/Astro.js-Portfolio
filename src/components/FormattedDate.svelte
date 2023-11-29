<script lang="ts">
	export let date: Date
</script>

<time datetime={date.toISOString()}>
	{date.toLocaleDateString('pl-PL', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	})}
</time>

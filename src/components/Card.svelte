<script>
	export let href, title, body;
</script>

<li>
	<a href={href}>
		<h2>
			{title}
			<span>&rarr;</span>
		</h2>
		<p>{body}</p>
	</a>
</li>


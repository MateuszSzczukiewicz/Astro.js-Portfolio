<script>
	import { getCollection } from 'astro:content'
	import { onMount } from 'svelte'
	import FormattedDate from '@components/FormattedDate.svelte'

	let posts = []

	onMount(async () => {
		posts = (await getCollection('blog')).sort(
			(a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
		)
	})
</script>

<main>
	<section class="h-screen min-h-screen w-screen py-20 lg:pt-40">
		<ul class="mx-auto grid w-80 grid-cols-1 gap-16 lg:w-[50rem] lg:grid-cols-2 xl:w-[70rem]">
			{#each posts as post}
				<li class="flex flex-col transition hover:scale-110">
					<a href={`/blog/${post.slug}/`}>
						<img
							src={post.data.heroImage}
							class="h-56 w-full rounded-2xl object-cover shadow-2xl hover:shadow-zinc-400 xl:h-72"
							alt="Miniaturka artykułu"
						/>
						<h4 class="mt-4 text-2xl font-semibold xl:text-4xl">{post.data.title}</h4>
						<p class="mt-2 text-lg font-semibold text-zinc-500">
							<FormattedDate date={post.data.pubDate} />
						</p>
					</a>
				</li>
			{/each}
		</ul>
	</section>
</main>

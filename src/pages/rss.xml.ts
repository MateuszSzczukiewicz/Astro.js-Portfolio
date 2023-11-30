import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context: any) {
	const posts = await getCollection('blog')
	return rss({
		title: 'Blog',
		description: 'Witajcie na moim blogu!',
		site: context.site,
		items: posts.map((post: { data: any; slug: any }) => ({
			...post.data,
			link: `/blog/${post.slug}/`
		}))
	})
}

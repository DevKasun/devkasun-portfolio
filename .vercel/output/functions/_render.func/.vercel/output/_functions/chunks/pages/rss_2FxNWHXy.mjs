import rss from '@astrojs/rss';
import { e as getCollection } from './__CtTu9Gjo.mjs';
import { S as SITE_TITLE, d as SITE_DESCRIPTION } from './about_9XEPuQM1.mjs';

async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}

export { GET };

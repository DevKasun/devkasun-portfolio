import rss from '@astrojs/rss';
import { e as getCollection } from './__HAoWvnFE.mjs';
import { S as SITE_TITLE, d as SITE_DESCRIPTION } from './about_XITmraLt.mjs';

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
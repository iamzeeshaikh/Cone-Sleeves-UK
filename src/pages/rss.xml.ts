import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { POSTS, postPath } from '~/data/blog';
import { SITE } from '~/config/site';

/** Feed of the buying guides. Product and location pages are not syndicated. */
export function GET(context: APIContext) {
  return rss({
    title: `${SITE.name} — packaging guides`,
    description:
      'Guides on sizing, board, printing, artwork and ordering custom food packaging in the UK.',
    site: context.site ?? SITE.origin,
    trailingSlash: true,
    items: POSTS.map((post) => ({
      title: post.title,
      description: post.standfirst,
      link: postPath(post.slug),
      pubDate: new Date(post.published),
      categories: [post.topic],
      author: post.author,
    })),
    customData: `<language>en-gb</language><copyright>© 2026 ${SITE.name}</copyright>`,
  });
}

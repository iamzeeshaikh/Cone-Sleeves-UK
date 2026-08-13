import type { BlogPost, Section } from './types';
import { FUNDAMENTALS } from './posts/fundamentals';
import { PRACTICE } from './posts/practice';
import { BUSINESS } from './posts/business';

export const POSTS: BlogPost[] = [...FUNDAMENTALS, ...PRACTICE, ...BUSINESS]
  // Newest first on the index.
  .sort((a, b) => (a.published < b.published ? 1 : -1));

const bySlug = new Map(POSTS.map((p) => [p.slug, p]));

export function postBySlug(slug: string): BlogPost | undefined {
  return bySlug.get(slug);
}

export function postPath(slug: string): string {
  return `/blog/${slug}/`;
}

export function relatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  return post.related
    .filter((s) => s !== post.slug)
    .map((s) => bySlug.get(s))
    .filter((p): p is BlogPost => Boolean(p))
    .slice(0, limit);
}

/** Words in a post's body, used for the reading estimate and the QA report. */
export function wordCount(post: BlogPost): number {
  const parts: string[] = [post.standfirst];
  const push = (s: unknown) => {
    if (typeof s === 'string') parts.push(s);
  };
  for (const s of post.sections as Section[]) {
    push((s as { heading?: string }).heading);
    const any = s as Record<string, unknown>;
    push(any.intro);
    push(any.outro);
    push(any.note);
    // `body` is a string on callout sections and an array of paragraphs elsewhere.
    if (Array.isArray(any.body)) any.body.forEach(push);
    else push(any.body);
    (any.items as unknown[] | undefined)?.forEach((i) => {
      if (typeof i === 'string') push(i);
      else {
        push((i as { title?: string }).title);
        push((i as { body?: string }).body);
      }
    });
    (any.steps as { title: string; body: string }[] | undefined)?.forEach((i) => {
      push(i.title);
      push(i.body);
    });
    (any.rows as string[][] | undefined)?.forEach((r) => r.forEach(push));
    const link = any.link as { sentence?: string } | undefined;
    if (link?.sentence) push(link.sentence);
  }
  for (const f of post.faqs ?? []) {
    push(f.q);
    push(f.a);
  }
  return parts.join(' ').trim().split(/\s+/).length;
}

/** Reading time at a conservative 200 words per minute, minimum one minute. */
export function readingTime(post: BlogPost): number {
  return Math.max(1, Math.round(wordCount(post) / 200));
}

export const TOPICS = [...new Set(POSTS.map((p) => p.topic))].sort();

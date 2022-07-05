import fs from 'fs';
import { join } from 'path';

import matter from 'gray-matter';

import { translateEmojis } from './TagEmojis';

const postsDirectory = join(process.cwd(), '_posts');

export type PostItems = {
  [key: string]: string;
};

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const items: PostItems = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (field === 'tags') {
      // NEXT
      if (Array.isArray(data.tags)) {
        items.emojis = translateEmojis(data.tags);
      }
    }

    // console.log(field, data.tags, Array.isArray(data.tags));

    if (data[field]) {
      items[field] = data[field];
    }
  });
  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

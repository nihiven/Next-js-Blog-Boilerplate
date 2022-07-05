import React from 'react';

import { format } from 'date-fns';
import Link from 'next/link';

import { Pagination, IPaginationProps } from '../pagination/Pagination';
import { PostItems } from '../utils/Content';

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
};

const BlogGallery = (props: IBlogGalleryProps) => (
  <>
    <ul>
      {
        // NEW: add cool emojis based on tag values
        props.posts.map((post) => (
          <li key={post.slug} className="mb-3 flex justify-between">
            <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
              <a>
                <h2>{post.title}</h2>
              </a>
            </Link>
            {
              // NEXT: what do we do about linking the emojis?
              post.emojis ? post.emojis : ''
            }
            <div className="text-right">
              {
                // skip new Date() if there isn't anything in date
                post.date ? format(new Date(post.date), 'LLL d, yyyy') : ''
              }
            </div>
          </li>
        ))
      }
    </ul>

    <Pagination
      previous={props.pagination.previous}
      next={props.pagination.next}
    />
  </>
);

export { BlogGallery };

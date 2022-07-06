import React from 'react';

import { format } from 'date-fns';
import Link from 'next/link';

export type IBlogGalleryListItem = {
  emojis: string;
  slug: string;
  title: string;
  date: string;
};

const BloglistItem = (props: IBlogGalleryListItem) => (
  <li
    key={encodeURIComponent(props.slug)}
    className="mb-3 flex justify-between"
  >
    <div>
      <Link
        href="/posts/[slug]"
        as={`/posts/${encodeURIComponent(props.slug)}`}
      >
        <a>
          <h2>{props.title}</h2>
        </a>
      </Link>
      {props.emojis ? props.emojis : ''}
    </div>
    <div className="text-right">
      {
        // skip new Date() if there isn't anything in .date
        props.date ? format(new Date(props.date), 'LLL d, yyyy') : ''
      }
    </div>
  </li>
);

export { BloglistItem };

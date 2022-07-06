import React from 'react';

import { Pagination, IPaginationProps } from '../pagination/Pagination';
import { PostItems } from '../utils/Content';
import { BloglistItem } from './BlogListItem';

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
};

const BlogGallery = (props: IBlogGalleryProps) => (
  <>
    <ul>
      {props.posts.map((post) => (
        <BloglistItem
          key={post.slug}
          emojis={post.emojis}
          slug={post.slug}
          title={post.title}
          date={post.date}
        />
      ))}
    </ul>

    <Pagination
      previous={props.pagination.previous}
      next={props.pagination.next}
    />
  </>
);

export { BlogGallery };

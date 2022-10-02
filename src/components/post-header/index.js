import { Link } from 'gatsby';
import React from 'react';
import './style.scss';
import ImgEmoji from '../img-emoji';

function PostHeader({ post, viewCount }) {
  return (
    <header className="post-header">
      {post.emoji && <div className="emoji">{post.emoji}</div>}
      {post.imageEmoji && <ImgEmoji src={post.imageEmoji} />}
      <div className="info">
        <div className="categories">
          {post.categories
            // .filter((category, i) => i < post.categories.length-1)
            .map((category, i) => {
              if (i !== post.categories.length - 1)
                return <Link className="category" key={category} to={`/posts/${category}`}>
                        { category },
                </Link>
              else
                return <Link className="category" key={category} to={`/posts/${category}`}>
                        { category }
                </Link>
            })}
        </div>
      </div>

      <h1 className="title">{post.title}</h1>
      <div className="info">
        <div className="author">
          posted by <strong>{post.author}</strong>,
        </div>{' '}
        {post.date}
        {viewCount && ` · 👀 ${viewCount} views`}
      </div>
    </header >
  );
}
export default PostHeader;

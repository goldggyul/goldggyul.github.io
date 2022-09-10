import { Link } from 'gatsby';
import React from 'react';
import './style.scss';

function PostCard({ post }) {
  const { id, slug, title, excerpt, date, categories } = post;
  return (
    <div className="post-card-wrapper">
      <Link className="post-card" key={id} to={slug}>
        <div className="title">{title}</div>
        <p className="description" dangerouslySetInnerHTML={{ __html: excerpt }} />
        <div className="info">
          <div className="date">{date}</div>
          <div className="categories">
            {categories
              // .filter((category, i) => i < post.categories.length-1)
              .map((category, i) => {
                if (i !== post.categories.length - 1)
                  return <div className="category" key={category}>
                    {category},
                  </div>
                else
                  return <div className="category" key={category}>
                    {category}
                  </div>
              })}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PostCard;

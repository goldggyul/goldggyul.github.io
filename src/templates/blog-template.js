import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import Seo from '../components/seo';
import PostHeader from '../components/post-header';
import PostNavigator from '../components/post-navigator';
import Post from '../models/post';
import PostContent from '../components/post-content';
import Utterances from '../components/utterances';

function BlogTemplate({ data }) {
  const [viewCount, setViewCount] = useState(null);

  const curPost = new Post(data.cur);
  const prevPost = data.prev && new Post(data.prev);
  const nextPost = data.next && new Post(data.next);
  const { siteUrl, comments } = data.site?.siteMetadata;
  const utterancesRepo = comments?.utterances?.repo;

  const tocHandler = () => { 
    const toc = document.getElementsByClassName("table-of-contents")
    if (!toc || toc.length < 0 || !toc[0] || !toc[0].style || toc[0].offsetWidth === 0) {
      return;
    }

    const anchor_holder = document.getElementsByClassName("anchor before");
    if (!anchor_holder || anchor_holder.length <= 0) {
      return;
    }

    const anchor_holder_arr = Array.from(anchor_holder);

    // code 포함된 제목은 toc에 링크 #code-classlanguage-text code 붙여서 생성한다.
    // 자동적으로 만들어지는 링크가 위 규칙을 따라야 하기 때문
    for (let a of anchor_holder_arr) {
      var link = a.getAttribute("href");
      var encoded_link = link.replace(/(code-classlanguage-text)(.*?)(code)/g, "$2");
      const code_toc = document.querySelector(".table-of-contents a[href='" + encoded_link + "']");
      code_toc && code_toc.setAttribute('href', link);
    }
  };

  useEffect(() => {
    if (!siteUrl) return;
    const namespace = siteUrl.replace(/(^\w+:|^)\/\//, '');
    const key = curPost.slug.replace(/\//g, '');

    tocHandler();

    fetch(
      `https://api.countapi.xyz/${
        process.env.NODE_ENV === 'development' ? 'get' : 'hit'
      }/${namespace}/${key}`,
    ).then(async (result) => {
      const data = await result.json();
      setViewCount(data.value);
    });
  }, [siteUrl, curPost.slug]);

  return (
    <Layout>
      <Seo title={curPost?.title} description={curPost?.excerpt} />
      <PostHeader post={curPost} viewCount={viewCount} />
      <PostContent html={curPost.html} />
      <PostNavigator prevPost={prevPost} nextPost={nextPost} />
      {utterancesRepo && <Utterances repo={utterancesRepo} path={curPost.slug} />}
    </Layout>
  );
}

export default BlogTemplate;

export const pageQuery = graphql`
  query($slug: String, $nextSlug: String, $prevSlug: String) {
    cur: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt(pruneLength: 500, truncate: true)
      tableOfContents
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        categories
        author
        emoji
      }
      fields {
        slug
      }
    }

    next: markdownRemark(fields: { slug: { eq: $nextSlug } }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        categories
        author
        emoji
      }
      fields {
        slug
      }
    }

    prev: markdownRemark(fields: { slug: { eq: $prevSlug } }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        categories
        author
        emoji
      }
      fields {
        slug
      }
    }

    site {
      siteMetadata {
        siteUrl
        comments {
          utterances {
            repo
          }
        }
      }
    }
  }
`;

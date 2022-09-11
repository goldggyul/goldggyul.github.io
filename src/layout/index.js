import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PageHeader from '../components/page-header';
import PageFooter from '../components/page-footer';
import ThemeSwitch from '../components/theme-switch';
import './style.scss';

const Layout = ({ children, showHitCounter=false }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          siteUrl
          author {
            name
            social {
              github
              email
            }
          }
        }
      }
    }
  `);
  const { title, siteUrl, author } = data.site.siteMetadata;

  const scrollHandler = () => {
    console.log('hiiiiiiiiiiiii')
    const toc = document.getElementsByClassName("table-of-contents")
    if (!toc || toc.length < 0 || !toc[0] || !toc[0].style || toc[0].offsetWidth === 0) {
      return;
    }

    const anchor_holder = document.getElementsByClassName("anchor before")
    if (!anchor_holder || anchor_holder.length <= 0) {
      return;
    }
    let selected_anchor = null
    const anchor_holder_arr = Array.from(anchor_holder)
    for (let a of anchor_holder_arr) {
      if (a.getBoundingClientRect().top > -30) {
        selected_anchor = a.getAttribute("href")
        break
      }
    }
    if (!selected_anchor) {
      selected_anchor = anchor_holder_arr[anchor_holder_arr.length - 1].getAttribute("href")
    }
    document.querySelectorAll(".table-of-contents a.selected").forEach(a => {
      a.classList.remove("selected");
    })
    if (selected_anchor) {
      const toc_selected = document.querySelector(".table-of-contents a[href='" + selected_anchor + "']");
      toc_selected && toc_selected.classList.add("selected");
    }
  };

  useEffect(() => { 
    window.addEventListener("scroll", scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler);
  });

  return (
    <div className="page-wrapper">
      <PageHeader siteTitle={title || `Title`} />
      <main className="page-content">{children}</main>
      <PageFooter showHitCounter={showHitCounter}
        author={author.name || `Author`}
        siteUrl={siteUrl}
        social={ author.social}
      />
      <ThemeSwitch />
    </div>
  );
};

export default Layout;

import React from 'react';
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

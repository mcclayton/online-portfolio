import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { PARTY_HORSE_HTML_COMMENT } from '../constants';

import '../assets/scss/main.scss'

const Layout = ({ children, location }) => {

  let content;

  if (location && location.pathname === '/') {
    content = (
      <div>
        {children}
      </div>
    )
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>
          {children}
        </div>
      </div>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'party_horse', content: PARTY_HORSE_HTML_COMMENT },
              { name: 'description', content: `Michael Clayton's Online Portfolio` },
              { name: 'keywords', content: 'portfolio, michael, clayton, michael c. clayton, software engineer' },
            ]}
          >
            <html lang="en">
              {PARTY_HORSE_HTML_COMMENT}
            </html>
          </Helmet>
          {content}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

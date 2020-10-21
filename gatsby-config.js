module.exports = {
  siteMetadata: {
    title: 'Michael C. Clayton',
    description: 'michaelcclayton.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: '/',
        icon: 'src/images/code-portrait.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}

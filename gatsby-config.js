var pt = require('./src/data/siteMetadata.pt');
var fr = require('./src/data/siteMetadata.fr');
var en = require('./src/data/siteMetadata.en');
var resume = require('./src/data/resume');

module.exports = {
  siteMetadata: {
    siteUrl: 'https://angeloocana.com',
    pt,
    en,
    fr,
    resume
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-image',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-61019439-1',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Ângelo Ocanã Software Development and Training',
        short_name: 'Ângelo Ocanã',
        icons: [
          {
            src: '/logo.svg',
            sizes: 'any',
            type: 'image/svg+xml',
          },
        ],
        start_url: '/',
        background_color: 'white',
        theme_color: 'white',
        display: 'minimal-ui',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-preact',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sitemap'
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        postPage: 'src/templates/blog-post.js',
        langKeyForNull: 'any',
        langKeyDefault: 'en'
      }
    },
    {
      resolve: 'gatsby-plugin-i18n-tags',
      options: { // Default options
        tagPage: 'src/templates/tag-page.js',
        tagsUrl: '/tags/',
        langKeyForNull: 'any'
      }
    },
    'gatsby-plugin-styled-components'
  ],
};

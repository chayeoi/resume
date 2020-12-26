module.exports = {
  siteMetadata: {
    title: '기술 이력서',
    description: '김찬연 기술 이력서',
    author: '@chayeoi',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: '김찬연 기술 이력서',
        short_name: '기술 이력서',
        start_url: '/',
        background_color: '#2979ff',
        theme_color: '#2979ff',
        display: 'standalone',
        icon: 'src/images/logo.png',
      },
    },
  ],
}

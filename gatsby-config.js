module.exports = {
  siteMetadata: {
    title: `The Front-End Checklist`,
    description: `🗂 The Front-End Checklist Application is perfect for modern websites and meticulous developers! Follow the rules and deliver the best of your work in a generated report!`,
    index_title: `✨ Your best Front-End Tool ✨`,
    author: `@thedaviddias`,
    url_website: `https://frontendchecklist.io`,
    site_tagline: `🗂 The Front-End Checklist Application is perfect for modern websites and meticulous developers!`,
    SITE_LANGUAGE: `en`,
    SITE_DIRECTION: `ltr`,
    URL_GITHUB_ROOT: `https://github.com/thedaviddias/Front-End-Checklist`,
    URL_GITHUB_REPO: `https://github.com/thedaviddias/Front-End-Checklist/tree/gh-pages`,
    HIGH_CHECKED: `✓ high priority`,
    MEDIUM_CHECKED: `✓ medium priority`,
    LOW_CHECKED: `✓ low priority`,
    PERCENTAGE_CHECKED: `items are ✓`,
    SECTION_DOCUMENTATION: `Documentation`,
    SECTION_TOOL: `Tools`,
    SECTION_VIDEO: `Videos`,
    SECTION_TAG: `Filter by tags`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}

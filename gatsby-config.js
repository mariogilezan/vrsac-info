require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Vaš Info VŠ`,
    siteUrl: `https://gatsby-starter-hello-world-demo.netlify.app/`,
    description: `Vaš Info VŠ je stranica na kojoj možete da se informišete o vestima iz Vršca i okoline.`,
    menuLinks: [
      {
        name: `Naslovna`,
        slug: `/`,
      },
      {
        name: `Kultura`,
        slug: `/kultura/`,
      },
      {
        name: `Društvo`,
        slug: `/drustvo/`,
      },
      {
        name: `Sport`,
        slug: `/sport/`,
      },
      {
        name: `Kontakt`,
        slug: `/kontakt/`,
      },
    ],
    postsPerFirstPage: 7,
    postsPerPage: 6,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vaš Info VŠ`,
        short_name: `Vaš Info VŠ`,
        start_url: `/`,
        background_color: `#020404`,
        theme_color: `#70a0a1`,
        display: `standalone`,
        icon: `content/assets/page-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        watchMode: true,
      },
    },
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
  ],
}

require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Vršac Info`,
    description: `Vršac Info je portal na kojem možete da se informišete o najnovijim vestima iz grada Vršca i okoline.`,
    siteUrl: `https://vrsac-info.netlify.app/`,
    image: `/images/kontakt-bg.jpg`,
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
        name: `Vršac Info`,
        short_name: `Vršac Info`,
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
        apiVersion: "2021-03-25",
        token: process.env.SANITY_TOKEN,
        watchMode: process.env.NODE_ENV === "development",
      },
    },
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
  ],
}

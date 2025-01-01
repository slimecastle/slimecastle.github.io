import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Credit Card Recommender`,
    siteUrl: `https://www.card-iq.com`,
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-E65L3RM0Z6",
        head: true,
        anonymize: true,
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Credit Card Recommender`,
        short_name: `CardIQ`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `static/6963703.png`
      },
    },
    'gatsby-plugin-cname',
    "gatsby-plugin-react-helmet",
  ],
};

export default config;

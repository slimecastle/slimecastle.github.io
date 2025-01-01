import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Credit Card Recommender`,
    siteUrl: `https://www.card-iq.com`,
  },
  graphqlTypegen: true,
  plugins: [
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
    'gatsby-plugin-cname'
  ],
};

export default config;

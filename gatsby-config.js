const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`);
require("dotenv").config({
  path: `.env.${activeEnv}`,
});
console.log(process.env.GATSBY_SITE_URL);
module.exports = {
  siteMetadata: {
    title: "GandALF 2021",
    siteUrl: process.env.GATSBY_SITE_URL,
    keywords: "gandalf, conference, 2021, automata, software verification",
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Call for papers",
        link: "/call-for-papers"
      },
      {
        name: "Invited Speakers",
        link: "/invited-speakers"
      }, 
      {
        name: "Program",
        link: "/program"
      },
      {
        name: "Committees",
        link: "/committees"
      },
      {
        name: "Venue",
        link: "/venue"
      },
    ],
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

module.exports = {
  siteMetadata: {
    title: `JEON.DEV`,
    description: `📌 내가 만들고 내가 쓰는 기술 블로그`,
    author: `Byeongmin Jeon`,
    siteUrl: `https://jeondev.gatsbyjs.io`, // 변경 예정
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    // `gatsby-plugin-graphql-codegen`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://jeondev.gatsbyjs.io`, // 변경예정
        stripQueryString: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: ['auto', 'webp'],
          quality: 100,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,

    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [`.md`, `.mdx`],
        rehypePlugins: [require(`rehype-accessible-emojis`).rehypeAccessibleEmojis],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 720,
              showCaptions: true,
              quality: 90,
              withWebp: true,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          'gatsby-remark-unwrap-images',
        ],
      },
    },
  ],
};

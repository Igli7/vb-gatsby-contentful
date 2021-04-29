const path = require("path")

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  const typeDefs = `
  type ContentfulNewsBody implements Node {
    references: [ContentfulAsset]
  }
  type ContentfulAsset {
    fixed: ContentfulAssetImg
    contentful_id: String!
    title: String
  }
  type ContentfulAssetImg {
    src: String
  }
  `

  createTypes(typeDefs)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve("./src/template/BlogPost/index.tsx")

  const res = await graphql(
    `
      {
        allContentfulBlogPost {
          edges {
            node {
              title
              slug
              publishDate(formatString: "MMMM DD, YYYY")
              featureImage {
                gatsbyImageData
                title
              }
              author
              richText {
                raw
                references {
                  ... on ContentfulAsset {
                    contentful_id
                    __typename
                    title
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const blogPosts = res.data.allContentfulBlogPost.edges

  blogPosts.forEach(blogPost => {
    createPage({
      path: `/blog/${blogPost.node.slug}`,
      component: blogTemplate,
      context: blogPost.node,
    })
  })
}

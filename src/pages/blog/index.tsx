import React from "react"

import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"

import Layout from "../../components/Layout"
import Hero from "../../components/Hero"
import Container from "../../components/Container"

import * as styles from "./Blog.module.scss"

const index = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulPage(label: { eq: "Blog" }) {
        hero {
          banner {
            gatsbyImageData(placeholder: BLURRED, height: 420, layout: FIXED)
            title
          }
          headline
          subheadline
        }
        title
      }

      allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
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
            }
          }
        }
      }
    }
  `)

  const pageData = data.contentfulPage
  const { hero, title } = pageData

  const blogPosts = data.allContentfulBlogPost.edges

  return (
    <Layout>
      <Hero data={hero} tag="h1" />
      <Container>
        <h2>{title}</h2>
        <ul className={styles.blogPostList}>
          {blogPosts.map((edge: any, i: any) => {
            const parsedText = JSON.parse(edge.node.richText.raw)
            const plainText = documentToPlainTextString(parsedText).substring(
              0,
              100
            )
            return (
              <li key={i} className={styles.blogPostListItem}>
                <Link
                  to={`/blog/${edge.node.slug}`}
                  className={styles.blogPostListLink}
                >
                  <div className={styles.blogPostImageContainer}>
                    <GatsbyImage
                      image={edge.node.featureImage.gatsbyImageData}
                      alt={edge.node.featureImage.title}
                      imgStyle={{ objectFit: "cover" }}
                      style={{
                        minHeight: "100%",
                        maxHeight: "100%",
                        minWidth: "100%",
                        maxWidth: "100%",
                      }}
                    />
                  </div>
                  <div className={styles.blogPostInner}>
                    <h3 className={styles.blogPostTitle}>{edge.node.title}</h3>
                    <p className={styles.blogPostDescription}>{plainText}...</p>
                    <div className={styles.blogPostAuthor}>
                      By {edge.node.author}
                    </div>
                    <div className={styles.blogReadMore}>Read more</div>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </Container>
    </Layout>
  )
}

export default index

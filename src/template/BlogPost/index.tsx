import React from "react"

import Layout from "../../components/Layout"
import Container from "../../components/Container"
import RichText from "../../components/RichText"

import * as styles from "./BlogPost.module.scss"

const BlogPost = ({ pageContext }: any) => {
  return (
    <Layout>
      <Container className={styles.blogContainer}>
        <h1 className={styles.blogTitle}>{pageContext.title}</h1>
        <div className={styles.blogAuthor}> By {pageContext.author}</div>
        <RichText richText={pageContext.richText} />
      </Container>
    </Layout>
  )
}

export default BlogPost

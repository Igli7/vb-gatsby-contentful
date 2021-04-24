import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"

import "../scss/index.scss"

const Index = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulPage(label: { eq: "Homepage" }) {
        title
      }
    }
  `)

  const pageData = data.contentfulPage
  const { title } = pageData

  return (
    <Layout>
      <h1>{title}</h1>
      <div style={{ height: "900px" }}></div>
    </Layout>
  )
}

export default Index

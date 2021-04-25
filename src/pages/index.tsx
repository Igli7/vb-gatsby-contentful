import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import Hero from "../components/Hero"

import "../scss/index.scss"

const Index = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulPage(label: { eq: "Homepage" }) {
        title
        hero {
          banner {
            gatsbyImageData(placeholder: BLURRED, height: 420, layout: FIXED)
            title
          }
          headline
          subheadline
        }
      }
    }
  `)

  const pageData = data.contentfulPage
  const { title, hero } = pageData

  return (
    <Layout>
      <Hero data={hero} tag="h1" />
      <h1>{title}</h1>
      <div style={{ height: "900px" }}></div>
    </Layout>
  )
}

export default Index

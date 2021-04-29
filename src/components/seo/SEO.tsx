import React from "react"
import Helmet from "react-helmet"

interface OGImageFile {
  url: string
}

interface OGImage {
  file: OGImageFile
}

interface SEO {
  title: string
  description: string
  ogImage: OGImage
}

interface ISEOProps {
  data: SEO
  titleTemplate?: string
  canonical?: string
}

const SEO = ({
  data,
  titleTemplate = "Linus Health | %s",
  canonical,
}: ISEOProps) => {
  const { title, description, ogImage } = data
  const ogImageUrl = ogImage && ogImage.file ? ogImage.file.url : ""
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={title}
      titleTemplate={titleTemplate}
    >
      {canonical && <link rel="canonical" href={canonical} />}
      <meta name="description" content={description} />
      <meta property="og:site_name" content="Linus Health" />
      <meta property="og:url" content="https://linus.health" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content="https://linus.health/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@linushealth" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
    </Helmet>
  )
}

export default SEO

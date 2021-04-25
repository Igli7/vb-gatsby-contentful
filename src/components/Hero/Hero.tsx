import React from "react"

import { GatsbyImage } from "gatsby-plugin-image"

import * as styles from "./Hero.module.scss"

interface IBanner {
  gatsbyImageData: any
  title: string
}

interface IHeroObject {
  headline: string
  subheadline: string
  banner: IBanner
}

interface IHero {
  data: IHeroObject
  tag: "h1" | "h2" | "h3" | "div"
}

const Hero = ({ data, tag: Tag }: IHero) => {
  const { banner, headline, subheadline } = data
  return (
    <section className={styles.hero}>
      <div className={styles.heroBannerContainer}>
        <GatsbyImage
          image={banner.gatsbyImageData}
          alt={banner.title}
          imgStyle={{ objectFit: "cover" }}
          style={{
            minHeight: "100%",
            maxHeight: "100%",
            minWidth: "100%",
            maxWidth: "100%",
          }}
        />
      </div>
      <div className={styles.heroInner}>
        {headline && (
          <Tag className={styles.heroHeadline}>
            {headline} {subheadline && <span>{subheadline}</span>}
          </Tag>
        )}
      </div>
    </section>
  )
}

export default Hero

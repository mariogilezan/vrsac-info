import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "./Card.module.scss"

export default function Card({ posts, basePath, isFirst, pageNumber }) {
  const firstPost = isFirst && pageNumber === 1
  return posts.map((post, i) => (
    <Link
      to={`${basePath}/${post.slug.current}`}
      key={post._id}
      className={styles.cardLink}
      style={
        i === 0 && firstPost ? { gridColumn: "1 / -1" } : { gridColumn: "" }
      }
    >
      {post.postImage && (
        <div>
          <GatsbyImage
            image={post.postImage.asset.gatsbyImageData}
            alt={post.title}
          />
        </div>
      )}
      <article
        className={styles.article}
        itemScope
        itemType="https://schema.org/Article"
      >
        <header>
          <h2>
            <span itemProp="headline">{post.title}</span>
          </h2>
          <div className={styles.details}>
            <span className={styles.category}>{post.categories[0].title}</span>
            <small>{post.publishedDate}</small>
          </div>
        </header>
      </article>
    </Link>
  ))
}

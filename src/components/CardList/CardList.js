import React from "react"
import Card from "../Card/Card"
import * as styles from "./CardList.module.scss"

export default function CardList({ posts, basePath }) {
  return (
    <ul className={styles.cardList}>
      <Card posts={posts} basePath={basePath} />
    </ul>
  )
}

import React from "react"
import Navbar from "../Navbar"
import * as styles from "./Header.module.scss"

export default function Header() {
  return (
    <header className={styles.header}>
      <Navbar />
    </header>
  )
}

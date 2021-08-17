import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import * as styles from "./Layout.module.scss"

export default function Layout({ location, children }) {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <>
      <Header />
      <div className={styles.wrapper} data-is-root-path={isRootPath}>
        <main className={styles.content}>{children}</main>
      </div>
      <Footer />
    </>
  )
}

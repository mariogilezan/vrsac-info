import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import * as styles from "./Layout.module.scss"

export default function Layout({ location, title, children }) {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <>
      <Header isRootPath={isRootPath} title={title} />
      <div className={styles.wrapper} data-is-root-path={isRootPath}>
        <main className={styles.content}>{children}</main>
      </div>
      <Footer />
    </>
  )
}

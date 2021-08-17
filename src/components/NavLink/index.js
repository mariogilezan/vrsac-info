import React from "react"
import { Link } from "gatsby"
import * as styles from "./NavLink.module.scss"

export default function NavLink({ children, to }) {
  return (
    <Link to={to} className={styles.navLink} activeClassName={styles.active}>
      {children}
    </Link>
  )
}

import React from "react"
import { Link } from "gatsby"
import { useSiteMetadata } from "../../hooks/use-site-metadata"
import SocialIcons from "../SocialIcons/SocialIcons"
import * as styles from "./Footer.module.scss"

export default function Footer() {
  const { menuLinks } = useSiteMetadata()
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.socials}>
          <h4>Pratite nas</h4>
          <SocialIcons />
        </div>
        <div className={styles.categories}>
          <h4>Kategorije</h4>
          <div className={styles.links}>
            {menuLinks.map(link => (
              <Link to={link.slug} key={link.name} className={styles.link}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <p className={styles.copyright}>
          Vaš Info VŠ © 2021. Sva prava zadržana.
        </p>
      </div>
    </footer>
  )
}

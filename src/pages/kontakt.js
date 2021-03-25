import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../styles/kontakt.module.scss"
import EmailIcon from "@material-ui/icons/Email"

export default function Kontakt({ location }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const siteTitle = data.site.siteMetadata.title || "Kontakt"
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Kontakt" />
      <section className={styles.kontaktWrapper}>
        <h1>Kontakt</h1>
        <h3>
          Ukoliko imate neku zanimljivu informaciju i želite da je podelite sa
          nama, možete da nas kontaktirate na:
        </h3>
        <a
          href="mailto:vrsacinfoservis@gmail.com
"
          target="_blank"
          rel="noreferrer"
        >
          <EmailIcon fontSize="small" />
          <span>vrsacinfoservis@gmail.com</span>
        </a>
        <p>Vaš Info VŠ</p>
        <StaticImage
          src="../images/kontakt-bg.jpg"
          alt="Kontakt image background image"
          layout="constrained"
          placeholder="blurred"
        />
      </section>
    </Layout>
  )
}

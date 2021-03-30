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
  const { pathname } = location
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Kontakt" pathname={pathname} />
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
        <p>Vršac Info</p>
        <StaticImage
          src="../images/kontakt-bg.jpg"
          alt="Kontakt background image"
          layout="constrained"
          placeholder="blurred"
        />
      </section>
    </Layout>
  )
}

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
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
  const imageSrc = "../images/kontakt-bg.jpg"
  const { pathname } = location
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Kontakt" pathname={pathname} image={imageSrc} />
      <section className={styles.kontaktWrapper}>
        <h1>Kontakt</h1>
        <h3>
          Ukoliko imate neku zanimljivu informaciju i želite da je podelite sa
          nama, možete da nas kontaktirate na:
        </h3>
        <a href="mailto:vrsacinfoservis@gmail.com">
          <EmailIcon fontSize="small" />
          <span>vrsacinfoservis@gmail.com</span>
        </a>
        <p>Vršac Info</p>
        <StaticImage
          src={imageSrc}
          alt="Kontakt background image"
          layout="constrained"
          placeholder="blurred"
        />
      </section>
    </Layout>
  )
}

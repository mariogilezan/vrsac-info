import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../styles/kontakt.module.scss"
import EmailIcon from "@mui/icons-material/Email"

const imageSrc = "../images/kontakt-bg.jpg"

export default function Kontakt({ location }) {
  return (
    <Layout location={location}>
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

// Seo
export const Head = ({ location }) => {
  return <Seo title="Kontakt" pathname={location.pathname} image={imageSrc} />
}

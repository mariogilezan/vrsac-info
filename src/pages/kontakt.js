import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

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
      <h1>Kontakt Stranica</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
        nobis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, porro
        eveniet natus atque neque aliquam odio debitis deleniti obcaecati vero
        ut itaque modi exercitationem fugit dolores doloremque tenetur, rem
        impedit? Repellat vitae ipsum fugit ratione ea cum tempora dolores
        illum?
      </p>
    </Layout>
  )
}

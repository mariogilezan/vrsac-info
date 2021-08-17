import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function NotFound({ location }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const siteTitle = data.site.siteMetadata.title || "Page Not Found"
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Page Not Found" />
      <h1>Stranica nije pronađena!</h1>
    </Layout>
  )
}

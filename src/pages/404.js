import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

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
      <SEO title="Page Not Found" />
      <h1>Stranica nije pronađena!</h1>
    </Layout>
  )
}

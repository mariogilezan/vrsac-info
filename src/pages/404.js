import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function NotFound({ location }) {
  return (
    <Layout location={location}>
      <h1>Stranica nije pronađena!</h1>
    </Layout>
  )
}

// Seo
export const Head = () => <Seo title="Stranica nije pronađena" />

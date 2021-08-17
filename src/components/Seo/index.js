import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ description, lang, title, image, pathname }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          keywords
          siteUrl
        }
      }
    }
  `)

  const defaultImage = "../images/kontakt-bg.jpg"
  const defaultTitle = site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description
  const metaImage = image || defaultImage
  const keywords = site.siteMetadata.keywords.join(", ") || ""
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      defaultTitle={defaultTitle}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={canonical ? [{ rel: "canonical", href: canonical }] : []}
    >
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* General tags */}
      <meta name="image" content={metaImage} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords} />

      {/* OpenGraph tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:description" content={metaDescription} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:description" content={metaDescription} />
    </Helmet>
  )
}

Seo.defaultProps = {
  lang: `sr`,
  meta: [],
  description: ``,
}

export default Seo

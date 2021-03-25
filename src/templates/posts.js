import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import CardList from "../components/CardList/CardList"
import SEO from "../components/seo"
import Pagination from "../components/Pagination/Pagination"

const Posts = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allSanityPost.nodes
  const { basePath, humanPageNumber } = pageContext
  let ogImage

  try {
    ogImage = posts[0].postImage.asset.fluid.src
  } catch (error) {
    ogImage = null
  }

  if (posts.length <= 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Naslovna" image={ogImage} />
        <p>No news posts found.</p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Naslovna" image={ogImage} />
      <CardList
        posts={posts}
        location={location}
        basePath={basePath}
        isFirst={true}
        pageNumber={humanPageNumber}
      />
      <Pagination context={pageContext} />
    </Layout>
  )
}

export const query = graphql`
  query PostsData($skip: Int, $limit: Int) {
    allSanityPost(
      sort: { fields: publishedDate, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        _id
        title
        _rawBody
        slug {
          current
        }
        categories {
          title
        }
        publishedDate(formatString: "DD. MMM. YYYY, HH:mm")
        postImage {
          asset {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            fluid {
              src
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Posts

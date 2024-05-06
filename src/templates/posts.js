import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import CardList from "../components/CardList"
import Seo from "../components/Seo"
import Pagination from "../components/Pagination"

const Posts = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allSanityPost.nodes
  const { basePath, humanPageNumber } = pageContext
  const { pathname } = location
  let ogImage

  try {
    ogImage = posts[0].postImage.asset.fluid.src
  } catch (error) {
    ogImage = null
  }

  if (posts.length <= 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="Naslovna" image={ogImage} pathname={pathname} />
        <p>No news posts found.</p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Naslovna" image={ogImage} pathname={pathname} />
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
    allSanityPost(sort: { publishedDate: DESC }, limit: $limit, skip: $skip) {
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
            url
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

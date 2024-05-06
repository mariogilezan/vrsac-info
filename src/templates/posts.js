import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import CardList from "../components/CardList"
import Seo from "../components/Seo"
import Pagination from "../components/Pagination"

const Posts = ({ data, location, pageContext }) => {
  const posts = data.allSanityPost.nodes
  const { basePath, humanPageNumber } = pageContext

  if (posts.length <= 0) {
    return (
      <Layout location={location}>
        <p>No news posts found.</p>
      </Layout>
    )
  }

  return (
    <Layout location={location}>
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

// Seo
export const Head = ({ data, location }) => {
  const posts = data.allSanityPost.nodes
  let ogImage

  try {
    ogImage = posts[0].postImage.asset.fluid.src
  } catch (error) {
    ogImage = null
  }

  return <Seo title="Naslovna" image={ogImage} pathname={location.pathname} />
}

export default Posts

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

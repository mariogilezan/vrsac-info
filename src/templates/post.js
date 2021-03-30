import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import BlockContent from "@sanity/block-content-to-react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

const Post = ({ data, location }) => {
  const post = data.sanityPost
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const description = post.body[0].children[0].text
  const { pathname } = location
  let ogImage

  try {
    ogImage = post.postImage.asset.fluid.src
  } catch (error) {
    ogImage = null
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.title}
        description={description}
        image={ogImage}
        pathname={pathname}
      />
      <article className="post" itemScope itemType="http://schema.org/Article">
        <header>
          <h1 itemProp="headline">{post.title}</h1>
          <div className="postDetails">
            <p className="postCategory">{post.categories[0].title}</p>
            <p className="postDate">{post.publishedDate}</p>
          </div>
        </header>
        <div className="postImage">
          {post.postImage && (
            <GatsbyImage
              image={post.postImage.asset.gatsbyImageData}
              alt={post.title}
            />
          )}
        </div>
        <BlockContent blocks={post._rawBody} />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query PostData($slug: String) {
    site {
      siteMetadata {
        title
      }
    }
    sanityPost(slug: { current: { eq: $slug } }) {
      title
      categories {
        title
      }
      publishedDate(formatString: "DD. MMM. YYYY, HH:mm")
      _rawBody
      body {
        children {
          text
        }
      }
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
`

export default Post

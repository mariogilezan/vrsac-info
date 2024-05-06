import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { PortableText } from "@portabletext/react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import FacebookIcon from "@mui/icons-material/Facebook"
import XIcon from "@mui/icons-material/X"

const Post = ({ data, location }) => {
  const post = data.sanityPost
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const description = post.body[0].children[0].text
  const { pathname } = location
  const { siteUrl } = useSiteMetadata()
  const postUrl = `${siteUrl}${pathname}`
  let ogImage

  try {
    ogImage = post.postImage.asset.fluid.src
  } catch (error) {
    ogImage = null
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.title}
        description={description}
        image={ogImage}
        pathname={pathname}
      />
      <article className="post" itemScope itemType="http://schema.org/Article">
        <header>
          <h1 itemProp="headline">{post.title}</h1>
          <div className="postDetails">
            <h3 className="postDetails__title">{post.categories[0].title}</h3>
            <p className="postDetails__date">{post.publishedDate}</p>
          </div>
          <div className="postShare">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`}
              className="postShare__facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon fontSize="small" />
              <span>Share</span>
            </a>
            <a
              href={`https://twitter.com/share?url=${postUrl}`}
              className="postShare__twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <XIcon fontSize="small" />
              <span>Tweet</span>
            </a>
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
        <PortableText value={post._rawBody} />
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
          url
        }
      }
    }
  }
`

export default Post

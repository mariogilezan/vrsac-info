const config = require("./gatsby-config")
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const basePath = config.siteMetadata.basePath || `/`
  const postPage = path.resolve(`./src/templates/post.js`)
  const postsPage = path.resolve(`./src/templates/posts.js`)
  const postsDrustvoPage = path.resolve(`./src/templates/posts-drustvo.js`)
  const postsKulturaPage = path.resolve(`./src/templates/posts-kultura.js`)
  const postsSportPage = path.resolve(`./src/templates/posts-sport.js`)

  const result = await graphql(
    `
      {
        allSanityPost {
          nodes {
            slug {
              current
            }
          }
        }
        drustvo: allSanityPost(
          filter: { categories: { elemMatch: { title: { eq: "Društvo" } } } }
        ) {
          nodes {
            slug {
              current
            }
          }
        }
        kultura: allSanityPost(
          filter: { categories: { elemMatch: { title: { eq: "Kultura" } } } }
        ) {
          nodes {
            slug {
              current
            }
          }
        }
        sport: allSanityPost(
          filter: { categories: { elemMatch: { title: { eq: "Sport" } } } }
        ) {
          nodes {
            slug {
              current
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your news posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allSanityPost.nodes
  // Create page for each post
  if (posts.length > 0) {
    posts.forEach(post => {
      createPage({
        path: `${basePath === "/" ? "" : basePath}/${post.slug.current}/`,
        component: postPage,
        context: {
          slug: post.slug.current,
        },
      })
    })
  }

  // Create page containing all posts and paginate
  paginate({
    createPage,
    component: postsPage,
    items: posts,
    itemsPerFirstPage: config.siteMetadata.postsPerFirstPage || 7,
    itemsPerPage: config.siteMetadata.postsPerPage || 6,
    pathPrefix: basePath,
    context: {
      basePath: basePath === `/` ? "" : basePath,
      paginationPath: basePath === `/` ? "" : `/${basePath}`,
    },
  })

  // Create page containing all "drustvo" posts and paginate
  const postsDrustvo = result.data.drustvo.nodes
  const drustvoPath = `${basePath}drustvo` || `/drustvo`
  paginate({
    createPage,
    component: postsDrustvoPage,
    items: postsDrustvo,
    itemsPerPage: config.siteMetadata.postsPerPage || 6,
    pathPrefix: drustvoPath,
    context: {
      basePath: drustvoPath === `/drustvo` ? "" : drustvoPath,
      paginationPath: drustvoPath === `/drustvo` ? drustvoPath : "",
    },
  })

  // Create page containing all "kultura" posts and paginate
  const postsKultura = result.data.kultura.nodes
  const kulturaPath = `${basePath}kultura` || `/kultura`
  paginate({
    createPage,
    component: postsKulturaPage,
    items: postsKultura,
    itemsPerPage: config.siteMetadata.postsPerPage || 6,
    pathPrefix: kulturaPath,
    context: {
      basePath: kulturaPath === `/kultura` ? "" : kulturaPath,
      paginationPath: kulturaPath === `/kultura` ? kulturaPath : "",
    },
  })

  // Create page containing all "sport" posts and paginate
  const postsSport = result.data.sport.nodes
  const sportPath = `${basePath}sport` || `/sport`
  paginate({
    createPage,
    component: postsSportPage,
    items: postsSport,
    itemsPerPage: config.siteMetadata.postsPerPage || 6,
    pathPrefix: sportPath,
    context: {
      basePath: sportPath === `/sport` ? "" : sportPath,
      paginationPath: sportPath === `/sport` ? sportPath : "",
    },
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `sanityPost`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

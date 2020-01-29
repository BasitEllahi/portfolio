/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// gatsby-node.js
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const ProjectPostTemplate = path.resolve("./src/templates/ProjectPost.js")
  const result = await graphql(`
    {
      allContentfulProject {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)

    return
  }
  const ProjectPosts = result.data.allContentfulProject.edges

  ProjectPosts.forEach(post => {
    createPage({
      path: `/post/${post.node.slug}`,
      component: ProjectPostTemplate,
      context: {
        id: post.node.id,
      },
    })
  })
}

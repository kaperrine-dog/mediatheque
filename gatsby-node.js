const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      works: allContentfulWorks {
        edges {
          node {
            slug
          }
        }
      }
      posts: allContentfulPosts {
        edges {
          node {
            slug
            title
            images
          }
        }
      }
      tags: allContentfulTags {
        edges {
          node {
            slug
            posts{
              slug
            }
          }
        }
      }
    }
  `)
  
  console.log(data)
  console.log(`あああああああああああああああああ`)

  console.log(data.posts)
  console.log(data.posts.edges)

  const postPages = data.posts.edges
  data.posts.edges.forEach(({ node }, index ) => {
      
      const prev = index === 0 ? null : postPages[index - 1].node
      const next = index === postPages.length - 1 ? null : postPages[index + 1].node
    createPage({
      path: `blogs/${node.slug}`,
      component: path.resolve("./src/templates/blog-template.js"),
      context: {
        slug: node.slug,
        title: node.title,
        image: node.images,
        prev,
        next,
      },
    })
  })

  data.works.edges.forEach(({ node }) => {
    createPage({
      path: `works/${node.slug}`,
      component: path.resolve("./src/templates/work-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
  //Amount of posts
  const posts = data.posts.edges
  // Posts per page
  const postsPerPage = 6
  // How many pages
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blogs` : `/blogs/${i + 1}`,
      component: path.resolve("./src/templates/blog-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

/*   data.tags.edges.forEach(({ node }) => {
    createPage({
      path: `tags/${node.slug}`,
      component: path.resolve("./src/templates/tag-template.js"),
      context: {
        id: node.id,
        slug: node.slug,
      },
    })
  }) */

  Array.from({ length: numPages }).forEach((_, i) => {
    data.tags.edges.forEach(({ node }) => {
      createPage({
        path: i === 0 ? `/tags/${node.slug}` : `/tags/${node.slug}/page-${i + 1}`,
        component: path.resolve("./src/templates/tag-template.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
          id: node.id,
          slug: node.slug,
        },
      })
    })
  })

/*   data.tags.edges.forEach(({ node }) => {

      //Amount of posts
      const posts = node.posts
      // Posts per page
      const postsPerPage = 6
      // How many pages
      const numPages = Math.ceil(posts.length / postsPerPage)
    
  }) */
}


/* exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-hook-recaptcha/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
} */
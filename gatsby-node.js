const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      works: allContentfulWorks {
        edges {
          node {
            released(formatString: "Y年MM月DD日")
            updatedAt(formatString: "Y年MM月DD日")
            name
            workId: contentful_id
            slug
            introduction
            url
            description {
              description
            }
          }
        }
      }
      posts: allContentfulPosts {
        edges {
          node {
            slug
            title
            postId: contentful_id
            introduction
            published(formatString: "Y年MM月DD日")
            images {
              file {
                url
                fileName
              }
              title
              spaceId
              node_locale
              id
            }
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
  
  const workPages = data.works.edges
  data.works.edges.forEach(({ node }, index) => {
    const prev = index === 0 ? null : workPages[index - 1].node
    const next = index === workPages.length - 1 ? null : workPages[index + 1].node
    createPage({
      path: `works/${node.slug}`,
      component: path.resolve("./src/templates/work-template.js"),
      context: {
        slug: node.slug,
        slug: node.slug,
        title: node.title,
        image: node.images,
        prev,
        next,
      },
    })
  })
  
  //Amount of posts
  const posts = data.posts.edges
  // Posts per page
  const postsPerPage = 6
  // How many pages
  const numPostPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPostPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blogs` : `/blogs/${i + 1}`,
      component: path.resolve("./src/templates/blog-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPostPages,
        currentPage: i + 1,
        basePath: `/blogs`
      },
    })
  })
  
  data.tags.edges.forEach(({ node }) => {
    const tagPosts = node.posts
    const numTagPages = Math.ceil(tagPosts.length / postsPerPage)
    Array.from({ length: numTagPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/tags/${node.slug}` : `/tags/${node.slug}/${i + 1}`,
        component: path.resolve("./src/templates/tag-template.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numTagPages,
          currentPage: i + 1,
          id: node.id,
          slug: node.slug,
          basePath: `/tags/${node.slug}`
        },
      })
    })
  })


  //Amount of posts
  const works = data.works.edges
  // Posts per page
  const worksPerPage = 6
  // How many pages
  const numWorksPages = Math.ceil(works.length / worksPerPage)
  Array.from({ length: numWorksPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/works` : `/works/${i + 1}`,
      component: path.resolve("./src/templates/work-list-template.js"),
      context: {
        limit: worksPerPage,
        skip: i * worksPerPage,
        numWorksPages,
        currentPage: i + 1,
        basePath: `/works`
      },
    })
  })
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
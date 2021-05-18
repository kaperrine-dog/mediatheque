import React from "react"
import BlogList from "/src/components/Blog/BlogList"
import Grid from "/src/components/Grid/Grid"
import PageIntro from "/src/components/PageIntro/PageIntro"
import Seo from "/src/components/SEO"

const blog = () => {
  return (
    <>
      <Seo title="Blog" />
      <section className="section-padding">
        <Grid>
          <PageIntro
            title="Blog"
            subTitle=""
            paragraph=""
          />
          <BlogList />
        </Grid>
      </section>
    </>
  )
}

export default blog

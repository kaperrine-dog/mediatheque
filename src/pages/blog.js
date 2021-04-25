import React from "react"
import BlogList from "../components/Blog/BlogList"
import Grid from "../components/Grid/Grid"
import PageIntro from "../components/PageIntro/PageIntro"
import Seo from "../components/SEO"

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

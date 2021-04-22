import React from "react"
import Grid from "../components/Grid/Grid"
import PageIntro from "../components/PageIntro/PageIntro"
import Seo from "../components/SEO"
import Works from "../components/Works/Works"

const works = () => {
  return (
    <>
      <Seo title="Works" />
      <section className="section-padding">
        <Grid>
          <PageIntro
            title="All Works"
            subTitle="Every product you could ask for in one place. Easy to list new works and expand your line"
            paragraph="When using Contentful you can add, remove, and edit you works as your business grows. Updating the content model is easy too. It's time to get started!"
          />
          <Works />
        </Grid>
      </section>
    </>
  )
}

export default works
